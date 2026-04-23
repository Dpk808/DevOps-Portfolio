import React, { useEffect, useRef } from "react";

const LiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const getColor = (varName: string) => {
      const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      if (!val) return "#5eead4";
      return `hsl(${val})`;
    };

    const primary = getColor("--primary");
    const secondary = getColor("--secondary");

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; seed: number; baseSpeed: number; color: string };
    const particles: Particle[] = [];
    const PARTICLE_COUNT = Math.max(20, Math.floor((width * height) / 65000));
    const purple = "#a78bfa"; // Beautiful purple color

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Randomly assign blue or purple to each particle
      const particleColor = Math.random() > 0.5 ? primary : purple;
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        r: 1.6 + Math.random() * 3.6,
        seed: Math.random() * 1000,
        baseSpeed: 0.2 + Math.random() * 0.9,
        color: particleColor,
      });
    }

    let mouseX: number | null = null;
    let mouseY: number | null = null;

    const onMove = (e: MouseEvent) => {
      // if the pointer is over a 'card' element, ignore to avoid distracting interactions
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && el.closest('.cert-card, .card, .bg-card, .glass')) {
        mouseX = null;
        mouseY = null;
        return;
      }
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    let lastTime = performance.now();
    let lastPulse = performance.now();
    const pulseInterval = 4000 + Math.random() * 6000;

    function step(now = performance.now()) {
      const dt = Math.min(40, now - lastTime) / 1000;
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // subtle gradient background overlay (moving slightly)
      const g = ctx.createLinearGradient(0, 0, width, height);
      const shift = Math.sin(now / 5000) * 0.05;
      g.addColorStop(0, `rgba(10,14,25,${0.18 + shift})`);
      g.addColorStop(1, `rgba(30,18,45,${0.08 + shift / 2})`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // subtle rotation of particles field center
      const time = now / 1000;

      // particle movement
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // add Perlin-like wobble using sin/cos of time and seed
        const wobbleX = Math.sin(time * (0.6 + (p.seed % 3) * 0.1) + p.seed) * 0.6;
        const wobbleY = Math.cos(time * (0.5 + (p.seed % 2) * 0.12) + p.seed) * 0.6;

        // gently vary velocities for more life
        p.vx += (wobbleX * 0.15 + (Math.random() - 0.5) * 0.04) * dt * 12;
        p.vy += (wobbleY * 0.15 + (Math.random() - 0.5) * 0.04) * dt * 12;

        // attraction/repel to mouse for reactive motion
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
          if (dist < 260) {
            const force = (1 - dist / 260) * 0.8;
            p.vx += (dx / dist) * force * 0.4;
            p.vy += (dy / dist) * force * 0.4;
          }
        }

        // velocity damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        // move
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x < -60) p.x = width + 60;
        if (p.x > width + 60) p.x = -60;
        if (p.y < -60) p.y = height + 60;
        if (p.y > height + 60) p.y = -60;

        // draw particle with glow
        ctx.beginPath();
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.95;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // lines with longer reach and dynamic alpha
      const maxDist = 220;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            // Use matching color if both particles are the same color, otherwise use secondary
            ctx.strokeStyle = a.color === b.color ? a.color : secondary;
            const alpha = 0.03 + (1 - dist / maxDist) * 0.22;
            ctx.globalAlpha = alpha * (0.6 + 0.4 * Math.sin(time + (a.seed + b.seed) % 7));
            ctx.lineWidth = 1.2;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // occasional pulse/burst to keep motion varied
      if (now - lastPulse > pulseInterval) {
        lastPulse = now;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.vx += (Math.random() - 0.5) * 6 * (0.4 + Math.random() * 0.8);
          p.vy += (Math.random() - 0.5) * 6 * (0.4 + Math.random() * 0.8);
        }
      }

      // restore alpha
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ opacity: 0.85, mixBlendMode: 'screen' }}
    />
  );
};

export default LiveBackground;
