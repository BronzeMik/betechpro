import { FaLaptopCode, FaCloud, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function OurServices() {
  const services = [
    {
      icon: <FaLaptopCode className="text-green-500 text-4xl mb-4" />,
      title: "Web Development",
      description:
        "Custom websites and web applications tailored to your business needs. Scalable, fast, and user-friendly.",
    },
    {
      icon: <FaCloud className="text-blue-500 text-4xl mb-4" />,
      title: "Cloud Solutions",
      description:
        "Modern cloud infrastructure to help your business grow. We provide setup, migration, and maintenance.",
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-4xl mb-4" />,
      title: "Cybersecurity",
      description:
        "Protect your business from cyber threats with our comprehensive security solutions.",
    },
    {
      icon: <FaHeadset className="text-yellow-500 text-4xl mb-4" />,
      title: "IT Support",
      description:
        "Reliable IT support to keep your business running smoothly. Available on-demand or via retainer.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md text-center transition-all duration-300 transform hover:shadow-2xl hover:scale-105"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
