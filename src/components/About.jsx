import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-slate-800 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">ABOUT ME</h2>
        <p className="text-center text-gray-400 mb-16">Get to know me better</p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-slate-700 rounded-full border-4 border-green-500 flex items-center justify-center">
              <span className="text-6xl text-green-500 font-bold">A</span>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a <span className="text-green-400 font-semibold">Senior Software Developer</span> with 4+ years of experience 
                specializing in frontend development and full-stack solutions. Currently working at Anchanto, 
                I've successfully upgraded legacy systems, implemented modern architectures, and delivered 
                scalable solutions that serve hundreds of users.
              </p>
              
              <p>
                My expertise lies in <span className="text-green-400 font-semibold">ReactJS, Angular, TypeScript, and Node.js</span>, 
                with a strong background in performance optimization and user experience enhancement. 
                I've reduced build times by 95%, improved Lighthouse scores to 95+, and consistently 
                delivered features that reduce support tickets and increase user satisfaction.
              </p>
              
              <p>
                <span className="text-green-400 font-semibold">What drives me:</span> I believe in writing clean, 
                maintainable code and creating solutions that make a real impact. Whether it's automating 
                processes, optimizing performance, or building intuitive user interfaces, I'm passionate 
                about leveraging technology to solve complex problems.
              </p>
            </div>
            
            {/* Key Strengths */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Team Leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Performance Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Code Quality</span>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-sm text-gray-400">Users Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-sm text-gray-400">Performance Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 