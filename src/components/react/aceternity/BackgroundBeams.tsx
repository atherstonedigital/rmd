import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function BackgroundBeams({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let beams: Beam[] = [];

    interface Beam {
      x: number;
      y: number;
      width: number;
      speed: number;
      opacity: number;
      hue: number;
    }

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createBeam(): Beam {
      return {
        x: Math.random() * (canvas?.width || 1920),
        y: -(Math.random() * 200),
        width: Math.random() * 2 + 0.5,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
        hue: Math.random() > 0.7 ? 40 : 210, // amber or navy-ish
      };
    }

    function init() {
      resize();
      beams = Array.from({ length: 12 }, createBeam);
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const beam of beams) {
        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x,
          beam.y + canvas.height * 0.6
        );
        gradient.addColorStop(0, `hsla(${beam.hue}, 60%, 50%, 0)`);
        gradient.addColorStop(0.5, `hsla(${beam.hue}, 60%, 50%, ${beam.opacity})`);
        gradient.addColorStop(1, `hsla(${beam.hue}, 60%, 50%, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(beam.x + 30, beam.y + canvas.height * 0.6);
        ctx.stroke();

        beam.y += beam.speed;
        if (beam.y > canvas.height) {
          Object.assign(beam, createBeam());
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={className}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />
    </motion.div>
  );
}

export default BackgroundBeams;
