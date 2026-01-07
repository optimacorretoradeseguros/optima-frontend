"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Shield, Users, Star, MessageCircle } from "lucide-react"

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
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
}

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95, transition: { duration: 0.15 } },
}

export default function HeroSection() {
  return (
    <section
      className="
        relative min-h-[90vh] pb-4 flex items-center justify-center 
        overflow-x-hidden overflow-y-visible
        bg-[#1D285E]   /* fundo sólido azul */
      "
    >
      {/* Fundo sólido */}
      <div className="absolute inset-0 bg-[#1D285E]" />

      {/* Imagem de fundo suave */}
      <div className="absolute inset-0">
        <Image
          src="/27.jpg"
          alt="Seguro empresarial"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="flex flex-col xl:flex-row gap-16 xl:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Texto */}
          <motion.div
            className="text-center xl:text-left space-y-8"
            variants={textVariants}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-white uppercase tracking-wider">
                Mediação de Seguros Premium
              </span>
            </div>

            {/* Título */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                A melhor <span className="text-white">proteção</span> começa com a <span className="text-white">escolha certa</span>
              </h1>

              <motion.p
                className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto xl:mx-0 font-light"
                variants={textVariants}
              >
                A <span className="font-semibold text-white">Óptima</span> media a relação entre clientes e seguradoras, ajudando empresas e particulares a escolher o seguro certo e a seguradora certa.
              </motion.p>
            </div>

            {/* Botões */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center xl:justify-start"
              variants={buttonVariants}
            >
              {/* Botão primário */}
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  href="/consultar-cotacao"
                  className="group relative flex items-center justify-center px-8 py-4 rounded-full font-semibold overflow-hidden shadow-lg bg-[#676B49]"
                >
                  <span className="relative z-10 flex items-center gap-3 text-base text-white">
                    <Shield className="w-5 h-5 text-white" />
                    Solicitar Sua Cotação
                  </span>
                </Link>
              </motion.div>

              {/* Botão secundário */}
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  href="/contact"
                  className="group relative flex items-center justify-center px-8 py-4 rounded-full font-semibold overflow-hidden border-2 border-white/40 text-white"
                >
                  <span className="relative z-10 flex items-center gap-3 text-base">
                    <MessageCircle className="w-5 h-5 text-white" />
                    Consultoria Personalizada
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Indicadores */}
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-8 pt-8 border-t border-white/20">
              {[
                { label: "Assessoria Especializada", icon: Users, description: "Consultores dedicados" },
                { label: "Parcerias Estratégicas", icon: Shield, description: "Melhores seguradoras" },
                { label: "Atendimento Exclusivo", icon: Star, description: "Suporte premium" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 text-white/80"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-white/60">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagem principal */}
          <motion.div
            className="relative h-96 lg:h-[500px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl w-full"
            variants={imageVariants}
          >
            <Image
              src="/24.jpeg"
              alt=""
              fill
              className="object-cover"
            />

            {/* Card de destaque dentro da imagem */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 bg-white rounded-full p-5 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#1D285E] rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#1D285E]">Soluções Personalizadas</p>
                  <p className="text-[#676B49] text-sm font-medium">
                    Para cada necessidade única do seu negócio
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
