"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { 
  Heart, 
  ArrowRight,
  Car,
  Stethoscope,
  Plane,
  Home,
  Shield,
  Flame,
  ShieldCheck,
  UserCheck
} from "lucide-react"
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    },
  },
}

export default function IndividualsSection() {
  const protections = [
    { label: "Seguro de Saúde", icon: Stethoscope },
    { label: "Seguro de Viagem", icon: Plane },
    { label: "Seguro Multirisco Habitação", icon: Home },
    { label: "Seguro Multirisco Incêndio", icon: Flame },
    { label: "Seguro de Responsabilidade Civil (Automóvel)", icon: Car },
    { label: "Seguro Contra Todos os Riscos (Automóvel)", icon: ShieldCheck },
    { label: "Seguro de Acidente de Trabalho e Doenças Profissionais", icon: UserCheck },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#F8F9FA] to-[#DDDED3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Proteção para Particulares" 
          subtitle="Seguros pensados para cada momento da sua vida"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Conteúdo */}
          <motion.div variants={itemVariants} className="space-y-8 order-2 lg:order-1">
            {/* Lista de Proteções */}
            <ul className="space-y-4">
              {protections.map(({ label, icon: Icon }) => (
                <motion.li 
                  key={label} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#676B49]/10"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-10 h-10 bg-[#676B49] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <span className="text-lg font-medium text-[#1D285E] group-hover:text-[#676B49] transition-colors duration-300">
                    {label}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services/individuals"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#676B49] to-[#676B49]/90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[#676B49]/40 group"
              >
                Conhecer Todas as Opções de Seguros
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div variants={itemVariants} className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image 
              src="/istockphoto-1256558920-612x612.jpg" 
              alt="Família feliz desfrutando de momentos especiais" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            
            {/* Card na Imagem */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-5 shadow-lg border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#676B49] rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#1D285E] text-sm">Tranquilidade Garantida</p>
                  <p className="text-[#676B49] text-xs">Seguros para você e sua família</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}