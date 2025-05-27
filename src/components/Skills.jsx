import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "ReactJS", level: 90, icon: "⚛️" },
  { name: "Angular", level: 85, icon: "🅰️" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "TypeScript", level: 85, icon: "🔷" },
  { name: "JavaScript", level: 90, icon: "🟨" },
  { name: "HTML & CSS", level: 95, icon: "🎨" },
  { name: "Redux", level: 80, icon: "🔄" },
  { name: "Jest", level: 75, icon: "🧪" },
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            if (index !== undefined) {
              // Stagger the skill animations
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, parseInt(index)]));
              }, parseInt(index) * 150);
            }
            if (entry.target.classList.contains('skills-section')) {
              setSectionVisible(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each skill
    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="skills-section bg-slate-800 px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-4 text-white ${sectionVisible ? 'animate-title-reveal' : 'opacity-0'}`}>
          PROFESSIONAL
        </h2>
        <p className={`text-center text-gray-400 mb-16 ${sectionVisible ? 'animate-subtitle-reveal' : 'opacity-0'}`}>
          My knowledge level in software
        </p>
        
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              ref={el => skillRefs.current[index] = el}
              data-index={index}
              className={`skill-item ${visibleSkills.has(index) ? 'animate-skill-reveal' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Header */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">
                  <span className={`text-2xl ${visibleSkills.has(index) ? 'animate-icon-bounce' : ''}`}
                        style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                    {skill.icon}
                  </span>
                  <span className={`text-lg font-semibold text-white ${visibleSkills.has(index) ? 'animate-text-slide' : ''}`}
                        style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                    {skill.name}
                  </span>
                </div>
                <span className={`text-green-400 font-bold text-lg ${visibleSkills.has(index) ? 'animate-percentage-count' : ''}`}
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                  {visibleSkills.has(index) ? `${skill.level}%` : '0%'}
                </span>
              </div>
              
              {/* Skill Bar Container */}
              <div className="relative">
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden shadow-inner">
                  {/* Animated Skill Bar */}
                  <div 
                    className={`h-full rounded-full relative overflow-hidden ${visibleSkills.has(index) ? 'animate-skill-bar-fill' : 'w-0'}`}
                    style={{ 
                      background: `linear-gradient(90deg, #10b981, #059669, #34d399)`,
                      width: visibleSkills.has(index) ? `${skill.level}%` : '0%',
                      transition: 'width 1.5s ease-out',
                      transitionDelay: `${index * 0.1 + 0.4}s`
                    }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 to-green-600/50 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Skill Level Indicator */}
                <div 
                  className={`absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg ${visibleSkills.has(index) ? 'animate-indicator-slide' : 'opacity-0'}`}
                  style={{ 
                    left: `${skill.level}%`,
                    transform: 'translateX(-50%)',
                    animationDelay: `${index * 0.1 + 1.2}s`
                  }}
                ></div>
              </div>
              
              {/* Skill Description */}
              <div className={`mt-2 text-sm text-gray-400 ${visibleSkills.has(index) ? 'animate-description-fade' : 'opacity-0'}`}
                   style={{ animationDelay: `${index * 0.1 + 0.8}s` }}>
                {getSkillDescription(skill.name)}
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-green-400 rounded-full ${sectionVisible ? 'animate-float' : 'opacity-0'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getSkillDescription(skillName) {
  const descriptions = {
    "ReactJS": "Building dynamic user interfaces",
    "Angular": "Enterprise-scale applications",
    "Node.js": "Server-side JavaScript development",
    "TypeScript": "Type-safe JavaScript development",
    "JavaScript": "Core programming language",
    "HTML & CSS": "Frontend markup and styling",
    "Redux": "State management for React",
    "Jest": "Unit testing and test automation"
  };
  return descriptions[skillName] || "Professional expertise";
}
