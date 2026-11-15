import { motion } from "framer-motion";
import { Code2, Database, Wrench, Cpu, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const SKILL_GROUPS = [
  {
    category: "Programming Languages",
    icon: Code2,
    color: "#F59E0B",
    skills: [
      { name: "Java", note: "Primary • OOP & DSA" },
      { name: "Python", note: "Projects & AI" },
      { name: "SQL", note: "Queries & Schema" },
      { name: "JavaScript", note: "Frontend Web" },
      { name: "C / C++", note: "CS Fundamentals" },
      { name: "HTML5 & CSS3", note: "Responsive UI" },
    ],
  },
  {
    category: "Core Computer Science",
    icon: Cpu,
    color: "#3B82F6",
    skills: [
      { name: "Data Structures & Algorithms", note: "50+ LeetCode solved" },
      { name: "Object-Oriented Programming (OOP)", note: "Inheritance, Polymorphism" },
      { name: "Database Management (DBMS)", note: "Normalization, Joins, ACID" },
      { name: "Operating Systems", note: "Processes, Memory, Concurrency" },
      { name: "Computer Networks", note: "OSI, TCP/IP, HTTP/REST" },
    ],
  },
  {
    category: "Frameworks & AI/Data Libraries",
    icon: Sparkles,
    color: "#22D3EE",
    skills: [
      { name: "Streamlit", note: "Python Web Apps" },
      { name: "React.js", note: "Component UI" },
      { name: "Tailwind CSS", note: "Utility-first Design" },
      { name: "Pandas & NumPy", note: "Data Analysis" },
      { name: "ReportLab", note: "Automated PDF Generation" },
    ],
  },
  {
    category: "Developer Tools & Databases",
    icon: Wrench,
    color: "#34D399",
    skills: [
      { name: "Git & GitHub", note: "Version Control" },
      { name: "MySQL", note: "Relational DB" },
      { name: "SQLite3", note: "Embedded DB" },
      { name: "VS Code", note: "Primary Editor" },
      { name: "IntelliJ IDEA", note: "Java Development" },
      { name: "Jupyter Notebook", note: "Data Science" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-4"
            style={{
              color: "var(--cyan)",
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.2)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Technologies and core CS disciplines I practice regularly through college coursework and personal software projects.
          </p>
        </motion.div>

        {/* Skill Category Cards Grid (No Fake Percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map(({ category, icon: Icon, color, skills }, ci) => (
            <motion.div
              key={category}
              variants={fadeUp(ci * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="highlight-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[rgba(59,130,246,0.12)]">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}
                  >
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-['Manrope'] text-white">
                      {category}
                    </h3>
                    <span className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                      {skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skill Badges with Context Notes */}
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3.5 py-2 rounded-xl flex flex-col transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(16,27,48,0.9)",
                        border: "1px solid rgba(59,130,246,0.18)",
                      }}
                    >
                      <span className="text-xs sm:text-sm font-semibold font-['Manrope'] text-white">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-cyan-400/80 font-medium mt-0.5">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "Currently Exploring" Student Banner */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(20,34,56,0.85), rgba(16,27,48,0.95))",
            border: "1px solid rgba(59,130,246,0.25)",
          }}
        >
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold font-['Manrope'] text-white">
                Currently Learning &amp; Practicing
              </h4>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Solving daily LeetCode challenges in Java, exploring Spring Boot REST APIs, and backend architectural design.
              </p>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-400 whitespace-nowrap">
            Self-Taught &amp; Active
          </span>
        </motion.div>
      </div>
    </section>
  );
}
