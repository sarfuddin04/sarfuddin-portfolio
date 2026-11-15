import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles, Sprout, FileCode2, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const PROJECTS = [
  {
    title: "AI Question Paper Generator — PaperForge",
    badge: "Featured Application",
    icon: FileCode2,
    description:
      "A Python-based application that automatically structures, categorizes, and generates custom exam question papers from a structured question bank. Stored questions in JSON & SQLite3, built with a clean Streamlit interface, and exports print-ready, professional PDFs using ReportLab.",
    tech: ["Python", "Streamlit", "SQLite3", "JSON", "ReportLab"],
    color: "#22D3EE",
    github: "https://github.com/sarfuddin04",
    demo: null,
  },
  {
    title: "KisanMitra AI — Smart Agriculture Platform",
    badge: "AI & Agriculture",
    icon: Sprout,
    description:
      "An AI-powered agricultural advisory platform designed to assist farmers with crop advisory, disease detection assistance, fertilizer recommendations, live weather forecasts, and real-time mandi market prices with modular farmer and admin portals.",
    tech: ["Python", "Machine Learning", "Streamlit", "Data Science"],
    color: "#34D399",
    github: "https://github.com/sarfuddin04",
    demo: null,
  },
  {
    title: "LeetCode 50+ DSA Problem Solutions",
    badge: "Problem Solving",
    icon: Code2,
    description:
      "A curated repository of 50+ Data Structures & Algorithms solutions implemented in Java. Focuses on clean, readable code and optimal Time & Space complexity across Arrays, Strings, HashMaps, Two-Pointers, and Tree traversals.",
    tech: ["Java", "Data Structures", "Algorithms", "LeetCode"],
    color: "#F59E0B",
    github: "https://github.com/sarfuddin04",
    demo: null,
  },
  {
    title: "Personal Developer Portfolio",
    badge: "Web Application",
    icon: Layers,
    description:
      "A responsive, high-performance developer portfolio built with React, Tailwind CSS, Framer Motion, and Three.js. Features 3D parallax effects, authentic project showcases, and instant WhatsApp inquiry routing.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    color: "#3B82F6",
    github: "https://github.com/sarfuddin04/sarfuddin-portfolio",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 py-24 lg:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-4"
            style={{
              color: "var(--cyan)",
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.2)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Real software applications, algorithmic solutions, and engineering projects I've designed and coded.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(({ title, badge, icon: Icon, description, tech, color, github, demo }, i) => (
            <motion.div
              key={title}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="highlight-card group flex flex-col justify-between"
            >
              <div>
                {/* Top Badge and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full font-['Manrope']"
                    style={{ background: `${color}16`, color, border: `1px solid ${color}35` }}
                  >
                    {badge}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}14`, color }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <h3
                  className="text-lg font-bold font-['Manrope'] mb-2.5 group-hover:text-[var(--cyan)] transition-colors duration-300"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg font-medium font-mono"
                      style={{
                        background: "rgba(16,27,48,0.9)",
                        color: "var(--text-secondary)",
                        border: "1px solid rgba(59,130,246,0.18)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-[rgba(59,130,246,0.1)]">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold py-2 px-3.5 rounded-lg border border-[rgba(59,130,246,0.2)] text-slate-300 hover:text-white hover:border-[rgba(59,130,246,0.5)] hover:bg-[rgba(59,130,246,0.1)] transition-all"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={14} />
                      <span>View Code</span>
                    </a>
                  )}
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold py-2 px-3.5 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/sarfuddin04"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub size={17} />
            <span>Check Out More on GitHub (@sarfuddin04)</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
