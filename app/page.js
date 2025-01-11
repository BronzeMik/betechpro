import ContactUs from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";



export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
