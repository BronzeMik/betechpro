export default function Testimonials() {
    const testimonials = [
      {
        name: "Sarah Johnson",
        position: "CEO, Startup Inc.",
        feedback:
          "BeTech transformed our website and provided excellent IT support. Their team was professional, efficient, and a pleasure to work with.",
        image: "/images/home/user.png",
      },
      {
        name: "Michael Lee",
        position: "Founder, Nonprofit Org",
        feedback:
          "Thanks to BeTech, our cloud infrastructure is faster and more reliable than ever. Highly recommend their services!",
        image: "/images/home/user.png",
      },
      {
        name: "Emily Davis",
        position: "Freelance Designer",
        feedback:
          "I needed a custom website and BeTech delivered beyond my expectations. Their attention to detail is incredible.",
        image: "/images/home/user.png",
      },
    ];
  
    return (
      <section className="py-20 bg-[#fefefe] relative bg-cover bg-center ">
        <div className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{backgroundImage: `url('/why-choose-us-bg-2.svg')`}}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-[#3C3E4F]">{testimonial.name}</h4>
                    <p className="text-[gray-500]">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  