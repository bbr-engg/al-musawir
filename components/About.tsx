'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Building, Factory, Award, TrendingUp, Sparkles, Target, Shield, Zap } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    {
      icon: Building,
      title: 'Prime Brother Group',
      description: '30+ years of trusted experience in chemical industry, footwear manufacturing, and construction sectors across Pakistan.',
    },
    {
      icon: Factory,
      title: 'Industry Leadership',
      description: 'Exclusive distributors of Huafon chemicals, delivering major industrial, residential, and commercial projects.',
    },
    {
      icon: Award,
      title: 'Commitment to Excellence',
      description: 'Focused on quality, innovation, and reliability, building a strong legacy across diverse industries.',
    },
    {
      icon: TrendingUp,
      title: 'Al Musawir Developers',
      description: '13+ years delivering high-value residential and commercial developments with transparency and strong returns.',
    },
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-200 mb-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-5 h-5 text-primary-600" />
              <span className="text-primary-600 font-bold">About Us</span>
            </div>
            <h2
              className={`heading-lg mb-6 transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Developer&apos;s History
            </h2>
            <p
              className={`text-body max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Built on decades of excellence and innovation across multiple industries, delivering trusted developments throughout Pakistan.
            </p>
          </div>

          {/* Features Grid - Futuristic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Glass Card */}
                <div className="relative h-full p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Story Sections - Futuristic Layout */}
          <div className="space-y-32">
            {/* Prime Brother Group */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Card */}
                <div className="relative group">
                  {/* Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Photo Container */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500">
                    <div className="relative h-[450px]">
                      <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                        alt="Prime Brother Group"
                        fill
                        className="object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 w-fit">
                          <Target className="w-4 h-4 text-gold-400" />
                          <span className="text-white font-semibold text-sm">30+ Years</span>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-2xl">
                          Prime Brother Group
                        </h3>
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="relative">
                  <div className="relative p-8 lg:p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20"></div>
                    
                    <div className="relative">
                      {/* Icon Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Established Excellence</h4>
                          <p className="text-2xl font-bold text-gray-900">30+ Years</p>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Prime Brother Group has over <strong className="text-primary-700">30 years</strong> of trusted experience in the chemical industry, footwear manufacturing, and construction sectors across Pakistan.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                        As exclusive distributors of <strong className="text-primary-700">Huafon chemicals</strong>, we provide high-quality products while delivering major industrial, residential, and commercial projects in Lahore, Faisalabad, DHA Lahore, and DHA Karachi.
                      </p>

                      {/* Key Points */}
                      <div className="grid grid-cols-2 gap-4">
                        {['Chemical Industry', 'Footwear Manufacturing', 'Construction', 'Huafon Distributor'].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
                            <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm font-semibold text-gray-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Al Musawir Developers */}
            <div
              className={`transition-all duration-1000 delay-900 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content Card - Left Side */}
                <div className="relative lg:order-1">
                  <div className="relative p-8 lg:p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-gold-400 to-primary-500 rounded-full blur-2xl opacity-20"></div>
                    
                    <div className="relative">
                      {/* Icon Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-lg">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Trusted Developer</h4>
                          <p className="text-2xl font-bold text-gray-900">13+ Years</p>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Al Musawir Developers presents a premium <strong className="text-gold-700">high-rise project</strong> in Bahria Town Lahore&apos;s Tipu Extension, featuring luxury amenities, secure basement parking, and easy installment plans.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                        With over <strong className="text-gold-700">13 years</strong> of trusted experience, we deliver high-value residential and commercial developments focused on quality, transparency, and strong investment returns.
                      </p>

                      {/* Key Points */}
                      <div className="grid grid-cols-2 gap-4">
                        {['Luxury Living', 'High-Rise Projects', 'Easy Installments', 'Strong ROI'].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-gold-50 to-primary-50 border border-gold-200">
                            <Sparkles className="w-4 h-4 text-gold-600 flex-shrink-0" />
                            <span className="text-sm font-semibold text-gray-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Card - Right Side */}
                <div className="relative group lg:order-2">
                  {/* Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500 to-primary-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Photo Container */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500">
                    <div className="relative h-[450px]">
                      <Image
                        src="/buidling.jpg"
                        alt="Al Musawir Developers - Premium Building"
                        fill
                        className="object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/90 backdrop-blur-md border border-gold-400/50 mb-4 w-fit shadow-lg">
                          <Building className="w-4 h-4 text-white" />
                          <span className="text-white font-semibold text-sm">Premium Development</span>
                        </div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-2xl">
                          Al Musawir Developers
                        </h3>
                        <div className="h-1 w-32 bg-gradient-to-r from-gold-400 to-primary-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

