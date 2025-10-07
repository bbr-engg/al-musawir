'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 relative flex items-center justify-center">
                <Image 
                  src="/al-musawir-logo.png" 
                  alt="Al Musawir Developers Logo" 
                  width={64}
                  height={64}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="font-display font-bold text-xl">
                Al Musawir
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Al Musawir Developers presents a premium high-rise project in Bahria Town Lahore featuring luxury amenities, secure basement parking, and easy installment plans.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-gold-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#project" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Project Highlights
                </a>
              </li>
              <li>
                <a href="#invest" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Why Invest?
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#updates" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Construction Update
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-gold-400">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#leadership" className="text-gray-300 hover:text-gold-400 transition-colors">
                  CEO
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Director Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  About Developer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-gold-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <a href="tel:+6281522542239" className="text-gray-300 hover:text-gold-400 transition-colors">
                  (+62) 8152 254 239
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@almusawirdevelopers.com" className="text-gray-300 hover:text-gold-400 transition-colors break-all">
                  info@almusawirdevelopers.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Bahria Town, Lahore
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Copyright 2025 © Al-Musawwir Developers | Powered by DMT Lahore
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gold-500 hover:bg-gold-600 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

