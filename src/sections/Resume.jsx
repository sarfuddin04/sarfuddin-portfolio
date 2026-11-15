import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, CheckCircle2, Eye } from "lucide-react";
import { RESUME_PATH, RESUME_FILENAME } from "../constants/resume";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function Resume() {
  const [activeTab, setActiveTab] = useState("preview"); // preview | summary

  const highlights = [
    { label: "Role", value: "Software Developer | Java Developer" },
    { label: "Degree", value: "B.Tech Computer Science & Engineering" },
    { label: "University", value: "Babu Banarasi Das University, Lucknow" },
    { label: "Core Skills", value: "Java, Spring Boot, MySQL, React, DSA" },
  ];

  return (
    <section
      id="resume"
      className="relative z-10 py-24 lg:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
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
            Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text mb-4">
            My Resume
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore my academic background, technical skills, projects and professional development.
          </p>

          {/* Action Buttons Header */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Download Resume PDF"
            >
              <Download size={17} />
              Download Resume
            </motion.a>

            <motion.a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Open Resume in New Tab"
            >
              <ExternalLink size={17} />
              Open in New Tab
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl flex items-start gap-3"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(59,130,246,0.12)", color: "var(--cyan)" }}
              >
                <CheckCircle2 size={16} />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
                  {item.label}
                </span>
                <span className="text-sm font-semibold font-['Manrope']" style={{ color: "var(--text-primary)" }}>
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main PDF Viewer Container */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-2xl relative"
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(59,130,246,0.25)",
            boxShadow: "0 25px 60px -15px rgba(8,14,28,0.9), 0 0 35px rgba(59,130,246,0.15)",
          }}
        >
          {/* Top Bar of the Viewer */}
          <div
            className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b"
            style={{
              background: "rgba(16,27,48,0.95)",
              borderColor: "rgba(59,130,246,0.15)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(59,130,246,0.15)", color: "var(--electric-blue)" }}
              >
                <FileText size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold font-['Manrope'] text-white">
                  Mohammad-Sarfuddin-Resume.pdf
                </h4>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  Official Document • Verified Original
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all"
                style={{
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  color: "var(--cyan)",
                }}
              >
                <Eye size={13} />
                Full View
              </a>
              <a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #22D3EE)",
                  color: "#fff",
                }}
              >
                <Download size={13} />
                Download
              </a>
            </div>
          </div>

          {/* Embedded PDF iframe */}
          <div className="relative w-full bg-[#0d1527] min-h-[550px] md:min-h-[720px] flex flex-col items-center justify-center">
            <object
              data={`${RESUME_PATH}#toolbar=0&navpanes=0&view=FitH`}
              type="application/pdf"
              className="w-full h-[550px] md:h-[750px] rounded-b-2xl"
            >
              <div className="p-8 text-center flex flex-col items-center justify-center gap-4">
                <FileText size={48} className="text-cyan-400 opacity-80" />
                <p className="text-sm max-w-md" style={{ color: "var(--text-secondary)" }}>
                  Your device or browser doesn't support inline PDF preview. You can view or download the original resume using the buttons below:
                </p>
                <div className="flex gap-4">
                  <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2 px-4"
                  >
                    <ExternalLink size={15} />
                    Open PDF in New Tab
                  </a>
                  <a
                    href={RESUME_PATH}
                    download={RESUME_FILENAME}
                    className="btn-primary text-sm py-2 px-4"
                  >
                    <Download size={15} />
                    Download PDF
                  </a>
                </div>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
