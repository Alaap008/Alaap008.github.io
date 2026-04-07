import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const contactMethods = [
    {
      label: "Email",
      value: "alaapbanerjee08@gmail.com",
      href: "mailto:alaapbanerjee08@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 8617471399",
      href: "tel:+918617471399",
    },
    {
      label: "Location",
      value: "Pune, India",
      href: null,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("Thanks for reaching out. I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(""), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="section-inner">
        <div className="section-intro fade-in-up">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Let&apos;s talk about AI platform engineering, LLM systems, or ML infrastructure roles.</h2>
          <p className="section-copy">
            I am most interested in roles involving LLM platforms, retrieval systems, decision automation,
            ML pipelines, inference optimization, and technical leadership for AI products.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="glass-panel fade-in-up rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Reach out</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Start with a role, platform challenge, or AI system idea.</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                If you are hiring for AI platform engineering, LLM infrastructure, ML systems, or technical leadership around intelligent automation, I would love to connect.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((item, index) => (
                <div
                  key={item.label}
                  className="surface-card lift-card fade-in-up rounded-[1.5rem] p-5"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-3 block text-lg font-medium text-white transition hover:text-brand-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-lg font-medium text-white">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="glass-panel fade-in-up rounded-[1.7rem] p-6" style={{ animationDelay: "240ms" }}>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Profiles</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/alaap-banerjee-818201144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/alaap008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="glass-panel fade-in-up rounded-[2rem] p-8" style={{ animationDelay: "120ms" }}>
            <h3 className="text-2xl font-semibold text-white">Send a message</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              A quick intro, hiring note, or technical context is enough to get started.
            </p>

            {submitStatus && (
              <div
                className="mt-6 rounded-[1.25rem] border border-accent-500/30 bg-accent-500/10 p-4 text-sm text-accent-400"
                aria-live="polite"
              >
                {submitStatus}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[1rem] border border-slate-700 bg-slate-950/65 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-brand-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[1rem] border border-slate-700 bg-slate-950/65 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-brand-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-[1rem] border border-slate-700 bg-slate-950/65 px-4 py-3 text-white transition placeholder:text-slate-500 focus:border-brand-400"
                  placeholder="Tell me about the role, team, or system you are building."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
