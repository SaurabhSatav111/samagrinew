import React, { useState } from 'react';
import indiaMapData from './indiaMapData.json';

const COUNTRIES_LEFT = [
  { name: 'Norway', code: 'no', x: 200, y: 30, desc: 'Scandinavia market with high quality fresh produce demand.' },
  { name: 'Ireland', code: 'ie', x: 180, y: 70, desc: 'Premium export market for fresh whole fruit and arils.' },
  { name: 'USA', code: 'us', x: 160, y: 110, desc: 'Premier market for our fresh pomegranate arils and whole-fruit exports.' },
  { name: 'UK', code: 'gb', x: 140, y: 150, desc: 'Key distribution hub supplying premium fresh produce to major UK retailers.' },
  { name: 'Netherlands', code: 'nl', x: 120, y: 190, desc: 'Strategic cold-chain gateway for our European fresh-produce logistics.' },
  { name: 'Germany', code: 'de', x: 110, y: 230, desc: 'High-quality requirements partner for fresh agricultural supply.' },
  { name: 'Belgium', code: 'be', x: 110, y: 270, desc: 'Core European wholesale market with direct retail channels.' },
  { name: 'France', code: 'fr', x: 120, y: 310, desc: 'Retail and foodservice partnerships across the French premium segment.' },
  { name: 'Switzerland', code: 'ch', x: 140, y: 350, desc: 'Premium market demanding high-compliance agricultural products.' },
  { name: 'Austria', code: 'at', x: 160, y: 390, desc: 'Key central European market for certified fresh produce.' },
  { name: 'Spain', code: 'es', x: 180, y: 430, desc: 'Growing footprint in the Iberian Peninsula fresh-produce sector.' },
  { name: 'Poland', code: 'pl', x: 200, y: 470, desc: 'Key distribution market for Central and Eastern European logistics.' }
];

const COUNTRIES_RIGHT = [
  { name: 'South Korea', code: 'kr', x: 770, y: 30, desc: 'High-growth East Asian market recognizing our safety standards.' },
  { name: 'Hong Kong', code: 'hk', x: 800, y: 78, desc: 'Gateway to South-East Asian premium fresh produce markets.' },
  { name: 'Singapore', code: 'sg', x: 820, y: 126, desc: 'High-density premium retail market for fresh cut coconut chunks and arils.' },
  { name: 'Australia', code: 'au', x: 830, y: 174, desc: 'Premium Southern Hemisphere partner for year-round fresh fruit imports.' },
  { name: 'New Zealand', code: 'nz', x: 830, y: 222, desc: 'Growing market for our shelf-stable and individually quick frozen (IQF) arils.' },
  { name: 'Thailand', code: 'th', x: 820, y: 270, desc: 'Expanding partnership in South-East Asia for tropical processed fruits.' },
  { name: 'UAE', code: 'ae', x: 800, y: 318, desc: 'Primary Middle East distribution hub for our fresh and processed range.' },
  { name: 'Saudi Arabia', code: 'sa', x: 770, y: 366, desc: 'Key GCC market with high volume import capacity for fresh fruits.' },
  { name: 'Qatar', code: 'qa', x: 730, y: 414, desc: 'Premium GCC market demanding high-care certified horticultural products.' },
  { name: 'Egypt', code: 'eg', x: 680, y: 462, desc: 'Key African market for processed fresh agricultural exports.' }
];

const GlobalPresenceMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Nashik and Hyderabad absolute coordinates on our 1000x500 SVG grid
  const mapOffsetX = 377;
  const mapOffsetY = 100;
  const mapScale = 0.42;

  const nashikX = mapOffsetX + 135 * mapScale;
  const nashikY = mapOffsetY + 415 * mapScale;

  const hyderabadX = mapOffsetX + 220 * mapScale;
  const hyderabadY = mapOffsetY + 450 * mapScale;

  // Helper to calculate smooth curved line paths
  const getCurvePath = (startX, startY, endX, endY) => {
    const dx = endX - startX;
    const cp1x = startX + dx * 0.4;
    const cp1y = startY;
    const cp2x = startX + dx * 0.6;
    const cp2y = endY;
    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  };

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dashflow {
          0% {
            stroke-dashoffset: 24;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .connection-curve {
          transition: stroke 0.3s ease, stroke-width 0.3s ease, opacity 0.3s ease;
        }
        .connection-curve.active {
          animation: dashflow 1.2s linear infinite;
        }
        .country-card-g {
          cursor: pointer;
        }
      `}} />

      {/* Interactive Map View (Horizontal scrolling on mobile, full width on desktop) */}
      <div className="relative w-full p-4 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-x-auto scrollbar-none">
        {/* SVG Layer */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 500"
          className="w-full min-w-[850px] lg:min-w-0 h-auto z-10 block"
        >
          {/* 1. Connection Curves */}
          <g>
            {/* Left Group curves starting from Nashik */}
            {COUNTRIES_LEFT.map((c) => {
              const isHovered = hoveredCountry?.code === c.code;
              // Connection point at right side of country card (x + 140, y + 17)
              const curve = getCurvePath(nashikX, nashikY, c.x + 140, c.y + 17);
              return (
                <path
                  key={c.code}
                  d={curve}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  strokeDasharray="6,6"
                  className="connection-curve active"
                  style={{
                    opacity: hoveredCountry ? (isHovered ? 1 : 0.15) : 0.45
                  }}
                />
              );
            })}

            {/* Right Group curves starting from Hyderabad */}
            {COUNTRIES_RIGHT.map((c) => {
              const isHovered = hoveredCountry?.code === c.code;
              // Connection point at left side of country card (x, y + 17)
              const curve = getCurvePath(hyderabadX, hyderabadY, c.x, c.y + 17);
              return (
                <path
                  key={c.code}
                  d={curve}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  strokeDasharray="6,6"
                  className="connection-curve active"
                  style={{
                    opacity: hoveredCountry ? (isHovered ? 1 : 0.15) : 0.45
                  }}
                />
              );
            })}
          </g>

          {/* 2. Map of India */}
          <g transform={`translate(${mapOffsetX}, ${mapOffsetY}) scale(${mapScale})`}>
            {indiaMapData.map((state) => {
              const isHighlighted = state.id === 'mh' || state.id === 'tg';
              return (
                <path
                  key={state.id}
                  id={`global-state-${state.id}`}
                  d={state.d}
                  fill={isHighlighted ? 'rgba(16, 185, 129, 0.18)' : 'rgba(15, 23, 42, 0.03)'}
                  stroke={isHighlighted ? '#10b981' : 'rgba(148, 163, 184, 0.35)'}
                  strokeWidth={isHighlighted ? 1.5 : 0.8}
                />
              );
            })}
          </g>

          {/* 3. Glowing HQ Nodes */}
          {/* Nashik */}
          <g transform={`translate(${nashikX}, ${nashikY})`}>
            <circle r="18" fill="rgba(16, 185, 129, 0.12)" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle r="10" fill="rgba(16, 185, 129, 0.25)" className="animate-pulse" />
            <circle r="7" fill="#0d631b" stroke="#10b981" strokeWidth="1.5" />
            <clipPath id="logo-clip-n">
              <circle r="6" />
            </clipPath>
            <image href="/assets/logo2.png" x="-6" y="-6" height="12" width="12" clipPath="url(#logo-clip-n)" />
          </g>

          {/* Hyderabad */}
          <g transform={`translate(${hyderabadX}, ${hyderabadY})`}>
            <circle r="18" fill="rgba(16, 185, 129, 0.12)" className="animate-ping" style={{ animationDuration: '3.5s' }} />
            <circle r="10" fill="rgba(16, 185, 129, 0.25)" className="animate-pulse" />
            <circle r="7" fill="#0d631b" stroke="#10b981" strokeWidth="1.5" />
            <clipPath id="logo-clip-h">
              <circle r="6" />
            </clipPath>
            <image href="/assets/logo2.png" x="-6" y="-6" height="12" width="12" clipPath="url(#logo-clip-h)" />
          </g>

          {/* 4. Left Group Country Cards */}
          {COUNTRIES_LEFT.map((c) => {
            const isHovered = hoveredCountry?.code === c.code;
            return (
              <g
                key={c.code}
                className="country-card-g"
                onMouseEnter={() => setHoveredCountry(c)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <rect
                  x={c.x}
                  y={c.y}
                  width="140"
                  height="34"
                  rx="10"
                  fill="#ffffff"
                  stroke={isHovered ? '#10b981' : 'rgba(226, 232, 240, 0.8)'}
                  strokeWidth={isHovered ? 1.5 : 1}
                  className="transition-all duration-300"
                  style={{ filter: isHovered ? 'drop-shadow(0 4px 6px rgba(16,185,129,0.1))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.02))' }}
                />
                <image
                  href={`https://flagcdn.com/w40/${c.code}.png`}
                  x={c.x + 12}
                  y={c.y + 10}
                  width="20"
                  height="14"
                  preserveAspectRatio="xMidYMid slice"
                />
                <text
                  x={c.x + 42}
                  y={c.y + 21}
                  fontFamily="'Inter', sans-serif"
                  fontSize="11"
                  fontWeight="700"
                  fill={isHovered ? '#10b981' : '#475569'}
                  className="transition-colors duration-300"
                >
                  {c.name.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* 5. Right Group Country Cards */}
          {COUNTRIES_RIGHT.map((c) => {
            const isHovered = hoveredCountry?.code === c.code;
            return (
              <g
                key={c.code}
                className="country-card-g"
                onMouseEnter={() => setHoveredCountry(c)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <rect
                  x={c.x}
                  y={c.y}
                  width="140"
                  height="34"
                  rx="10"
                  fill="#ffffff"
                  stroke={isHovered ? '#10b981' : 'rgba(226, 232, 240, 0.8)'}
                  strokeWidth={isHovered ? 1.5 : 1}
                  className="transition-all duration-300"
                  style={{ filter: isHovered ? 'drop-shadow(0 4px 6px rgba(16,185,129,0.1))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.02))' }}
                />
                <image
                  href={`https://flagcdn.com/w40/${c.code}.png`}
                  x={c.x + 12}
                  y={c.y + 10}
                  width="20"
                  height="14"
                  preserveAspectRatio="xMidYMid slice"
                />
                <text
                  x={c.x + 42}
                  y={c.y + 21}
                  fontFamily="'Inter', sans-serif"
                  fontSize="11"
                  fontWeight="700"
                  fill={isHovered ? '#10b981' : '#475569'}
                  className="transition-colors duration-300"
                >
                  {c.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default GlobalPresenceMap;
