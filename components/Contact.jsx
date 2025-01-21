"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <section className="py-20 relative bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: `url('/contact-us.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-[0.70] rounded-lg"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-2/3 md:px-3">
          <h2 className="text-5xl md:text-6xl font-bold text-center md:text-left gradient gradient-title mb-0">Get in Touch!</h2>
          <p className="text-white mb-12 mt-2 text-center md:text-left">
          We&apos;re here to help you with all your IT needs! Whether you have questions about our managed services, need technical support, or want to explore how BeTech can optimize your business with cutting-edge IT solutions, we&apos;d love to hear from you. Simply fill out the form below, and our team of experts will get back to you promptly. At BeTech, we&apos;re committed to delivering reliable, tailored solutions to support your business goals. Let&apos;s connect and take your technology to the next level!
          </p>

        </div>
        <div className="w-full md:w-[80%] rounded-lg shadow-lg relative z-10 p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
