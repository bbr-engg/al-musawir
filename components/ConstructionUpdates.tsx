'use client'

import { useInView } from 'react-intersection-observer'
import { Calendar, CheckCircle, HardHat } from 'lucide-react'

const ConstructionUpdates = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const updates = [
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      title: 'Foundation Complete',
      date: 'Phase 1',
      description: 'Strong foundation work successfully completed with quality materials.',
      status: 'completed',
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      title: 'Structure Development',
      date: 'Phase 2',
      description: 'Structural development progressing rapidly with quality construction.',
      status: 'in-progress',
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      title: 'Basement Parking',
      date: 'Phase 3',
      description: 'Two dedicated basement parking levels under construction.',
      status: 'in-progress',
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      title: 'Floor Construction',
      date: 'Phase 4',
      description: 'Ground + 14 floors construction in active development.',
      status: 'ongoing',
    },
  ]

  const milestones = [
    { label: 'Foundation', completed: true },
    { label: 'Basement', completed: true },
    { label: 'Structure', completed: false },
    { label: 'Finishing', completed: false },
  ]

  return (
    <section id="updates" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80")',
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span
              className={`inline-block text-gold-400 font-semibold mb-4 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Live Progress
            </span>
            <h2
              className={`heading-lg text-white mb-6 transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Development Updates
            </h2>
            <p
              className={`text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Stay connected with the progress of your investment as it transforms from concept to reality. Construction is actively underway.
            </p>
          </div>

          {/* Progress Timeline */}
          <div
            className={`mb-16 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Construction Milestones</h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      milestone.completed 
                        ? 'bg-gradient-to-br from-green-400 to-green-600' 
                        : 'bg-gray-700'
                    }`}>
                      {milestone.completed ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <HardHat className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${milestone.completed ? 'text-green-400' : 'text-gray-400'}`}>
                        {milestone.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {milestone.completed ? 'Completed' : 'In Progress'}
                      </div>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className={`hidden md:block h-0.5 flex-1 ${
                        milestone.completed ? 'bg-green-400' : 'bg-gray-700'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Updates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {updates.map((update, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="card overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url("${update.image}")` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        update.status === 'completed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gold-500 text-white'
                      }`}>
                        {update.status === 'completed' ? 'Completed' : 'In Progress'}
                      </div>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 glass-effect px-4 py-2 rounded-lg border border-white/20">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      <span className="text-white font-medium text-sm">{update.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {update.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`mt-16 text-center transition-all duration-700 delay-900 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="glass-effect rounded-2xl p-8 md:p-12 border border-gold-400/20">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Informed About Every Milestone
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We're committed to transparency and keeping our investors updated at every stage of development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-gold text-lg px-8 py-4">
                  Get Regular Updates
                </a>
                <a href="#project" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
                  View Project Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConstructionUpdates

