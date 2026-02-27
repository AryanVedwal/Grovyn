import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#3e2723] text-[#fdfbf7] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Brand & Story */}
          <div className="col-span-1">
            <h3 className="font-serif text-2xl font-bold tracking-tight mb-4">
              Grovyn <span className="italic font-normal text-[#c26d5c]">Café</span>
            </h3>
            <p className="text-[#fdfbf7]/80 text-sm leading-relaxed max-w-xs">
              Exceptional coffee, freshly baked artisanal pastries, and a warm neighborhood welcome.
            </p>
          </div>

          {/* Opening Hours */}
          <div className="col-span-1">
            <h4 className="font-serif text-xl mb-4 font-semibold text-[#c26d5c]">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-[#fdfbf7]/80">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Fri</span>
                <span>7:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Saturday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sunday</span>
                <span>8:00 AM - 3:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact & Links */}
          <div className="col-span-1">
            <h4 className="font-serif text-xl mb-4 font-semibold text-[#c26d5c]">Find Us</h4>
            <address className="not-italic text-sm text-[#fdfbf7]/80 mb-4">
              14th Main Road, Indiranagar<br />
              Bangalore, KA 560038<br />
              India
            </address>
            <div className="flex flex-col space-y-2 text-sm text-[#fdfbf7]/80">
              <a href="tel:+918041120000" className="hover:text-[#c26d5c] transition-colors">
                +91 80 4112 0000
              </a>
              <a href="mailto:hello@grovyncafe.co.in" className="hover:text-[#c26d5c] transition-colors">
                hello@grovyncafe.co.in
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-[#fdfbf7]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#fdfbf7]/50">
          <p>&copy; {new Date().getFullYear()} Grovyn Café & Bakery. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-[#fdfbf7] transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-[#fdfbf7] transition-colors">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
