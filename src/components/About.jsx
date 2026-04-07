import React from "react";

const principles = [
  {
    title: "LLM platform engineering",
    description:
      "I architect LLM-powered systems that combine prompt engineering, structured outputs, caching, and grounded retrieval to support high-stakes operational decisions.",
  },
  {
    title: "ML and data workflows",
    description:
      "My work spans model training pipelines, feature engineering, experiment tracking, real-time inference, and decision systems embedded directly into enterprise product flows.",
  },
  {
    title: "Enterprise execution",
    description:
      "I care about scale, observability, cost discipline, and developer velocity, especially in systems that power mission-critical workflows across thousands of customers.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="section-intro fade-in-up">
          <div className="section-kicker">About</div>
          <h2 className="section-title">AI platform engineer building LLM systems, ML pipelines, and decision automation for enterprise operations.</h2>
          <p className="section-copy">
            My recent work is centered on AI platforms that improve decision quality, reduce manual configuration,
            and give engineering teams better leverage across high-volume operational systems.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-8 fade-in-up">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-400/30 bg-slate-950/80 text-xl font-semibold text-brand-200">
                AB
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Profile</p>
                <p className="mt-1 text-2xl font-semibold text-white">AI Platform Engineer</p>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
              <p>
                I currently lead AI platform engineering work at Anchanto, where I help build
                LLM-powered decision automation systems serving 2,000+ customers and peak workloads of 1.5M orders per day.
              </p>
              <p>
                Across LLM systems and classical ML, I work on prompt engineering, RAG, vector retrieval,
                inference APIs, deterministic execution layers, SSE monitoring dashboards, and internal tooling that accelerates delivery.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="surface-card rounded-[1.5rem] p-5">
                <div className="metric-value text-3xl">5+</div>
                <div className="metric-label mt-2">Years in AI and software systems</div>
              </div>
              <div className="surface-card rounded-[1.5rem] p-5">
                <div className="metric-value text-3xl">1.5M+</div>
                <div className="metric-label mt-2">Peak orders processed daily</div>
              </div>
              <div className="surface-card rounded-[1.5rem] p-5">
                <div className="metric-value text-3xl">50%</div>
                <div className="metric-label mt-2">Token reduction per request</div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className="surface-card lift-card rounded-[1.75rem] p-6 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                    Core strength
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}

            <div className="glass-panel rounded-[1.75rem] p-6 fade-in-up" style={{ animationDelay: "260ms" }}>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">What I optimize for</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Grounded LLM responses",
                  "Deterministic execution with dynamic reasoning",
                  "Lower inference cost at scale",
                  "Reproducible ML workflows",
                  "Faster engineering throughput",
                ].map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
