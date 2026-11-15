import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Server, Globe, BrainCircuit, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RESUME_PATH, RESUME_FILENAME } from "../constants/resume";

const HeroVisual = lazy(() => import("../components/HeroVisual"));

/* ── Typewriter ─────────────────────────────────────── */
function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const delay = deleting ? 35 : 65;
    const id = setTimeout(() => {
      if (!deleting && sub < current.length) {
        setSub((s) => s + 1);
      } else if (!deleting && sub === current.length) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && sub > 0) {
        setSub((s) => s - 1);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(id);
  }, [sub, index, deleting, words]);

  return (
    <span>
      {words[index].substring(0, sub)}
      <span className="typewriter-cursor" />
    </span>
  );
}

/* ── Social links ───────────────────────────────────── */
const SOCIALS = [
  { icon: FaGithub,     label: "GitHub",   href: "https://github.com/sarfuddin04" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-sarfuddin-4360bb357/" },
  { icon: Mail,         label: "Email",    href: "mailto:sarfuddin9336@gmail.com" },
];

/* ── Highlights ─────────────────────────────────────── */
const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Java Development",
    desc: "Core Java, OOP, Data Structures & Algorithms",
    color: "#F59E0B",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "RESTful APIs, Spring Boot, Node.js",
    color: "#22D3EE",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "React, HTML/CSS, Tailwind, responsive design",
    color: "#3B82F6",
  },
  {
    icon: BrainCircuit,
    title: "Problem Solving",
    desc: "LeetCode, algorithm design & optimization",
    color: "#34D399",
  },
];

/* ── Framer variants ─────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const sectionRef = useRef(null);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center min-h-[calc(100vh-180px)]">

          {/* ── LEFT column ─────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-last lg:order-first"
          >
            {/* Hello label */}
            <motion.div variants={fadeUp(0)} className="mb-4">
              <span
                className="inline-block text-xs font-semibold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full"
                style={{
                  color: "var(--cyan)",
                  background: "rgba(34,211,238,0.08)",
                  border: "1px solid rgba(34,211,238,0.25)",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-extrabold leading-tight mb-3 font-['Manrope']"
            >
              <span className="gradient-text">Mohammad</span>
              <br />
              <span className="text-[var(--text-primary)]">Sarfuddin</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={fadeUp(0.2)}
              className="text-lg sm:text-xl lg:text-2xl font-semibold mb-5 font-['Manrope'] min-h-[1.8em]"
              style={{ color: "var(--electric-blue)" }}
            >
              <Typewriter words={["Software Developer", "Java Developer", "Backend Engineer"]} />
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={fadeUp(0.3)}
              className="text-base sm:text-lg leading-relaxed max-w-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm a Computer Science Engineering student passionate about building
              modern software applications, developing efficient backend systems and
              solving real-world problems through technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp(0.4)}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore My Work
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Download Resume"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={fadeUp(0.5)}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {SOCIALS.map(({ icon: Icon, label, href }) => {
                const isMail = href.startsWith("mailto:");
                return (
                  <motion.a
                    key={label}
                    href={href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    className="social-btn"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.93 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT column — 3D Photograph Frame Visual ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center w-full h-[380px] sm:h-[440px] lg:h-[490px] order-first lg:order-last"
          >
            <Suspense
              fallback={
                <div
                  className="w-[240px] sm:w-[280px] lg:w-[335px] h-[340px] sm:h-[390px] lg:h-[460px] rounded-[1.8rem] animate-pulse"
                  style={{ background: "var(--bg-card)", border: "1px solid rgba(59,130,246,0.2)" }}
                />
              }
            >
              <HeroVisual />
            </Suspense>
          </motion.div>
        </div>

        {/* ── Scroll indicator ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col items-center gap-1 mt-6 lg:mt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>
            Scroll
          </span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.6), transparent)" }} />
        </motion.div>
      </div>

      {/* ── Highlights Strip ─────────────────────────────── */}
      <div
        className="relative z-10 w-full"
        style={{ borderTop: "1px solid rgba(59,130,246,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {HIGHLIGHTS.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                variants={fadeUp(i * 0.08)}
                className="highlight-card group"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}14`, border: `1px solid ${color}30` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3
                  className="text-base font-bold mb-2 font-['Manrope']"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {desc}
                </p>
                {/* Bottom accent bar */}
                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
