import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#fdfbf7] min-h-screen pt-12">
      {/* Hero Story Section */}
      <section className="max-w-4xl mx-auto px-4 text-center mb-24">
        <h1 className="font-serif font-bold text-5xl md:text-6xl text-[#3e2723] mb-8">Our Story</h1>
        <div className="text-left md:text-center text-[#3e2723]/80 text-lg md:text-xl leading-relaxed space-y-6 max-w-2xl mx-auto font-light">
          <p>
            Grovyn didn’t start with a business plan; it started with a worn-out notebook full of recipes and a quiet obsession with the morning ritual. We envisioned a space where the pace slows down just enough to appreciate the details—the crackle of fresh sourdough, the aroma of a blooming pour-over, the warmth of a familiar face.
          </p>
          <p>
            Established in 2021, we transformed a dusty old bookshop into a sunlit sanctuary. We left the original hardwood floors, brought in our beloved La Marzocco machine, and built our ovens right behind the counter so you can always smell what’s coming next.
          </p>
          <p className="font-serif italic text-2xl text-[#c26d5c] pt-4">
            We’re not just serving coffee; we’re pouring care into every cup.
          </p>
        </div>
      </section>

      {/* Values / Philosophy */}
      <section className="bg-[#3e2723] text-[#fdfbf7] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Value 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#c26d5c]/20 flex items-center justify-center mb-6 text-[#c26d5c]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Fresh Daily</h3>
              <p className="text-[#fdfbf7]/80 font-light text-sm px-4">
                Our bakers arrive before dawn. If it’s in the pastry case today, it was baked today. No exceptions.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#c26d5c]/20 flex items-center justify-center mb-6 text-[#c26d5c]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Conscious Sourcing</h3>
              <p className="text-[#fdfbf7]/80 font-light text-sm px-4">
                We work directly with roasters who pay premiums to farmers. Our dairy is local; our eggs are free-range.
              </p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#c26d5c]/20 flex items-center justify-center mb-6 text-[#c26d5c]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl mb-3">Community First</h3>
              <p className="text-[#fdfbf7]/80 font-light text-sm px-4">
                More than a transactional exchange, we aim to be the third place between work and home. Everyone is welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
         <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#3e2723] mb-4">Meet the Makers</h2>
          <p className="text-[#3e2723]/70 font-light max-w-xl mx-auto">
            The small but mighty team behind the counter and the ovens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Team Member 1 */}
          <div>
            <div className="aspect-square bg-[#3e2723]/10 rounded-sm mb-6 relative overflow-hidden flex items-center justify-center">
               <Image 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                 alt="Elias Thorne"
                 fill
                 className="object-cover"
               />
            </div>
            <h3 className="font-serif text-2xl text-[#3e2723] font-semibold">Arjun Menon</h3>
            <p className="text-[#c26d5c] text-sm font-semibold tracking-wide uppercase mt-1 mb-3">Head Roaster & Co-Founder</p>
            <p className="text-[#3e2723]/70 text-sm font-light">Obsessed with extraction yields. Can usually be found calibrating the espresso machine before sunrise.</p>
          </div>

          {/* Team Member 2 */}
          <div>
            <div className="aspect-square bg-[#3e2723]/10 rounded-sm mb-6 relative overflow-hidden flex items-center justify-center">
               <Image 
                 src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" 
                 alt="Maya Lin"
                 fill
                 className="object-cover"
               />
            </div>
            <h3 className="font-serif text-2xl text-[#3e2723] font-semibold">Ananya Rao</h3>
            <p className="text-[#c26d5c] text-sm font-semibold tracking-wide uppercase mt-1 mb-3">Lead Pastry Chef</p>
            <p className="text-[#3e2723]/70 text-sm font-light">Master of lamination. Her croissants are the reason there's a line out the door on Saturdays.</p>
          </div>

          {/* Team Member 3 */}
          <div>
            <div className="aspect-square bg-[#3e2723]/10 rounded-sm mb-6 relative overflow-hidden flex items-center justify-center">
               <Image 
                 src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" 
                 alt="Sam Rivera"
                 fill
                 className="object-cover"
               />
            </div>
            <h3 className="font-serif text-2xl text-[#3e2723] font-semibold">Rohan Sharma</h3>
            <p className="text-[#c26d5c] text-sm font-semibold tracking-wide uppercase mt-1 mb-3">Cafe Manager</p>
            <p className="text-[#3e2723]/70 text-sm font-light">Remembers your name, your order, and your dog's name. The beating heart of our front-of-house.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
