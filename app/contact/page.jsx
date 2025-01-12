import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3C3E4F] text-white text-center pb-40 pt-60">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Get in Touch with Us</h1>
          <p className="text-xl mb-6">
            Have questions or need help? Reach out to us, and we&apos;ll be happy to assist.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Subject"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Phone */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaPhoneAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (216) 465-5346</p>
            </div>

            {/* Email */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaEnvelope className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@betechpro.com</p>
            </div>

            {/* Address */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                Cleveland, Ohio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">We&apos;d Love to Hear from You!</h2>
          <p className="text-lg mb-8">
            Whether you have a question, need assistance, or just want to give us feedback, feel free to reach out.
          </p>
          <a
            href="#"
            className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default page
