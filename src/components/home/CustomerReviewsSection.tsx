"use client"

import { Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function CustomerReviewsSection() {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "I'm blown away by the quality and style of my recent purchases from Kind Earth. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      name: "Alex K.",
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge, but then I discovered Kind Earth. The range of options they offer is truly remarkable, catering to all tastes and occasions."
    },
    {
      name: "James L.",
      rating: 5,
      text: "As someone who's always on the lookout for unique and trendy pieces, I'm thrilled to have stumbled upon Kind Earth. The selection of clothes is not only diverse but also on point with the latest fashion."
    }
  ]

  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

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
            Our Happy Customers
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers say about Kind Earth
          </p>
        </motion.div>

        <div className="flex items-center justify-center space-x-8">
          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="bg-background rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50 hover:bg-blue-50"
          >
            <ChevronLeft className="h-6 w-6 text-muted-foreground" />
          </button>

          {/* Review Card */}
          <div className="max-w-lg">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-xl shadow-lg p-6 border border-border/50"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-center">
                &ldquo;{reviews[currentReview].text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-foreground">
                    {reviews[currentReview].name}
                  </span>
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-muted-foreground">Verified Customer</span>
                </div>
                
                {/* Kind Earth Logo */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-bold">KindEarth</span>
                </div>
              </div>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentReview ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="bg-background rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50 hover:bg-blue-50"
          >
            <ChevronRight className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
} 