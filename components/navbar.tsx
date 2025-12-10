"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Menu, X, Home, Users, Building2, User, FileText } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState(pathname)

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])

  const navItems = [
    { label: "Início", href: "/", icon: Home },
    { label: "Sobre", href: "/about", icon: Users },
    { label: "Empresas", href: "/services/companies", icon: Building2 },
    { label: "Particulares", href: "/services/individuals", icon: User },
    { label: "Blog", href: "/blog", icon: FileText },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  }

  const mobileMenuVariants: Variants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open:   { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } }
  }

  const mobileItemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open:   { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
  }

  return (
    <nav className="
        fixed top-0 w-full z-50 bg-white bg-opacity-30 backdrop-blur-sm
        border-b border-white/20 shadow-sm
      ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center"
          >
            <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/logo-optima3.jpeg"
                alt="Óptima Corretora de Seguros"
                width={160}
                height={80}
                className="h-19 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            className="hidden lg:flex items-center space-x-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map(item => {
              const Icon = item.icon
              return (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeItem === item.href
                        ? "text-[#1D285E]"
                        : "text-[#1D285E]/80 hover:text-[#1D285E]"
                    }`}
                  >
                    <Icon size={16} className="text-[#1D285E]/60" />
                    {item.label}
                    {activeItem === item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#676B49]"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-[#676B49] opacity-0 hover:opacity-5 rounded-lg transition-opacity duration-300" />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Desktop buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/simulation"
                className="px-6 py-3 rounded-full text-sm font-semibold text-[#DDDED3] bg-[#676B49] hover:bg-[#676B49]/90 transition-all duration-300 shadow-md hover:shadow-lg border border-[#676B49]/20 hover:border-[#676B49]/30"
              >
                Simulação
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-sm font-semibold text-[#DDDED3] bg-[#1D285E] hover:bg-[#1D285E]/90 transition-all duration-300 shadow-md hover:shadow-lg border border-[#1D285E]/20 hover:border-[#1D285E]/30"
              >
                Contactar
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-3 rounded-lg text-[#1D285E] hover:bg-[#1D285E]/5 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Menu"
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden border-t border-[#676B49]/10 bg-[#DDDED3]/30 backdrop-blur-sm"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.div key={item.href} variants={mobileItemVariants} initial="closed" animate="open" exit="closed" transition={{ delay: idx * 0.05 }}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-6 py-3 text-base font-medium transition-all duration-300 ${
                          activeItem === item.href
                            ? "text-[#1D285E] bg-[#1D285E]/5 border-r-2 border-[#676B49]"
                            : "text-[#1D285E]/80 hover:text-[#1D285E] hover:bg-[#1D285E]/3"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon size={18} className="text-[#1D285E]/60" />
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <div className="px-6 pt-4 pb-2 border-t border-[#676B49]/10 space-y-3">
                  <motion.div variants={mobileItemVariants} initial="closed" animate="open" exit="closed" transition={{ delay: navItems.length * 0.05 }}>
                    <Link
                      href="/simulation"
                      className="block w-full px-4 py-4 rounded-full text-center text-sm font-semibold text-[#DDDED3] bg-[#676B49] hover:bg-[#676B49]/90 transition-all duration-300 shadow-md hover:shadow-lg border border-[#676B49]/20"
                      onClick={() => setIsOpen(false)}
                    >
                      Simulação
                    </Link>
                  </motion.div>
                  <motion.div variants={mobileItemVariants} initial="closed" animate="open" exit="closed" transition={{ delay: (navItems.length + 1) * 0.05 }}>
                    <Link
                      href="/contact"
                      className="block w-full px-4 py-4 rounded-full text-center text-sm font-semibold text-[#DDDED3] bg-[#1D285E] hover:bg-[#1D285E]/90 transition-all duration-300 shadow-md hover:shadow-lg border border-[#1D285E]/20"
                      onClick={() => setIsOpen(false)}
                    >
                      Contactar
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
