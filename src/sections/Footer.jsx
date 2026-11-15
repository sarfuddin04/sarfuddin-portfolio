import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const NAV = [
  { label: "Home",      href: "#home"      },
  { label: "About",     href: "#about"     },
  { label: "Skills",    href: "#skills"    },
  { label: "Projects",  href: "#projects"  },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact"   },
];

const SOCIALS = [
  { icon: FaGithub,     href: "https://github.com/sarfuddin04",                            label: "GitHub"   },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mohammad-sarfuddin-4360bb357/", label: "LinkedIn" },
  { icon: Mail,         href: "mailto:sarfuddin9336@gmail.com",                             label: "Email"    },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative z-10 py-10 border-t"
      style={{
        background: "var(--bg-primary)",
        borderColor: "rgba(59,130,246,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo without dot */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group select-none"
            aria-label="Mohammad Sarfuddin"
          >
            <div className="relative w-8 h-8 rounded-xl flex items-center justify-center p-[1px]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 opacity-80" />
              <div className="relative w-full h-full rounded-[11px] bg-[#0c1527] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-tighter bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-['Manrope']">
                  MS
                </span>
              </div>
            </div>
            <span className="text-base font-black tracking-[0.16em] uppercase font-['Manrope'] bg-gradient-to-r from-white via-cyan-100 to-blue-400 bg-clip-text text-transparent">
              SARFUDDIN
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium transition-colors hover:text-white"
                style={{ color: "var(--text-secondary)", fontFamily: "Manrope, sans-serif" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => {
              const isMail = href.startsWith("mailto:");
              return (
                <a
                  key={label}
                  href={href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="social-btn"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div
          className="mt-8 text-center text-xs flex items-center justify-center gap-1.5"
          style={{ color: "var(--text-secondary)", opacity: 0.7 }}
        >
          © {year} Mohammad Sarfuddin. Built with
          <Heart size={12} style={{ color: "var(--electric-blue)", fill: "var(--electric-blue)" }} />
          using React &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
