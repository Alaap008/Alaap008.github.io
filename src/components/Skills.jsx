import React from "react";

const skillGroups = [
  {
    title: "LLM and AI systems",
    description: "The core AI stack I use to build production decision systems and model-powered workflows.",
    skills: [
      { name: "OpenAI API / GPT-4o", level: 94 },
      { name: "Prompt engineering", level: 92 },
      { name: "RAG and semantic search", level: 88 },
      { name: "Structured outputs", level: 90 },
    ],
  },
  {
    title: "ML and backend engineering",
    description: "The pipeline and service layer behind inference, evaluation, and repeatable model delivery.",
    skills: [
      { name: "Python", level: 92 },
      { name: "Node.js", level: 86 },
      { name: "Scikit-learn / MLflow", level: 84 },
      { name: "FastAPI / REST APIs", level: 88 },
    ],
  },
  {
    title: "Platform and frontend delivery",
    description: "The infrastructure and product-facing layer that helps AI systems become usable, observable, and fast to ship.",
    points: [
      "Next.js, React, Open UI, SWR, and SSE dashboards for live platform visibility",
      "Docker, Kubernetes, AWS, CI/CD, GitHub Actions, PostgreSQL, and Redis",
      "Inference cost optimization, caching, observability, and system design",
      "Technical mentorship, sprint leadership, and developer productivity tooling",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <div className="section-intro fade-in-up">
          <div className="section-kicker">Stack</div>
          <h2 className="section-title">Technical strengths across LLM systems, ML pipelines, and platform delivery.</h2>
          <p className="section-copy">
            My profile is strongest where model behavior, backend services, product surfaces, and
            infrastructure quality all need to work together under real operational load.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="glass-panel fade-in-up rounded-[1.9rem] p-7"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                {group.title}
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300">{group.description}</p>

              {group.skills ? (
                <div className="mt-8 space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-100">{skill.name}</span>
                        <span className="text-sm text-brand-200">{skill.level}%</span>
                      </div>
                      <div className="skill-meter h-2.5">
                        <span style={{ width: `${skill.level}%` }}></span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="mt-8 space-y-4">
                  {group.points.map((point) => (
                    <li
                      key={point}
                      className="surface-card rounded-[1.25rem] border border-slate-800/70 px-4 py-4 text-sm leading-7 text-slate-300"
                    >
                      <span className="mr-3 inline-block h-2 w-2 rounded-full bg-accent-400"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
