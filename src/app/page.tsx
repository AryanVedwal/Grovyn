import Image from "next/image";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-[#3e2723]">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80" 
            alt="Coffee shop interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#3e2723]/60 mix-blend-multiply z-10" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#fdfbf7] font-bold tracking-tight mb-6 drop-shadow-lg">
            Grovyn <span className="italic font-normal text-[#c26d5c]">Café</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#fdfbf7]/90 font-light mb-10 max-w-2xl drop-shadow">
            Artisan coffee, loose-leaf teas, and fresh daily pastries in the heart of Indiranagar, Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/menu" variant="primary">
              View Our Menu
            </Button>
            <Button href="/about" variant="outline" className="border-[#fdfbf7] text-[#fdfbf7] hover:bg-[#fdfbf7] hover:text-[#3e2723]">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-20 px-4 md:py-32 bg-[#fdfbf7]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#3e2723] mb-8">
            Baked with purpose. <br className="hidden md:block"/> Brewed with care.
          </h2>
          <p className="text-[#3e2723]/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
            Grovyn began as a simple idea: a place where the precision of specialty coffee meets the rustic comfort of an artisanal bakery. We believe in taking our time, sourcing locally, and serving our community one cup and one croissant at a time.
          </p>
          <p className="font-serif text-[#c26d5c] text-2xl italic">
            — The Grovyn Team
          </p>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 px-4 bg-[#fdfbf7] border-t border-[#3e2723]/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3e2723] mb-4">House Signatures</h2>
              <p className="text-[#3e2723]/70">A taste of what we do best.</p>
            </div>
            <div className="hidden md:block">
              <Button href="/menu" variant="outline">Full Menu</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#3e2723]/5 rounded-sm overflow-hidden mb-6 relative transition-transform duration-300 group-hover:-translate-y-2">
                 <Image 
                   src="https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&q=80" 
                   alt="The Walnut Croissant"
                   fill
                   className="object-cover"
                 />
              </div>
              <h3 className="font-serif text-xl text-[#3e2723] mb-2 font-semibold">The Walnut Croissant</h3>
              <p className="text-[#3e2723]/70 text-sm mb-3">Twice-baked, filled with house-made walnut frangipane.</p>
              <p className="font-medium text-[#c26d5c]">₹350</p>
            </div>

            {/* Featured Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#3e2723]/5 rounded-sm overflow-hidden mb-6 relative transition-transform duration-300 group-hover:-translate-y-2">
                 <Image 
                   src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80" 
                   alt="Pour-Over Filter"
                   fill
                   className="object-cover"
                 />
              </div>
              <h3 className="font-serif text-xl text-[#3e2723] mb-2 font-semibold">Pour-Over Filter</h3>
              <p className="text-[#3e2723]/70 text-sm mb-3">Rotating single-origin beans, brewed to exacting standards.</p>
              <p className="font-medium text-[#c26d5c]">₹280</p>
            </div>

            {/* Featured Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-[#3e2723]/5 rounded-sm overflow-hidden mb-6 relative transition-transform duration-300 group-hover:-translate-y-2">
                 <Image 
                   src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80" 
                   alt="Sourdough Tartine"
                   fill
                   className="object-cover"
                 />
              </div>
              <h3 className="font-serif text-xl text-[#3e2723] mb-2 font-semibold">Sourdough Tartine</h3>
              <p className="text-[#3e2723]/70 text-sm mb-3">Whipped ricotta, seasonal preserves, on thick-cut toast.</p>
              <p className="font-medium text-[#c26d5c]">₹450</p>
            </div>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button href="/menu" variant="outline" fullWidth>Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-20 px-4 bg-[#3e2723] text-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="aspect-video lg:aspect-square bg-[#fdfbf7]/10 rounded-sm relative flex items-center justify-center">
                <span className="text-[#fdfbf7]/50 font-serif italic text-xl">Map Placeholder</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 lg:pl-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Drop By</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#c26d5c] font-semibold text-lg uppercase tracking-wider mb-2">Location</h3>
                  <address className="not-italic text-lg text-[#fdfbf7]/90 leading-relaxed">
                    14th Main Road, Indiranagar<br />
                    Bangalore, Karnataka 560038<br />
                    India
                  </address>
                </div>
                
                <div>
                  <h3 className="text-[#c26d5c] font-semibold text-lg uppercase tracking-wider mb-2">Hours</h3>
                  <ul className="text-lg text-[#fdfbf7]/90 space-y-2 max-w-xs">
                    <li className="flex justify-between border-b border-[#fdfbf7]/10 pb-2">
                      <span>Mon - Fri</span>
                      <span>7am - 4pm</span>
                    </li>
                    <li className="flex justify-between border-b border-[#fdfbf7]/10 pb-2">
                      <span>Saturday</span>
                      <span>8am - 5pm</span>
                    </li>
                    <li className="flex justify-between pb-2">
                      <span>Sunday</span>
                      <span>8am - 3pm</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button href="/contact" variant="primary">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
