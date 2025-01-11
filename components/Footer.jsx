import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Slogan */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-green-500">BeTech</h1>
            <p className="mt-2 text-sm">Empowering Businesses with Smart IT Solutions</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-semibold text-gray-100 mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-green-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-semibold text-gray-100 mb-3">Contact Us</h2>
            <p>Email: <a href="mailto:contact@betechpro.com" className="hover:text-green-500">contact@betechpro.com</a></p>
            <p>Phone: <a href="tel:+2164655346" className="hover:text-green-500">+1 216 465 5346</a></p>
            <Button variant="outline" className="mt-4">
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} BeTech. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
