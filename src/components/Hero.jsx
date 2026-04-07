import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const highlights = [
  "LLM-powered decision automation",
  "RAG and vector retrieval systems",
  "ML pipelines and inference APIs",
  "Enterprise-scale platform reliability",
];

const metrics = [
  { value: "5+", label: "Years experience" },
  { value: "1.5M+", label: "Peak orders/day" },
  { value: "2000+", label: "Customers served" },
  { value: "50%", label: "Token cost reduction" },
];

const stackCards = [
  {
    depth: 1,
    label: "LLM systems",
    title: "Decision automation",
    copy: "GPT-4o powered NLP interfaces, structured outputs, prompt optimization, and grounded reasoning flows.",
  },
  {
    depth: 2,
    label: "ML systems",
    title: "Pipelines and inference",
    copy: "Scikit-learn models, MLflow-backed workflows, anomaly detection, and real-time inference integrated into product paths.",
  },
  {
    depth: 3,
    label: "Platform systems",
    title: "Reliability at scale",
    copy: "SSE dashboards, internal tooling, CI/CD, caching, retrieval, and developer workflows for enterprise platforms.",
  },
];

const platformSignals = [
  { label: "Prompt engineering", value: "Instruction compression, structured outputs, token optimization, caching" },
  { label: "Retrieval systems", value: "RAG pipelines, semantic search, vector databases, grounded responses" },
  { label: "Developer acceleration", value: "Internal AI tooling, browser context integration, faster delivery loops" },
];

const platformFlow = [
  "NLP input to structured rules",
  "Retrieval and reasoning layer",
  "Deterministic execution engine",
  "Monitoring and feedback loop",
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const springTransition = {
    type: "spring",
    stiffness: 120,
    damping: 18,
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-8 pt-16 sm:pt-20"
    >
      <div className="hero-grid absolute inset-0 opacity-60"></div>
      <div className="hero-orb left-[4%] top-24 h-40 w-40 bg-brand-500/20"></div>
      <div
        className="hero-orb right-[8%] top-40 h-56 w-56 bg-accent-500/15"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="hero-orb bottom-10 left-1/2 h-44 w-44 -translate-x-1/2 bg-brand-400/10"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="section-inner relative z-10">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
          <motion.div
            className="max-w-2xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-kicker">AI platform engineering, LLM systems, and decision automation</div>
            <motion.h1
              className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Architecting LLM-powered platforms, ML pipelines, and decision automation at enterprise scale.
            </motion.h1>

            <motion.div
              className="mt-6 text-xl font-semibold text-brand-200 sm:text-2xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <TypeAnimation
                sequence={[
                  "Alaap Banerjee",
                  1600,
                  "AI/ML Platform Engineer",
                  1600,
                  "LLM Systems Builder",
                  1600,
                  "Decision Automation Platform Lead",
                  1600,
                  "ML Pipeline Engineer",
                  1600,
                ]}
                speed={48}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </motion.div>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.65, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            >
              AI Platform Engineer with 5+ years of experience building LLM-powered systems, ML pipelines,
              and automation platforms using GPT-4o, Python, Node.js, and full-stack product engineering.
            </motion.p>

            <motion.p
              className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              I design systems that improve engineering velocity, reduce inference cost, and keep
              mission-critical workflows reliable across enterprise-scale commerce operations.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="#portfolio"
                className="btn-primary"
                whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                transition={springTransition}
              >
                Explore AI systems
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                transition={springTransition}
              >
                Talk about a role
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? undefined : "show"}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.42,
                  },
                },
              }}
            >
              {highlights.map((item) => (
                <motion.span
                  key={item}
                  className="pill"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                >
                  <span className="h-2 w-2 rounded-full bg-accent-400"></span>
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 36 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-visual-shell glass-panel mx-auto max-w-xl rounded-[2rem] p-6 sm:p-7">
              <div className="hero-visual-grid">
                <div className="depth-card hero-visual-card rounded-[1.6rem] p-5 sm:p-6">
                  <div className="relative z-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Platform scope
                    </p>
                    <div className="mt-5 space-y-3">
                      {stackCards.map((card) => (
                        <div key={card.title} className="hero-track-row">
                          <div className="hero-track-node">
                            <span></span>
                          </div>
                          <div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                              {card.label}
                            </p>
                            <p className="mt-1 text-base font-semibold text-white">{card.title}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-300">{card.copy}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hero-mini-grid">
                  <div className="depth-card hero-mini-panel rounded-[1.5rem] p-5">
                    <div className="relative z-10">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Core strengths
                      </p>
                      <div className="mt-4 space-y-3">
                        {platformSignals.map((signal) => (
                          <div key={signal.label} className="hero-signal-row">
                            <div className="hero-signal-dot"></div>
                            <div>
                              <p className="text-sm font-semibold text-white">{signal.label}</p>
                              <p className="text-sm leading-6 text-slate-300">{signal.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="depth-card hero-mini-panel rounded-[1.5rem] p-5">
                    <div className="relative z-10">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Delivery model
                      </p>
                      <div className="mt-4 space-y-3">
                        {platformFlow.map((step, index) => (
                          <div key={step} className="hero-flow-step">
                            <div className="hero-flow-index">{index + 1}</div>
                            <div className="text-sm font-medium text-slate-200">{step}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-6 max-w-4xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-panel rounded-[1.75rem] px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-8">
                {metrics.map((m, index) => (
                  <motion.div
                    key={m.label}
                    className="text-center"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={prefersReducedMotion ? undefined : { duration: 0.5, delay: 0.38 + index * 0.08 }}
                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  >
                    <motion.div
                      className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                      transition={springTransition}
                    >
                      {m.value}
                    </motion.div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div>
                  <span className="uppercase tracking-[0.14em] text-slate-500">Based in </span>
                  <span className="font-medium text-white">Pune, India</span>
                </div>
                <div>
                  <span className="uppercase tracking-[0.14em] text-slate-500">Focus </span>
                  <span className="font-medium text-white">LLM, ML, and platform systems</span>
                </div>
                <a
                  href="mailto:alaapbanerjee08@gmail.com"
                  className="font-medium text-brand-200 transition hover:text-white"
                >
                  alaapbanerjee08@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
