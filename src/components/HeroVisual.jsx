import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import profilePhoto from "../assets/MS.png";

export default function HeroVisual() {
  const containerRef = useRef(null);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Smooth Mouse 3D Tilt ───────────────────────────── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft spring for realistic inertia
  const springConfig = { stiffness: 75, damping: 25, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  useEffect(() => {
    if (prefersReduced) return;
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-full py-4 select-none"
      style={{ perspective: 1200 }}
    >
      {/* ── Soft Ambient Blue Lighting Behind the Frame ─── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[360px] lg:w-[420px] h-[370px] sm:h-[440px] lg:h-[490px] rounded-[2.5rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.25) 0%, rgba(34,211,238,0.10) 42%, transparent 70%)",
          filter: "blur(35px)",
          zIndex: 0,
        }}
      />

      {/* ── Rotating 3D Orbital Rings (Layered Depth) ────── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: "100%", height: "100%", maxWidth: 460, maxHeight: 540, zIndex: 1 }}
      >
        {/* Outer Ring */}
        <div
          className="ring-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
          style={{
            width: "112%",
            height: "104%",
            borderColor: "rgba(59, 130, 246, 0.22)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.08)",
          }}
        />

        {/* Counter Rotating Inner Ring with Cyan Tint */}
        <div
          className="ring-spin-rev absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: "96%",
            height: "88%",
            borderColor: "rgba(34, 211, 238, 0.25)",
            borderWidth: "1.5px",
            borderTopColor: "rgba(34, 211, 238, 0.6)",
            borderBottomColor: "rgba(59, 130, 246, 0.5)",
          }}
        />

        {/* Floating Ambient Particles around Frame */}
        <div className="absolute top-6 left-10 w-2 h-2 rounded-full bg-cyan-400 opacity-70 animate-pulse" style={{ boxShadow: "0 0 8px #22D3EE" }} />
        <div className="absolute top-20 right-8 w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60 float-a" style={{ boxShadow: "0 0 6px #3B82F6" }} />
        <div className="absolute bottom-16 left-6 w-2 h-2 rounded-full bg-blue-500 opacity-50 float-b" style={{ boxShadow: "0 0 10px #3B82F6" }} />
        <div className="absolute bottom-10 right-10 w-1.5 h-1.5 rounded-full bg-cyan-300 opacity-70 float-c" style={{ boxShadow: "0 0 7px #22D3EE" }} />
      </div>

      {/* ── Main 3D Tilt & Floating Card Container (Compact Sizing) ───────── */}
      <motion.div
        style={prefersReduced ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={
          prefersReduced
            ? {}
            : {
                y: [-5, 5, -5],
              }
        }
        transition={{
          y: {
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        className="relative z-10 w-[240px] sm:w-[280px] md:w-[310px] lg:w-[335px] h-[340px] sm:h-[390px] md:h-[430px] lg:h-[460px]"
      >
        {/* Shimmering Gradient Border (Thin Electric Blue & Cyan) */}
        <div
          className="relative w-full h-full rounded-[1.8rem] p-[2px] shadow-2xl transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.9) 0%, rgba(34,211,238,0.7) 50%, rgba(59,130,246,0.3) 100%)",
            boxShadow:
              "0 20px 50px -15px rgba(8,14,28,0.9), 0 0 32px rgba(59,130,246,0.20)",
          }}
        >
          {/* Dark Navy Background Card Inner */}
          <div
            className="relative w-full h-full rounded-[calc(1.8rem-2px)] overflow-hidden flex flex-col justify-end"
            style={{
              background:
                "linear-gradient(180deg, #101B30 0%, #0d1629 60%, #080E1C 100%)",
            }}
          >
            {/* Subtle Top Inner Lighting Effect */}
            <div
              className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.22), transparent 75%)",
              }}
            />

            {/* Subtle Grid / Texture for Depth */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(59,130,246,0.6) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />

            {/* Mohammad Sarfuddin's Actual Profile Photograph */}
            <motion.div
              style={prefersReduced ? {} : { transform: "translateZ(25px)" }}
              className="relative w-full h-full flex items-end justify-center z-10"
            >
              <img
                src={profilePhoto}
                alt="Mohammad Sarfuddin - Software Developer | Java Developer"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.75)] select-none pointer-events-none"
                style={{
                  objectPosition: "center bottom",
                  maxHeight: "100%",
                }}
                loading="eager"
              />
            </motion.div>

            {/* Subtle Gloss / Glare Layer */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.35) 0%, transparent 40%, transparent 100%)",
              }}
            />

            {/* Bottom Gradient Fade for Clean Silhouette Integration */}
            <div
              className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,14,28,0.85) 0%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* ── Status Pill Badge Floating In 3D Space ─────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xl"
          style={{
            background: "rgba(16, 27, 48, 0.94)",
            border: "1px solid rgba(59, 130, 246, 0.35)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5), 0 0 12px rgba(59, 130, 246, 0.2)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[11px] font-semibold tracking-wide font-['Manrope'] text-slate-200 whitespace-nowrap">
            Software &amp; Java Developer
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
