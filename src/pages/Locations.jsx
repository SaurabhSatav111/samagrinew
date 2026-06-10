import React from 'react'

const Locations = () => {
  return (
    <div className="locations-page min-h-screen bg-white text-[#111] pb-20">
      {/* Title Section */}
      <section className="min-h-[55vh] flex items-center justify-center pt-[140px] pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-6 text-[#0f0f0f]">
            Global <span className="italic text-[#2D5A27] font-serif">Presence</span>
          </h1>
          <p className="text-zinc-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Supplying premium Indian agricultural produce to global markets through strategic hubs.
          </p>
        </div>
      </section>

      {/* Main Hubs Grid */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { city: 'Hyderabad', type: 'Head Office & Nursery', desc: 'Strategic operations, logistics coordination, and advanced nursery R&D hub.' },
              { city: 'Nashik', type: 'High Care Facility', desc: 'Primary processing unit located in the heart of India\'s pomegranate cultivation belt.' },
              { city: 'Bangalore', type: 'Processing Hub', desc: 'Logistics center and packhouse for South India exports and direct cargo connectivity.' }
            ].map((loc, i) => (
              <div key={i} className="bg-[#f8fafc] p-8 md:p-10 rounded-[2rem] border border-zinc-200 shadow-lg hover:border-[#2D5A27]/30 transition-all duration-300">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D5A27] mb-2">{loc.city}</h2>
                <h4 className="text-sm font-bold text-[#111] mb-4 uppercase tracking-wider">{loc.type}</h4>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-sans">{loc.desc}</p>
              </div>
            ))}
          </div>

          {/* Export Markets */}
          <div className="mt-16 md:mt-24 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#111] mb-8">Export Markets</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {["UK", "USA", "Netherlands", "Switzerland", "Belgium", "Germany", "France", "Spain", "UAE", "Hong Kong", "Singapore", "Thailand"].map((market, i) => (
                <span key={i} className="px-5 py-2.5 bg-[#eef2ff] rounded-full text-[#111] text-xs md:text-sm font-bold border border-zinc-200 hover:border-[#2D5A27]/40 hover:bg-[#d9f7e8] transition-colors duration-300 uppercase tracking-widest">
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations