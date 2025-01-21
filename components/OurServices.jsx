import { FaDesktop, FaMobileAlt, FaPaintBrush, FaCloud, FaSearch, FaHeadset } from 'react-icons/fa';

export default function OurServices() {
    const services = [
        {
          title: "Web Development",
          description:
            "We build custom websites tailored to your needs, using the latest technologies to ensure performance and scalability.",
          icon: <FaDesktop className="text-4xl text-blue-600" />,
        },
        {
          title: "Mobile App Development",
          description:
            "Our team develops native and cross-platform mobile apps for Android and iOS to engage your audience on the go.",
          icon: <FaMobileAlt className="text-4xl text-blue-600" />,
        },
        {
          title: "Branding & Design",
          description:
            "We create memorable brands with unique logos, visual identities, and designs that resonate with your audience.",
          icon: <FaPaintBrush className="text-4xl text-blue-600" />,
        },
        {
          title: "Cloud Solutions",
          description:
            "We provide cloud services for better scalability, security, and cost savings to help your business grow.",
          icon: <FaCloud className="text-4xl text-blue-600" />,
        },
        {
          title: "SEO & Digital Marketing",
          description:
            "We improve your search engine ranking and implement targeted marketing strategies to increase your visibility online.",
          icon: <FaSearch className="text-4xl text-blue-600" />,
        },
        {
          title: "IT Support & Consulting",
          description:
            "We offer reliable IT support and consulting services to optimize your systems and ensure smooth operations.",
          icon: <FaHeadset className="text-4xl text-blue-600" />,
        },
      ];
  
    return (
  
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md text-center transition-all duration-300 transform hover:shadow-2xl hover:scale-105"
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <div className="text-center">
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  