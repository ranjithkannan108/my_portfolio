import React, { useEffect, useRef } from 'react';
import './MouseTrail.css';

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Accessibility & Device Support Checks
    const isTouchDevice = 
      window.matchMedia('(pointer: coarse)').matches || 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0;
    
    const prefersReducedMotion = 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return; // Do not initialize the trail for touch or reduced motion
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions with device pixel ratio scaling for crisp render
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse coordinates state
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isActive: false,
      lastX: width / 2,
      lastY: height / 2,
    };

    // Color palette matching the website theme
    const colors = [
      'rgba(58, 125, 68, ',   // Primary Green
      'rgba(112, 130, 56, ',  // Olive
      'rgba(169, 194, 93, ',  // Bright Olive-yellow
      'rgba(240, 243, 230, ', // Off-white highlight
    ];

    // 2. Ribbon Trail Settings
    const ribbonLength = 12;
    const ribbonPoints = Array.from({ length: ribbonLength }, () => ({
      x: mouse.x,
      y: mouse.y,
    }));

    // 3. Particle System Settings
    const particles = [];
    const maxParticles = 60;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3.5 + 1.5;
        // Float outwards with random angle
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        this.vx = Math.cos(angle) * speed;
        // Rising drift (upwards Y velocity)
        this.vy = Math.sin(angle) * speed - 0.4;
        this.alpha = 1;
        // Fade out rates
        this.decay = Math.random() * 0.02 + 0.015;
        // Choose color from palette
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.97; // friction
        this.vy *= 0.97;
        this.alpha -= this.decay;
      }

      draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `${this.colorPrefix}${this.alpha})`;
        context.fill();
      }
    }

    // 4. Mouse Event Listeners
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;

      // Spawn particles based on speed of cursor movement
      const dist = Math.hypot(e.clientX - mouse.lastX, e.clientY - mouse.lastY);
      if (dist > 3) {
        // Spawn more particles for faster movement, capped
        const spawnCount = Math.min(Math.floor(dist / 5) + 1, 4);
        for (let i = 0; i < spawnCount; i++) {
          if (particles.length < maxParticles) {
            // Interpolate position between last and current frame for high speed
            const ratio = i / spawnCount;
            const x = mouse.lastX + (e.clientX - mouse.lastX) * ratio;
            const y = mouse.lastY + (e.clientY - mouse.lastY) * ratio;
            particles.push(new Particle(x, y));
          }
        }
      }

      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // 5. Physics & Animation Loop
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lag follower dot for cursor
      mouse.x += (mouse.targetX - mouse.x) * 0.25;
      mouse.y += (mouse.targetY - mouse.y) * 0.25;

      // Update Ribbon Points (smooth interpolation)
      ribbonPoints[0].x = mouse.x;
      ribbonPoints[0].y = mouse.y;

      for (let i = 1; i < ribbonLength; i++) {
        // Each point follows the preceding one with easing
        ribbonPoints[i].x += (ribbonPoints[i - 1].x - ribbonPoints[i].x) * 0.45;
        ribbonPoints[i].y += (ribbonPoints[i - 1].y - ribbonPoints[i].y) * 0.45;
      }

      // Draw Ribbon Path
      if (mouse.isActive || particles.length > 0 || Math.hypot(mouse.targetX - mouse.x, mouse.targetY - mouse.y) > 1) {
        ctx.beginPath();
        for (let i = 0; i < ribbonLength - 1; i++) {
          const p1 = ribbonPoints[i];
          const p2 = ribbonPoints[i + 1];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          const ratio = i / ribbonLength;
          ctx.lineWidth = (1 - ratio) * 5 + 0.5;
          ctx.strokeStyle = `rgba(58, 125, 68, ${0.45 * (1 - ratio)})`;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      }

      // Update and Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          p.draw(ctx);
        }
      }

      // Subtle pulse on the main follower head when active
      if (mouse.isActive) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(58, 125, 68, 0.65)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-trail-canvas" />;
};

export default MouseTrail;
