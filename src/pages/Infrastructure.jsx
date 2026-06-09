import React from 'react'

const Infrastructure = () => {
  return (
    <main className="bg-[#faf9f5] text-on-surface selection:bg-[#7e1a12] selection:text-white">
      {/* Hero */}
      <section className="relative py-16 md:py-32 px-6 md:px-12 bg-zinc-950 text-white overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-25">
          <img src="/assets/nashik_facility.png" className="w-full h-full object-cover" alt="Infrastructure" onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x500?text=Infrastructure' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold uppercase tracking-tighter mb-6 md:mb-8">Integrated <span className="text-[#9ef295]">Facilities</span></h1>
          <p className="text-sm md:text-lg text-white/60 max-w-2xl mx-auto font-sans leading-relaxed">
            Our world-class processing centers in Nashik and Hyderabad are equipped with the latest BRC & HACCP certified technologies to ensure global quality standards.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto space-y-28 md:space-y-40">
          {/* Nashik */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="space-y-8 md:space-y-12 order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary uppercase tracking-tighter">Nashik <br /><span className="text-secondary">Processing Hub</span></h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-sans">
                Located in the heart of India's pomegranate belt, our Nashik facility is a 50,000 sq. ft. high-care zone dedicated to manual aril extraction and fresh packing.
              </p>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex items-center gap-3 md:gap-4 text-zinc-800 font-bold text-sm md:text-base"><i className="fas fa-check-circle text-[#9ef295]"></i> BRC 'AA' Grade Facility</li>
                <li className="flex items-center gap-3 md:gap-4 text-zinc-800 font-bold text-sm md:text-base"><i className="fas fa-check-circle text-[#9ef295]"></i> Multi-Stage Ozone Wash</li>
                <li className="flex items-center gap-3 md:gap-4 text-zinc-800 font-bold text-sm md:text-base"><i className="fas fa-check-circle text-[#9ef295]"></i> 24/7 Cold Chain Monitoring</li>
              </ul>
            </div>
            <div className="rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl order-1 md:order-2 border border-zinc-200">
              <img src="/assets/nashik_facility.png" className="w-full h-auto" alt="Nashik Facility" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Nashik+Facility' }} />
            </div>
          </div>

          {/* Hyderabad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-200">
              <img src="/assets/hyderabad_tech.png" className="w-full h-auto" alt="Hyderabad Facility" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Hyderabad+Facility' }} />
            </div>
            <div className="space-y-8 md:space-y-12">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary uppercase tracking-tighter">Hyderabad <br /><span className="text-secondary">Tech Center</span></h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-sans">
                Our Hyderabad headquarters integrates logistics, R&D, and quality control, serving as the central nervous system for our global export operations.
              </p>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex items-center gap-3 md:gap-4 text-zinc-800 font-bold text-sm md:text-base"><i className="fas fa-microscope text-[#9ef295]"></i> Advanced R&D Lab</li>
                <li className="flex items-center gap-3 md:gap-4 text-zinc-800 font-bold text-sm md:text-base"><i className="fas fa-ship text-[#9ef295]"></i> Sea-Shipment MA/CA Simulation</li>
                <li className="flex items-center gap-3 md:gap-4 text-zinc-800 font-bold text-sm md:text-base"><i className="fas fa-laptop-code text-[#9ef295]"></i> Real-time Traceability Platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Infrastructure
