"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { CheckCircle2, Shield, Zap, TrendingUp, Building, Target, Users, ArrowRight, Star } from "lucide-react"
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
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function CompaniesPage() {
  return (
    <div className="w-full pt-16">
      {/* Hero Section - removidos gradientes */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1D285E]">
        <div className="absolute inset-0">
          <Image
            src="/30.jpg"
            alt="Soluções empresariais"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            className="text-center max-w-4xl mx-auto space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#DDDED3]/10 backdrop-blur-md border border-[#DDDED3]/15 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#676B49] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#ffffff] tracking-wider uppercase">
                  Soluções Empresariais
                </span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight tracking-tight"
              variants={textVariants}
            >
              Proteção para{" "}
              <span className="text-[#ffffff]">
                Empresas
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-[#ffffff]/80 leading-relaxed font-light"
              variants={textVariants}
            >
              Coberturas abrangentes e flexíveis, adaptadas ao seu setor e dimensão
            </motion.p>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/simulation"
                  className="relative flex items-center justify-center px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 bg-[#676B49] text-white"
                >
                  <span className="flex items-center gap-3 text-base">
                    <Target className="w-5 h-5" />
                    Solicitar Análise
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios - IDÊNTICOS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Vantagens para Empresas" 
            subtitle="Soluções que fazem a diferença no seu negócio"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[ 
              {
                icon: Shield,
                title: "Proteção Completa",
                description: "Coberturas abrangentes para patrimônio, responsabilidade e pessoal.",
                features: ["Patrimônio", "Responsabilidade", "Equipa"]
              },
              {
                icon: Zap,
                title: "Contratos Flexíveis", 
                description: "Adaptados ao seu negócio com opções de personalização.",
                features: ["Personalização", "Flexibilidade", "Adaptabilidade"]
              },
              {
                icon: TrendingUp,
                title: "Consultoria Estratégica",
                description: "Análise de riscos e recomendações alinhadas com objetivos.",
                features: ["Análise de Riscos", "Estratégia", "Otimização"]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                  <div className="w-16 h-16 bg-[#1D285E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#1D285E]/70 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#1D285E]/60">
                        <div className="w-1.5 h-1.5 bg-[#676B49] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

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

      {/* Tipos de Seguros, Processo, Estatísticas - sem alterações */}

      {/* CTA Final - removidos gradientes */}
      <section className="py-20 md:py-28 bg-[#1D285E] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <Star className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium tracking-wide">
                Análise Sem Compromisso
              </span>
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Proteja seu{" "}
                <span className="text-[#DDDED3]">
                  negócio
                </span>{" "}
                hoje?
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Solicite uma análise personalizada de riscos para sua empresa
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D285E] rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 overflow-hidden"
              >
                <Users className="w-5 h-5 relative" />
                <span className="relative">Contactar Especialista</span>
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/50 text-sm"
            >
              Resposta garantida em até 24 horas úteis
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
