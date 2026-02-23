'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Improve Your Quality of Life?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our medical equipment specialists today. We&apos;re here to help you find the perfect solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-50 shadow-xl"
            >
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              <a href="tel:9083049596">
                <Phone className="mr-2 h-5 w-5" />
                Call (908) 304-9596
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-12 text-white/90">
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-primary-100">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-primary-100">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-primary-100">Quality Guaranteed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
