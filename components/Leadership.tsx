'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Quote, Briefcase, Award, Linkedin, Mail, Phone } from 'lucide-react'

const Leadership = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const leaders = [
    {
      name: 'Shaikh Faisal Maqbool',
      role: 'Chief Executive Officer',
      title: 'CEO',
      image: '/sh-faisal.jpg',
      quote: 'I am dedicated to innovation, integrity, and building a future that reflects excellence in every endeavor.',
      highlights: [
        'Associated with Lahore Chamber of Commerce',
        'CEO of Prime Brother Group & Al-Musawwir Developers',
        'Secured $5M foreign investment from Huafon Chemicals',
        'Strategic partnership with world\'s largest chemical exporter',
      ],
      description: `Shaikh Faisal Maqbool is a well-known business personality associated with the Lahore Chamber of Commerce, recognized for his strategic leadership and deep-rooted expertise in Pakistan's industrial and real estate sectors. Under his visionary leadership, Prime Brother Group has successfully established itself in chemical distribution, footwear manufacturing, and construction.`,
      expertise: ['Strategic Leadership', 'Industrial Development', 'Foreign Investment', 'Business Innovation'],
      experience: '30+',
    },
    {
      name: 'Ali Imran Shaikh',
      role: 'Director Projects',
      title: 'Director',
      image: '/ali-imran.jpg',
      quote: 'With a deep passion for real estate, I strive to deliver projects that reflect trust, quality, and long-term value.',
      highlights: [
        '13+ years experience in DHA & Bahria Town Karachi',
        'Master\'s degree from Karachi',
        'Registered dealer of Bahria Town Karachi',
        'Committee member & coordinator in Bahria Town',
      ],
      description: `Ali Imran Shaikh is a seasoned real estate professional with over 13 years of experience in managing high-value residential and commercial projects. With a Master's degree from Karachi, he has built a strong reputation for delivering quality developments through strategic planning and market expertise.`,
      expertise: ['Project Management', 'Real Estate Development', 'Strategic Planning', 'Market Analysis'],
      experience: '13+',
    },
  ]

  return (
    <section id="leadership" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span
              className={`inline-block text-gold-600 font-bold text-lg mb-4 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              ⭐ Leadership Team
            </span>
            <h2
              className={`heading-lg mb-6 transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Visionary Leaders
            </h2>
            <p
              className={`text-body max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Meet the experienced professionals driving innovation and excellence in every project we undertake.
            </p>
          </div>

          {/* Leaders - Futuristic Layout */}
          <div className="space-y-32 mb-20">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${300 + index * 300}ms` }}
              >
                {/* Futuristic Card Container */}
                <div className={`relative ${index % 2 === 0 ? '' : 'flex flex-row-reverse'}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center">
                    
                    {/* Photo Section - Floating Card */}
                    <div className={`relative ${index % 2 === 0 ? '' : 'lg:order-2'}`}>
                      {/* Glowing Background Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-primary-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                      
                      {/* Main Photo Card */}
                      <div className="relative group">
                        {/* 3D Transform Container */}
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-gold-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                          {/* Photo */}
                          <div className="relative h-[550px] lg:h-[650px]">
                            <Image
                              src={leader.image}
                              alt={leader.name}
                              fill
                              className={`object-cover ${index === 0 ? 'object-center' : 'object-top'}`}
                            />
                            
                            {/* Animated Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            
                            {/* Glassmorphic Overlay Elements */}
                            <div className="absolute inset-0">
                              {/* Top Corner - Experience Badge */}
                              <div className="absolute top-8 left-8">
                                <div className="relative group/badge">
                                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl blur-lg opacity-50 group-hover/badge:opacity-100 transition-opacity"></div>
                                  <div className="relative px-6 py-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-xl">
                                    <div className="text-xs text-white/80 font-semibold uppercase tracking-wider">Experience</div>
                                    <div className="text-2xl font-bold text-white mt-1">{leader.experience}</div>
                                    <div className="text-xs text-white/60">Years</div>
                                  </div>
                                </div>
                              </div>

                              {/* Top Right - Role Badge */}
                              <div className="absolute top-8 right-8">
                                <div className="relative group/role">
                                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full blur-lg opacity-50 group-hover/role:opacity-100 transition-opacity"></div>
                                  <div className="relative px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 shadow-xl">
                                    <div className="text-sm font-bold text-white uppercase tracking-wider">{leader.title}</div>
                                  </div>
                                </div>
                              </div>

                              {/* Bottom - Info Panel */}
                              <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="relative">
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent blur-xl"></div>
                                  <div className="relative">
                                    {/* Role Pill */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
                                      <Briefcase className="w-4 h-4 text-gold-400" />
                                      <span className="text-white font-semibold text-sm">{leader.role}</span>
                                    </div>
                                    
                                    {/* Name */}
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-2xl">
                                      {leader.name}
                                    </h3>
                                    
                                    {/* Animated Underline */}
                                    <div className="h-1 w-24 bg-gradient-to-r from-gold-400 to-primary-500 rounded-full"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Floating Info */}
                    <div className={`relative mt-8 lg:mt-0 ${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                      {/* Glassmorphic Content Card */}
                      <div className="relative p-8 lg:p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold-400 to-primary-500 rounded-full blur-2xl opacity-20"></div>
                        
                        <div className="relative">
                          {/* Quote Section */}
                          <div className="mb-8">
                            <Quote className="w-12 h-12 text-gold-400 mb-4 opacity-50" />
                            <blockquote className="text-xl lg:text-2xl font-display italic text-gray-800 leading-relaxed">
                              &ldquo;{leader.quote}&rdquo;
                            </blockquote>
                          </div>

                          {/* Description */}
                          <p className="text-gray-700 leading-relaxed mb-8 text-base lg:text-lg">
                            {leader.description}
                          </p>

                          {/* Expertise Section */}
                          <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                                <Award className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Core Expertise</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {leader.expertise.map((skill, sIndex) => (
                                <div
                                  key={sIndex}
                                  className="group/skill relative overflow-hidden px-4 py-3 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-gold-400 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-gold-400/10 to-primary-500/0 opacity-0 group-hover/skill:opacity-100 transition-opacity"></div>
                                  <div className="relative text-sm font-semibold text-gray-800 group-hover/skill:text-primary-700 transition-colors">
                                    {skill}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Highlights */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                                <Award className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Key Achievements</h4>
                            </div>
                            <div className="space-y-3">
                              {leader.highlights.slice(0, 3).map((highlight, hIndex) => (
                                <div key={hIndex} className="flex items-start gap-3 group/item">
                                  <div className="relative flex-shrink-0 mt-1">
                                    <div className="absolute inset-0 bg-gold-400 rounded-full blur-sm opacity-50 group-hover/item:opacity-100 transition-opacity"></div>
                                    <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                                      <span className="text-white text-xs font-bold">{hIndex + 1}</span>
                                    </div>
                                  </div>
                                  <p className="text-gray-700 leading-relaxed pt-0.5">{highlight}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100">
              <div className="text-4xl font-bold text-primary-700 mb-2">30+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100">
              <div className="text-4xl font-bold text-gold-700 mb-2">$5M+</div>
              <div className="text-gray-600">Foreign Investment Secured</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100">
              <div className="text-4xl font-bold text-primary-700 mb-2">100%</div>
              <div className="text-gray-600">Commitment to Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership

