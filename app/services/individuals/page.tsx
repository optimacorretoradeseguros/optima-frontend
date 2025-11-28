"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { CheckCircle2, Car, Heart, Plane, Home, Shield, Users, ArrowRight, Star } from "lucide-react"
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

export default function IndividualsPage() {
  return (
    <div className="w-full pt-16">
      {/* Hero Section - IDÊNTICO à Home */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1D285E]/98 via-[#1D285E]/95 to-[#676B49]/90">
        {/* Background Pattern Elegante */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1D285E] via-[#1D285E]/95 to-[#676B49]/85" />
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#676B49]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-[#1D285E]/20 rounded-full blur-3xl" />
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

        {/* Imagem de Fundo com Overlay */}
        <div className="absolute inset-0">
          <Image
                src="/placeholder.svg?key=personal-protection"
                alt="Proteção para particulares"
                fill
                className="object-cover opacity-10"
                priority
              />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D285E]/70 via-[#1D285E]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            className="text-center max-w-4xl mx-auto space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badge de Destaque - IDÊNTICO à Home */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#DDDED3]/10 backdrop-blur-md border border-[#DDDED3]/15 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#676B49] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#DDDED3] tracking-wider uppercase">
                  Proteção Pessoal Premium
                </span>
              </div>
            </motion.div>

            {/* Título Principal - IDÊNTICO à Home */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DDDED3] leading-tight tracking-tight"
              variants={textVariants}
            >
              Proteção para{" "}
              <span className="bg-gradient-to-r from-[#DDDED3] via-[#DDDED3] to-[#676B49] bg-clip-text text-transparent">
                Particulares
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-[#DDDED3]/80 leading-relaxed font-light"
              variants={textVariants}
            >
              Seguros personalizados para cada etapa da sua vida e todas as suas necessidades
            </motion.p>

            {/* CTA Button Único */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/simulation"
                  className="group relative flex items-center justify-center px-8 py-4 rounded-full font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#676B49] to-[#676B49]/90 transition-opacity duration-300" />
                  <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                  <div className="absolute inset-0 w-full h-full pointer-events-none bg-[#676B49]/70 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  <span className="relative z-10 flex items-center gap-3 text-base text-white">
                    <Car className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Simular Agora
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tipos de Seguros - Cards IDÊNTICOS à Home */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#F8F9FA] to-[#DDDED3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Tipos de Seguros" 
            subtitle="Soluções para cada aspecto da sua vida"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Car,
                title: "Seguro de Automóvel",
                description: "Proteção completa para o seu veículo e responsabilidade civil",
                features: [
                  "Responsabilidade civil",
                  "Danos próprios",
                  "Roubo e furto",
                  "Assistência 24h",
                  "Cobertura internacional",
                ],
              },
              {
                icon: Heart,
                title: "Seguro de Saúde",
                description: "Acesso a cuidados de saúde de qualidade quando mais precisa",
                features: [
                  "Consultas médicas",
                  "Hospitalizações",
                  "Cirurgias",
                  "Tratamentos especializados",
                  "Acesso a rede privada",
                ],
              },
              {
                icon: Shield,
                title: "Seguro de Vida",
                description: "Tranquilidade para si e proteção para a sua família",
                features: [
                  "Proteção da família",
                  "Rendimento de reforma",
                  "Coberturas adicionais",
                  "Flexibilidade contratual",
                  "Cobertura de incapacidade",
                ],
              },
              {
                icon: Plane,
                title: "Seguro de Viagem",
                description: "Viaje com segurança e proteção em qualquer destino",
                features: [
                  "Regressos de emergência",
                  "Assistência médica",
                  "Cancelamento de viagem",
                  "Bagagem perdida",
                  "Responsabilidade civil",
                ],
              },
            ].map((insurance, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <insurance.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                    {insurance.title}
                  </h3>
                  
                  <p className="text-[#1D285E]/70 leading-relaxed mb-6">
                    {insurance.description}
                  </p>

                  {/* Features - Estilo IDÊNTICO à Home */}
                  <ul className="space-y-2 mb-6">
                    {insurance.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#1D285E]/60">
                        <div className="w-1.5 h-1.5 bg-[#676B49] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Sutil - Estilo Home */}
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

      {/* Fases da Vida - Layout imagem + texto IDÊNTICO à Home */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1D285E]/5 via-[#1D285E]/3 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Proteção Conforme a Vida Evolui" 
            subtitle="Soluções adaptadas a cada fase"
          />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Imagem - Estilo Home */}
            <motion.div variants={itemVariants} className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?key=life-stages"
                alt="Fases da vida"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D285E]/20 via-transparent to-transparent" />
              
              {/* Badge na Imagem - Estilo Home */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-[#1D285E]">Para Todas as Idades</p>
                <p className="text-xs text-[#676B49]">Proteção Adaptada</p>
              </div>
            </motion.div>

            {/* Conteúdo - Estilo Home */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Lista de Fases - Estilo Home */}
              <ul className="space-y-4">
                {[
                  {
                    title: "Início de Vida",
                    description: "Independência e primeiras responsabilidades",
                    items: ["Saúde", "Viagem", "Responsabilidade civil"]
                  },
                  {
                    title: "Formação de Família", 
                    description: "Proteção dos seus e do patrimônio",
                    items: ["Vida", "Saúde", "Habitação"]
                  },
                  {
                    title: "Reforma",
                    description: "Rendimento seguro e proteção contínua",
                    items: ["Rendimentos", "Saúde", "Viagem"]
                  }
                ].map((stage, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#676B49]/10"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#676B49] to-[#676B49]/90 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-[#1D285E] group-hover:text-[#676B49] transition-colors duration-300">
                        {stage.title}
                      </h4>
                      <p className="text-sm text-[#1D285E]/60">{stage.description}</p>
                      <div className="flex gap-2 mt-2">
                        {stage.items.map((item, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#676B49]/10 rounded-full text-xs text-[#676B49]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </ul>

              {/* CTA REMOVIDO - Botão "Conhecer Todas as Opções" foi removido */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Porque Escolher - Cards IDÊNTICOS à Home */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#F8F9FA] to-[#DDDED3]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Porque Confiar em Nós" 
            subtitle="Vantagens exclusivas para particulares"
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
                title: "Comparação Inteligente",
                description: "Análise entre múltiplas seguradoras para melhor custo-benefício"
              },
              {
                icon: Users,
                title: "Consultoria Personalizada", 
                description: "Recomendações adaptadas às suas necessidades sem pressão"
              },
              {
                icon: Star,
                title: "Suporte Dedicado",
                description: "Acompanhamento 24/7 em todas as etapas e sinistros"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#1D285E]/70 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Linha decorativa - Estilo Home */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#1D285E] to-[#676B49] rounded-full mt-6 group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final - IDÊNTICO à Home */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1D285E] via-[#1D285E]/95 to-[#676B49]/90 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
          
          {/* Subtle Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #DDDED3 1px, transparent 1px),
                linear-gradient(180deg, #DDDED3 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <Star className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium tracking-wide">
                Simulação Gratuita
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Comece sua{" "}
                <span className="bg-gradient-to-r from-white to-[#DDDED3] bg-clip-text text-transparent">
                  proteção
                </span>{" "}
                hoje?
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Simulação rápida e sem compromisso em minutos
              </p>
            </div>

            {/* CTA Button Único */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.a
                href="/simulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D285E] rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1D285E]/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Car className="w-5 h-5 relative" />
                <span className="relative">Fazer Simulação Gratuita</span>
              </motion.a>
            </motion.div>

            {/* Footer Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/50 text-sm"
            >
              Sem compromisso e resposta em 24 horas
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}