"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Target, Eye, Heart, Users, Shield, Star } from "lucide-react"
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

export default function AboutPage() {
  return (
    <div className="w-full pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1D285E]">
        <div className="absolute inset-0">
          <Image
            src="/25.jpg"
            alt="Equipa Óptima"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-[#1D285E]/70" />
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
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#DDDED3]/10 backdrop-blur-md border border-[#DDDED3]/15 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#676B49] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#ffffff] tracking-wider uppercase">
                  Desde 2015 no Mercado
                </span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight tracking-tight"
              variants={textVariants}
            >
              Sobre a Óptima
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-[#ffffff]/80 leading-relaxed font-light"
              variants={textVariants}
            >
              Uma história de confiança, expertise e dedicação à proteção do que importa
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section id="nossa-historia" className="py-20 md:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={itemVariants}
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/logo-optima.jpeg"
                alt="Equipa Óptima"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1D285E]/20" />
              
              <div className="absolute top-6 left-6 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-[#1D285E]">+500 Clientes</p>
                <p className="text-xs text-[#676B49]">Satisfeitos</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D285E] mb-6">
                Nossa <span className="text-[#676B49]">História</span>
              </h2>
              
              <div className="space-y-4 text-[#1D285E]/70 text-lg leading-relaxed">
                <p>
                  A Óptima Corretora de Seguros é resultado de anos de experiência no mercado português de mediação seguros.
                </p>
                <p>
                  Não nos satisfazemos em oferecer produtos genéricos. Cada cliente é único, e por isso, cada solução é personalizada e pensada ao detalhe.
                </p>
                <p>
                  Somos parceiros de confiança de empresas e particulares que sabem o valor de uma proteção bem feita.
                </p>
              </div>

              <motion.div 
                className="flex flex-wrap gap-8 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[{ icon: Users, label: "Clientes Ativos", value: "500+" },
                  { icon: Shield, label: "Seguradoras Parceiras", value: "15+" },
                  { icon: Star, label: "Anos de Experiência", value: "8+" }].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="icon-glow w-12 h-12 bg-[#1D285E] rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1D285E]">{item.value}</p>
                      <p className="text-sm text-[#1D285E]/60">{item.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Missão, Visão e Valores" 
            subtitle="Os pilares que nos guiam"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[{
              icon: Target,
              title: "Missão",
              description: "Ser o intermediário de confiança que simplifica o processo de contratação de seguros."
            }, {
              icon: Eye,
              title: "Visão",
              description: "Ser a corretora mais recomendada de Portugal."
            }, {
              icon: Heart,
              title: "Valores",
              description: "Integridade, comprometimento, excelência e inovação contínua."
            }].map((item, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">

                  {/* ÍCONE COM EFEITO */}
                  <div className="icon-glow w-16 h-16 bg-[#1D285E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#1D285E]/70 leading-relaxed">{item.description}</p>

                  <div className="w-12 h-1 bg-[#1D285E] rounded-full mt-6 group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Nossos Diferenciais" 
            subtitle="O que nos torna únicos no mercado"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[{
              icon: Users,
              title: "Consultoria Independente",
              description: "Recomendações baseadas em necessidades reais."
            },{
              icon: Shield,
              title: "Parceiros Premium", 
              description: "Relacionamento exclusivo com seguradoras líderes."
            },{
              icon: Star,
              title: "Atendimento Personalizado",
              description: "Suporte completo em todas as fases."
            },{
              icon: Heart,
              title: "Acompanhamento Total",
              description: "Do início ao fim do processo, sempre ao lado do cliente."
            }].map((item, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">

                  {/* ÍCONE COM GLOW */}
                  <div className="icon-glow w-14 h-14 bg-[#1D285E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">{item.title}</h3>
                  <p className="text-[#1D285E]/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
} 