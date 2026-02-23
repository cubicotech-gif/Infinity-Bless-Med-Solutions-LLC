'use client'

import { motion } from 'framer-motion'
import { Award, HeartHandshake, Truck, Shield, Phone, Clock } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Medical-Grade Quality',
    description: 'All products meet FDA standards and medical certifications for your safety and peace of mind.',
  },
  {
    icon: HeartHandshake,
    title: 'Expert Consultation',
    description: 'Our knowledgeable team provides personalized guidance to help you choose the right equipment.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery available in New Jersey. We understand urgency in medical needs.',
  },
  {
    icon: Shield,
    title: 'Warranty Protection',
    description: 'Comprehensive warranty coverage on all equipment for worry-free ownership.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Always here when you need us. Call us anytime for assistance or questions.',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: "Average response time under 2 hours. Your health needs can't wait, and neither do we.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Committed to Your Health & Comfort
          </h2>
          <p className="text-xl text-gray-600">
            We go beyond providing equipment—we deliver care, support, and peace of mind
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
