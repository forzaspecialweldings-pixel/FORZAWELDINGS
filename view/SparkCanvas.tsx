"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  life: number;
  age: number;
}

export function SparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = document.getElementById("home");
    if (!canvas || !hero) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let running = false;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !hero) return;
      canvas.width = hero.clientWidth * dpr;
      canvas.height = hero.clientHeight * dpr;
      canvas.style.width = `${hero.clientWidth}px`;
      canvas.style.height = `${hero.clientHeight}px`;
    }

    function makeParticle(initial: boolean): Particle {
      const w = hero!.clientWidth;
      const h = hero!.clientHeight;
      return {
        x: w * 0.55 + Math.random() * (w * 0.4),
        y: initial ? Math.random() * h : h + 10,
        r: 0.6 + Math.random() * 1.3,
        vy: 0.25 + Math.random() * 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        life: Math.random() * 0.6 + 0.4,
        age: 0,
      };
    }

    function seed() {
      const count = Math.max(10, Math.min(20, Math.floor(hero!.clientWidth / 90)));
      particles = Array.from({ length: count }, () => makeParticle(true));
    }

    function tick() {
      if (!running || !ctx || !hero) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, hero.clientWidth, hero.clientHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y -= p.vy;
        p.age += 0.006;
        const alpha = Math.max(0, p.life - p.age) * 0.9;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225,122,38,${alpha.toFixed(3)})`;
        ctx.fill();
        if (p.age > p.life || p.y < -10) {
          const np = makeParticle(false);
          p.x = np.x;
          p.y = np.y;
          p.vy = np.vy;
          p.vx = np.vx;
          p.life = np.life;
          p.age = 0;
          p.r = np.r;
        }
      }
      raf = window.requestAnimationFrame(tick);
    }

    function start() {
      if (running) return;
      running = true;
      raf = window.requestAnimationFrame(tick);
    }
    function stop() {
      running = false;
      if (raf) window.cancelAnimationFrame(raf);
    }

    resize();
    seed();
    window.addEventListener("resize", resize, { passive: true });

    let heroObserver: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      heroObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) start();
            else stop();
          }
        },
        { threshold: 0 }
      );
      heroObserver.observe(hero);
    } else {
      start();
    }

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      heroObserver?.disconnect();
    };
  }, []);

  return <canvas id="spark-canvas" ref={canvasRef} aria-hidden="true" />;
}
