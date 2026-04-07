import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "BRMS Extension App",
    subtitle: "Browser Runtime MCP Server for Cursor via Chrome Extension, native messaging, and Node.js",
    summary:
      "A full-stack developer tool that exposes live browser state to AI coding agents through the Model Context Protocol, with sub-second tool calls across a multi-hop transport pipeline.",
    impact: "A standout AI platform project combining browser runtime access, agent tooling, concurrency, and protocol-level reliability.",
    description:
      "BRMS bridges Chrome runtime data to AI coding agents using a 3-tier architecture: a Manifest V3 extension, Native Messaging IPC, a Node.js HTTP server, and Cursor AI. It was built to make DOM state, network activity, console output, styles, and screenshots directly queryable by agent workflows without relying on brittle manual debugging loops.",
    technologies: ["TypeScript", "MCP", "Chrome MV3", "Node.js", "Native Messaging", "Cursor"],
    features: [
      "Implemented 15 MCP tools for DOM inspection, network capture, computed style analysis, layout diagnostics, screenshots, and event listener introspection.",
      "Built a per-session MCP transport architecture so concurrent Cursor connections could reconnect cleanly without already-initialized errors.",
      "Solved Chrome Native Messaging protocol constraints by routing logs to stderr and reserving stdout for binary-framed messages.",
      "Added optional host permissions and dynamic content-script registration to avoid the broad <all_urls> permission flag.",
      "Shipped exponential-backoff reconnect logic with permanent-error detection in the extension background worker.",
      "Published separate Chrome Web Store and npm packages with a shared protocol layer.",
    ],
    githubLink: "https://github.com/Alaap008/golliath",
    liveLink: "https://chromewebstore.google.com/detail/edlcafocggpoghlcjcpnpmciceiclikk?utm_source=item-share-cp",
    outcome: "Proves hands-on experience building AI-adjacent platform tooling, not just AI-powered UI features.",
  },
  {
    id: 2,
    title: "OpenEnv Customer Service Agent",
    subtitle: "LLM evaluation environment for multi-step customer support reasoning",
    summary:
      "A production-style simulation environment for training and evaluating LLM agents on realistic support workflows such as refunds, fraud checks, escalations, and customer communication.",
    impact: "Strong evidence of AI systems thinking across evaluation, reward design, infra constraints, and end-to-end deployment.",
    description:
      "OpenEnv was built as a realistic customer-support benchmark and execution environment. It includes a FastAPI server, deterministic graders, reward shaping, strict evaluator-compatible logging, and a Dockerized deployment on Hugging Face Spaces to validate multi-step agent behavior under real runtime constraints.",
    technologies: ["Python", "FastAPI", "OpenAI API", "Docker", "Hugging Face Spaces", "Pytest"],
    features: [
      "Implemented the full OpenEnv interface with typed Action, Observation, Reward, and Info models plus /step, /reset, /state, /tasks, and /grader endpoints.",
      "Designed three graded task tiers with deterministic reward shaping to evaluate agent performance across increasing reasoning complexity.",
      "Built a root-level inference pipeline with environment-driven config and strict structured logging for evaluator compatibility.",
      "Handled malformed model actions, normalized scores, and evaluator edge cases so all task scores remain safely within the required range.",
      "Wrote and maintained 55 automated tests covering task flows, API behavior, session isolation, grading, and regressions.",
      "Deployed the environment with Docker and validated it end to end with real LLM calls on Hugging Face Spaces.",
    ],
    githubLink: "https://github.com/Alaap008/selene",
    liveLink: "https://huggingface.co/spaces/alaap08/openenv-support-agent",
    outcome: "Shows practical AI/ML platform instincts: evaluation, repeatability, deployment, and operational correctness.",
  },
  {
    id: 3,
    title: "Karz",
    subtitle: "Product system with payments, reminders, and trust-aware financial workflows",
    summary:
      "A peer-to-peer lending product that paired user-facing simplicity with operational flows around payments, ranking, and repayment behavior.",
    impact: "A strong early example of product UX meeting workflow design and backend coordination.",
    description:
      "Karz is a peer-to-peer loan application built with React, Node.js, and MySQL. It uses Stripe for payment processing, ranks users based on CIBIL score, and supports repayment reminders to reduce missed actions and build user trust.",
    technologies: ["React", "Node.js", "MySQL", "Stripe", "Messaging"],
    features: [
      "P2P loan processing with Stripe integration",
      "CIBIL score-based user ranking",
      "SMS notifications for repayment",
      "Secure payment processing",
    ],
    githubLink: "#",
    liveLink: "#",
    outcome: "Showed how interface polish and system logic can reinforce trust together.",
  },
  {
    id: 4,
    title: "Shopify Marketplace Connector",
    subtitle: "Production integration surface between Shopify and Anchanto OMS",
    summary:
      "A production-ready embedded app for syncing orders, auth, and webhook-driven updates between Shopify stores and Anchanto systems.",
    impact: "Closest to platform engineering: auth, event handling, deployment, and system boundaries.",
    description:
      "This connector was built with Remix and TypeScript to bridge Shopify stores with Anchanto's order management platform. It handled OAuth, HMAC verification, scope management, real-time webhook processing, and deployment concerns in a production environment.",
    technologies: ["Remix", "TypeScript", "Prisma", "Docker", "AWS EC2", "Shopify APIs"],
    features: [
      "Secure credential exchange with HMAC authentication",
      "Dynamic Shopify API scope management",
      "Real-time webhook processing for order updates",
      "Comprehensive logging system with Winston",
      "Containerized deployment with Docker",
      "Embedded Shopify app architecture",
    ],
    githubLink: "#",
    liveLink: "#",
    outcome: "Brought multiple systems together in a way that felt operationally stable and product-aware.",
  },
  {
    id: 5,
    title: "Netflix GPT",
    subtitle: "AI-assisted recommendation interface for conversational content discovery",
    summary:
      "A streaming-style interface that uses GPT-powered suggestions to turn open-ended user prompts into more relevant content discovery.",
    impact: "Represents the bridge between polished UI work and practical AI feature experimentation.",
    description:
      "Netflix GPT is an AI-assisted movie recommendation experience that pairs a streaming-inspired interface with prompt-based discovery. It combines authentication, tailored suggestions, and a familiar browsing flow into a more conversational product experience.",
    technologies: ["React", "Node.js", "OpenAI", "Firebase", "Tailwind CSS"],
    features: [
      "AI-powered movie recommendations",
      "User authentication and profiles",
      "Personalized content filtering",
      "Modern streaming interface",
    ],
    githubLink: "#",
    liveLink: "#",
    outcome: "Explored how AI utility can feel intuitive when wrapped in a strong interface model.",
  },
  {
    id: 6,
    title: "Sahitya",
    subtitle: "Collaborative writing workspace inspired by versioned, multi-user teamwork",
    summary:
      "A writing collaboration platform centered on versioning, manuscript workflows, and co-author coordination.",
    impact: "A systems-thinking project about collaboration states, shared context, and human workflow.",
    description:
      "Sahitya rethinks writing collaboration with version-aware manuscripts, real-time editing, and project management features that support co-authors working on long-form creative projects.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    features: [
      "Real-time collaborative editing",
      "Version control for manuscripts",
      "Project management dashboard",
      "Author collaboration tools",
    ],
    githubLink: "#",
    liveLink: "#",
    outcome: "Extended software workflow thinking into a different creative domain.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="section-shell">
      <div className="section-inner">
        <div className="section-intro fade-in-up">
          <div className="section-kicker">Selected systems</div>
          <h2 className="section-title">Projects aligned with AI platform engineering, agent tooling, and intelligent automation.</h2>
          <p className="section-copy">
            These projects emphasize MCP tooling, LLM evaluation environments, and system design work
            that maps directly to the AI platform story in my resume.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="glass-panel lift-card fade-in-up flex h-full flex-col rounded-[2rem] p-6 sm:p-7"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="project-stage px-6 py-8">
                <div className="relative z-10">
                  <div className="project-chip">
                    System {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-6 max-w-sm text-3xl font-semibold tracking-[-0.04em] text-white">
                    {project.title}
                  </div>
                  <div className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                    {project.impact}
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="mesh-line"></div>
                    <div className="grid max-w-sm grid-cols-2 gap-3">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <div key={tech} className="depth-card rounded-2xl px-3 py-3">
                          <div className="relative z-10 text-xs font-medium uppercase tracking-[0.14em] text-slate-300">
                            {tech}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="mt-6">
                  <div className="text-sm uppercase tracking-[0.18em] text-brand-200">
                    {project.subtitle}
                  </div>
                  <p className="mt-4 text-base leading-8 text-slate-300">{project.summary}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="pill text-sm">
                      <span className="h-2 w-2 rounded-full bg-brand-300"></span>
                        {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-slate-800/70 bg-slate-950/55 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Why it matters</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.outcome}</p>
                </div>

                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Selected features</p>
                  <ul className="mt-4 space-y-3">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start text-sm leading-7 text-slate-300">
                        <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-accent-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex gap-3 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-secondary w-full"
                  >
                    View case details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedProject && (
          <div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
          >
            <div className="glass-panel max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-brand-200">
                    Featured project
                  </p>
                  <h3 id="project-dialog-title" className="mt-3 text-3xl font-semibold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-xl text-slate-300 transition hover:border-brand-400/35 hover:text-white"
                  aria-label="Close project details"
                >
                  x
                </button>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <div className="surface-card rounded-[1.5rem] p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Project angle</p>
                    <p className="mt-3 text-base leading-8 text-slate-300">
                      {selectedProject.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {selectedProject.outcome}
                    </p>
                  </div>

                  <div className="surface-card rounded-[1.5rem] p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Key features</p>
                    <ul className="mt-4 space-y-3">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm leading-7 text-slate-300">
                          <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-brand-300"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="surface-card rounded-[1.5rem] p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="surface-card rounded-[1.5rem] p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Project links</p>
                    <div className="mt-4 grid gap-3">
                      {selectedProject.githubLink !== "#" ? (
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary w-full"
                        >
                          View repository
                        </a>
                      ) : (
                        <div className="rounded-full border border-dashed border-slate-700 px-5 py-3 text-center text-sm text-slate-500">
                          Repository not public
                        </div>
                      )}

                      {selectedProject.liveLink !== "#" ? (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full"
                        >
                          Open live experience
                        </a>
                      ) : (
                        <div className="rounded-full border border-dashed border-slate-700 px-5 py-3 text-center text-sm text-slate-500">
                          Live demo not available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn-secondary mt-8 w-full sm:hidden"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
