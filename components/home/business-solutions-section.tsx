"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { CheckCircle2, Building, ArrowRight } from "lucide-react"
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

export default function BusinessSolutionsSection() {
  const solutions = [
    "Responsabilidade Civil",
    "Seguro de Bens",
    "Proteção de Colaboradores",
    "Seguro de Transporte",
    "Proteção Profissional",
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#1D285E]/5 via-[#1D285E]/3 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Soluções para Empresas" 
          subtitle="Proteja seu negócio com coberturas adaptadas"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Imagem */}
          <motion.div variants={itemVariants} className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/business-team-meeting-office.jpg"
              alt="Equipe de negócios em reunião estratégica"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D285E]/20 via-transparent to-transparent" />
            
            {/* Badge na Imagem */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold text-[#1D285E]">+500 Empresas</p>
              <p className="text-xs text-[#676B49]">Protegidas</p>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Lista de Soluções */}
            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <motion.li 
                  key={item} 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#1D285E]/10"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-[#1D285E] group-hover:text-[#676B49] transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services/companies"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1D285E] to-[#1D285E]/90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1D285E]/40 group"
              >
                
                Explorar Soluções Empresariais
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}