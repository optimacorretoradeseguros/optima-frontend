"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
}

export function ScrollReveal({ children, direction = "up", delay = 0, duration = 0.8 }: ScrollRevealProps) {
  const initialVariants = {
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
  }

  return (
    <motion.div
      initial={initialVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
