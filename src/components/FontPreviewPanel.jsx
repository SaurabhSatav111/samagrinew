import React, { useState, useEffect } from 'react';

// Font Lists by Category
const SANS_SERIF = [
  "Inter", "Poppins", "Manrope", "DM Sans", "Outfit", "Plus Jakarta Sans", "Urbanist", "Nunito", "Rubik", 
  "Montserrat", "Work Sans", "Public Sans", "Lato", "Open Sans", "Source Sans 3", "Figtree", "Onest", 
  "Sora", "Space Grotesk", "Be Vietnam Pro", "Lexend", "Archivo", "Karla", "Mulish", "Assistant", "Hind", 
  "Hind Siliguri", "IBM Plex Sans", "IBM Plex Serif", "Noto Sans", "Noto Serif", "Oxygen", "Quicksand", 
  "Raleway", "Readex Pro", "Red Hat Display", "Red Hat Text", "Schibsted Grotesk", "Signika", "Sofia Sans", 
  "Ubuntu", "Varela Round", "Cabin", "Catamaran", "Exo 2", "Heebo", "Josefin Sans", "M PLUS Rounded 1c", 
  "Prompt", "Sen", "Teko", "Titillium Web", "Asap", "Barlow", "Barlow Condensed", "Barlow Semi Condensed", 
  "Commissioner", "Dosis", "Encode Sans", "Epilogue", "Gabarito", "Host Grotesk", "Instrument Sans", 
  "Maven Pro", "Overpass", "Rethink Sans", "Syne", "Teachers", "Zain"
];

const SERIF = [
  "Merriweather", "Playfair Display", "Libre Baskerville", "Lora", "Cormorant Garamond", "Cormorant", 
  "Crimson Pro", "EB Garamond", "Spectral", "Bitter", "Alegreya", "Arvo", "Cardo", "Domine", "Fraunces", 
  "Libre Caslon Text", "Newsreader", "PT Serif", "Vollkorn", "Prata", "Alice"
];

const FRIENDLY_ORGANIC = [
  "Nunito Sans", "Comfortaa", "Baloo 2", "Righteous", "M PLUS 1", "Cabin", "Asap", "Rubik", 
  "Quattrocento Sans", "Hind Madurai", "Alegreya Sans", "Albert Sans", "Chivo", "Chivo Mono", 
  "Fira Sans", "Jost", "Kumbh Sans", "Manjari", "Spline Sans", "Yantramanav"
];

const DISPLAY_FONTS = [
  "Archivo Black", "Bebas Neue", "Bricolage Grotesque", "Anton", "Oswald", "Alfa Slab One", 
  "Fjalla One", "Kanit", "League Spartan", "Rokkitt", "Saira", "Saira Condensed", "Staatliches", 
  "Teko", "Unbounded"
];

// Original default fonts of the website
const ORIGINAL_HEADING = "DM Serif Display";
const ORIGINAL_BODY = "Inter";

const FontPreviewPanel = () => {
  // Read initial states from localStorage
  const [headingFont, setHeadingFont] = useState(() => {
    return localStorage.getItem('dev-heading-font') || ORIGINAL_HEADING;
  });
  const [bodyFont, setBodyFont] = useState(() => {
    return localStorage.getItem('dev-body-font') || ORIGINAL_BODY;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Dynamic Google Font Loader
  const loadFont = (fontFamily) => {
    if (!fontFamily) return;
    const formattedFont = fontFamily.replace(/\s+/g, '+');
    const linkId = `gfont-${formattedFont}`;
    
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      
      // Load Display fonts with default weights, others with comprehensive weights
      if (DISPLAY_FONTS.includes(fontFamily) || fontFamily === ORIGINAL_HEADING) {
        link.href = `https://fonts.googleapis.com/css2?family=${formattedFont}&display=swap`;
      } else {
        link.href = `https://fonts.googleapis.com/css2?family=${formattedFont}:wght@300;400;500;600;700;800&display=swap`;
      }
      document.head.appendChild(link);
    }
  };

  // Load selected fonts whenever they change
  useEffect(() => {
    loadFont(headingFont);
    localStorage.setItem('dev-heading-font', headingFont);
  }, [headingFont]);

  useEffect(() => {
    loadFont(bodyFont);
    localStorage.setItem('dev-body-font', bodyFont);
  }, [bodyFont]);

  const handleReset = () => {
    setHeadingFont(ORIGINAL_HEADING);
    setBodyFont(ORIGINAL_BODY);
  };

  const handleCopy = () => {
    const textToCopy = `Heading: ${headingFont}\nBody: ${bodyFont}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Safe font-family strings with generic fallbacks
  const headingFamilyString = `'${headingFont}', Georgia, serif`;
  const bodyFamilyString = `'${bodyFont}', system-ui, -apple-system, sans-serif`;

  return (
    <>
      {/* Dynamic Style Injection */}
      <style>{`
        :root {
          --heading-font-preview: ${headingFamilyString};
          --body-font-preview: ${bodyFamilyString};
        }

        /* Apply body font to general content */
        body, p, span, a, button, input, textarea, select, li, label, 
        .font-sans, .navbar-h, .mobile-links-h, .glass-footer, 
        .fruit-page-body, .pmg-body, .iqf-page-body {
          font-family: var(--body-font-preview) !important;
        }

        /* Apply heading font to headings, classes, and their children */
        h1, h2, h3, h4, h5, h6, .serif, .font-serif, .logo-main, 
        .hero-title-fruit, .hero-title-pmg, .hero-title-iqf, 
        .story-strip-fruit h2, .story-strip-pmg h2, .story-strip-iqf h2,
        h1 *, h2 *, h3 *, h4 *, h5 *, h6 *, .serif *, .font-serif *, .logo-main *,
        .hero-title-fruit *, .hero-title-pmg *, .hero-title-iqf *,
        .story-strip-fruit h2 *, .story-strip-pmg h2 *, .story-strip-iqf h2 * {
          font-family: var(--heading-font-preview) !important;
        }

        /* Specifically handle SVGs and mapping layers */
        svg text {
          font-family: var(--body-font-preview) !important;
        }
      `}</style>

      {/* Floating Panel Container */}
      <div 
        className={`fixed top-24 right-0 z-[99999] transition-all duration-300 ease-in-out font-sans ${
          isOpen ? 'translate-x-0' : 'translate-x-[calc(100%-48px)]'
        }`}
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        <div className="flex items-start">
          {/* Collapse/Expand Toggle Tab */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-l-xl shadow-lg hover:bg-emerald-700 transition-colors focus:outline-none"
            aria-label="Toggle Font Panel"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            )}
          </button>

          {/* Actual Panel Box */}
          <div className="w-80 bg-zinc-900/95 text-zinc-100 p-5 rounded-r-xl rounded-bl-xl shadow-2xl border border-zinc-800 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <div>
                <h4 className="text-sm font-bold tracking-wider text-emerald-400 uppercase">Font Preview</h4>
                <p className="text-[10px] text-zinc-400">Developer Testing Utility</p>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-emerald-500/25">
                Active
              </span>
            </div>

            {/* Heading Font Dropdown */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Heading Font
              </label>
              <select
                value={headingFont}
                onChange={(e) => setHeadingFont(e.target.value)}
                className="w-full bg-zinc-800 text-zinc-100 text-xs border border-zinc-700 rounded-lg p-2.5 outline-none focus:border-emerald-500 transition-colors"
              >
                <optgroup label="Original Default">
                  <option value={ORIGINAL_HEADING}>{ORIGINAL_HEADING}</option>
                </optgroup>
                <optgroup label="Modern Sans-Serif">
                  {SANS_SERIF.map((f) => <option key={`h-sans-${f}`} value={f}>{f}</option>)}
                </optgroup>
                <optgroup label="Elegant Serif">
                  {SERIF.map((f) => <option key={`h-serif-${f}`} value={f}>{f}</option>)}
                </optgroup>
                <optgroup label="Friendly / Organic">
                  {FRIENDLY_ORGANIC.map((f) => <option key={`h-friendly-${f}`} value={f}>{f}</option>)}
                </optgroup>
                <optgroup label="Display Fonts (Headings only)">
                  {DISPLAY_FONTS.map((f) => <option key={`h-display-${f}`} value={f}>{f}</option>)}
                </optgroup>
              </select>
            </div>

            {/* Body Font Dropdown */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Body Font
              </label>
              <select
                value={bodyFont}
                onChange={(e) => setBodyFont(e.target.value)}
                className="w-full bg-zinc-800 text-zinc-100 text-xs border border-zinc-700 rounded-lg p-2.5 outline-none focus:border-emerald-500 transition-colors"
              >
                <optgroup label="Original Default">
                  <option value={ORIGINAL_BODY}>{ORIGINAL_BODY}</option>
                </optgroup>
                <optgroup label="Modern Sans-Serif">
                  {SANS_SERIF.map((f) => <option key={`b-sans-${f}`} value={f}>{f}</option>)}
                </optgroup>
                <optgroup label="Elegant Serif">
                  {SERIF.map((f) => <option key={`b-serif-${f}`} value={f}>{f}</option>)}
                </optgroup>
                <optgroup label="Friendly / Organic">
                  {FRIENDLY_ORGANIC.map((f) => <option key={`b-friendly-${f}`} value={f}>{f}</option>)}
                </optgroup>
              </select>
            </div>

            {/* Selection Display */}
            <div className="bg-zinc-950/60 rounded-lg p-3 mb-4 text-[11px] font-mono border border-zinc-800">
              <div className="flex justify-between mb-1">
                <span className="text-zinc-500">Heading:</span>
                <span className="text-emerald-400 font-semibold">{headingFont}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Body:</span>
                <span className="text-emerald-400 font-semibold">{bodyFont}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold py-2 px-3 rounded-lg border border-zinc-700 transition-all focus:outline-none flex items-center justify-center gap-1.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
                </svg>
                Reset
              </button>
              
              <button
                onClick={handleCopy}
                className={`flex-1 text-xs font-semibold py-2 px-3 rounded-lg transition-all focus:outline-none flex items-center justify-center gap-1.5 ${
                  copied 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md'
                }`}
              >
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy Choice
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FontPreviewPanel;
