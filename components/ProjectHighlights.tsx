'use client'

import { useInView } from 'react-intersection-observer'
import { MapPin, Maximize, Building2, Car } from 'lucide-react'

const ProjectHighlights = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const highlights = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Plot No. 9, Tipu Extension, Bahria Town Lahore',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Maximize,
      label: 'Area',
      value: '5 Kanal',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Building2,
      label: 'Structure',
      value: 'Ground + 14 Floors',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Car,
      label: 'Basement Parking',
      value: '2 Dedicated Levels',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section id="project" className="section-padding relative overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span
              className={`inline-block text-gold-400 font-bold text-lg mb-4 transition-all duration-700 drop-shadow-lg ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Our Flagship Project
            </span>
            <h2
              className={`heading-lg text-white mb-6 transition-all duration-700 delay-100 drop-shadow-lg ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Project Overview
            </h2>
            <p
              className={`text-lg md:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-200 drop-shadow-md font-medium ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Located at Plot No. 9 in the Tipu Extension — the newly emerging downtown of Bahria Town Lahore — this landmark development redefines upscale urban living.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`glass-effect rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-700 border border-white/20 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300`}>
                  <highlight.icon className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <div className="text-gray-200 text-sm mb-2 font-medium drop-shadow-md">{highlight.label}</div>
                <div className="text-white font-bold text-lg drop-shadow-md">{highlight.value}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div
            className={`glass-effect rounded-3xl p-8 md:p-12 transition-all duration-700 delay-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-500 to-primary-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: 'url("/buidling.jpg")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/90 backdrop-blur-md border border-green-400/50 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      <span className="text-white font-semibold text-sm drop-shadow-md">Under Construction</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                  A Landmark Architectural Marvel
                </h3>
                <p className="text-gray-100 leading-relaxed mb-6 text-lg drop-shadow-md">
                  Spanning a prime <strong className="text-gold-400 font-bold">5-kanal corner plot</strong>, the project is poised to become a high-rise architectural marvel in one of the most prestigious addresses in the city.
                </p>
                <p className="text-gray-100 leading-relaxed mb-6 text-lg drop-shadow-md">
                  Designed to meet the evolving lifestyle needs of modern residents, the project will rise to <strong className="text-gold-400 font-bold">Ground + 14 floors</strong>, offering a seamless blend of luxury, functionality, and community living.
                </p>
                <p className="text-gray-100 leading-relaxed mb-8 text-lg drop-shadow-md">
                  Set amidst a rapidly developing commercial zone, the project enjoys unmatched connectivity to key areas within Bahria Town and beyond. Its strategic location, paired with high-end features and vibrant surroundings, makes it an ideal choice for investors and residents alike.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Prime Corner Location',
                    'Modern Architecture',
                    'Strategic Connectivity',
                    'High Investment Value',
                    'Luxury Living',
                    'Premium Amenities',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-3 h-3 rounded-full bg-gold-400 group-hover:scale-125 transition-transform shadow-lg"></div>
                      <span className="text-white font-medium drop-shadow-md">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-900 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-gray-100 text-lg mb-6 drop-shadow-md font-medium">
              This development not only promises a premium lifestyle but also positions itself as a valuable asset in Lahore&apos;s ever-growing real estate landscape.
            </p>
            <a href="#contact" className="btn-gold text-lg px-8 py-4 shadow-2xl">
              Schedule a Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHighlights

