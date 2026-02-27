"use client";

import { Button } from "@/components/Button";

export default function Contact() {
  return (
    <div className="bg-[#fdfbf7] min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-16">
        <h1 className="font-serif font-bold text-5xl md:text-6xl text-[#3e2723] mb-6">Find Us</h1>
        <p className="text-xl text-[#3e2723]/80 font-light flex items-center justify-center gap-4">
          <span className="hidden sm:inline-block w-12 h-px bg-[#c26d5c]"></span>
          We'd love to hear from you
          <span className="hidden sm:inline-block w-12 h-px bg-[#c26d5c]"></span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Contact Info & Hours */}
        <div className="order-2 lg:order-1 space-y-12">
          
          <div>
            <h2 className="font-serif text-3xl text-[#3e2723] mb-6 border-b border-[#3e2723]/10 pb-4">The Café</h2>
            <address className="not-italic text-[#3e2723]/80 text-lg leading-relaxed mb-6">
              <span className="font-semibold text-[#3e2723] block mb-2">Location</span>
              14th Main Road, Indiranagar<br />
              Bangalore<br />
              KA 560038
            </address>
            <div className="space-y-2 text-[#3e2723]/80 text-lg">
               <span className="font-semibold text-[#3e2723] block mb-2 mt-6">Contact</span>
              <p>
                Email: <a href="mailto:hello@grovyncafe.co.uk" className="text-[#c26d5c] hover:underline transition-all">hello@grovyncafe.co.uk</a>
              </p>
              <p>
                Phone: <span className="font-medium">+91 80 4112 0000</span>
              </p>
            </div>
          </div>

          <div>
             <h2 className="font-serif text-3xl text-[#3e2723] mb-6 border-b border-[#3e2723]/10 pb-4">Opening Hours</h2>
             <ul className="text-lg text-[#3e2723]/80 space-y-4 max-w-sm">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Monday &ndash; Friday</span>
                  <span>7:00 am &ndash; 4:00 pm</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Saturday</span>
                  <span>8:00 am &ndash; 5:00 pm</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span>8:00 am &ndash; 3:00 pm</span>
                </li>
              </ul>
          </div>

        </div>

        {/* Enquiry Form */}
        <div className="order-1 lg:order-2 bg-[#fdfbf7] p-8 md:p-12 shadow-sm border border-[#3e2723]/5 rounded-sm">
          <div className="mb-8">
            <h2 className="font-serif text-3xl text-[#3e2723] mb-3">Send an Enquiry</h2>
            <p className="text-[#3e2723]/70 font-light text-sm">For large orders, event catering, or general questions. This form is a UI placeholder.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-[#3e2723]">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full bg-[#fdfbf7] border-b border-[#3e2723]/20 py-2 text-[#3e2723] focus:outline-none focus:border-[#c26d5c] transition-colors rounded-none px-1" 
                  placeholder="Jane"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-[#3e2723]">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full bg-[#fdfbf7] border-b border-[#3e2723]/20 py-2 text-[#3e2723] focus:outline-none focus:border-[#c26d5c] transition-colors rounded-none px-1" 
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#3e2723]">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-[#fdfbf7] border-b border-[#3e2723]/20 py-2 text-[#3e2723] focus:outline-none focus:border-[#c26d5c] transition-colors rounded-none px-1" 
                placeholder="jane@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-[#3e2723]">Subject</label>
              <select 
                id="subject" 
                className="w-full bg-[#fdfbf7] border-b border-[#3e2723]/20 py-2 text-[#3e2723] focus:outline-none focus:border-[#c26d5c] transition-colors rounded-none px-1 appearance-none cursor-pointer"
              >
                <option value="general">General Enquiry</option>
                <option value="catering">Catering & Events</option>
                <option value="wholesale">Wholesale Coffee</option>
                <option value="press">Press & Media</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-[#3e2723]">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-[#fdfbf7] border border-[#3e2723]/20 p-3 text-[#3e2723] focus:outline-none focus:border-[#c26d5c] transition-colors rounded-sm resize-none" 
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" fullWidth>
                Send Message
              </Button>
            </div>
          </form>
        </div>

      </div>

      {/* Full-width Map Placeholder */}
      <div className="max-w-6xl mx-auto px-4 mt-24">
        <div className="w-full h-96 bg-[#3e2723]/5 rounded-sm relative flex items-center justify-center overflow-hidden border border-[#3e2723]/10">
           <div className="absolute inset-0 bg-[#3e2723]/5 scale-110 blur-sm"></div>
           <span className="text-[#3e2723]/40 font-serif italic text-2xl relative z-10 flex flex-col items-center">
             <svg className="w-10 h-10 mb-4 text-[#c26d5c]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
             </svg>
             Interactive Map Embed Here
           </span>
        </div>
      </div>
    </div>
  );
}
