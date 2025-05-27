import React from "react";

export default function ResumeCard() {
  return (
    <section id="resume" className="bg-slate-900 p-10 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block border border-green-500 p-6 rounded-full mb-8 bg-slate-800">
          <span className="text-green-500 font-bold text-4xl">A</span>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-6">RESUME</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">4+</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-300">Users Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300">Performance Improvement</div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          Senior Frontend Developer with 4+ years of experience specializing in ReactJS, Angular, TypeScript, and Node.js. 
          Proven track record of optimizing performance, reducing build times by 95%, and delivering scalable solutions 
          that serve hundreds of users. Expert in modern web technologies, CI/CD pipelines, and agile development practices.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8 text-left max-w-2xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Core Expertise</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Frontend Development (React, Angular)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Full-Stack Development (Node.js)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Performance Optimization
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                CI/CD & DevOps
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                95% build time reduction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                73% support ticket reduction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                500+ users system implementation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                GDPR compliance implementation
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume-alaap-banerjee.pdf"
            download="Alaap_Banerjee_Resume.pdf"
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="mt-8 text-sm text-gray-400">
          <p>📍 Pune, India • 📧 alaapbanerjee08@gmail.com • 📱 +91 8617471399</p>
        </div>
      </div>
    </section>
  );
}
