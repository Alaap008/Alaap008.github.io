import React from "react";

const experiences = [
  {
    period: "April 2025 – Present",
    company: "Anchanto",
    position: "Team Lead - AI Platform Engineering",
    location: "Pune, India",
    impact: "Leading development of an LLM-powered decision automation platform serving 2,000 customers and peak throughput of 1.5M orders per day.",
    achievements: [
      "Replaced a 17-field manual rule configuration flow with an NLP-driven interface powered by GPT-4o-mini, reducing configuration time by about 80%.",
      "Implemented a RAG-based retrieval solution using vector databases and semantic search, improving retrieval precision and reducing hallucinations in automated decisions by about 30%.",
      "Engineered a hybrid rule-execution engine with deterministic Python execution combined with LLM inference for dynamic reasoning across nested and graph-based workflows.",
      "Optimized prompt and model performance with instruction consolidation, structured output schemas, and caching, cutting token usage by 50% from 4K to 2K tokens per request.",
      "Built real-time monitoring dashboards with Next.js, React, Open UI, SWR, and SSE for rule performance, confidence scores, and system health visibility.",
      "Created internal developer tooling that integrated browser context and design tokens with AI code generation, cutting UI development cycle time by 35% and helping increase delivery scope by 40% without added headcount."
    ]
  },
  {
    period: "May 2021 – March 2025",
    company: "Anchanto",
    position: "Software Engineer to Senior Software Engineer",
    location: "Pune, India",
    impact: "Built ML pipelines and intelligent workflow systems that improved catalog ingestion, anomaly detection, and operational reliability.",
    achievements: [
      "Developed an ML-driven product category classification system using Random Forest and Scikit-learn across 3,500+ SKU categories, reducing manual tagging effort by 60%.",
      "Established end-to-end ML pipelines covering preprocessing, feature engineering, model training, cross-validation, and MLflow-based experiment tracking.",
      "Delivered real-time model inference into catalog onboarding workflows via REST APIs, eliminating manual category assignment for more than 70% of new listings.",
      "Engineered a statistical anomaly detection system to flag irregular order-processing and warehouse workflow patterns, reducing operational escalations by 30%.",
      "Implemented a config-driven validation engine for multi-tenant catalog ingestion pipelines, improving data quality and reducing downstream ETL failures by 40%."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="section-intro fade-in-up">
          <div className="section-kicker">Experience</div>
          <h2 className="section-title">Experience centered on AI platforms, ML systems, and decision automation.</h2>
          <p className="section-copy">
            My recent work combines LLM application engineering, retrieval systems, inference optimization,
            ML pipeline design, and the platform thinking required to run these systems reliably at enterprise scale.
          </p>
        </div>

        <div className="experience-timeline relative pl-10">
          <div className="timeline-line"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article
                key={`${exp.company}-${exp.period}`}
                className="relative fade-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="timeline-dot"></div>

                <div className="glass-panel experience-panel rounded-[1.9rem] p-7 sm:p-8">
                  <div className="experience-header flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <div className="experience-period inline-flex rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
                        {exp.period}
                      </div>
                      <h3 className="experience-title mt-4 text-2xl font-semibold text-white">
                        {exp.position}
                      </h3>
                      <p className="mt-2 text-base text-accent-400">{exp.company}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">
                        {exp.location}
                      </p>
                    </div>

                    <p className="experience-impact max-w-md text-sm leading-7 text-slate-300">
                      {exp.impact}
                    </p>
                  </div>

                  <ul className="experience-list mt-8 grid gap-4">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="surface-card experience-item rounded-[1.25rem] border border-slate-800/70 px-5 py-4 text-sm leading-7 text-slate-300"
                      >
                        <span className="mr-3 inline-block h-2 w-2 rounded-full bg-brand-300"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
