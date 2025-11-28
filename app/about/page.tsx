"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Target, Eye, Heart, Users, Shield, Star, CheckCircle2 } from "lucide-react"
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
      {/* Hero Section - MESMA ESTRUTURA das outras páginas */}
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
            src="/placeholder.svg?key=company-story"
            alt="Equipa Óptima"
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
                  Desde 2015 no Mercado
                </span>
              </div>
            </motion.div>

            {/* Título Principal */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DDDED3] leading-tight tracking-tight"
              variants={textVariants}
            >
              Sobre a{" "}
              <span className="bg-gradient-to-r from-[#DDDED3] via-[#DDDED3] to-[#676B49] bg-clip-text text-transparent">
                Óptima
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-[#DDDED3]/80 leading-relaxed font-light"
              variants={textVariants}
            >
              Uma história de confiança, expertise e dedicação à proteção do que importa
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História - MESMA ESTRUTURA de conteúdo */}
      <section id="nossa-historia" className="py-20 md:py-28 bg-gradient-to-br from-white via-[#F8F9FA] to-[#DDDED3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Imagem */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D285E]/20 via-transparent to-transparent" />
              
              {/* Badge na Imagem */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-[#1D285E]">+500 Clientes</p>
                <p className="text-xs text-[#676B49]">Satisfeitos</p>
              </div>
            </motion.div>

            {/* Conteúdo */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D285E] mb-6">
                Nossa <span className="text-[#676B49]">História</span>
              </h2>
              
              <div className="space-y-4 text-[#1D285E]/70 text-lg leading-relaxed">
                <p>
                  A Óptima Corretora de Seguros é resultado de anos de experiência no mercado português de mediação
                  seguros. Nascemos da paixão de um grupo de profissionais que acreditavam que era possível fazer
                  diferente.
                </p>
                <p>
                  Não nos satisfazemos em oferecer produtos genéricos. Cada cliente é único, e por isso, cada solução que
                  recomendamos é personalizada, pensada ao detalhe e adequada à realidade de quem nos procura.
                </p>
                <p>
                  Somos parceiros de confiança de empresas e particulares que sabem o valor de uma proteção bem feita.
                </p>
              </div>

              {/* Indicadores - MESMA ESTRUTURA */}
              <motion.div 
                className="flex flex-wrap gap-8 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  { icon: Users, label: "Clientes Ativos", value: "500+" },
                  { icon: Shield, label: "Seguradoras Parceiras", value: "15+" },
                  { icon: Star, label: "Anos de Experiência", value: "8+" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-xl flex items-center justify-center">
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

      {/* Missão, Visão e Valores - MESMA ESTRUTURA de cards */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1D285E]/5 via-white to-[#676B49]/5">
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
            {/* Missão */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                  Missão
                </h3>
                <p className="text-[#1D285E]/70 leading-relaxed">
                  Ser o intermediário de confiança que simplifica o processo de contratação de seguros, protegendo o que
                  verdadeiramente importa aos nossos clientes.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-[#1D285E] to-[#676B49] rounded-full mt-6 group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>

            {/* Visão */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                  Visão
                </h3>
                <p className="text-[#1D285E]/70 leading-relaxed">
                  Ser a corretora de seguros mais recomendada em Portugal, reconhecida pela excelência do atendimento e
                  qualidade das soluções apresentadas.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-[#1D285E] to-[#676B49] rounded-full mt-6 group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>

            {/* Valores */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                  Valores
                </h3>
                <ul className="space-y-3 text-[#1D285E]/70">
                  {[
                    "Integridade e transparência",
                    "Comprometimento com o cliente", 
                    "Excelência operacional",
                    "Inovação contínua"
                  ].map((value, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#676B49] flex-shrink-0" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-12 h-1 bg-gradient-to-r from-[#1D285E] to-[#676B49] rounded-full mt-6 group-hover:w-16 transition-all duration-300" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais - MESMA ESTRUTURA de grid */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#F8F9FA] to-[#DDDED3]/40">
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
            {[
              {
                icon: Users,
                title: "Consultoria Independente",
                description: "Recomendações baseadas unicamente em suas necessidades, não em comissões.",
              },
              {
                icon: Shield,
                title: "Parceiros Premium", 
                description: "Relação exclusiva com as melhores seguradoras do mercado português.",
              },
              {
                icon: Star,
                title: "Atendimento Personalizado",
                description: "Suporte dedicado disponível sempre que precisar.",
              },
              {
                icon: Heart,
                title: "Acompanhamento Total",
                description: "Desde a simulação até à resolução de sinistros.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1D285E] to-[#676B49] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#1D285E]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final - MESMA ESTRUTURA exata das outras páginas */}
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
              <Heart className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium tracking-wide">
                Conheça Nossa Equipa
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Quer conhecer melhor a{" "}
                <span className="bg-gradient-to-r from-white to-[#DDDED3] bg-clip-text text-transparent">
                  equipa
                </span>
                ?
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Entre em contacto conosco para uma conversa sem compromisso
              </p>
            </div>

            {/* CTA Button */}
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
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1D285E]/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Users className="w-5 h-5 relative" />
                <span className="relative">Contactar Óptima</span>
              </motion.a>
            </motion.div>

            {/* Footer Note */}
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