"use client"

import { motion, Variants } from "framer-motion"
import { Users, TrendingUp, Shield } from "lucide-react"
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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
    <section className="py-20 md:py-28 bg-linear-to-br from-white via-[#F8F9FA] to-[#DDDED3]/30 overflow-x-hidden">
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
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full overflow-hidden">

                {/* ============================= */}
                {/* ÍCONE COM ANÉIS MAIORES */}
                {/* ============================= */}

                <div className="relative mb-6 flex items-center justify-center">

                  {/* Glow maior */}
                  <div className="
                    absolute inset-0 rounded-full 
                    bg-[#1D285E]/25
                    scale-[1.9] 
                    blur-3xl 
                    opacity-50
                    transition-all duration-500
                    group-hover:opacity-80
                  " />

                  {/* Anel 1 */}
                  <div className="
                    absolute inset-0 rounded-full
                    border border-white/25
                    scale-[1.55]
                    blur-[2px]
                    opacity-70
                    transition-all duration-500
                    group-hover:opacity-100
                  " />

                  {/* Anel 2 */}
                  <div className="
                    absolute inset-0 rounded-full
                    border border-[#1D285E]/30
                    scale-[1.8]
                    blur-sm
                    opacity-50
                  " />

                  {/* Anel 3 (extra grande) */}
                  <div className="
                    absolute inset-0 rounded-full
                    border border-[#1D285E]/20
                    scale-[2.1]
                    blur-md
                    opacity-40
                  " />

                  {/* Pulsação */}
                  <motion.div
                    className="absolute inset-0 rounded-full scale-[1.9] bg-[#1D285E]/15 blur-2xl"
                    animate={{ opacity: [0.25, 0.8, 0.25] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Ícone principal */}
                  <div className="
                    relative w-16 h-16 
                    bg-[#1D285E] rounded-full 
                    flex items-center justify-center 
                    shadow-2xl
                    transition-transform duration-300
                    group-hover:scale-110
                  ">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[#1D285E]/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#1D285E]/60">
                      <div className="w-1.5 h-1.5 bg-[#676B49] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}