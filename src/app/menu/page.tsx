export default function Menu() {
  const menuCategories = [
    {
      title: "Coffee & Tea",
      description: "Roasted in Edinburgh, brewed with precision.",
      items: [
        { name: "Espresso", desc: "Our house blend, bright and balanced.", price: "₹180", tags: ["V", "GF"] },
        { name: "Flat White", desc: "Double ristretto, textured milk.", price: "₹240", tags: ["V", "GF"] },
        { name: "Pour-Over Filter", desc: "Rotating single-origins (ask for today's beans).", price: "₹280", tags: ["VE", "GF"] },
        { name: "Mocha", desc: "Espresso, 70% dark chocolate callets, steamed milk.", price: "₹290", tags: ["V", "GF"] },
        { name: "Earl Grey Reserve", desc: "Bergamot oil, loose-leaf black tea.", price: "₹200", tags: ["VE", "GF"] },
        { name: "Matcha Latte", desc: "Ceremonial grade matcha, lightly sweetened.", price: "₹320", tags: ["V", "GF"] }
      ]
    },
    {
      title: "Pastries",
      description: "Baked fresh every morning in-house. Once they're gone, they're gone.",
      items: [
        { name: "Butter Croissant", desc: "Laminated with Normandy butter. Flaky and golden.", price: "₹220", tags: ["V"] },
        { name: "The Walnut Croissant", desc: "Twice-baked, house-made walnut frangipane.", price: "₹350", tags: ["V"] },
        { name: "Cardamom Bun", desc: "Swedish-style knotted bun, freshly ground cardamom.", price: "₹280", tags: ["V"] },
        { name: "Morning Loaf Slice", desc: "Spiced pumpkin and pepita, served slightly warm.", price: "₹250", tags: ["VE"] },
      ]
    },
    {
      title: "Plates & Sandwiches",
      description: "Simple, honest food available from 8am to 2pm.",
      items: [
        { name: "Sourdough Tartine", desc: "Whipped ricotta, seasonal preserves, thyme, on thick-cut toast.", price: "₹450", tags: ["V"] },
        { name: "Avocado & Chili", desc: "Smashed avocado, toasted seed mix, chili oil, sourdough.", price: "₹550", tags: ["VE"] },
        { name: "The Pastrami", desc: "Cured beef, house pickle, Emmental, mustard mayo, rye loaf.", price: "₹650", tags: [] },
        { name: "Winter Soup", desc: "Seasonal vegetable soup served with buttered sourdough.", price: "₹400", tags: ["V", "VE"] }
      ]
    }
  ];

  return (
    <div className="bg-[#fdfbf7] min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-16">
        <h1 className="font-serif font-bold text-5xl md:text-6xl text-[#3e2723] mb-6">Our Menu</h1>
        <p className="text-xl text-[#3e2723]/80 font-light flex items-center justify-center gap-4">
          <span className="hidden sm:inline-block w-12 h-px bg-[#c26d5c]"></span>
          Everything crafted with intention
          <span className="hidden sm:inline-block w-12 h-px bg-[#c26d5c]"></span>
        </p>
      </div>

      {/* Menu Categories Grid */}
      <div className="max-w-4xl mx-auto px-4 space-y-20">
        {menuCategories.map((category, idx) => (
          <section key={idx}>
            <div className="mb-10 text-center sm:text-left border-b border-[#3e2723]/10 pb-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3e2723] mb-2">{category.title}</h2>
              <p className="text-[#c26d5c] text-sm tracking-wide uppercase font-medium">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {category.items.map((item, idj) => (
                <div key={idj} className="group relative">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-[#3e2723] font-semibold flex items-center gap-2">
                      {item.name}
                      {/* Dietary Tags */}
                      {item.tags.length > 0 && (
                        <div className="flex gap-1 ml-2 translate-y-[-1px]">
                          {item.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="text-[0.65rem] font-sans font-bold text-[#8da399] border border-[#8da399]/40 rounded-full px-1.5 py-0.5 leading-none"
                              title={tag === 'V' ? 'Vegetarian' : tag === 'VE' ? 'Vegan' : tag === 'GF' ? 'Gluten Free' : ''}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </h3>
                    <div className="h-px bg-[#3e2723]/10 flex-grow mx-4 hidden sm:block transition-colors group-hover:bg-[#3e2723]/30"></div>
                    <span className="font-medium text-[#c26d5c] whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-[#3e2723]/70 text-sm leading-relaxed max-w-[90%]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Dietary Legend */}
      <div className="max-w-4xl mx-auto px-4 mt-20 text-center text-sm text-[#3e2723]/60 pb-8 border-b border-[#3e2723]/10">
        <p>V = Vegetarian &nbsp;&bull;&nbsp; VE = Vegan &nbsp;&bull;&nbsp; GF = Gluten Free</p>
        <p className="mt-2 text-xs">Please inform our staff of any severe allergies before ordering.</p>
      </div>
    </div>
  );
}
