"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="section-container">
        <div className="flex flex-col items-center text-center gap-5">


          <div
            className="w-full pt-5 mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--border)" }}
          >
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              © {year} Puvanakopis. All rights reserved.
            </p>

            <div className="flex items-center justify-center sm:justify-end gap-3">
              {[
                { icon: Github, href: "https://github.com/puvanakopis", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/puvanakopis", label: "LinkedIn" },
                { icon: Mail, href: "mailto:puvanakopis@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200 hover:border-accent hover:text-accent"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  <Icon size={14} />
                </a>
              ))}

              <button
                type="button"
                onClick={() => handleNavClick("#hero")}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 hover:border-accent hover:text-accent"
                style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              >
                Back to Top
                <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: "var(--accent-subtle)" }}>
                  <ArrowUp size={12} style={{ color: "var(--accent)" }} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
