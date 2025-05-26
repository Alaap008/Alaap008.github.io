import React, { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "April 2024 – Present",
    company: "Anchanto",
    position: "Senior Software Developer (UI)",
    location: "Pune, India",
    achievements: [
      "Upgraded Angular codebase from v9 to v14, modularized SCSS, and introduced reusable components; reduced build time by 95% (from 45 mins to 2 mins).",
      "Implemented role-based access control for 500+ users, improving audit traceability and aligning with GDPR compliance.",
      "Added Jest unit tests and configured CI/CD pipelines with AWS Amplify and Linter; decreased deployment issues by 40%.",
      "Identified and resolved bottlenecks using Chrome DevTools, improving Lighthouse scores to 95+ and reducing load times.",
      "Automated shipment dispatches using Node.js + BullMQ, scheduling jobs every 15 minutes with 3 retry attempts; enhanced reliability and cut support tickets.",
      "Contributed to internal dev tooling and rapid architectural testing across multiple product teams."
    ]
  },
  {
    period: "May 2021 – April 2024",
    company: "Anchanto",
    position: "Software Developer (UI)",
    location: "Pune, India",
    achievements: [
      "Created picker and packer features in the mobile app, increasing processing speed by 30% for 100+ warehouse users.",
      "Developed an Approval Module for price and promotion changes, cutting manual review time by 60%.",
      "Rewritten Catalogue Listing Module with dynamic validation, reducing ZenDesk tickets by 73%.",
      "Built a bulk image update tool for 500+ SKUs using background processing, saving users over 4 hours/week.",
      "Enabled RTL localization through Crowdin and deployed Arabic support for MENA market rollout."
    ]
  }
];

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            if (index !== undefined) {
              setVisibleItems(prev => new Set([...prev, parseInt(index)]));
            }
            if (entry.target.classList.contains('timeline-container')) {
              setTimelineVisible(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe timeline container
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    // Observe each timeline item
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-white animate-fade-in">EXPERIENCE</h2>
        <p className="text-center text-gray-400 mb-16 animate-fade-in-delay">My professional journey</p>
        
        <div 
          ref={timelineRef}
          className="timeline-container relative"
          data-timeline-visible={timelineVisible}
        >
          {/* Animated Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-green-500 timeline-line ${timelineVisible ? 'animate-timeline-grow' : ''}`}></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-1/2 timeline-item ${visibleItems.has(index) ? 'animate-slide-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Animated Timeline Dot */}
              <div className={`absolute left-6 md:left-auto md:right-auto w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900 z-10 timeline-dot
                              md:transform md:translate-x-1/2 md:right-1/2 ${visibleItems.has(index) ? 'animate-dot-pop' : 'scale-0'}`}
                   style={{ animationDelay: `${index * 0.3 + 0.2}s` }}>
              </div>
              
              {/* Animated Experience Card */}
              <div className={`ml-16 md:ml-0 bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 hover:border-green-500 transition-all duration-500 timeline-card hover:transform hover:scale-105 ${visibleItems.has(index) ? 'animate-card-slide' : ''}`}
                   style={{ animationDelay: `${index * 0.3 + 0.4}s` }}>
                
                {/* Animated Period Badge */}
                <div className={`inline-block bg-green-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 transform transition-all duration-300 ${visibleItems.has(index) ? 'animate-badge-bounce' : ''}`}
                     style={{ animationDelay: `${index * 0.3 + 0.6}s` }}>
                  {exp.period}
                </div>
                
                {/* Company & Position with staggered animation */}
                <h3 className={`text-xl font-bold text-white mb-1 ${visibleItems.has(index) ? 'animate-text-reveal' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.3 + 0.8}s` }}>
                  {exp.company}
                </h3>
                <h4 className={`text-lg text-green-400 mb-1 ${visibleItems.has(index) ? 'animate-text-reveal' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.3 + 1.0}s` }}>
                  {exp.position}
                </h4>
                <p className={`text-gray-400 text-sm mb-4 ${visibleItems.has(index) ? 'animate-text-reveal' : 'opacity-0'}`}
                   style={{ animationDelay: `${index * 0.3 + 1.2}s` }}>
                  {exp.location}
                </p>
                
                {/* Achievements with staggered reveal */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} 
                        className={`flex items-start text-gray-300 text-sm leading-relaxed ${visibleItems.has(index) ? 'animate-achievement-slide' : 'opacity-0 translate-x-4'}`}
                        style={{ animationDelay: `${index * 0.3 + 1.4 + achIndex * 0.1}s` }}>
                      <span className="text-green-500 mr-3 mt-1 flex-shrink-0 animate-pulse">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          {/* Animated Timeline End Dot */}
          <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 z-10 ${timelineVisible ? 'animate-final-dot' : 'scale-0'}`}
               style={{ animationDelay: '2s' }}>
          </div>
        </div>
      </div>
    </section>
  );
}
