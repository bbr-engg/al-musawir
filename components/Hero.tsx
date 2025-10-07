'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Building2, Award, TrendingUp } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Building2, value: '39+', label: 'Years Of Experience' },
    { icon: Award, value: '100%', label: 'Satisfaction Guarantee' },
    { icon: TrendingUp, value: 'High ROI', label: 'Investment Returns' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Your Building */}
      <div className="absolute inset-0 z-0">
        {/* Your Building Image - Zoomed & Stretched */}
        <div className="absolute inset-0 scale-125 transform">
          <Image
            src="/buidling.jpg"
            alt="Al Musawir Developers Premium Building"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Dramatic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 z-10"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border-2 border-gold-400/50 mb-8 transition-all duration-1000 shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="text-gold-400 font-semibold text-sm md:text-base drop-shadow-md">⭐ Premium High-Rise Development</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`heading-xl text-white mb-6 transition-all duration-1000 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Al Musawir Developers
          </h1>

          {/* Subheading */}
          <p
            className={`text-2xl md:text-3xl lg:text-4xl font-display text-gold-400 mb-6 transition-all duration-1000 delay-300 drop-shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ textShadow: '0 2px 10px rgba(251, 191, 36, 0.5)' }}
          >
            Trusted Name, Trusted Investment
          </p>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-450 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experience luxury living in Bahria Town Lahore's Tipu Extension. 
            Premium apartments with world-class amenities, secure parking, and flexible payment plans.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a href="#project" className="btn-gold text-lg px-8 py-4 w-full sm:w-auto">
              Explore Our Project
            </a>
            <a href="#contact" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-750 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-gold-400/20"
              >
                <stat.icon className="w-10 h-10 text-gold-400 mx-auto mb-3 drop-shadow-lg" />
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">{stat.value}</div>
                <div className="text-gray-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors drop-shadow-lg">
          <span className="text-sm font-semibold">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}

export default Hero

