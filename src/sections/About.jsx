import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Calendar } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const INFO_ITEMS = [
  { icon: User,           label: "Name",       value: "Mohammad Sarfuddin" },
  { icon: GraduationCap,  label: "Degree",     value: "B.Tech CSE" },
  { icon: MapPin,         label: "University", value: "Babu Banarasi Das University, Lucknow" },
  { icon: Calendar,       label: "Status",     value: "Final Year Student" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 lg:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm a passionate{" "}
              <span style={{ color: "var(--electric-blue)", fontWeight: 600 }}>
                Computer Science Engineering
              </span>{" "}
              student at Babu Banarasi Das University, Lucknow, with a strong
              foundation in Java, backend development, and modern web technologies.
            </p>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              I love solving complex problems, building scalable applications, and
              continuously learning new technologies. My goal is to create software
              that makes a meaningful difference in people's lives.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(59,130,246,0.1)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.2)",
                    }}
                  >
                    <Icon size={16} style={{ color: "var(--electric-blue)" }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "var(--text-secondary)" }}>
                      {label}
                    </div>
                    <div className="text-sm font-semibold font-['Manrope']" style={{ color: "var(--text-primary)" }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — decorative stat cards */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { num: "1+",   label: "Years of\nCoding Experience", color: "#3B82F6" },
              { num: "10+",  label: "Projects\nCompleted",         color: "#22D3EE" },
              { num: "5+",   label: "Technologies\nMastered",      color: "#F59E0B" },
              { num: "100+", label: "Problems\nSolved",            color: "#34D399" },
            ].map(({ num, label, color }) => (
              <div
                key={label}
                className="highlight-card text-center group"
                style={{ aspectRatio: "1/0.9" }}
              >
                <div
                  className="text-4xl font-extrabold font-['Manrope'] mb-2"
                  style={{ color }}
                >
                  {num}
                </div>
                <div
                  className="text-sm leading-tight whitespace-pre-line"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
