import { Code2, Database, LayoutGrid as Layout, Server } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Frontend Development",
      items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      items: ["MongoDB", "Mongoose", "MongoDB Atlas", "Firebase"]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Languages & Tools",
      items: ["JavaScript", "C++", "Git", "VS Code"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently pursuing <span className="text-teal-400 font-semibold">B.Tech in Computer Science</span> at
              Maharishi Dayanand University (CGPA: 8.2), I have hands-on experience in developing full-stack applications
              that solve real-world problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have worked on projects like <span className="text-teal-400 font-semibold">e-commerce websites</span>,
              <span className="text-teal-400 font-semibold"> AI-powered platforms</span>, and
              <span className="text-teal-400 font-semibold"> hotel booking systems</span>. I focus on clean UI,
              performance optimization, and user-friendly design principles.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a <span className="text-teal-400 font-semibold">freelance developer</span>, I've successfully delivered
              responsive full-stack MERN applications for 3+ clients, implementing secure authentication systems,
              role-based dashboards, and RESTful APIs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am actively looking for <span className="text-teal-400 font-semibold">internship opportunities</span> to
              apply my skills in real-world scenarios and contribute to innovative projects.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-teal-400">Accenture iAspire Go for Gold 2025</h4>
                  <p className="text-gray-400">Achieved Gold Level recognizing excellence in continuous learning and performance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-teal-400">McKinsey Forward Learning Program 2025</h4>
                  <p className="text-gray-400">Completed program focused on leadership, critical thinking, and problem-solving</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-teal-400">Full-Stack Web Development Certification</h4>
                  <p className="text-gray-400">Coding Blocks - Comprehensive MERN stack training</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-2 border border-gray-700"
            >
              <div className="text-teal-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
              <div className="space-y-2">
                {skill.items.map((item, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
