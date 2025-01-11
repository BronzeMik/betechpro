export default function WhyChooseUs() {
    const reasons = [
      {
        title: "Cost-Effective Solutions",
        description:
          "Get high-quality IT services without breaking the bank. We offer competitive pricing and tailored packages.",
      },
      {
        title: "Quick Turnaround Time",
        description:
          "We prioritize speed and efficiency without compromising on quality, ensuring your business stays ahead.",
      },
      {
        title: "Scalable IT Services",
        description:
          "Our solutions grow with your business, giving you the flexibility to adapt as your needs evolve.",
      },
      {
        title: "Customer-Centric Approach",
        description:
          "We put your business first by offering personalized support and ensuring complete client satisfaction.",
      },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose BeTech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full text-xl font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  