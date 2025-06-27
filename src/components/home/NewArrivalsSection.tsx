"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ProductCard from "./ProductCard"

export default function NewArrivalsSection() {
  const products = [
    { 
      name: "Premium Cotton T-Shirt", 
      price: "$45", 
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      vendor: "FashionHub",
      category: "Men's Clothing"
    },
    { 
      name: "Designer Denim Jeans", 
      price: "$89", 
      originalPrice: "$120", 
      discount: "-25%", 
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      vendor: "DenimCo",
      category: "Men's Clothing"
    },
    { 
      name: "Elegant Summer Dress", 
      price: "$75", 
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      vendor: "StyleBoutique",
      category: "Women's Clothing"
    },
    { 
      name: "Casual Sneakers", 
      price: "$65", 
      originalPrice: "$85", 
      discount: "-23%", 
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      vendor: "ShoeWorld",
      category: "Footwear"
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            New Arrivals
          </h2>
          <p className="text-xl text-muted-foreground">
            Fresh styles from our verified vendors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View All New Arrivals
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 