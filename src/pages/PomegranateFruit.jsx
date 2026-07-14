import React from 'react'

const PomegranateFruit = () => {
  return (
    <>
      <style>{`
        .fruit-page-body {
          --cream: #FAF7F2;
          --peel: #C94B1E;
          --peel-light: #FAECE7;
          --peel-mid: #D85A30;
          --peel-dark: #993C1D;
          --seed: #7B1C1C;
          --text: #1A1410;
          --text-mid: #5C4A3A;
          --text-muted: #9A8878;
          --border: rgba(90,50,30,0.12);
          --border-med: rgba(90,50,30,0.22);
          --white: #FFFFFF;
          --radius: 12px;
          --radius-sm: 8px;
          background: linear-gradient(135deg, #7e1a12 0%, #000 100%);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
        }

        /* ── HERO ── */
        .hero-fruit {
          display: flex;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .hero-left-fruit {
          width: 45%;
          background: linear-gradient(135deg, #7e1a12 0%, #000 100%);
          display: flex; flex-direction: column; justify-content: center;
          padding: 8rem 4rem 5rem;
          position: relative; z-index: 10;
          animation: fadeUpFruit 0.7s ease both;
        }

        .hero-right-fruit {
          width: 55%;
          position: relative;
          overflow: hidden;
          animation: fadeInFruit 0.9s ease both;
        }
        .hero-right-fruit img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
          transition: transform 8s ease;
        }
        .hero-right-fruit:hover img { transform: scale(1.04); }
        
        .hero-right-overlay-fruit {
          position: absolute; inset: 0;
          background: linear-gradient(to right, #000 0%, rgba(0,0,0,0.18) 40%, transparent 100%);
          z-index: 2;
        }

        .hero-eyebrow-fruit {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #9ef295;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 99px;
          padding: 6px 16px;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .hero-title-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(42px, 5.5vw, 72px);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero-title-fruit em {
          font-style: normal;
          color: #9ef295;
        }

        .hero-desc-fruit {
          font-size: 15px; line-height: 1.8;
          color: rgba(255,255,255,0.65);
          max-width: 380px;
          margin-bottom: 2rem;
        }

        .hero-specs-strip-fruit {
          display: flex; gap: 2rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-spec-item-fruit { display: flex; flex-direction: column; gap: 3px; }
        .hero-spec-val-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: 24px; font-weight: 700;
          color: #9ef295;
        }
        .hero-spec-lbl-fruit {
          font-size: 10px; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(255,255,255,0.4);
        }

        .btn-primary-fruit {
          background: #0d631b;
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 99px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          display: inline-block;
        }
        .btn-primary-fruit:hover { background: #fff; color: #0d631b; transform: translateY(-1px); }
        
        .btn-ghost-fruit {
          color: rgba(255,255,255,0.6);
          font-size: 13px; font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 1px;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }
        .btn-ghost-fruit:hover { color: #9ef295; }

        /* ── ATTRIBUTES ── */
        .section-fruit {
          padding: 5rem 5rem;
          background: #ffffff;
          animation: fadeUpFruit 0.7s ease both;
        }
        .section-header-fruit {
          display: flex; align-items: baseline; gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .section-title-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: 30px; font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text);
        }
        .section-rule-fruit {
          flex: 1; height: 1px;
          background: rgba(90, 50, 30, 0.15);
        }

        .badges-grid-fruit {
          display: flex; flex-wrap: wrap; gap: 10px;
          margin-bottom: 3rem;
        }
        .badge-fruit {
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--peel-dark);
          background: var(--peel-light);
          border: 1px solid rgba(201,75,30,0.2);
          padding: 6px 16px;
          border-radius: 99px;
        }

        /* ── SPECS GRID ── */
        .specs-grid-fruit {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border-med);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .spec-cell-fruit {
          padding: 1.5rem 1.5rem 1.8rem;
          background: var(--white);
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .spec-cell-fruit:last-child { border-right: none; }
        .spec-cell-fruit:hover { background: #FFF8F5; }
        
        .spec-label-fruit {
          font-size: 10px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--text-muted);
          margin-bottom: 10px;
        }
        .spec-value-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: 20px; font-weight: 600;
          color: var(--text);
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .spec-note-fruit {
          font-size: 11px; color: var(--text-muted);
        }

        /* ── STORY STRIP ── */
        .story-strip-fruit {
          background: var(--peel-dark);
          padding: 4rem 5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .story-strip-fruit h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 600; color: #fff;
          line-height: 1.2; letter-spacing: -0.02em;
        }
        .story-strip-fruit h2 em { font-style: normal; color: #FAC775; }
        .story-strip-fruit p {
          font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.72);
          margin-top: 1rem;
        }
        
        .story-facts-fruit {
          display: flex; flex-direction: column; gap: 1.25rem;
        }
        .story-fact-fruit {
          display: flex; align-items: flex-start; gap: 1rem;
        }
        .fact-num-fruit {
          font-family: 'Outfit', sans-serif;
          font-size: 32px; font-weight: 700;
          color: #FAC775;
          line-height: 1;
          min-width: 64px;
        }
        .fact-desc-fruit {
          font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.75);
          padding-top: 4px;
        }

        /* ── FEATURES ── */
        .features-grid-fruit {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .feature-card-fruit {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.75rem;
          transition: border-color 0.2s, transform 0.2s;
        }
        .feature-card-fruit:hover {
          border-color: rgba(201,75,30,0.3);
          transform: translateY(-3px);
        }
        .feature-icon-fruit {
          width: 44px; height: 44px;
          background: var(--peel-light);
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
        }
        .feature-card-fruit h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 17px; font-weight: 600;
          color: var(--text);
          margin-bottom: 8px;
        }
        .feature-card-fruit p {
          font-size: 13px; line-height: 1.7;
          color: var(--text-mid);
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUpFruit {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInFruit {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .hero-fruit { flex-direction: column; min-height: auto; }
          .hero-left-fruit { width: 100%; padding: 6rem 2rem 3rem; }
          .hero-right-fruit { width: 100%; min-height: 340px; }
          .section-fruit { padding: 3rem 2rem; }
          .specs-grid-fruit { grid-template-columns: repeat(2, 1fr); }
          .spec-cell-fruit:nth-child(2) { border-right: none; }
          .spec-cell-fruit:nth-child(3) { border-right: 1px solid var(--border); border-top: 1px solid var(--border); }
          .spec-cell-fruit:nth-child(4) { border-right: none; border-top: 1px solid var(--border); }
          .story-strip-fruit { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 2rem; }
          .features-grid-fruit { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="fruit-page-body">
        {/* HERO */}
        <section className="hero-fruit">
          {/* LEFT 45% */}
          <div className="hero-left-fruit">
            <div className="hero-eyebrow-fruit">Pioneer in Whole Fruit</div>
            <h1 className="hero-title-fruit">Pomegranate<br /><em>Fruit</em></h1>
            <p className="hero-desc-fruit">
              Sourced exclusively from captive and contract farms, our whole Bhagwa pomegranates are globally MRL compliant and fully traceable from seedling to shipping carton.
            </p>

            <div className="hero-specs-strip-fruit">
              <div className="hero-spec-item-fruit">
                <span className="hero-spec-val-fruit">90d</span>
                <span className="hero-spec-lbl-fruit">Shelf Life</span>
              </div>
              <div className="hero-spec-item-fruit">
                <span className="hero-spec-val-fruit">365</span>
                <span className="hero-spec-lbl-fruit">Days Supply</span>
              </div>
              <div className="hero-spec-item-fruit">
                <span className="hero-spec-val-fruit">0</span>
                <span className="hero-spec-lbl-fruit">Residues</span>
              </div>
            </div>

            <div className="hero-actions-fruit">
              <a href="#contact" className="btn-primary-fruit mr-4">Request Spec</a>
              <a href="#attributes" className="btn-ghost-fruit">View Specs</a>
            </div>
          </div>

          {/* RIGHT 55% */}
          <div className="hero-right-fruit">
            <img
              src="/pomegranate_3d.png"
              alt="Whole export-grade Bhagwa pomegranate fruit"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800?text=Pomegranate+Fruit' }}
            />
            <div className="hero-right-overlay-fruit"></div>
          </div>
        </section>

        {/* GLOBAL EXPORT STANDARDS / BENTO SECTION */}
        <section className="py-20 px-6 md:px-12 w-full text-left" style={{ backgroundColor: '#faf9f5' }} id="attributes">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-800 mb-10 font-sans">
              Product <span className="text-[#0d631b]">Overview</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: 4 Grid Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Card 1: Global MRL Compliant */}
                <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-zinc-100 flex flex-col gap-5 text-left">
                  <div className="w-10 h-10 bg-[#0d631b]/8 rounded-xl flex items-center justify-center text-[#0d631b]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg mb-2">Global MRL Compliant</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">Adhering to the strictest international residue limits for safe consumption.</p>
                  </div>
                </div>

                {/* Card 2: Full Traceability */}
                <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-zinc-100 flex flex-col gap-5 text-left">
                  <div className="w-10 h-10 bg-[#0d631b]/8 rounded-xl flex items-center justify-center text-[#0d631b]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="1.2" opacity="0.3"/>
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 2v7M12 15v7M2 12h7M15 12h7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg mb-2">Full Traceability</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">Complete digital record from seedling to final delivery box.</p>
                  </div>
                </div>

                {/* Card 3: Export Ready */}
                <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-zinc-100 flex flex-col gap-5 text-left">
                  <div className="w-10 h-10 bg-[#0d631b]/8 rounded-xl flex items-center justify-center text-[#0d631b]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 17h20M2 12h20M5 12v5M19 12v5M10 7l2-2 2 2M12 5v7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg mb-2">Export Ready</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">Specially treated and packed for long-distance international transit.</p>
                  </div>
                </div>

                {/* Card 4: Audit-Ready */}
                <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-zinc-100 flex flex-col gap-5 text-left">
                  <div className="w-10 h-10 bg-[#0d631b]/8 rounded-xl flex items-center justify-center text-[#0d631b]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg mb-2">Audit-Ready</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">Instant documentation access for distributors and retail chains.</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Dispatch Windows & Supply Capability */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Dispatch Windows Card */}
                <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-zinc-100 text-left">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] block mb-8">Dispatch Windows</span>
                  <div className="grid grid-cols-4 gap-4">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                      const isActive = ['Jan', 'Feb', 'Mar', 'Jul', 'Aug', 'Sep', 'Dec'].includes(month);
                      return (
                        <div
                          key={month}
                          className={`aspect-square rounded-2xl flex items-center justify-center text-xs font-bold transition-all shadow-[0_4px_12px_rgba(0,0,0,0.02)] ${
                            isActive
                              ? 'bg-[#7e1a12] text-white shadow-[0_8px_16px_rgba(126,26,18,0.2)]'
                              : 'bg-white text-zinc-300 border border-zinc-100'
                          }`}
                        >
                          {month}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Supply Capability Card */}
                <div className="bg-[#0d631b] p-8 rounded-[2rem] text-white text-left relative overflow-hidden flex flex-col gap-3 shadow-[0_12px_24px_rgba(13,99,27,0.15)]">
                  {/* Decorative circle overlay */}
                  <div className="absolute right-0 top-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8"></div>
                  <div className="absolute right-6 bottom-0 w-32 h-32 bg-white/5 rounded-full -mr-4 -mb-16"></div>
                  
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] block">Supply Capability</span>
                  <h3 className="text-3xl font-extrabold font-sans">365 Days</h3>
                  <p className="text-white/80 text-xs font-normal leading-relaxed">Continuous year-round availability for global partners.</p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* STORY STRIP */}
        <section className="story-strip-fruit" id="story">
          <div>
            <h2>World-class<br /><em>export grade</em><br />whole fruit sourcing.</h2>
            <p>
              Our farms adhere to strict international horticultural standards. Using automated sorting and grading, we ensure each fruit meets exact size, color, and cosmetic criteria for premium retail displays.
            </p>
          </div>
          <div className="story-facts-fruit">
            <div className="story-fact-fruit">
              <div className="fact-num-fruit">100%</div>
              <div className="fact-desc-fruit">Traceability with complete digital audit trails from farm to delivery box</div>
            </div>
            <div className="story-fact-fruit">
              <div className="fact-num-fruit">7</div>
              <div className="fact-desc-fruit">Sourcing windows across peak regions for continuous availability</div>
            </div>
            <div className="story-fact-fruit">
              <div className="fact-num-fruit">#1</div>
              <div className="fact-desc-fruit">Choice for wholesale fruit importers in EU, UK, and Asia</div>
            </div>
          </div>
        </section>




        {/* CTA STRIP */}
        <section id="contact" className="py-20 text-center border-t border-zinc-200" style={{ background: '#FAF7F2' }}>
          <div className="max-w-xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C94B1E] mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1410] mb-4 leading-tight">Ready to source at scale?</h2>
            <p className="text-sm md:text-base text-[#5c4a3a] mb-10">Request a sample kit or bulk pricing. Our team responds within 24 hours.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:sales@samagrigroup.com" className="btn-primary-fruit">Request a Sample</a>
              <a href="tel:+910000000000" className="btn-ghost-fruit text-[#5c4a3a] border-zinc-400 self-center">+91 00000 00000</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PomegranateFruit
