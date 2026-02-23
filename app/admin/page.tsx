'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Package, MessageSquare, LayoutDashboard, Phone, Mail, MapPin } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.svg"
                alt="Infinity Bless"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Infinity Bless Med Solutions</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm">View Website</Button>
          </Link>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Products</CardTitle>
              <Package className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">6</p>
              <p className="text-sm text-gray-500 mt-1">Listed on website</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Testimonials</CardTitle>
              <MessageSquare className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm text-gray-500 mt-1">Customer reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Categories</CardTitle>
              <LayoutDashboard className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">4</p>
              <p className="text-sm text-gray-500 mt-1">Product categories</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>Navigate to key pages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <LayoutDashboard className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium">Homepage</span>
              </Link>
              <Link href="/products" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Package className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium">Products Page</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium">Contact Page</span>
              </Link>
              <Link href="/about" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageSquare className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium">About Page</span>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Info</CardTitle>
              <CardDescription>Contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-gray-500">(908) 304-9596</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-500">info@infinityblessmed.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-gray-500">856 US Highway 206, Suite 15-163<br />Hillsborough, NJ 08844</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Product Categories</CardTitle>
            <CardDescription>Overview of inventory by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Wheelchairs', count: 1 },
                { name: 'Diabetic Care', count: 2 },
                { name: 'Orthopedic Braces', count: 1 },
                { name: 'Mobility Aids', count: 2 },
              ].map((category) => (
                <div key={category.name} className="p-4 border border-gray-200 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">{category.count}</p>
                  <p className="text-sm text-gray-600 mt-1">{category.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
