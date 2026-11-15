import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
    title: "Student Management System",
    description:
      "A full-stack Java application for managing student records, attendance tracking, and grade management with a MySQL backend.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
    color: "#3B82F6",
    github: "https://github.com/sarfuddin04",
    demo: null,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React.js and Tailwind CSS featuring smooth animations and 3D effects.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#22D3EE",
    github: "https://github.com/sarfuddin04",
    demo: null,
  },
  {
    title: "Task Manager App",
    description:
      "A RESTful task management application with CRUD operations, user authentication, and real-time updates.",
    tech: ["Java", "Spring Boot", "REST API", "MySQL"],
    color: "#F59E0B",
    github: "https://github.com/sarfuddin04",
    demo: null,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application consuming a third-party API to display real-time weather data with beautiful UI.",
    tech: ["JavaScript", "React", "OpenWeather API"],
    color: "#34D399",
    github: "https://github.com/sarfuddin04",
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
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full mb-4"
            style={{
              color: "var(--cyan)",
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.2)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            A selection of projects I've built to solve real-world problems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(({ title, description, tech, color, github, demo }, i) => (
            <motion.div
              key={title}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="highlight-card group flex flex-col"
            >
              {/* Top accent */}
              <div
                className="w-10 h-1 rounded-full mb-5"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />

              <h3
                className="text-lg font-bold font-['Manrope'] mb-3 group-hover:text-[var(--electric-blue)] transition-colors duration-300"
                style={{ color: "var(--text-primary)" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5 flex-grow"
                style={{ color: "var(--text-secondary)" }}
              >
                {description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full font-semibold font-['Manrope']"
                    style={{
                      background: `${color}14`,
                      color,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="GitHub"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
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
            <FaGithub size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
