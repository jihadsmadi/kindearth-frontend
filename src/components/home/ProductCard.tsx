"use client"

import { Star, Heart, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: string
  originalPrice?: string
  discount?: string
  rating: string
  image?: string
  vendor?: string
  category?: string
}

export default function ProductCard({ 
  name, 
  price, 
  originalPrice, 
  discount, 
  rating,
  image,
  vendor,
  category
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-background rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50 group"
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-primary text-4xl font-bold">KE</div>
          </div>
        )}
        
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-2 py-1 rounded-full">
            {discount}
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90 text-muted-foreground hover:text-red-500 transition-all duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Vendor & Category */}
        <div className="flex items-center justify-between mb-2">
          {vendor && (
            <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
              {vendor}
            </span>
          )}
          {category && (
            <span className="text-xs text-muted-foreground">
              {category}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(parseFloat(rating))
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">{rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 