"use client"

import { Facebook, Twitter, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const footerSections = [
    {
      title: "KindEarth",
      description: "Your gateway to global fashion. Connect with verified vendors worldwide and discover unique styles for every occasion."
    },
    {
      title: "For Customers",
      links: ["Shop Products", "Track Orders", "Customer Support"]
    },
    {
      title: "For Vendors",
      links: ["Become a Vendor", "Vendor Dashboard", "Commission Rates"]
    },
    {
      title: "Company",
      links: ["About Us", "Privacy Policy", "Terms of Service"]
    }
  ]

  const paymentMethods = ["Visa", "Mastercard", "PayPal", "Stripe"]

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram }
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-foreground mb-4">
                {section.title}
              </h3>
              {section.description && (
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {section.description}
                </p>
              )}
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-blue-600 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-6 mb-6"
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <span className="text-muted-foreground">support@kindearth.com</span>
            </div>
          </div>
        </motion.div>

        {/* Social Media & Payment Methods */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground font-medium">Follow us:</span>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground font-medium">Payment methods:</span>
              <div className="flex space-x-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="text-xs bg-background px-2 py-1 rounded border text-muted-foreground"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright & Kind Earth Logo */}
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground">
                © 2024 KindEarth. Learning project - Multi-vendor e-commerce platform.
              </p>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-bold">KindEarth</span>
                </div>
                <span className="text-muted-foreground text-sm">Learning Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 