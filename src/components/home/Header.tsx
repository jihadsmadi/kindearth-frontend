"use client"

import { Search, User, Store, Menu, LogOut, Settings, Heart, Package, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useUser } from "@/components/providers/UserProvider"

export default function Header() {
  const { user, logout, isRemembered } = useUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
  }

  // Helper function to safely check if user has a role
  const hasRole = (role: string) => {
    return user?.roles?.includes(role) || false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-medium leading-tight">
          🎉 Join as a Vendor & Get 20% Commission! | Free Shipping on Orders Over $50
        </p>
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
            {/* Vendor Button - Only show if not logged in or not a vendor */}
            {(!user || !hasRole('Vendor')) && (
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
            )}

            {/* User Profile */}
            {user ? (
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  onClick={() => {
                    console.log("showUserMenu", user)
                    setShowUserMenu(!showUserMenu)
                  }}
                >
                  <User className="h-5 w-5" />
                </Button>
                
                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div 
                    ref={userMenuRef}
                    className="absolute right-0 mt-2 w-56 sm:w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200"
                  >
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {user.firstName.charAt(0)} {user.lastName.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">{user.firstName} {user.lastName}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <UserCheck className="h-3 w-3 text-blue-500" />
                            <span className="text-xs text-blue-600 font-medium">
                              {hasRole('Admin') ? 'Administrator' : 
                               hasRole('Vendor') ? 'Vendor' : 'Customer'}
                            </span>
                            {isRemembered && (
                              <span className="text-xs text-green-600 ml-1">• Remembered</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                      <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <User className="h-4 w-4 text-gray-500" />
                        My Profile
                      </Link>
                      <Link href="/orders" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <Package className="h-4 w-4 text-gray-500" />
                        My Orders
                      </Link>
                      <Link href="/wishlist" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <Heart className="h-4 w-4 text-gray-500" />
                        Wishlist
                      </Link>
                      <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <Settings className="h-4 w-4 text-gray-500" />
                        Settings
                      </Link>
                      
                      {/* Vendor Dashboard Link */}
                      {hasRole('Vendor') && (
                        <Link href="/vendor/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-colors border-t border-gray-100">
                          <Store className="h-4 w-4" />
                          Vendor Dashboard
                        </Link>
                      )}
                      
                      {/* Admin Dashboard Link */}
                      {hasRole('Admin') && (
                        <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 transition-colors border-t border-gray-100">
                          <Settings className="h-4 w-4" />
                          Admin Dashboard
                        </Link>
                      )}
                    </div>

                    {/* Logout Button */}
                    <div className="border-t border-gray-100 pt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}

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
              {(!user || !hasRole('Vendor')) && (
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
              )}
              {user && (
                <div className="px-3 py-2 border-t border-gray-200">
                  <div className="px-3 py-2 text-sm text-gray-600">
                    <p className="font-medium">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-all duration-300 rounded-md flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 