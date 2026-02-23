import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Wheelchairs', href: '/products#wheelchairs' },
    { name: 'Mobility Aids', href: '/products#mobility-aids' },
    { name: 'Diabetic Care', href: '/products#diabetic-care' },
    { name: 'Orthopedic Braces', href: '/products#orthopedic' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.svg"
                  alt="Infinity Bless"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">
                  Infinity Bless
                </div>
                <div className="text-sm text-gray-400">Med Solutions</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Trusted supplier of quality medical equipment, serving New Jersey with excellence since our founding.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=856+US+Highway+206+Bldg+B-Suite+15b+Hillsborough+NJ+08844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    856 US Highway 206<br />
                    Bldg B-Suite 15b<br />
                    Hillsborough, NJ 08844
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:9083049596"
                  className="text-sm flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  (908) 304-9596
                </a>
              </li>
              <li>
                <a
                  href="tel:9085760312"
                  className="text-sm flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  Fax: (908) 576-0312
                </a>
              </li>
              <li>
                <a
                  href="mailto:infinityblessmedsolutions@gmail.com"
                  className="text-sm flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  infinityblessmedsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Infinity Bless Med Solutions LLC. All rights reserved.</p>
            <p>
              Developed by{' '}
              <a
                href="https://cubicotechnologies.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cubico Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
