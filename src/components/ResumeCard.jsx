import React from "react";

const resumePdf = "/assets/Alaap_Banerjee_2025.pdf";

const highlights = [
  "LLM-powered decision automation with GPT-4o and GPT-4o-mini",
  "RAG, vector retrieval, structured outputs, and inference optimization",
  "ML pipelines with Scikit-learn, MLflow, and production inference APIs",
  "Enterprise systems serving 2,000+ customers and peak 1.5M orders/day",
];

export default function ResumeCard() {
  return (
    <section id="resume" className="section-shell">
      <div className="section-inner">
        <div className="glass-panel fade-in-up rounded-[2.2rem] p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="section-kicker">Resume</div>
              <h2 className="section-title max-w-3xl">
                The resume version is focused on AI platform engineering, not generic frontend delivery.
              </h2>
              <p className="section-copy max-w-2xl">
                It covers LLM decision systems, ML pipelines, prompt optimization, RAG, enterprise-scale throughput,
                and the measurable impact of the platforms I have built at Anchanto.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="surface-card rounded-[1.3rem] border border-slate-800/70 px-5 py-4 text-sm leading-7 text-slate-300"
                  >
                    <span className="mr-3 inline-block h-2 w-2 rounded-full bg-accent-400"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="surface-card rounded-[1.7rem] p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Snapshot</p>
                <div className="mt-5 grid grid-cols-3 gap-4">
                  <div>
                    <div className="metric-value text-3xl">5+</div>
                    <div className="metric-label mt-2">Years</div>
                  </div>
                  <div>
                    <div className="metric-value text-3xl">2000+</div>
                    <div className="metric-label mt-2">Customers</div>
                  </div>
                  <div>
                    <div className="metric-value text-3xl">1.5M+</div>
                    <div className="metric-label mt-2">Peak orders/day</div>
                  </div>
                </div>
              </div>

              <div className="surface-card rounded-[1.7rem] p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Next step</p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  If you want the detailed timeline, technical stack, and quantified impact, the full resume is ready here.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    Open resume
                  </a>
                  <a href={resumePdf} download className="btn-secondary w-full">
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-slate-800/80 pt-6 text-sm text-slate-400">
            <span>Pune, India</span>
            <span>alaapbanerjee08@gmail.com</span>
            <span>+91 8617471399</span>
          </div>
        </div>
      </div>
    </section>
  );
}
