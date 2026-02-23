'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Heart, Shield, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Every decision we make prioritizes your health, comfort, and well-being.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'All products meet rigorous medical standards and FDA certifications.',
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Our team brings decades of combined experience in medical equipment.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Proudly serving New Jersey families with personalized local service.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Infinity Bless Med Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Your trusted partner in quality medical equipment and compassionate care since our founding
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Infinity Bless Med Solutions was founded with a simple yet powerful mission: to make quality medical equipment accessible to everyone who needs it.
                </p>
                <p>
                  We understand that medical equipment isn't just about products—it's about improving lives, restoring independence, and providing peace of mind to families across New Jersey.
                </p>
                <p>
                  Our team of dedicated professionals brings together expertise in medical equipment, patient care, and customer service to ensure every interaction exceeds your expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80"
                alt="Medical professionals"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Products Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
