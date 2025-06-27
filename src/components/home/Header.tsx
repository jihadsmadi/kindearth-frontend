"use client"

import { Search, User, Store, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
        <p>🎉 Join as a Vendor & Get 20% Commission! | Free Shipping on Orders Over $50</p>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-2 py-1 rounded-lg hover:bg-blue-50 transition-all duration-300">
                KindEarth
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-foreground hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-foreground hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Vendors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-foreground hover:text-blue-600 transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search for clothes, shoes, vendors..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-background transition-all duration-300 hover:border-gray-300"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Vendor Button */}
            <Link href="/register">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold px-4 py-2 rounded-full hover:shadow-lg hover:scale-105"
              >
                <Store className="h-4 w-4" />
                <span>Become Vendor</span>
              </Button>
            </Link>

            {/* User Button */}
            <Link href="/login">
              <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-md">
                Shop
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-md">
                Categories
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-md">
                Vendors
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-md">
                About
              </a>
              <div className="px-3 py-2">
                <Link href="/register">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold rounded-full"
                  >
                    <Store className="h-4 w-4" />
                    <span>Become Vendor</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 