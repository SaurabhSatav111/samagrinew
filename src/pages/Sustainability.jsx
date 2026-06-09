import React from 'react'
import { Leaf, Handshake, Droplet, ShieldCheck } from 'lucide-react'

const Sustainability = () => {
  return (
    <div className="sustainability-page text-[#f5f5f5] bg-gradient-to-b from-[#0a0f0a] to-[#020502] min-h-screen">
      {/* Hero Header */}
      <section className="min-h-[50vh] flex items-center justify-center pt-36 pb-20 px-6 relative overflow-hidden bg-[#0a0f0a]">
        {/* Subtle Green Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,90,39,0.12)_0%,transparent_60%)] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-900/30 to-transparent"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-in">
          <span className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Responsibility</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-tight mb-6">
            Our Commitment to <br/>
            <span className="italic text-[#2D5A27] font-serif">Sustainability</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            At Sam Agri, sustainability is at the core of our operations. We ensure that our farming practices are environmentally friendly, socially responsible, and ethically sound.
          </p>
        </div>
      </section>

      {/* Sustainability Grid */}
      <section className="py-16 md:py-28 px-6 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <li className="bg-[#101511]/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-emerald-900/20 shadow-2xl hover:border-[#2D5A27]/50 hover:shadow-[0_20px_50px_rgba(45,90,39,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col items-start group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2D5A27] to-[#1e3d1a] rounded-2xl flex items-center justify-center text-emerald-400 mb-8 shadow-[0_8px_20px_rgba(45,90,39,0.25)] group-hover:scale-110 transition-transform duration-500">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Global GAP</h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                Certified Good Agricultural Practices (G.A.P.) across all captive farms, ensuring safe, sustainable, and fully traceable horticultural production.
              </p>
            </li>

            <li className="bg-[#101511]/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-emerald-900/20 shadow-2xl hover:border-[#2D5A27]/50 hover:shadow-[0_20px_50px_rgba(45,90,39,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col items-start group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2D5A27] to-[#1e3d1a] rounded-2xl flex items-center justify-center text-emerald-400 mb-8 shadow-[0_8px_20px_rgba(45,90,39,0.25)] group-hover:scale-110 transition-transform duration-500">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Fairtrade</h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                Ensuring ethical treatment, safe and clean working conditions, and fair living wages for all our farming communities and packhouse partners.
              </p>
            </li>

            <li className="bg-[#101511]/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-emerald-900/20 shadow-2xl hover:border-[#2D5A27]/50 hover:shadow-[0_20px_50px_rgba(45,90,39,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col items-start group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2D5A27] to-[#1e3d1a] rounded-2xl flex items-center justify-center text-emerald-400 mb-8 shadow-[0_8px_20px_rgba(45,90,39,0.25)] group-hover:scale-110 transition-transform duration-500">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Water Management</h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                Maximizing resource efficiency through advanced drip irrigation systems, smart soil moisture mapping, and water recycling facilities.
              </p>
            </li>

            <li className="bg-[#101511]/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-emerald-900/20 shadow-2xl hover:border-[#2D5A27]/50 hover:shadow-[0_20px_50px_rgba(45,90,39,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col items-start group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2D5A27] to-[#1e3d1a] rounded-2xl flex items-center justify-center text-emerald-400 mb-8 shadow-[0_8px_20px_rgba(45,90,39,0.25)] group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Hygiene & Safety</h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                BRCGS Global Standard for Food Safety (AA Grade) and ISO 22000 cleanroom facilities enforcing the absolute highest global standards.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Sustainability
