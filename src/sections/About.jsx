import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Calendar, Terminal, BookOpen, Code, Trophy } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const INFO_ITEMS = [
  { icon: User,          label: "Name",          value: "Mohammad Sarfuddin" },
  { icon: GraduationCap, label: "Degree & CGPA",  value: "B.Tech CSE (CGPA: 7.8/10)" },
  { icon: MapPin,        label: "University",    value: "Babu Banarasi Das University, Lucknow" },
  { icon: Calendar,      label: "Graduation",    value: "2023 – 2027 (Expected)" },
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
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full mb-4"
            style={{
              color: "var(--cyan)",
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.2)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            My Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            An engineering student dedicated to continuous learning, building practical software, and mastering computer science fundamentals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Real Student Story */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p
              className="text-base sm:text-lg leading-relaxed mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm an aspiring software developer currently pursuing my{" "}
              <span className="text-white font-semibold">
                B.Tech in Computer Science &amp; Engineering
              </span>{" "}
              at Babu Banarasi Das University, Lucknow. My coding journey started with a curiosity
              for how software works under the hood, which led me to dive deep into{" "}
              <span style={{ color: "var(--electric-blue)", fontWeight: 600 }}>Java, OOP concepts,</span> and{" "}
              <span style={{ color: "var(--cyan)", fontWeight: 600 }}>Data Structures &amp; Algorithms</span>.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed mb-7"
              style={{ color: "var(--text-secondary)" }}
            >
              Alongside college coursework, I believe in learning by building. I developed{" "}
              <span className="text-slate-200 font-medium">PaperForge</span> (an automated exam question paper generator)
              and <span className="text-slate-200 font-medium">KisanMitra AI</span> (an agricultural advisory platform)
              using Python and Streamlit. I also completed hands-on Data Science &amp; AI training at{" "}
              <span className="text-white font-medium">GRASTech</span>, and I consistently solve DSA problems on LeetCode to build strong algorithmic thinking.
            </p>

            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3.5 rounded-xl"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(59,130,246,0.12)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.2)",
                    }}
                  >
                    <Icon size={15} style={{ color: "var(--electric-blue)" }} />
                  </div>
                  <div>
                    <div className="text-[11px] mb-0.5" style={{ color: "var(--text-secondary)" }}>
                      {label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold font-['Manrope']" style={{ color: "var(--text-primary)" }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Developer Code Card & Authentic Stats */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5"
          >
            {/* Interactive Student Developer Code Window */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border"
              style={{
                background: "rgba(12,21,39,0.95)",
                borderColor: "rgba(59,130,246,0.2)",
              }}
            >
              {/* Window Header */}
              <div
                className="flex items-center justify-between px-4 py-2.5 border-b"
                style={{
                  background: "rgba(16,27,48,0.9)",
                  borderColor: "rgba(59,130,246,0.15)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">Developer.java</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-mono">
                  <Terminal size={12} />
                  <span>javac</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
                <span className="text-purple-400">public class</span>{" "}
                <span className="text-yellow-300">Developer</span> &#123;
                <div className="pl-4 mt-1">
                  <span className="text-blue-400">String</span> name ={" "}
                  <span className="text-green-300">"Mohammad Sarfuddin"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">String</span> university ={" "}
                  <span className="text-green-300">"BBD University, Lucknow"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">String</span> degree ={" "}
                  <span className="text-green-300">"B.Tech CSE (2023 - 2027)"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">double</span> cgpa ={" "}
                  <span className="text-orange-400">7.8</span>;
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">int</span> leetcodeSolved ={" "}
                  <span className="text-orange-400">50</span>; <span className="text-slate-500">// active on DSA</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">String[]</span> coreTech = &#123;
                  <span className="text-green-300">"Java"</span>,{" "}
                  <span className="text-green-300">"Python"</span>,{" "}
                  <span className="text-green-300">"SQL"</span>,{" "}
                  <span className="text-green-300">"OOP"</span>&#125;;
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">boolean</span> seekingInternship ={" "}
                  <span className="text-cyan-300">true</span>;
                </div>
                <div>&#125;</div>
              </div>
            </div>

            {/* Real Authentic Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { num: "50+",  label: "LeetCode\nDSA Solved",    color: "#34D399" },
                { num: "7.8",  label: "B.Tech CGPA\n@ BBDU",     color: "#3B82F6" },
                { num: "2026", label: "GRASTech AI\nCertified",  color: "#22D3EE" },
                { num: "2027", label: "Graduation\nYear",        color: "#F59E0B" },
              ].map(({ num, label, color }) => (
                <div
                  key={label}
                  className="highlight-card text-center p-3.5 group"
                >
                  <div
                    className="text-2xl font-extrabold font-['Manrope'] mb-1"
                    style={{ color }}
                  >
                    {num}
                  </div>
                  <div
                    className="text-[11px] leading-tight whitespace-pre-line"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
