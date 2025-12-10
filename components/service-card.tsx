"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-card border border-border rounded-lg p-6 cursor-pointer group"
    >
      <motion.div
        className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon size={24} className="text-secondary-foreground" />
      </motion.div>
      <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  )
}

interface ButtonProps {
  titulo: string
}
export function Button ({titulo}: ButtonProps){
  return (
    <h1>{titulo} </h1>
  )
} 
