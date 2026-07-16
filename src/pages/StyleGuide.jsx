import React, { useState } from 'react'
import { motion } from 'framer-motion'

const COLORS = [
  { name: 'Samagri Green', hex: '#0d631b', desc: 'Orchards, fresh produce, and sustainable growth. Our primary brand identity color.', rgb: 'R: 13, G: 99, B: 27' },
  { name: 'Bhagwa Red', hex: '#7e1a12', desc: 'Bhagwa pomegranates, the premium core of our export assortments.', rgb: 'R: 126, G: 26, B: 18' },
  { name: 'Sunlit Lime', hex: '#9ef295', desc: 'Accent highlight color used for badges, tags, active states, and calendars.', rgb: 'R: 158, G: 242, B: 149' },
  { name: 'Warm Cream', hex: '#faf9f5', desc: 'Soft background color providing a natural, organic tone for layout structures.', rgb: 'R: 250, G: 249, B: 245' },
  { name: 'Earth Brown', hex: '#5c4a3a', desc: 'Body copy and secondary text color for a rich, high-readability natural contrast.', rgb: 'R: 92, G: 74, B: 58' },
  { name: 'Deep Charcoal', hex: '#18181b', desc: 'Main text color for dominant headings and cards titles.', rgb: 'R: 24, G: 24, B: 27' }
]

const GRADIENTS = [
  { name: 'Brand Dark Gradient', css: 'linear-gradient(to bottom right, #7e1a12, #000000)', desc: 'Used for corporate, high-end background overlays and hero pages.' },
  { name: 'Sustainable Green Gradient', css: 'linear-gradient(to bottom right, #0d631b, #002204)', desc: 'Primary footer and brand accent background gradients.' },
  { name: 'Subtle Cream Fade', css: 'linear-gradient(to bottom, #faf9f5, #ffffff)', desc: 'Elegant transition gradient for page content sections.' }
]

const BADGES = ['Bhagwa Quality', 'Sweet & Juicy', 'BRC Certified', 'No Added Sugar', '100% Organic', 'Year-Round Supply']

const StyleGuide = () => {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(''), 2000)
  }

  return (
    <main className="min-h-screen text-zinc-900 bg-[#faf9f5] font-sans selection:bg-[#0d631b] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-[#7e1a12] to-black flex items-center overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0d631b]/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f5] via-transparent to-transparent"></div>
        </div>
        <div className="px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 text-left">
          <span className="text-[#9ef295] font-sans font-bold uppercase text-[10px] tracking-[0.4em] mb-4 block">
            Digital Identity System
          </span>
          <h1 className="text-5xl md:text-7xl font-sans font-black text-white leading-none uppercase tracking-tighter">
            SAMAGRI <span className="text-[#9ef295]">STYLE GUIDE</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mt-6 font-sans">
            Our unified brand design guidelines, assets library, components framework, and digital token system. Modeled after premium global standards.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
        
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 text-left lg:sticky lg:top-32 h-fit">
          <div className="bg-white p-6 rounded-[2rem] border border-zinc-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-widest mb-6">GUIDE SECTIONS</h4>
            <ul className="space-y-4 font-sans font-bold text-sm">
              <li>
                <a href="#colours" className="block text-[#0d631b] hover:text-[#7e1a12] transition-colors">
                  01. Colours
                </a>
              </li>
              <li>
                <a href="#typography" className="block text-[#0d631b] hover:text-[#7e1a12] transition-colors">
                  02. Typography
                </a>
              </li>
              <li>
                <a href="#buttons" className="block text-[#0d631b] hover:text-[#7e1a12] transition-colors">
                  03. Buttons & Actions
                </a>
              </li>
              <li>
                <a href="#badges" className="block text-[#0d631b] hover:text-[#7e1a12] transition-colors">
                  04. Badges & Lists
                </a>
              </li>
              <li>
                <a href="#cards" className="block text-[#0d631b] hover:text-[#7e1a12] transition-colors">
                  05. Bento & Cards
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Style Guide Content */}
        <div className="lg:col-span-9 flex flex-col gap-24">

          {/* SECTION: COLOURS */}
          <section id="colours" className="text-left scroll-mt-24">
            <div className="border-b border-zinc-200 pb-6 mb-10">
              <h2 className="text-3xl font-sans font-black text-zinc-900 uppercase tracking-tight">01. Colors & Swatches</h2>
              <p className="text-[#5c4a3a] text-sm mt-2">Our palette mirrors the organic, premium fresh produce we export globally. Click any hex code to copy.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {COLORS.map((c) => (
                <div 
                  key={c.hex} 
                  className="bg-white rounded-[2rem] overflow-hidden border border-zinc-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => copyToClipboard(c.hex)}
                >
                  <div className="h-32 w-full transition-transform hover:scale-[1.02]" style={{ backgroundColor: c.hex }} />
                  <div className="p-6 flex flex-col gap-2.5">
                    <span className="font-sans font-black text-zinc-800 text-lg uppercase tracking-tight">{c.name}</span>
                    <p className="text-zinc-500 text-xs leading-relaxed font-normal">{c.desc}</p>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-zinc-100">
                      <span className="font-sans font-bold text-xs text-[#0d631b] bg-[#9ef295]/20 px-2.5 py-1 rounded-full">{c.hex}</span>
                      <span className="font-sans text-[10px] text-zinc-400 font-bold">{c.rgb}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradients */}
            <h3 className="text-xl font-sans font-black text-zinc-800 uppercase tracking-tight mt-12 mb-6">Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GRADIENTS.map((g) => (
                <div 
                  key={g.name}
                  className="bg-white p-6 rounded-[2rem] border border-zinc-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col gap-4 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => copyToClipboard(g.css)}
                >
                  <div className="h-24 w-full rounded-[1.5rem]" style={{ background: g.css }} />
                  <div className="text-left">
                    <span className="font-sans font-black text-zinc-800 text-sm uppercase tracking-tight block">{g.name}</span>
                    <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: TYPOGRAPHY */}
          <section id="typography" className="text-left scroll-mt-24">
            <div className="border-b border-zinc-200 pb-6 mb-10">
              <h2 className="text-3xl font-sans font-black text-zinc-900 uppercase tracking-tight">02. Typography</h2>
              <p className="text-[#5c4a3a] text-sm mt-2">A clean, functional sans-serif for structures, and an elegant, editorial serif for brand heritage.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col gap-10">
              {/* Primary: Outfit */}
              <div>
                <span className="font-sans text-xs font-bold text-[#0d631b] uppercase tracking-widest block mb-4">PRIMARY TYPEFACE: OUTFIT</span>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-zinc-100">
                  <h3 className="text-4xl md:text-5xl font-sans font-black uppercase text-zinc-800 tracking-tighter">Outfit Sans</h3>
                  <p className="text-[#5c4a3a] text-sm max-w-sm">Used for heavy headings, sub-headings, buttons, calendars, lists, and technical specification cards.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-[#faf9f5] p-6 rounded-[1.5rem] text-left">
                    <h5 className="font-sans font-black text-[#7e1a12] text-sm uppercase mb-3">Font Weights</h5>
                    <p className="font-sans font-black text-xl mb-2">Black (900)</p>
                    <p className="font-sans font-extrabold text-xl mb-2">Extrabold (800)</p>
                    <p className="font-sans font-bold text-xl mb-2">Bold (700)</p>
                    <p className="font-sans font-normal text-xl text-zinc-600">Normal (400)</p>
                  </div>
                  <div className="bg-[#faf9f5] p-6 rounded-[1.5rem] text-left">
                    <h5 className="font-sans font-black text-[#7e1a12] text-sm uppercase mb-3">Scale Hierarchy</h5>
                    <h1 className="text-3xl font-sans font-black uppercase mb-1">Heading 1 (30px)</h1>
                    <h2 className="text-2xl font-sans font-black uppercase mb-1">Heading 2 (24px)</h2>
                    <h3 className="text-xl font-sans font-bold uppercase mb-1">Heading 3 (20px)</h3>
                    <p className="text-sm font-sans text-zinc-500">Body text details (14px)</p>
                  </div>
                </div>
              </div>

              {/* Secondary: Playfair Display */}
              <div>
                <span className="font-sans text-xs font-bold text-[#0d631b] uppercase tracking-widest block mb-4">SECONDARY TYPEFACE: PLAYFAIR DISPLAY</span>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-zinc-100">
                  <h3 className="text-4xl md:text-5xl font-serif font-black text-zinc-800 italic">Playfair Serif</h3>
                  <p className="text-[#5c4a3a] text-sm max-w-sm">Used for sub-headers, editorial copy, product title banners, and organic storytelling segments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-[#faf9f5] p-6 rounded-[1.5rem] text-left">
                    <h5 className="font-sans font-black text-[#7e1a12] text-sm uppercase mb-3">Font Weights</h5>
                    <p className="font-serif font-black text-2xl mb-2">Black (900)</p>
                    <p className="font-serif font-bold text-2xl mb-2">Bold (700)</p>
                    <p className="font-serif font-bold italic text-2xl text-zinc-600">Italic (700)</p>
                  </div>
                  <div className="bg-[#faf9f5] p-6 rounded-[1.5rem] text-left">
                    <h5 className="font-sans font-black text-[#7e1a12] text-sm uppercase mb-3">Character Set</h5>
                    <p className="font-serif text-xl leading-relaxed text-zinc-700">
                      The quick brown fox jumps over the lazy dog. 0123456789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: BUTTONS */}
          <section id="buttons" className="text-left scroll-mt-24">
            <div className="border-b border-zinc-200 pb-6 mb-10">
              <h2 className="text-3xl font-sans font-black text-zinc-900 uppercase tracking-tight">03. Buttons & Actions</h2>
              <p className="text-[#5c4a3a] text-sm mt-2">Interactive, clean pill buttons built for robust responsiveness and clickability.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Primary Green CTA */}
              <div className="flex flex-col gap-4">
                <span className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest">PRIMARY GREEN CTA</span>
                <button className="group relative overflow-hidden px-10 py-5 bg-[#0d631b] text-white rounded-full font-bold tracking-widest uppercase transition-all hover:pr-14 shadow-[0_20px_40px_rgba(13,99,27,0.3)] hover:shadow-[#0d631b]/40 text-center w-full max-w-[280px]">
                  <span className="relative z-10 text-sm">SPECIFICATIONS</span>
                  <i className="fas fa-arrow-right absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"></i>
                </button>
                <code className="text-xs text-zinc-500 bg-[#faf9f5] p-3 rounded-lg overflow-x-auto select-all">
                  {`className="group relative px-10 py-5 bg-[#0d631b] text-white rounded-full font-bold uppercase tracking-widest hover:pr-14 transition-all shadow-[0_20px_40px_rgba(13,99,27,0.3)]"`}
                </code>
              </div>

              {/* Secondary Outlined CTA */}
              <div className="flex flex-col gap-4">
                <span className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest">OUTLINED / LIGHT CTA</span>
                <button className="px-10 py-5 bg-white border border-[#0d631b] text-[#0d631b] hover:bg-[#0d631b] hover:text-white rounded-full font-bold tracking-widest uppercase transition-all text-center w-full max-w-[280px]">
                  <span className="text-sm">DISCOVER MORE</span>
                </button>
                <code className="text-xs text-zinc-500 bg-[#faf9f5] p-3 rounded-lg overflow-x-auto select-all">
                  {`className="px-10 py-5 bg-white border border-[#0d631b] text-[#0d631b] hover:bg-[#0d631b] hover:text-white rounded-full font-bold uppercase tracking-widest transition-all"`}
                </code>
              </div>
            </div>
          </section>

          {/* SECTION: BADGES & LISTS */}
          <section id="badges" className="text-left scroll-mt-24">
            <div className="border-b border-zinc-200 pb-6 mb-10">
              <h2 className="text-3xl font-sans font-black text-zinc-900 uppercase tracking-tight">04. Badges & Lists</h2>
              <p className="text-[#5c4a3a] text-sm mt-2">Reusable tags, badge cards, and bullet-point list structures used on product detail layers.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col gap-10">
              {/* Product Badges */}
              <div>
                <span className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-4">PRODUCT OVERVIEW TAGS</span>
                <div className="flex flex-wrap gap-3">
                  {BADGES.map((b, i) => (
                    <span 
                      key={i}
                      className="px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600 bg-[#faf9f5] font-sans font-bold text-xs uppercase tracking-wider"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Checkmark Bullets */}
              <div>
                <span className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-4">CHECKMARK LIST COMPONENT</span>
                <div className="flex flex-col gap-4 max-w-md">
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-[#9ef295]/20 text-[#0d631b] flex items-center justify-center mr-3 shrink-0">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-zinc-800 font-sans font-bold text-sm md:text-base tracking-tight">
                      Global Export Standards Compliant
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-5 h-5 rounded-full bg-[#9ef295]/20 text-[#0d631b] flex items-center justify-center mr-3 shrink-0">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-zinc-800 font-sans font-bold text-sm md:text-base tracking-tight">
                      Fully Temperature-Controlled Operations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: CARDS & BENTO */}
          <section id="cards" className="text-left scroll-mt-24">
            <div className="border-b border-zinc-200 pb-6 mb-10">
              <h2 className="text-3xl font-sans font-black text-zinc-900 uppercase tracking-tight">05. Cards & Bento Layouts</h2>
              <p className="text-[#5c4a3a] text-sm mt-2">Bento grids, left-accent spec cards, and dispatch calendar components that form our page layout system.</p>
            </div>

            {/* Spec Cards Example */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#faf9f5] p-8 rounded-[1.5rem] border border-zinc-200/60 border-l-4 border-l-[#9ef295] flex flex-col gap-4 text-left">
                <h5 className="font-sans font-black text-zinc-900 text-base uppercase tracking-tight">Vibrant Red Seeds</h5>
                <p className="text-zinc-500 text-xs leading-relaxed font-normal">
                  Harvested at peak maturity to secure deep crimson whole arils that are juicy and sweet.
                </p>
              </div>

              <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-zinc-100 flex flex-col gap-4 text-left">
                <div className="w-10 h-10 bg-[#0d631b]/8 rounded-xl flex items-center justify-center text-[#0d631b]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-zinc-900 text-base mb-1">Global MRL Compliant</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">Adhering to the strictest international residue limits for safe consumption.</p>
                </div>
              </div>
            </div>

            {/* Dispatch Calendar Preview */}
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] mt-8 text-left">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] block mb-6">Dispatch Windows</span>
              <div className="grid grid-cols-6 gap-3 max-w-md">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => {
                  const isActive = ['Jan', 'Feb', 'Mar'].includes(month)
                  return (
                    <div
                      key={month}
                      className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#7e1a12] text-white shadow-[0_4px_12px_rgba(126,26,18,0.2)]'
                          : 'bg-white text-zinc-300 border border-zinc-100'
                      }`}
                    >
                      {month}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Copy Alert */}
      {copiedText && (
        <div className="fixed bottom-10 right-10 bg-[#0d631b] text-white px-6 py-3 rounded-full shadow-2xl z-50 font-sans font-bold text-xs uppercase tracking-wider animate-bounce">
          Copied: {copiedText}
        </div>
      )}
    </main>
  )
}

export default StyleGuide
