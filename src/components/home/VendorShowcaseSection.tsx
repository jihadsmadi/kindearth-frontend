"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Users, Package, Shield } from "lucide-react"

export default function VendorShowcaseSection() {
  const vendors = [
    {
      name: "FashionHub",
      rating: 4.9,
      products: 150,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop",
      category: "Premium Fashion",
      verified: true
    },
    {
      name: "DenimCo",
      rating: 4.8,
      products: 89,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
      category: "Denim Specialists",
      verified: true
    },
    {
      name: "StyleBoutique",
      rating: 4.7,
      products: 234,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=300&fit=crop",
      category: "Women's Fashion",
      verified: true
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Verified Vendors",
      description: "All vendors are thoroughly verified for quality and reliability"
    },
    {
      icon: Package,
      title: "Fast Shipping",
      description: "Quick delivery from vendors worldwide"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "24/7 support for both customers and vendors"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Vendors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover unique products from our carefully selected vendors worldwide
          </p>
        </motion.div>

        {/* Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl shadow-lg overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Vendor Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {vendor.verified && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ✓ Verified Vendor
                  </div>
                )}
              </div>

              {/* Vendor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {vendor.name}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {vendor.category}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{vendor.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {vendor.products} products
                  </span>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  View Store
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Become a Vendor
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 