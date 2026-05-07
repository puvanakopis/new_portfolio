import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p
            className="font-display font-bold text-lg"
            style={{ color: "var(--text-primary)" }}
          >
            PM<span style={{ color: "var(--accent)" }}>.</span>
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            © {year} Puvanakopis Mehanathan. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
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
        </div>
      </div>
    </footer>
  );
}
