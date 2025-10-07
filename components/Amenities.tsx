'use client'

import { useInView } from 'react-intersection-observer'
import { Waves, Dumbbell, Baby, Utensils, ShoppingCart, Users, Church, Gamepad2 } from 'lucide-react'

const Amenities = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const amenities = [
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'For leisure and recreation',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: Dumbbell,
      title: 'Fully Equipped Gym',
      description: 'Modern fitness center for a healthy lifestyle',
      gradient: 'from-red-400 to-red-600',
    },
    {
      icon: Baby,
      title: "Kids' Play Area",
      description: 'Safe and engaging space for children',
      gradient: 'from-green-400 to-green-600',
    },
    {
      icon: Utensils,
      title: 'Restaurant',
      description: 'Dining convenience with a range of cuisines',
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      icon: ShoppingCart,
      title: 'Mart',
      description: 'Everyday essentials at your doorstep',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      icon: Users,
      title: 'Community Hall',
      description: 'Ideal for social events and gatherings',
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      icon: Church,
      title: 'Mosque',
      description: 'A peaceful place for prayer and reflection',
      gradient: 'from-teal-400 to-teal-600',
    },
    {
      icon: Gamepad2,
      title: 'Paddle Court',
      description: 'Sports and recreation facility',
      gradient: 'from-indigo-400 to-indigo-600',
    },
  ]

  return (
    <section id="amenities" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span
              className={`inline-block text-primary-600 font-semibold mb-4 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              World-Class Facilities
            </span>
            <h2
              className={`heading-lg mb-6 transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Luxury Amenities
            </h2>
            <p
              className={`text-body max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Residents and visitors will enjoy an all-inclusive lifestyle with access to thoughtfully curated amenities, all under one roof.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="card p-6 h-full relative overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${amenity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${amenity.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300`}>
                      <amenity.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${amenity.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div
            className={`mt-16 relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 delay-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800"></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="relative z-10 px-8 py-16 md:py-20 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience Luxury Living Like Never Before
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                All amenities designed with your comfort and lifestyle in mind, creating a perfect environment for you and your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-gold text-lg px-8 py-4">
                  Book Your Apartment
                </a>
                <a href="#updates" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary-700">
                  View Progress
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Amenities

