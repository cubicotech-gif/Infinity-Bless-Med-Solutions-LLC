'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-primary to-blue-500"></div>

      {/* Top contact bar - hidden on mobile */}
      <div className={`hidden lg:block bg-blue-900/95 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-end items-center gap-6 text-sm text-blue-100">
            <a href="tel:9083049596" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5" />
              (908) 304-9596
            </a>
            <a href="mailto:infinityblessmedsolutions@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5" />
              infinityblessmedsolutions@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-lg border-2 border-blue-100 p-1 transition-transform group-hover:scale-105 overflow-hidden">
              <Image
                src="/logo.svg"
                alt="Infinity Bless Med Solutions"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className={`font-display font-bold text-2xl lg:text-3xl ${scrolled ? 'text-gray-900' : 'text-gray-900'} transition-colors leading-tight`}>
                Infinity Bless
              </div>
              <div className={`text-sm font-medium ${scrolled ? 'text-blue-600' : 'text-blue-700'} transition-colors tracking-wide`}>
                Med Solutions LLC
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 relative group ${
                  scrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button asChild size="lg" className="ml-4 bg-blue-600 hover:bg-blue-700 shadow-lg">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a href="tel:9083049596" className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  (908) 304-9596
                </a>
                <a href="mailto:infinityblessmedsolutions@gmail.com" className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
