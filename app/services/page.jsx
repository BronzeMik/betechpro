import React from 'react'
import OurServices from '@/components/OurServices'
const page = () => {
  return (
    <div>
         {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Transform Your Business with Our Services</h1>
          <p className="text-xl mb-8">
            We offer innovative and tailored solutions to meet the unique needs of your business.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services */}
        <OurServices />
    </div>
  )
}

export default page
