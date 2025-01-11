import { FaLaptopCode, FaUsers, FaHandshake, FaLightbulb } from "react-icons/fa";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to BeTech</h1>
          <p className="text-xl mb-8">
            We empower businesses through technology, providing innovative solutions to help you grow.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mission & Vision</h2>
          <div className="md:flex md:space-x-16">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                At BeTech, our mission is to help businesses navigate the ever-changing tech landscape by providing
                innovative, customized solutions. We focus on delivering high-quality software, IT support, and digital
                marketing strategies that empower businesses to achieve their goals.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold text-blue-600 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our vision is to be the leading technology partner for businesses of all sizes. By staying ahead of
                industry trends and embracing innovation, we aim to foster long-term relationships and create value through
                impactful technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly strive to innovate and use the latest technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaUsers className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients and teams, ensuring effective communication and collaboration at every
                step.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaHandshake className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards and provide transparent, honest solutions to our clients.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaLightbulb className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Creativity</h3>
              <p className="text-gray-600">
                We foster a creative environment to think outside the box, crafting unique solutions that stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/images/home/user.png"
                alt="John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
              <p className="text-gray-600 mt-4">
                John leads BeTech with a passion for technology and innovation. He has over 15 years of experience in
                IT consulting and software development.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/images/home/user.png"
                alt="Jane Smith"
                className="w-32 h-32 rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-500">Chief Technology Officer</p>
              <p className="text-gray-600 mt-4">
                Jane is responsible for overseeing BeTech's technology strategy and ensuring that our solutions stay
                innovative and cutting-edge.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img
                src="/images/home/user.png"
                alt="Mike Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-500">Head of Marketing</p>
              <p className="text-gray-600 mt-4">
                Mike oversees BeTech’s marketing efforts, ensuring our message reaches the right audience with the right
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-xl mb-8">
            Let BeTech help you innovate and grow. Contact us today to discuss how we can work together!
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default page
