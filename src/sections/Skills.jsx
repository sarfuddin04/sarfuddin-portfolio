import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const SKILLS = {
  "Languages": [
    { name: "Java",       level: 85 },
    { name: "Python",     level: 72 },
    { name: "JavaScript", level: 70 },
    { name: "C/C++",      level: 65 },
    { name: "SQL",        level: 75 },
  ],
  "Frameworks & Libraries": [
    { name: "Spring Boot", level: 70 },
    { name: "React.js",    level: 68 },
    { name: "Tailwind CSS",level: 80 },
    { name: "Node.js",     level: 60 },
  ],
  "Tools & Platforms": [
    { name: "Git / GitHub",  level: 82 },
    { name: "MySQL",         level: 73 },
    { name: "VS Code",       level: 90 },
    { name: "IntelliJ IDEA", level: 85 },
  ],
};

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { delay, duration: 0.5 } } }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold font-['Manrope']" style={{ color: "var(--text-primary)" }}>
          {name}
        </span>
        <span className="text-xs font-medium" style={{ color: "var(--electric-blue)" }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 w-full rounded-full overflow-hidden"
        style={{ background: "rgba(59,130,246,0.1)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #3B82F6, #22D3EE)" }}
        />
      </div>
    </motion.div>
  );
}

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
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full mb-4"
            style={{
              color: "var(--cyan)",
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.2)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            A curated set of technologies I work with to build robust applications.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, skills], ci) => (
            <motion.div
              key={category}
              variants={fadeUp(ci * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="highlight-card"
            >
              <h3
                className="text-sm font-bold tracking-widest uppercase mb-6 font-['Manrope']"
                style={{ color: "var(--electric-blue)" }}
              >
                {category}
              </h3>
              <motion.div
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.07} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
