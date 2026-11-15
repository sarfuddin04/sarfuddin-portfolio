import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const TIMELINE = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Babu Banarasi Das University",
    location: "Lucknow, Uttar Pradesh",
    duration: "2023 – 2027",
    description:
      "Pursuing B.Tech with an academic score of 7.8 CGPA. Core coursework covers Data Structures & Algorithms, Object-Oriented Programming (Java), Operating Systems, DBMS, Computer Networks, and Software Engineering.",
    icon: GraduationCap,
    color: "#3B82F6",
    badge: "Current Degree • 7.8 CGPA",
  },
  {
    degree: "Data Science & Artificial Intelligence Training",
    institution: "GRASTech",
    location: "Lucknow, Uttar Pradesh",
    duration: "2026",
    description:
      "Completed hands-on industrial training on Python for Data Science, data preprocessing, machine learning algorithms, model evaluation, and integrating AI capabilities into practical applications.",
    icon: BookOpen,
    color: "#8B5CF6",
    badge: "Professional Training",
  },
  {
    degree: "High School & Intermediate (Science & Mathematics)",
    institution: "Uttar Pradesh State Board of High School and Intermediate Education",
    location: "Uttar Pradesh",
    duration: "2020 – 2022",
    description:
      "Completed secondary (High School) and senior secondary (Intermediate) education with a core concentration in Physics, Chemistry, and Mathematics (PCM).",
    icon: Award,
    color: "#22D3EE",
    badge: "Schooling",
  },
];

export default function Experience() {
  return (
    <section
      id="education"
      className="relative z-10 py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
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
            Academic Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            Education & Training
          </h2>
          <p className="mt-3 text-sm max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Formal computer science engineering education, specialized AI training, and academic foundations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(139,92,246,0.3), rgba(34,211,238,0.1))" }}
          />

          {TIMELINE.map(({ degree, institution, location, duration, description, icon: Icon, color, badge }, i) => (
            <motion.div
              key={degree}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex gap-6 mb-10 last:mb-0"
            >
              {/* Icon bubble */}
              <div
                className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl items-center justify-center z-10"
                style={{ background: `${color}18`, border: `1.5px solid ${color}40` }}
              >
                <Icon size={20} style={{ color }} />
              </div>

              {/* Card */}
              <div className="flex-1 highlight-card">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3
                    className="text-base font-bold font-['Manrope']"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {degree}
                  </h3>
                  <span
                    className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{
                      color: "var(--text-secondary)",
                      background: "rgba(59,130,246,0.07)",
                      border: "1px solid rgba(59,130,246,0.15)",
                    }}
                  >
                    <Calendar size={11} /> {duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="text-sm font-semibold font-['Manrope']"
                    style={{ color }}
                  >
                    {institution}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-md" style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
                    {badge}
                  </span>
                </div>

                <div className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
                  {location}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
