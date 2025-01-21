import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    servicesNeeded: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-full mx-auto  shadow-lg rounded-lg p-8 mt-10 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Get a Free Consultation
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Please fill out the form below and we will get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your company name"
            required
          />
        </div>

        {/* Contact Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Contact Name
          </label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Services Needed */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Services Needed
          </label>
          <select
            name="servicesNeeded"
            value={formData.servicesNeeded}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select a service</option>
            <option value="network_security">Network Security</option>
            <option value="cloud_solutions">Cloud Solutions</option>
            <option value="data_backup">Data Backup & Recovery</option>
            <option value="it_support">IT Support & Help Desk</option>
            <option value="other">Other</option>
          </select>
        </div>

        

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Additional Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Describe your needs in detail"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#3C3E4F] text-white p-3 rounded-lg font-medium hover:bg-[#7dae29] transition duration-300"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
