"use client"

import Image from "next/image";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Optional if using shadcn

export default function Hero() {
  const imageRef = useRef()

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 0;

            if(scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            }else {
                imageElement.classList.remove("scrolled");
            }
        };

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
  return (
    <section className="relative bg-gradient-to-b from-gray-800 to-[#3C3E4F] text-white pt-52 pb-40">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center mt-20">
        {/* Left Content */}
        <div className="md:w-full text-center md:text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 gradient gradient-title uppercase">
            Empower Your Business with Smart IT Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            BeTech offers reliable IT services, from web development to cloud
            solutions, designed to help your business grow and thrive in the
            digital age.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="default"
              className="px-6 py-3 md:px-12 md:py-7 md:animate-bounce text-lg text-gray-800 border border-[#98ec07] bg-[#98ec07] hover:bg-[#3C3E4F] hover:text-slate-50 hover:border-[#3C3E4F]"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 md:px-12 md:py-7 text-lg text-gray-900 border border-[#3C3E4F] hover:bg-[#3C3E4F] hover:text-white hover:border-[#3C3E4F]"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image mb-16 md:mb-0">
            <Image
              src="/images/home/hero-img.svg"
              alt="IT Solutions"
              width={800}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Background Accent */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-400/10 to-blue-900/10 pointer-events-none" /> */}
    </section>
  );
}
