"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Shield, Users, Star, ArrowRight, MessageCircle } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { 
      duration: 1.1, 
      ease: "easeOut" 
    },
  },
}

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      delay: 0.8,
      ease: "easeOut" 
    },
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    },
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.15 }
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] pb-4 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1D285E]/98 via-[#1D285E]/95 to-[#676B49]/90">
      {/* Background Pattern Elegante */}
      <div className="absolute inset-0">
        {/* Gradiente Principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D285E] via-[#1D285E]/95 to-[#676B49]/85" />
        
        {/* Shapes Geométricos Sutis */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#676B49]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-[#1D285E]/20 rounded-full blur-3xl" />
        
        {/* Linhas de Grade Premium */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #DDDED3 1px, transparent 1px),
              linear-gradient(180deg, #DDDED3 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Imagem de Fundo com Overlay Sofisticado */}
      <div className="absolute inset-0">
        <Image
          src="/27.jpg"
          alt="Consultor de seguros profissional em reunião corporativa"
          fill
          className="object-cover opacity-10"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D285E]/70 via-[#1D285E]/40 to-transparent" />
      </div>

      {/* Elementos de Design Corporativo */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#676B49] rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-[#DDDED3] rounded-full opacity-25 animate-bounce" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#676B49] rounded-full opacity-60 animate-ping" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Conteúdo de Texto */}
          <motion.div 
            className="text-center xl:text-left space-y-8"
            variants={textVariants}
          >
            {/* Badge de Destaque */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#DDDED3]/10 backdrop-blur-md border border-[#DDDED3]/15 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#676B49] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#DDDED3] tracking-wider uppercase">
                  Mediação de Seguros Premium
                </span>
              </div>
            </motion.div>

            {/* Título Principal */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#DDDED3] leading-tight tracking-tight">
                A melhor{" "}
                <span className="bg-gradient-to-r from-[#DDDED3] via-[#DDDED3] to-[#676B49] bg-clip-text text-transparent">
                  proteção
                </span>{" "}
                começa com a{" "}
                <span className="text-[#DDDED3] relative">
                  escolha certa
                  <div className="absolute bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#676B49] to-transparent" />
                </span>
              </h1>
              
              <motion.p
                className="text-xl lg:text-2xl text-[#DDDED3]/80 leading-relaxed max-w-2xl mx-auto xl:mx-0 font-light"
                variants={textVariants}
              >
                A <span className="text-[#DDDED3] font-semibold">Óptima</span> media a relação entre clientes e 
                seguradoras, ajudando empresas e particulares a escolher o seguro certo e a seguradoras certa.
              </motion.p>
            </div>

           {/* Botões CTA Premium Melhorados */}
<motion.div
  className="flex flex-col sm:flex-row gap-5 justify-center xl:justify-start"
  variants={buttonVariants}
>
  {/* Botão Primário */}
  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
    <Link
      href="/simulation"
      className="group relative flex items-center justify-center
                 px-8 py-4 rounded-full font-semibold overflow-hidden
                 shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* Background principal (FULL WIDTH GARANTIDO) */}
      <div className="
        absolute inset-0 w-full h-full
        bg-gradient-to-r from-[#676B49] to-[#676B49]/90
        transition-opacity duration-300
      " />

      {/* Brilho lateral FULL WIDTH */}
      <div className="
        absolute inset-0 w-full h-full pointer-events-none
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        -skew-x-12 translate-x-[-150%]
        group-hover:translate-x-[150%]
        transition-transform duration-1000
      " />

      {/* Overlay do hover 100% */}
      <div className="
        absolute inset-0 w-full h-full pointer-events-none
        bg-[#676B49]/70 opacity-0
        group-hover:opacity-20 transition-opacity duration-300
      " />

      <span className="relative z-10 flex items-center gap-3 text-base text-white">
        <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        Simulação Online
      </span>
    </Link>
  </motion.div>

  {/* Botão Secundário */}
  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
    <Link
      href="/contact"
      className="group relative flex items-center justify-center
                 px-8 py-4 rounded-full font-semibold overflow-hidden
                 backdrop-blur-sm border-2 border-[#DDDED3]/50
                 hover:border-[#DDDED3]/80 transition-all duration-500
                 shadow-lg hover:shadow-xl text-[#DDDED3]"
    >
      {/* Fundo hover 100% */}
      <div className="
        absolute inset-0 w-full h-full
        bg-[#DDDED3] opacity-0
        group-hover:opacity-10 transition-opacity duration-500
      " />

      {/* Borda animada FULL WIDTH */}
      <div className="
        absolute inset-0 w-full h-full pointer-events-none rounded-2xl
        bg-gradient-to-r from-[#DDDED3]/30 to-[#676B49]/30 bg-clip-border
        group-hover:from-[#DDDED3]/50 group-hover:to-[#676B49]/50
        transition-all duration-500
      " />

      <span className="relative z-10 flex items-center gap-3 text-base">
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        Consultoria Personalizada
      </span>
    </Link>
  </motion.div>
</motion.div>


            {/* Indicadores de Confiança Melhorados */}
            <motion.div
              className="flex flex-wrap items-center justify-center xl:justify-start gap-8 pt-8 border-t border-[#DDDED3]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
            >
              {[
                { 
                  label: "Assessoria Especializada", 
                  icon: Users,
                  description: "Consultores dedicados"
                },
                { 
                  label: "Parcerias Estratégicas", 
                  icon: Shield,
                  description: "Melhores seguradoras"
                },
                { 
                  label: "Atendimento Exclusivo", 
                  icon: Star,
                  description: "Suporte premium"
                },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 text-[#DDDED3]/80 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-[#DDDED3]/10 rounded-xl flex items-center justify-center group-hover:bg-[#DDDED3]/20 transition-all duration-300 border border-[#DDDED3]/20">
                      <item.icon className="w-5 h-5 text-[#676B49] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[#DDDED3] group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </p>
                    <p className="text-xs text-[#DDDED3]/60 group-hover:text-[#DDDED3]/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Container da Imagem */}
          <motion.div
            className="relative h-96 lg:h-[500px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            variants={imageVariants}
          >
            <Image
              src="/24.jpeg"
              alt="Consultor de seguros profissional em ambiente corporativo moderno"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            
            {/* Overlay Elegante */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D285E]/30 via-transparent to-transparent" />
            
            {/* Efeito de Borda Sutil */}
            <div className="absolute inset-0 rounded-3xl border border-[#DDDED3]/10" />
            
            {/* Card Flutuante Premium */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 bg-[#DDDED3]/95 backdrop-blur-md rounded-full p-5 shadow-2xl border border-[#DDDED3]/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-[#DDDED3]" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#1D285E] text-base mb-1">
                    Soluções Personalizadas
                  </p>
                  <p className="text-[#676B49] text-sm font-medium">
                    Para cada necessidade única do seu negócio
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de Scroll Elegante */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-[#DDDED3]/20 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1 h-3 bg-[#676B49] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}