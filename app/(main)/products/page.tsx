'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

const categories = [
  {
    id: 'wheelchairs',
    name: 'Wheelchairs',
    description: 'Premium manual and electric wheelchairs for enhanced mobility and comfort',
    products: [
      {
        name: 'Manual Wheelchair - Standard',
        description: 'Lightweight aluminum frame with adjustable footrests and padded armrests',
        image: 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=600&q=80',
        features: ['Foldable design', 'Weight capacity: 250 lbs', 'Adjustable height'],
      },
      {
        name: 'Transport Wheelchair',
        description: 'Compact and portable for easy transportation and storage',
        image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=600&q=80',
        features: ['Ultra-lightweight', 'Easy to fold', 'Comfortable seat'],
      },
    ],
  },
  {
    id: 'mobility-aids',
    name: 'Mobility Aids',
    description: 'Walkers, canes, and crutches to support safe and confident movement',
    products: [
      {
        name: 'Folding Walker with Wheels',
        description: 'Sturdy walker with smooth-rolling wheels and hand brakes',
        image: 'https://images.unsplash.com/photo-1610349907345-19bf89ce8e3e?w=600&q=80',
        features: ['Padded seat', 'Storage basket', 'Adjustable height'],
      },
      {
        name: 'Aluminum Walking Cane',
        description: 'Lightweight, adjustable cane with ergonomic grip',
        image: 'https://images.unsplash.com/photo-1584613132429-a50a3b5c0e86?w=600&q=80',
        features: ['Height adjustable', 'Anti-slip tip', 'Ergonomic handle'],
      },
    ],
  },
  {
    id: 'diabetic-care',
    name: 'Diabetic Care',
    description: 'Advanced glucose monitoring systems and diabetic supplies',
    products: [
      {
        name: 'Continuous Glucose Monitor (CGM)',
        description: 'Real-time monitoring with smartphone connectivity',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
        features: ['14-day sensor', 'Customizable alerts', 'Data tracking app'],
      },
      {
        name: 'Blood Glucose Meter Kit',
        description: 'Accurate testing with fast results and large display',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
        features: ['Large display', 'Memory storage', 'Lancing device included'],
      },
    ],
  },
  {
    id: 'orthopedic',
    name: 'Orthopedic Braces',
    description: 'Medical-grade supports for knees, back, ankles, and wrists',
    products: [
      {
        name: 'Knee Support Brace',
        description: 'Adjustable compression brace for pain relief and stability',
        image: 'https://images.unsplash.com/photo-1620331925087-4a13be250c5d?w=600&q=80',
        features: ['Dual stabilizers', 'Breathable material', 'Non-slip design'],
      },
      {
        name: 'Lumbar Back Support',
        description: 'Lower back brace for posture correction and pain relief',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
        features: ['Adjustable compression', 'Moisture-wicking', 'Fits under clothing'],
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive range of certified medical equipment to support your health and mobility needs
            </p>
            <Button asChild size="lg">
              <a href="tel:9083049596">
                <Phone className="mr-2 h-5 w-5" />
                Call for Expert Guidance
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products by category */}
      {categories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
                {category.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.products.map((product, productIndex) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: productIndex * 0.1, duration: 0.6 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <CardDescription className="text-base">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-sm text-gray-700 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full mt-6">
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Our experts are ready to assist you in finding the perfect medical equipment for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:9083049596">
                <Phone className="mr-2 h-5 w-5" />
                (908) 304-9596
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="/contact">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
