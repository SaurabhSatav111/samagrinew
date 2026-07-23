import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <style>{`
        .glass-footer {
            background: linear-gradient(135deg, #0d631b 0%, #002204 100%); 
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
      <footer className="glass-footer text-white pt-10 md:pt-14 pb-8 px-6 md:px-12 mt-0 font-sans relative z-10" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
              <div className="col-span-1 md:col-span-2">
                  <div className="mb-6">
                      <img src="/assets/logo2.png" className="h-14 w-auto" style={{ filter: 'brightness(0) invert(1)' }} alt="Sam Agri Logo" onError={(e) => { e.target.src = 'https://via.placeholder.com/120x40?text=SAM+AGRI' }} />
                  </div>
                  <p className="text-white/60 max-w-md leading-relaxed text-sm">
                      India's largest integrated exporter of fresh fruits and vegetables. Pioneering excellence in fresh produce for the global market for over 25 years.
                  </p>
              </div>
              
              <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9ef295] mb-8">Our Assortment</h5>
                  <ul className="space-y-4 font-medium text-sm">
                      <li><Link to="/pomegranate-arils" className="text-white/40 hover:text-white transition-colors">Pomegranate Arils</Link></li>
                      <li><Link to="/coconut-chunks" className="text-white/40 hover:text-white transition-colors">Coconut Chunks</Link></li>
                      <li><Link to="/dried-arils" className="text-white/40 hover:text-white transition-colors">Dried Arils</Link></li>
                      <li><Link to="/whole-fruit" className="text-white/40 hover:text-white transition-colors">Whole Fruit</Link></li>
                      <li><Link to="/iqf-arils" className="text-white/40 hover:text-white transition-colors">IQF Aril</Link></li>
                  </ul>
              </div>
              
              <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9ef295] mb-8">Corporate</h5>
                  <ul className="space-y-4 font-medium text-sm">
                      <li><Link to="/about-us" className="text-white/40 hover:text-white transition-colors">About Us</Link></li>
                      <li><Link to="/infrastructure" className="text-white/40 hover:text-white transition-colors">Infrastructure</Link></li>
                      <li><Link to="/group-companies" className="text-white/40 hover:text-white transition-colors">Group Companies</Link></li>
                      <li><Link to="/sustainability" className="text-white/40 hover:text-white transition-colors">Sustainability</Link></li>
                      <li><Link to="/contact-us" className="text-white/40 hover:text-white transition-colors">Contact Us</Link></li>
                  </ul>
              </div>

              <div className="flex flex-col items-start md:items-end">
                  <div className="flex flex-col items-start">
                      <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9ef295] mb-8">Scan QR</h5>
                      <div className="bg-white p-3 rounded-2xl shadow-xl inline-block border border-white/10">
                          <img src="/qr.jpeg" className="w-32 h-32 object-contain rounded-lg" alt="QR Code" onError={(e) => { e.target.src = 'https://via.placeholder.com/150x150?text=QR+Code' }} />
                      </div>
                      <a 
                          href="https://linktr.ee/qr/702c6b48-0d60-4d57-bb91-7400ac4b3c2d" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-3 w-full text-center px-4 py-2 bg-[#9ef295] text-[#0d631b] hover:bg-white hover:text-zinc-900 rounded-xl text-[10px] font-extrabold uppercase tracking-widest shadow-md transition-all duration-300"
                      >
                          Visit Link
                      </a>
                  </div>
              </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase">© 2024 Sam Agri Group. All Rights Reserved.</p>
              <div className="flex gap-12 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  <a href="#" className="hover:text-[#9ef295] transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-[#9ef295] transition-colors">Accessibility</a>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
