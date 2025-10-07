'use client'

import { useInView } from 'react-intersection-observer'
import { Shield, TrendingUp, Home, Hotel, Building, DollarSign, CheckCircle, Clock } from 'lucide-react'

const WhyInvest = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const reasons = [
    {
      icon: Shield,
      title: 'Trusted & Authentic Developer',
      description: 'A reliable name built on integrity and professionalism.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Decades of success across multiple industries.',
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: Home,
      title: 'Hassle-Free Ownership',
      description: 'Own fully serviced apartments without the stress.',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: Hotel,
      title: 'Hotel-Style Rental Model',
      description: 'Earn rental income like hotel apartments.',
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      icon: Building,
      title: 'Designated Managed Floors',
      description: 'Select floors managed directly by our team.',
      gradient: 'from-pink-500 to-pink-700',
    },
    {
      icon: TrendingUp,
      title: 'High ROI Potential',
      description: 'Strong returns with long-term investment value.',
      gradient: 'from-indigo-500 to-indigo-700',
    },
    {
      icon: DollarSign,
      title: 'Easy Installment Plans',
      description: 'Pay as construction progresses — stress-free.',
      gradient: 'from-teal-500 to-teal-700',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to on-time project completion.',
      gradient: 'from-red-500 to-red-700',
    },
  ]

  const benefits = [
    'Serviced apartments with strong rental demand',
    'Prime location in rapidly developing area',
    'Flexible payment plans aligned with construction',
    'Professional property management available',
    'High-quality construction and finishes',
    'Secure long-term investment',
  ]

  return (
    <section id="invest" className="section-padding relative overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span
              className={`inline-block text-primary-600 font-semibold mb-4 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Investment Opportunity
            </span>
            <h2
              className={`heading-lg mb-6 transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Why Invest in Al Musawir Developers?
            </h2>
            <p
              className={`text-body max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Trusted name, prime location, high ROI, managed rental units, and easy installments — a secure and rewarding investment opportunity.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="card p-6 h-full text-center relative overflow-hidden">
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:bg-white`}>
                      <reason.icon className="w-8 h-8 text-white group-hover:text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Banner */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-1100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-gold-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Trusted Developer You Can Rely On</h3>
                  <p className="text-white/90">Join a legacy of excellence</p>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Key Investment Benefits
              </h3>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg pt-1">{benefit}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary text-lg px-8 py-4">
                Start Your Investment Journey
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-700 delay-1300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-xl">
              <div className="text-4xl font-bold mb-2">35+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 text-white shadow-xl">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/90">Authentic & Trusted</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-xl">
              <div className="text-4xl font-bold mb-2">High</div>
              <div className="text-white/90">ROI Potential</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-xl">
              <div className="text-4xl font-bold mb-2">Easy</div>
              <div className="text-white/90">Installments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyInvest

