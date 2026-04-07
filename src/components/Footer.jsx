import React from "react";

const links = [
  { name: "Summary", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Stack", href: "#skills" },
  { name: "Systems", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-shell pb-10 pt-0">
      <div className="section-inner">
        <div className="glass-panel rounded-[2rem] px-6 py-8 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/30 bg-slate-950/80 text-sm font-semibold tracking-[0.3em] text-brand-200">
                  AB
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Alaap Banerjee</p>
                  <p className="text-sm text-slate-400">AI platform engineer</p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                I build AI platforms and ML-backed systems that improve decision quality, engineering speed,
                and operational reliability for enterprise-scale workflows.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Navigation</p>
              <div className="mt-4 space-y-3">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Connect</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <a
                  href="mailto:alaapbanerjee08@gmail.com"
                  className="block transition hover:text-white"
                >
                  alaapbanerjee08@gmail.com
                </a>
                <a href="tel:+918617471399" className="block transition hover:text-white">
                  +91 8617471399
                </a>
                <p>Pune, India</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/alaap-banerjee-818201144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary min-h-0 px-4 py-2 text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/alaap008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary min-h-0 px-4 py-2 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-800/80 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} Alaap Banerjee. Built with clarity, depth, and platform intent.</p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              <span>Back to top</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
