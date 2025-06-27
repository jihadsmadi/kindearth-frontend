"use client"

import Header from "@/components/home/Header"
import HeroSection from "@/components/home/HeroSection"
import CategoriesSection from "@/components/home/CategoriesSection"
import NewArrivalsSection from "@/components/home/NewArrivalsSection"
import VendorShowcaseSection from "@/components/home/VendorShowcaseSection"
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection"
import Footer from "@/components/home/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <NewArrivalsSection />
      <VendorShowcaseSection />
      <CustomerReviewsSection />
      <Footer />
    </main>
  )
}