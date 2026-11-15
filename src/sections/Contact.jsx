import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Download, FileText, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RESUME_PATH, RESUME_FILENAME } from "../constants/resume";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "sarfuddin9336@gmail.com",
    href: "mailto:sarfuddin9336@gmail.com?subject=Inquiry%20from%20Portfolio",
    color: "var(--cyan)",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-sarfuddin-4360bb357/",
    color: "var(--electric-blue)",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/sarfuddin04",
    href: "https://github.com/sarfuddin04",
    color: "#94A3B8",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, Uttar Pradesh",
    href: null,
    color: "#F59E0B",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  // Strict email format validation
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).trim());
  };

  // Phone number validation (at least 10 digits)
  const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/[^0-9]/g, "");
    return digitsOnly.length >= 10;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required";
    } else if (!validatePhone(form.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email (e.g. name@domain.com)";
    }

    // No character limit on message — even 1 word or letter is valid
    const finalMessage = form.message.trim() || "Hi Sarfuddin, I saw your portfolio and would like to connect!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");

    // Format WhatsApp message text including sender's phone number
    const waText =
      `*New Portfolio Inquiry*\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${form.name.trim()}\n` +
      `📱 *Phone:* ${form.phone.trim()}\n` +
      `📧 *Email:* ${form.email.trim()}\n` +
      `📝 *Message:*\n${finalMessage}\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `Sent via Mohammad Sarfuddin's Portfolio`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://api.whatsapp.com/send?phone=917860780348&text=${encodedText}`;

    // Open WhatsApp in new tab / mobile app
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus("done");
    setForm({ name: "", phone: "", email: "", message: "" });
    setErrors({});

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 font-['Inter']";
  const getInputStyle = (hasError) => ({
    background: "rgba(20,34,56,0.8)",
    border: hasError ? "1px solid #ef4444" : "1px solid rgba(59,130,246,0.2)",
    color: "var(--text-primary)",
    boxShadow: hasError ? "0 0 10px rgba(239,68,68,0.2)" : "none",
  });

  return (
    <section
      id="contact"
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] gradient-text">
            Contact Me
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Fill out the form below to connect with me directly on WhatsApp, or reach out via email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info + Direct WhatsApp & Resume Card */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }) => {
              const isMail = href && href.startsWith("mailto:");
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  className="highlight-card flex items-center gap-4 group cursor-pointer transition-all"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      color: color || "var(--electric-blue)",
                    }}
                  >
                    <Icon size={19} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "var(--text-secondary)" }}>{label}</div>
                    <div
                      className="text-sm font-semibold font-['Manrope'] group-hover:text-[var(--electric-blue)] transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ) : (
                <div key={label} className="highlight-card flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(59,130,246,0.12)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      color: color || "var(--electric-blue)",
                    }}
                  >
                    <Icon size={19} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "var(--text-secondary)" }}>{label}</div>
                    <div className="text-sm font-semibold font-['Manrope']" style={{ color: "var(--text-primary)" }}>
                      {value}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Resume CTA Card inside Contact section */}
            <div
              className="p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4 mt-2"
              style={{
                background: "linear-gradient(135deg, rgba(20,34,56,0.9), rgba(16,27,48,0.95))",
                border: "1px solid rgba(59,130,246,0.25)",
                boxShadow: "0 10px 30px rgba(8,14,28,0.5)",
              }}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.15)", color: "var(--cyan)" }}
                >
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-['Manrope'] text-white">
                    Looking for my resume?
                  </h4>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    Download my verified curriculum vitae PDF
                  </p>
                </div>
              </div>

              <motion.a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className="btn-primary text-xs py-2 px-4 gap-1.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                aria-label="Download Resume"
              >
                <Download size={14} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form with Direct WhatsApp Integration */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="highlight-card flex flex-col gap-4 relative"
            >
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "rgba(59,130,246,0.15)" }}>
                <div>
                  <h3 className="text-base font-bold font-['Manrope'] text-white">Send a Message</h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)" }}>
                  <FaWhatsapp size={13} />
                  <span>Direct WhatsApp</span>
                </div>
              </div>

              {/* Row 1: Name and Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-['Manrope']" style={{ color: "var(--text-secondary)" }}>
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={inputClass}
                    style={getInputStyle(Boolean(errors.name))}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 font-['Manrope']" style={{ color: "var(--text-secondary)" }}>
                    Phone / WhatsApp Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 9876543210"
                    className={inputClass}
                    style={getInputStyle(Boolean(errors.phone))}
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle size={12} />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2: Email Address with Strict Validation */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 font-['Manrope']" style={{ color: "var(--text-secondary)" }}>
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  className={inputClass}
                  style={getInputStyle(Boolean(errors.email))}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 text-red-400 text-xs mt-1">
                    <AlertCircle size={12} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Row 3: Message Field (No character limit) */}
              <div>
                <label className="block text-xs font-semibold mb-1.5 font-['Manrope']" style={{ color: "var(--text-secondary)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your message (e.g. Hi, Hello, project details...)"
                  className={inputClass}
                  style={{ ...getInputStyle(false), resize: "vertical" }}
                />
              </div>

              {/* Success Notification Banner */}
              {status === "done" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl flex items-center gap-2.5 text-xs font-medium"
                  style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.35)", color: "#4ade80" }}
                >
                  <CheckCircle2 size={16} />
                  <span>Form details formatted! Opening WhatsApp with pre-filled message...</span>
                </motion.div>
              )}

              {/* Submit CTA Button */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary justify-center mt-1 py-3 text-sm font-semibold flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 50%, #3B82F6 100%)",
                  boxShadow: "0 8px 25px rgba(37,211,102,0.35)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? (
                  "Preparing WhatsApp message…"
                ) : status === "done" ? (
                  <>
                    <CheckCircle2 size={16} />
                    Opening WhatsApp ✓
                  </>
                ) : (
                  <>
                    <FaWhatsapp size={17} />
                    <span>Send Message on WhatsApp</span>
                    <Send size={14} className="ml-0.5 opacity-80" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
