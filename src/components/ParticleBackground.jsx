import { useEffect, useRef } from "react";

/**
 * Lightweight WebGL particle field background.
 * Falls back gracefully when WebGL is unavailable.
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true }) ||
               canvas.getContext("experimental-webgl", { alpha: true });

    // Fallback: use a simple 2D canvas particle system
    if (!gl) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      return fallback2D(canvas, ctx, prefersReduced);
    }

    return fallback2D(canvas, canvas.getContext("2d"), prefersReduced);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

function fallback2D(canvas, ctx, prefersReduced) {
  if (!ctx) return;

  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let W = window.innerWidth;
  let H = window.innerHeight;
  let raf;
  let mouseX = W / 2;
  let mouseY = H / 2;

  const COUNT = prefersReduced ? 40 : 90;

  const resize = () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.scale(DPR, DPR);
  };
  resize();

  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.4,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    alpha: Math.random() * 0.4 + 0.1,
    hue: Math.random() > 0.5 ? 210 : 190, // blue / cyan
  }));

  const onMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  window.addEventListener("mousemove", onMouseMove, { passive: true });
  window.addEventListener("resize", resize, { passive: true });

  const draw = () => {
    ctx.clearRect(0, 0, W, H);

    // Subtle radial gradient glow near mouse
    const rg = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 320);
    rg.addColorStop(0, "rgba(59,130,246,0.04)");
    rg.addColorStop(1, "transparent");
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, W, H);

    // Connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Particles
    particles.forEach((p) => {
      // Gentle mouse attraction
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200 && !prefersReduced) {
        p.vx += (dx / dist) * 0.003;
        p.vy += (dy / dist) * 0.003;
      }

      // Damping
      p.vx *= 0.995;
      p.vy *= 0.995;

      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue},85%,65%,${p.alpha})`;
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  };

  draw();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", resize);
  };
}
