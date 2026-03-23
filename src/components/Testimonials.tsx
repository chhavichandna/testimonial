import { Star, Linkedin, Phone } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      company: "TechVentures India",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      project: "E-commerce Platform Development",
      testimonial: "Chhavi delivered an excellent e-commerce website with smooth UI and fast performance. Her communication and attention to detail were outstanding. The project was completed ahead of schedule with all features working flawlessly.",
      linkedin: "https://.com/in/example",
      phone: "+91 98765 43210"
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      company: "Digital Solutions Hub",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      project: "Hotel Booking System",
      testimonial: "Working with Chhavi was a fantastic experience. She built our hotel booking platform using the MERN stack with secure authentication and responsive design. Her expertise in React and Node.js really shows in the final product.",
      linkedin: "https://linkedin.com/in/example",
      phone: "+91 98123 45678"
    },
    {
      name: "Amit Patel",
      role: "Startup Owner",
      company: "InnovateTech",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      project: "AI Mock Interview Platform",
      testimonial: "Chhavi's work on our AI-powered interview platform exceeded expectations. She seamlessly integrated ChatGPT and Gemini APIs, implemented secure authentication, and created an intuitive user interface. Highly professional and skilled developer!",
      linkedin: "https://linkedin.com/in/example",
      phone: "+91 99887 76655"
    },
    {
      name: "Sneha Reddy",
      role: "Business Development Manager",
      company: "WebCraft Studios",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      project: "Portfolio Website & Branding",
      testimonial: "Chhavi created a stunning portfolio website for our agency. Her understanding of modern design principles and full-stack capabilities made the entire process smooth. She's responsive, professional, and delivers high-quality work consistently.",
      linkedin: "https://linkedin.com/in/example",
      phone: "+91 97654 32109"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here's what my clients say about working with me on their projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-teal-500/50"
            >
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-teal-500"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                  <p className="text-teal-400 font-medium mb-1">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="mb-6">
                <p className="text-sm text-teal-400 font-semibold mb-2">Project: {testimonial.project}</p>
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`tel:${testimonial.phone}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>{testimonial.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gray-900 rounded-xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg mb-4">
              Interested in working together?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/50"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
