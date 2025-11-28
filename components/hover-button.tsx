"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface HoverButtonProps {
  href: string
  children: string
  variant?: "primary" | "secondary" | "white"
  className?: string
}

export default function HoverButton({ href, children, variant = "primary", className = "" }: HoverButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-opacity-90",
    white: "bg-white text-primary hover:bg-accent",
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <Link
        href={href}
        className={`inline-block px-8 py-3 rounded-lg font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  )
}
