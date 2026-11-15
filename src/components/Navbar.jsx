import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { RESUME_PATH, RESUME_FILENAME } from "../constants/resume";

const NAV_LINKS = [
  { label: "Home",      href: "#home"      },
  { label: "About",     href: "#about"     },
  { label: "Skills",    href: "#skills"    },
  { label: "Projects",  href: "#projects"  },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible]   = useState(true);
  const lastScrollY             = useRef(0);
  const ticking                 = useRef(false);

  /* ── Scroll: show/hide + blur trigger ─────────────── */
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 20);
        setVisible(y < lastScrollY.current || y < 60);
        lastScrollY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section detection ──────────────────────── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* ── Lock scroll when mobile menu open ───────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "glass-nav shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2.5 group flex-shrink-0 select-none"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Mohammad Sarfuddin"
            >
              {/* Premium Monogram Icon */}
              <div className="relative w-9 h-9 rounded-xl flex items-center justify-center p-[1.5px] transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.55)]">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 opacity-85 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-full h-full rounded-[10.5px] bg-[#0c1527] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 to-cyan-400/25 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="font-extrabold text-sm tracking-tighter bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent font-['Manrope']">
                    MS
                  </span>
                </div>
              </div>

              {/* Wordmark Typography without dot */}
              <span className="text-[1.2rem] font-black tracking-[0.16em] uppercase font-['Manrope'] bg-gradient-to-r from-white via-cyan-100 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-white group-hover:to-cyan-400 transition-all duration-300 drop-shadow-[0_2px_12px_rgba(59,130,246,0.35)]">
                SARFUDDIN
              </span>
            </motion.a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${active === link.href.slice(1) ? "active" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop — Download Resume button */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <motion.a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className="relative inline-flex items-center gap-2 text-sm font-semibold py-2 px-5 rounded-xl overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #22D3EE)",
                  color: "#fff",
                  fontFamily: "Manrope, sans-serif",
                  boxShadow: "0 0 0 rgba(59,130,246,0)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 6px 24px rgba(59,130,246,0.45)",
                }}
                whileTap={{ scale: 0.96 }}
                aria-label="Download Resume PDF"
              >
                {/* Animated shimmer overlay */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                />
                <motion.span
                  whileHover={{ rotate: -15, y: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="inline-flex relative z-10"
                >
                  <Download size={15} />
                </motion.span>
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] transition-colors hover:bg-[rgba(59,130,246,0.14)]"
              aria-label="Open menu"
            >
              <span className="w-5 h-[1.5px] bg-[var(--text-secondary)] rounded-full" />
              <span className="w-5 h-[1.5px] bg-[var(--text-secondary)] rounded-full" />
              <span className="w-3.5 h-[1.5px] bg-[var(--text-secondary)] rounded-full self-start ml-0.5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-full w-72 z-[70] glass-nav border-l border-[rgba(59,130,246,0.15)] flex flex-col px-7 py-8"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end w-9 h-9 rounded-lg flex items-center justify-center border border-[rgba(59,130,246,0.2)] text-[var(--text-secondary)] hover:text-white hover:border-[rgba(59,130,246,0.5)] transition-colors mb-8"
                aria-label="Close menu"
              >
                ✕
              </button>

              <div className="flex flex-col gap-1 flex-grow">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.055, duration: 0.3 }}
                    className={`text-base font-semibold font-['Manrope'] py-3 px-4 rounded-xl transition-all ${
                      active === link.href.slice(1)
                        ? "text-white bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.3)]"
                        : "text-[var(--text-secondary)] hover:text-white hover:bg-[rgba(59,130,246,0.08)]"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile download button */}
              <motion.a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center mt-6"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
