'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#project', label: 'Project' },
    { href: '#invest', label: 'Why Invest?' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#updates', label: 'Updates' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Bahria Town, Lahore</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <a href="mailto:info@almusawirdevelopers.com" className="hover:text-gold-400 transition-colors">
                  info@almusawirdevelopers.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-400" />
              <a href="tel:+6281522542239" className="hover:text-gold-400 transition-colors">
                (+62) 8152 254 239
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect shadow-lg'
            : 'bg-white'
        }`}
      >
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/al-musawir-logo.png" 
                  alt="Al Musawir Developers Logo" 
                  width={64}
                  height={64}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="hidden md:block">
                <div className="font-display font-bold text-lg xl:text-xl text-gray-900">
                  Al Musawir Developers
                </div>
                <div className="text-xs text-gray-600 hidden xl:block">Trusted Name, Trusted Investment</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gold-600 font-medium transition-colors relative group whitespace-nowrap text-sm xl:text-base"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="btn-gold text-sm xl:text-base whitespace-nowrap">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden glass-effect border-t">
            <div className="container-custom py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-gold w-full mt-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header

