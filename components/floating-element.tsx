"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  duration?: number
  distance?: number
}

export function FloatingElement({ children, duration = 3, distance = 10 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, distance, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
