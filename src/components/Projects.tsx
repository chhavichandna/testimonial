import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "QuickStay - Hotel Booking Website",
      description: "A full-stack MERN web application for hotel browsing and booking with secure user authentication. Features responsive UI, RESTful APIs, and MongoDB Atlas integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "PrepWise - AI Mock Interview Platform",
      description: "An AI-powered mock interview platform using Next.js that simulates real interview scenarios with ChatGPT and Gemini APIs for dynamic questions and real-time feedback.",
      tech: ["Next.js", "React.js", "ChatGPT API", "Gemini API", "Clerk", "Firebase"],
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "CartLY - E-commerce Platform",
      description: "A comprehensive e-commerce platform enabling product browsing, cart management, and checkout workflows with authentication and responsive design.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Interactive Snake Game",
      description: "A classic snake game built with vanilla JavaScript featuring smooth animations, score tracking, and responsive controls for an engaging gaming experience.",
      tech: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
      image: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Rock Paper Scissors Game",
      description: "An interactive web-based game with clean UI, score tracking, and smooth animations built using modern JavaScript and responsive design principles.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      image: "https://images.pexels.com/photos/8111851/pexels-photo-8111851.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and achievements with smooth animations and intuitive navigation.",
      tech: ["React.js", "Tailwind CSS", "Vite"],
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-teal-500/50 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-teal-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
