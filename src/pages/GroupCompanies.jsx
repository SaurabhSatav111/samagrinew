import React from 'react'
import { motion } from 'framer-motion'

const ENTITIES = [
  {
    titleFirst: 'West-In',
    titleSecond: 'Avo',
    desc: 'Premium Hass avocados grown in our domestic farms, tree-ripened to perfection and handled through a dedicated cold chain for uncompromised freshness.',
    bullets: [
      '100% Tree-Ripened Hass',
      'Strict Cold Chain Handling',
      'Global G.A.P. Certified'
    ],
    img: '/assets/avocado.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800'
  },
  {
    titleFirst: 'Sam',
    titleSecond: 'Berry',
    desc: 'A lush selection of fresh, handpicked strawberries, blueberries, and blackberries sourced from high-altitude fields and packed with ecological care.',
    bullets: [
      'Freshly Handpicked Daily',
      'Premium Berry Selection',
      'Eco-Friendly Packaging'
    ],
    img: '/assets/sam_berry_basket.png',
    fallbackImg: '/assets/berries.jpg'
  },
  {
    titleFirst: "Sam's",
    titleSecond: 'Delight',
    desc: 'Our flagship selection of premium sorted almonds and nutritious dried fruits, hygienically graded to deliver natural wellness to every consumer.',
    bullets: [
      'Nutrient-Rich Dry Fruits',
      'Zero Added Preservatives',
      'Hygienically Sorted & Packed'
    ],
    img: '/assets/almond.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=800'
  },
  {
    titleFirst: 'Sam',
    titleSecond: 'Alpine',
    desc: 'High-altitude blueberry farming projects optimized for cool mountain climates, producing intensely sweet, antioxidant-rich berries.',
    bullets: [
      'High-Altitude Sourced',
      'Intense Natural Flavor',
      'Superfood Certified'
    ],
    img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=800',
    fallbackImg: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=800'
  },
  {
    titleFirst: 'Ozar',
    titleSecond: 'Tulip',
    desc: 'A cutting-edge floriculture venture utilizing modern climate-controlled greenhouses to cultivate and export premium grade Dutch tulips.',
    bullets: [
      'Dutch Tulip Cultivars',
      'Climate-Controlled Greenhouses',
      'Premium Cut Flower Exports'
    ],
    img: '/assets/tulip.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=800'
  },
  {
    titleFirst: "Sam's",
    titleSecond: 'Wine',
    desc: 'Artisanal, premium fruit wines made from our finest Bhagwa pomegranates, slowly fermented to highlight a rich, antioxidant-packed flavour profile.',
    bullets: [
      'Pure Pomegranate Base',
      'Artisanal Fermentation',
      'Rich Antioxidant Profile'
    ],
    img: '/assets/pomogranatewine.png',
    fallbackImg: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800'
  }
]

const GroupCompanies = () => {
  return (
    <main className="min-h-screen text-zinc-900 selection:bg-[#0d631b] selection:text-white bg-[#faf9f5] font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-[#7e1a12] to-black flex items-center overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 animate-pulse duration-10000" 
            alt="Background" 
          />
        </div>
        <div className="px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 text-left">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1 }}
            className="text-[#9ef295] font-sans font-bold uppercase text-[10px] mb-4 block"
          >
            The Sam Agri Group
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white leading-none uppercase tracking-tighter"
          >
            Group <br />
            <span className="text-[#9ef295]">Entities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-lg text-white max-w-lg mt-8 font-sans"
          >
            A diversified portfolio of specialized entities, each driving innovation and excellence across the global fresh produce supply chain.
          </motion.p>
        </div>
      </section>

      {/* Group Entities List Section */}
      <section className="py-20 px-6 md:px-12 w-full bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto flex flex-col gap-28 md:gap-36">
          {ENTITIES.map((entity, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Text Content Block */}
                <div className={`lg:col-span-6 flex flex-col gap-6 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight leading-none">
                    <span className="text-[#0d631b]">{entity.titleFirst}</span>{' '}
                    <span className="text-[#7e1a12]">{entity.titleSecond}</span>
                  </h2>
                  
                  <p className="text-[#5c4a3a] text-sm md:text-base leading-relaxed font-normal">
                    {entity.desc}
                  </p>

                  <div className="flex flex-col gap-3.5 mt-2">
                    {entity.bullets.map((bullet, bIndex) => (
                      <div key={bIndex} className="flex items-center">
                        <span className="w-5 h-5 rounded-full bg-[#9ef295]/20 text-[#0d631b] flex items-center justify-center mr-3 shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-zinc-800 font-sans font-bold text-sm md:text-base tracking-tight">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Block */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-[4/3] w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-zinc-200/60 bg-white">
                    <img 
                      src={entity.img} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt={`${entity.titleFirst} ${entity.titleSecond}`}
                      onError={(e) => { e.target.src = entity.fallbackImg }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>
    </main>
  )
}

export default GroupCompanies
