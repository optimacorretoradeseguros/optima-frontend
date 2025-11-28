"use client"

import { motion, Variants } from "framer-motion"
import { Users, TrendingUp, Shield, ArrowRight } from "lucide-react"
import SectionHeader from "@/components/section-header"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    },
  },
}

export default function WhatWeDoSection() {
  const services = [
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Recomendações personalizadas baseadas na sua situação específica e necessidades.",
      features: ["Análise Personalizada", "Diagnóstico Completo", "Plano Estratégico"]
    },
    {
      icon: TrendingUp,
      title: "Melhores Preços",
      description: "Comparamos múltiplas seguradoras para garantir o melhor custo-benefício.",
      features: ["Comparativo Inteligente", "Negociação Premium", "Economia Garantida"]
    },
    {
      icon: Shield,
      title: "Proteção Completa",
      description: "Coberturas adequadas para cada aspecto da sua vida e negócio.",
      features: ["Coberturas Customizadas", "Proteção Integral", "Assistência 360º"]
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#F8F9FA] to-[#DDDED3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="O que Fazemos"
          subtitle="Simplificamos a complexidade do mercado de seguros para você"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                {/* Ícone */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[#1D285E]/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#1D285E]/60">
                      <div className="w-1.5 h-1.5 bg-[#676B49] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Sutil */}
                <div className="flex items-center gap-2 text-[#676B49] font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer">
                  Saber mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}