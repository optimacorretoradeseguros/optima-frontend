"use client"

import { motion, Variants } from "framer-motion"
import { Zap, Users, Shield } from "lucide-react"
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    },
  },
}

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Processo Rápido",
      description: "Simulações em minutos e aprovação ágil das suas solicitações."
    },
    {
      icon: Users,
      title: "Atendimento Pessoal",
      description: "Consultores dedicados que entendem seu negócio e necessidades."
    },
    {
      icon: Shield,
      title: "Confiança Comprovada",
      description: "Parcerias com as melhores seguradoras do mercado português."
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-linear-to-br from-[#1D285E]/5 via-white to-[#676B49]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Porque Escolher a Óptima"
          subtitle="Diferencial no mercado de mediação de seguros"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-4xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                {/* Ícone */}
                <div className="w-16 h-16 bg-[#1D285E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-[#1D285E]/70 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Linha decorativa */}
                <div className="w-12 h-1 bg-linear-to-r from-[#1D285E] to-[#676B49] rounded-full mt-6 group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}