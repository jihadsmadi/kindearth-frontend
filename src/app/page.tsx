"use client"

import { useUser } from "@/components/providers/UserProvider"
import Header from "@/components/home/Header"
import HeroSection from "@/components/home/HeroSection"
import CategoriesSection from "@/components/home/CategoriesSection"
import NewArrivalsSection from "@/components/home/NewArrivalsSection"
import VendorShowcaseSection from "@/components/home/VendorShowcaseSection"
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection"
import Footer from "@/components/home/Footer"

export default function Home() {
  const { user } = useUser()

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Welcome Message */}
      {user && (
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-white opacity-10 rounded-full -translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-white opacity-5 rounded-full translate-x-1/3 -translate-y-1/3 animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-4 md:py-6">
            <div className="text-center text-white">
              {/* Welcome Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3 animate-bounce">
                <span className="text-lg md:text-xl">👋</span>
              </div>
              
              {/* Welcome Text */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 animate-in slide-in-from-bottom-4 duration-700">
                Welcome back, <span className="text-yellow-300">{user.firstName}</span>!
              </h2>
              
              {/* Subtitle */}
              <p className="text-sm md:text-base text-blue-100 animate-in slide-in-from-bottom-4 duration-700 delay-200">
                Ready to discover amazing sustainable fashion? 🌱
              </p>
            </div>
          </div>
        </div>
      )}
      
      <HeroSection />
      <CategoriesSection />
      <NewArrivalsSection />
      <VendorShowcaseSection />
      <CustomerReviewsSection />
      <Footer />
    </main>
  )
}