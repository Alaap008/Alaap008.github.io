import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Sahitya",
    subtitle: "A Github for Authors",
    description: "A collaborative writing platform for authors, essentially a GitHub for writing projects. Features version control for manuscripts, collaborative editing, and project management tools to help authors overcome writer's block and work together seamlessly.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    features: [
      "Real-time collaborative editing",
      "Version control for manuscripts",
      "Project management dashboard",
      "Author collaboration tools"
    ],
    githubLink: "https://github.com/alaap008/sahitya",
    liveLink: "https://sahitya-demo.netlify.app",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Bulk Image Tool",
    subtitle: "Automated Image Processing",
    description: "A powerful tool for bulk image updates and processing for e-commerce platforms. Handles 500+ SKUs with background processing, saving users over 4 hours per week. Features automated resizing, format conversion, and batch operations.",
    technologies: ["Angular", "Node.js", "AWS S3", "BullMQ", "Sharp"],
    features: [
      "Bulk image processing for 500+ SKUs",
      "Background job processing",
      "Automated resizing and optimization",
      "Progress tracking and notifications"
    ],
    githubLink: "https://github.com/alaap008/bulk-image-tool",
    liveLink: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Catalogue Listing Module",
    subtitle: "Dynamic E-commerce Solution",
    description: "Rewritten catalogue listing module with dynamic validation and enhanced user experience. Reduced ZenDesk support tickets by 73% through improved UX and robust error handling. Features advanced filtering, search, and real-time updates.",
    technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS"],
    features: [
      "Dynamic form validation",
      "Advanced filtering and search",
      "Real-time data updates",
      "73% reduction in support tickets"
    ],
    githubLink: "https://github.com/alaap008/catalogue-module",
    liveLink: "#",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Approval Module",
    subtitle: "Workflow Management System",
    description: "Comprehensive approval workflow system for price and promotion changes. Streamlined the review process, cutting manual review time by 60%. Features role-based permissions, automated notifications, and audit trails.",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "JWT"],
    features: [
      "Role-based approval workflows",
      "60% reduction in review time",
      "Automated notifications",
      "Complete audit trail"
    ],
    githubLink: "https://github.com/alaap008/approval-module",
    liveLink: "#",
    image: "/api/placeholder/400/250"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="bg-slate-700 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">MY PROJECTS</h2>
        <p className="text-center text-gray-400 mb-4">Every project that I work on is a milestone to learning a new technology.</p>
        <p className="text-center text-green-400 mb-16 italic">Building solutions that make a difference</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-green-500"
            >
              {/* Project Image */}
              <div className="h-48 bg-slate-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">PROJECT {String(index + 1).padStart(2, '0')}</div>
                    <div className="text-green-400 font-semibold">{project.title}</div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-green-400 text-sm font-semibold mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700 text-green-400 text-xs rounded-full border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-600 transition-colors duration-300 text-center border border-slate-600 hover:border-green-500"
                  >
                    View Code
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors duration-300 text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 border border-green-500 text-green-500 rounded-lg text-sm font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <p className="text-green-400 font-semibold">{selectedProject.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700 text-green-400 rounded-full border border-green-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors duration-300 text-center"
                  >
                    View on GitHub
                  </a>
                  {selectedProject.liveLink !== "#" && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 text-center"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
