import React from "react";
import OurServices from "@/components/OurServices";
const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-[#3C3E4F] text-white flex flex-col-reverse md:flex-row items-center justify-center border-b border-b-slate-100 shadow-lg text-center md:pb-10 py-40 md:pt-20">
        <div className="container mx-auto px-4 md:w-3/5 text-left md:px-16">
          <h1 className="text-5xl font-bold mb-4 gradient gradient-title ">
            Transform Your Business with Our Services
          </h1>
          <p className="text-xl mb-8">
            We offer innovative and tailored solutions to meet the unique needs
            of your business.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 md:px-8 md:py-4 rounded-sm md:animate-bounce text-lg text-gray-800 border border-[#98ec07] bg-[#98ec07] hover:bg-[#3C3E4F] hover:text-slate-50 hover:border-[#3C3E4F]"
          >
            Get in Touch
          </a>
        </div>
        <div>
          <img
            src="/services_page_img_transparent.gif"
            alt="Animated GIF"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Services */}
      <OurServices />
    </div>
  );
};

export default page;
