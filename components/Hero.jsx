import Image from 'next/image';
import { Button } from "@/components/ui/button"; // Optional if using shadcn

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Empower Your Business with Smart IT Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            BeTech offers reliable IT services, from web development to cloud solutions, 
            designed to help your business grow and thrive in the digital age.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button variant="default" className="px-6 py-3 text-lg border border-green-600 bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
            <Button variant="outline" className="px-6 py-3 text-lg text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white hover:border-white">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image 
            src="/images/home/hero-img.jpeg" 
            alt="IT Solutions" 
            width={500} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-600/20 to-blue-800/10 pointer-events-none" />
    </section>
  );
}
