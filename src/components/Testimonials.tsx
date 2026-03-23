import { Star, Linkedin, Phone } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Shray Arora",
      role: "Founder & CEO",
      company: "Helium",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFQZJDSB8DzXw/feedshare-shrink_800/B56Zb300tqHoAo-/0/1747914545348?e=1775692800&v=beta&t=_epcFPMb9gYsBs4zhZRou8HYKy_xLsf78udfxatg_T8",
      rating: 5,
      
      testimonial: "Chhavi is an excellent developer with strong attention to detail. She delivered high-quality work with a smooth user experience and maintained great communication throughout the process. Highly recommended!",
      linkedin: "https://www.linkedin.com/in/shrayarora/",
      phone: "+91 8076093907"
    },
    {
      name: "Soumya Grover",
      role: "Social Media Marketer",
      company: "ARISE- Association of Rising and Inspiring Syndicate of Entrepreneurs",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEq0D6dywb1kQ/profile-displayphoto-shrink_800_800/B56Zbf1a59H0Ag-/0/1747512046914?e=1775692800&v=beta&t=FMSKHSxyN-uv8YbHz8Go6TozmWxk5upK5aGz9pRGxKQ",
      rating: 5,
      
      testimonial: "Working with Chhavi was a great experience. She is skilled, professional, and delivers clean, efficient solutions. Her ability to understand requirements and execute them perfectly is impressive.",
      linkedin: "https://www.linkedin.com/in/soumya-grover/",
      phone: "+91 9643002011 "
    },
    {
      name: "Manan ",
      role: "Head of Business & Strategic Initiatives ",
      company: "BukuWarung",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQHn0g1E71OtyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1594099033185?e=1775692800&v=beta&t=4K3y84pcQbHW3FQ4WyJEEOGKVKDwISzDSuL_sztQEBM",
      rating: 5,
      
      testimonial: "Chhavi is a highly reliable developer who consistently delivers quality work. She is proactive, detail-oriented, and ensures everything runs smoothly. Would definitely work with her again.",
      linkedin: "https://www.linkedin.com/in/manan-arora/",
      phone: "+91 9999643904"
    },
    {
      name: "Latika Arora",
      role: "Motion Graphic Designer",
      company: "Empliance Technologies ",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHSKn977pP6kQ/profile-displayphoto-shrink_800_800/B56ZSR2sAEHQAk-/0/1737613822018?e=1775692800&v=beta&t=fzgi1m3ubHR2X-vVt-BKLt088-IWBVqvs_j_gOLEkVk",
      rating: 5,
      
      testimonial: "Chhavi created an amazing website experience. She is creative, responsive, and very easy to work with. Her professionalism and dedication truly stand out.",
      linkedin: "https://www.linkedin.com/in/latikaaroraa/",
      phone: "+91 8860029754"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 mx-auto mb-4 bg-teal-500"></div>
          <p className="text-lg text-gray-400">
            Here's what my clients say about working with me
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            
            <div
              key={index}
              className="p-10 transition-all duration-300 bg-gray-900 border border-gray-700 shadow-xl rounded-2xl hover:shadow-2xl hover:border-teal-500/50"
            >
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">

                {/* IMAGE */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover border-4 border-teal-500 rounded-full w-28 h-28 md:w-32 md:h-32"
                />

                {/* CONTENT */}
                <div className="flex-1 text-center md:text-left">

                  <h3 className="text-2xl font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="font-medium text-teal-400">
                    {testimonial.role}
                  </p>
                  <p className="mb-3 text-sm text-gray-400">
                    {testimonial.company}
                  </p>

                  {/* STARS */}
                  <div className="flex justify-center gap-1 mb-3 md:justify-start">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="mb-2 text-sm font-semibold text-teal-400">
                    Project: {testimonial.project}
                  </p>

                  <p className="mb-4 italic leading-relaxed text-gray-300">
                    "{testimonial.testimonial}"
                  </p>

                  {/* LINKS */}
                  <div className="flex justify-center gap-6 pt-2 border-t border-gray-700 md:justify-start">
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>

                    <a
                      href={`tel:${testimonial.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-teal-400"
                    >
                      <Phone size={16} />
                      {testimonial.phone}
                    </a>
                  </div>

                </div>
              </div>
            </div>

          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block p-8 bg-gray-900 border border-gray-700 rounded-xl">
            <p className="mb-4 text-lg text-gray-300">
              Interested in working together?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 font-semibold text-white transition-all transform bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 hover:scale-105 hover:shadow-teal-500/50"
            >
              Get In Touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}