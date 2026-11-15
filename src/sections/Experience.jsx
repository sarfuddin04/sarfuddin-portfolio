import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Babu Banarasi Das University",
    location: "Lucknow, Uttar Pradesh",
    duration: "2023 – 2027",
    description:
      "Studying core CSE subjects with CGPA 7.8/10, including Data Structures, Algorithms, Database Management Systems, Operating Systems, Software Engineering, and Web Technologies.",
    icon: GraduationCap,
    color: "#3B82F6",
  },
  {
    degree: "High & Intermediate",
    institution: "Uttar Pradesh State Board of High School and Intermediate Education",
    location: "Uttar Pradesh",
    duration: "2020 – 2022",
    description:
      "Completed secondary and higher secondary education with Science and Mathematics as core subjects.",
    icon: Award,
    color: "#22D3EE",
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
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(59,130,246,0.05))" }}
          />

          {EDUCATION.map(({ degree, institution, location, duration, description, icon: Icon, color }, i) => (
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
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
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

                <div
                  className="text-sm font-semibold mb-1 font-['Manrope']"
                  style={{ color }}
                >
                  {institution}
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
