import React from 'react'
import { motion } from 'framer-motion'
import { Ship, Truck, Factory, Users, Award, Zap, Globe } from 'lucide-react'

const AboutUs = () => {
  return (
    <div className="about-page text-[#f5f5f5] bg-[#0f0f0f]">
      {/* Title Section */}
      <section className="min-h-[50vh] flex items-center justify-center pt-32 pb-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center animate-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-tight mb-6">
            Pioneering Global <span className="italic text-[#2D5A27] font-serif">Exports</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            A 25-year legacy of delivering India's finest horticulture to the world.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-28 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <img src="/pomegranate.png" alt="Infrastructure" className="rounded-[30px] w-full shadow-2xl border border-zinc-800" />
            </div>
            <div className="space-y-6">
              <h4 className="text-[#2D5A27] font-bold tracking-widest text-xs uppercase">OUR COMPANY</h4>
              <h2 className="text-3xl md:text-5xl font-serif font-black leading-tight text-white">Quality. Innovation. <br/>Trust.</h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Sam Agri group founded in 1996 is a leading integrated exporter of fresh produce from India. Sam Agri is a pioneer in creating new product categories for export from India including fresh pomegranate arils, fresh cut coconut chunks, fresh figs, dried arils etc.
              </p>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                Sam Agri has integrated operations including nursery, captive farms, processing facilities and marketing channels across South India. We are the only fresh cut fruit exporter from India operating from multiple high care processing facilities offering 365 days supplies and better logistics connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Superplum Style Infographic - The Supply Chain */}
      <section className="py-16 md:py-28 px-6 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              From <span className="italic text-[#2D5A27] font-serif">Farm</span> to <span className="italic text-[#2D5A27] font-serif">Global Market</span>
            </h2>
            <p className="text-zinc-400 mt-3 text-sm md:text-base font-sans">Supply chain integration and control</p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
            {/* Horizontal connector line on desktop */}
            <div className="absolute top-[40px] left-[10%] right-[10%] bg-zinc-800 z-0 hidden lg:block" style={{ height: '2px' }}></div>
            {/* Vertical connector line on mobile */}
            <div className="absolute top-[40px] bottom-[40px] left-1/2 -translate-x-1/2 w-[2px] bg-zinc-800 z-0 lg:hidden"></div>

            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Nursery', text: 'Proprietary high-yield seeds' },
              { icon: <Factory className="w-6 h-6" />, title: 'Captive Farms', text: '100% GAP Certified' },
              { icon: <Users className="w-6 h-6" />, title: 'Processing', text: 'ISO 22000 Cleanrooms' },
              { icon: <Ship className="w-6 h-6" />, title: 'Logistics', text: 'Cold-chain management' },
              { icon: <Globe className="w-6 h-6" />, title: 'Global Markets', text: 'UK, EU, USA, UAE' }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 w-full max-w-[240px] lg:w-[18%] text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#1a1a1a] border-2 border-[#2D5A27] rounded-full flex items-center justify-center mb-4 text-[#2D5A27] shadow-xl transition-transform hover:scale-105 duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans px-2">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Milestones Section */}
      <section className="py-16 md:py-28 px-6 bg-[#0a0a0a] relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#2D5A27]/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#7e1a12]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h4 className="text-[#2D5A27] font-bold tracking-widest text-xs uppercase mb-3">OUR JOURNEY</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-black leading-tight text-white">
              Key <span className="italic text-[#9ef295] font-serif">Milestones</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-sm md:text-base font-sans max-w-xl mx-auto">
              A timeline of dedication, scale, and horticulture innovation over three decades.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#2D5A27] via-[#7e1a12] to-[#2D5A27]"></div>

            {/* Timeline Nodes */}
            <div className="space-y-12 lg:space-y-16">
              {[
                { year: '1996', tag: 'Incorporation', desc: 'Incorporation of Sam Agri' },
                { year: '2000', tag: 'Exotics India', desc: 'Started marketing of exotic vegetables in India' },
                { year: '2001', tag: 'Global Launch', desc: 'Commenced export operations' },
                { year: '2005', tag: 'GAP Farms', desc: 'Establishment of captive GAP certified farms' },
                { year: '2006', tag: 'Facility I', desc: 'Established our first high care facility for arils' },
                { year: '2007', tag: 'India First (Arils)', desc: 'Commenced export of arils to international markets' },
                { year: '2009', tag: '100 MT Mark', desc: 'Crossed 100 MT of Pomegranate Arils export in a calendar year' },
                { year: '2010', tag: 'Coconut Export', desc: 'Export of Coconut chunks to international markets' },
                { year: '2014', tag: 'Facility II', desc: 'Expansion of capacity with new facility @ Bangalore' },
                { year: '2016', tag: 'India First (Figs)', desc: 'Fresh Figs to international markets' },
                { year: '2018', tag: '1000 MT Mark', desc: 'Crossed 1000 MT of pomegranate Arils export in a calendar year' },
                { year: '2019', tag: 'Facility III', desc: 'Expansion of capacity with new facility @ Nashik' },
              ].map((milestone, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <div key={idx} className="relative flex flex-col lg:flex-row items-stretch">
                    {/* Spacer / Left side layout */}
                    <div className={`w-full lg:w-1/2 flex justify-start lg:justify-end ${isEven ? 'lg:pr-16 order-2 lg:order-1' : 'order-2 lg:order-2 lg:pl-16'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="w-full max-w-lg bg-[#161616]/75 border border-zinc-800 backdrop-blur-md rounded-3xl p-6 md:p-8 hover:border-[#2D5A27]/50 transition-all duration-300 group ml-8 lg:ml-0"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-3xl md:text-4xl font-black font-sans tracking-tight text-[#9ef295] group-hover:scale-105 transition-transform duration-300">
                            {milestone.year}
                          </span>
                          <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-zinc-400 uppercase tracking-wider">
                            {milestone.tag}
                          </span>
                        </div>
                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                          {milestone.desc}
                        </p>
                      </motion.div>
                    </div>

                    {/* Timeline Node Point */}
                    <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 top-8 w-6 h-6 rounded-full bg-[#161616] border-4 border-[#2D5A27] z-20 group-hover:scale-120 transition-transform duration-300"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Team Section */}
      <section className="py-16 md:py-28 px-6 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h4 className="text-[#2D5A27] font-bold tracking-widest text-xs uppercase mb-3">PEOPLE BEHIND SAM AGRI</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-black leading-tight text-white">
              Leadership <span className="italic text-[#9ef295] font-serif">Team</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-sm md:text-base font-sans max-w-xl mx-auto">
              Meet our team of agri-business experts, innovators, and leaders driving sustainable agriculture globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: 'GVK Naidu',
                role: 'Managing Director',
                image: '/assets/team/gvknaidu.png',
                email: 'gvk.naidu@samagri.com',
                linkedin: 'https://www.linkedin.com/in/gvk-naidu-49263a4/',
                bio: [
                  'Spearheads strategy, growth & diversifications of the group',
                  '30+ years of agri-business experience & serial entrepreneur',
                  'Graduate from UAS, Bangalore'
                ]
              },
              {
                name: 'Priyatham V',
                role: 'CEO',
                image: '/assets/team/priyatham.png',
                email: 'priyatham.jyothish@samagri.com',
                linkedin: 'https://www.linkedin.com/in/priyatham-vankayalapati-1284514/',
                bio: [
                  'Spearheads international marketing & finance of the group',
                  '18+ years of experience in investment banking & agri business',
                  'Graduate from BITS Pilani & MBA from IIM Lucknow'
                ]
              },
              {
                name: 'David Levin',
                role: 'Marketing Director',
                image: '/assets/team/david.png',
                email: 'david.levin@samagri.com',
                linkedin: 'https://www.linkedin.com/in/david-levin-87bb1777/',
                bio: [
                  'Responsible for marketing in Europe & Sourcing from Israel',
                  '35+ years of international fresh produce marketing experience',
                  'Engineering Graduate from Fairleigh Dickinson University, US'
                ]
              },
              {
                name: 'KN Rao',
                role: 'Technical Director',
                image: '/assets/team/knrao.png',
                email: 'knrao@samagri.com',
                linkedin: 'https://www.linkedin.com/in/kakarla-rao-41a3346/',
                bio: [
                  'Responsible for Technology, Research & NPD initiative of the group',
                  '25+ years of experience in farming, high care processing, food safety & hygiene',
                  'Graduate in Agriculture from AP Agriculture University'
                ]
              },
              {
                name: 'Ajay TG',
                role: 'Head – Domestic Business',
                image: '/assets/team/ajay.png',
                email: 'ajay@samagri.com',
                bio: [
                  'Responsible for domestic business division of Sam Agri',
                  '12+ years of experience in hotel, catering & fresh produce industry',
                  'Graduate in Hotel Management & MBA from Christ University'
                ]
              },
              {
                name: 'Suresh Babu',
                role: 'Manager - Finance',
                image: '/assets/team/suresh.png',
                email: 'suresh.babu@samagri.com',
                linkedin: 'https://www.linkedin.com/in/suresh-babu-13064914b/',
                bio: [
                  'Responsible for finance, accounts, banking & logistics of the group',
                  '20+ years of experience in finance & accounting domains',
                  'Graduate in Commerce'
                ]
              },
              {
                name: 'Marcel Bangerter',
                role: 'Marketing Director, Switzerland',
                image: '/assets/team/marcel.png',
                email: 'marcel.bangerter@samagri.com',
                linkedin: 'https://www.linkedin.com/in/marcel-bangerter-96191a109/',
                bio: [
                  'Responsible for marketing of Sam Agri products in Switzerland market',
                  'Founder of suiXtrade GmbH and the Zoë Ray brand',
                  'Has 20+ years of experience in investment banking and fresh produce marketing.'
                ]
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#161616]/75 border border-zinc-800 backdrop-blur-md rounded-3xl overflow-hidden hover:border-[#2D5A27]/50 transition-all duration-500 group flex flex-col h-full"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=' + member.name }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent"></div>
                </div>

                {/* Info Container */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-black text-white mb-1 group-hover:text-[#9ef295] transition-colors">{member.name}</h3>
                    <p className="text-[#2D5A27] font-bold text-xs uppercase tracking-widest mb-6">{member.role}</p>

                    <ul className="space-y-3 mb-8">
                      {member.bio.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9ef295] mt-2 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-zinc-800 pt-6 gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-zinc-500 hover:text-white text-xs font-semibold tracking-wider lowercase flex items-center gap-2 transition-colors break-all"
                    >
                      <i className="fas fa-envelope text-sm text-[#9ef295]"></i>
                      {member.email}
                    </a>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-[#2D5A27] hover:text-white transition-all self-end sm:self-auto"
                      >
                        <i className="fab fa-linkedin-in text-xs"></i>
                      </a>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-zinc-800/30 flex items-center justify-center text-zinc-600 cursor-not-allowed self-end sm:self-auto">
                        <i className="fab fa-linkedin-in text-xs"></i>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="p-6 bg-[#161616] rounded-2xl border border-zinc-800 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D5A27] mb-2">25+</h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-400">Years Experience</p>
            </div>
            <div className="p-6 bg-[#161616] rounded-2xl border border-zinc-800 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D5A27] mb-2">1000mt</h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-400">Annual Exports</p>
            </div>
            <div className="p-6 bg-[#161616] rounded-2xl border border-zinc-800 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D5A27] mb-2">100%</h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-400">Traceability</p>
            </div>
            <div className="p-6 bg-[#161616] rounded-2xl border border-zinc-800 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2D5A27] mb-2">20+</h2>
              <p className="text-xs md:text-sm uppercase tracking-wider text-zinc-400">Countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
