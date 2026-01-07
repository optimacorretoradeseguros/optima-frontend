"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Car, Heart, Plane, Home, Shield, Users, Star } from "lucide-react"
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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

export default function IndividualsPage() {
  return (
    <div className="w-full pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1D285E]">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#1D285E]" />
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#676B49]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-[#1D285E]/20 rounded-full blur-3xl" />
        </div>

        {/* Imagem de Fundo com Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/24.jpeg"
            alt="Proteção para particulares"
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
            {/* Badge de Destaque */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#DDDED3]/10 backdrop-blur-md border border-[#DDDED3]/15 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#676B49] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#ffffff] tracking-wider uppercase">
                  Proteção Pessoal
                </span>
              </div>
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight tracking-tight"
              variants={textVariants}
            >
              Proteção para{" "}
              <span className="text-white">
                Particulares
              </span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-[#ffffff]/80 leading-relaxed font-light"
              variants={textVariants}
            >
              Seguros personalizados para cada etapa da sua vida e todas as suas necessidades
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/consultar-cotacao"
                  className="group relative flex items-center justify-center px-8 py-4 rounded-full font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute inset-0 w-full h-full bg-[#676B49] transition-opacity duration-300" />
                  <div className="absolute inset-0 w-full h-full pointer-events-none bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                  <div className="absolute inset-0 w-full h-full pointer-events-none bg-[#676B49]/70 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  <span className="relative z-10 flex items-center gap-3 text-base text-white">
                    <Car className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Solicitar Cotação
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tipos de Seguros - ATUALIZADO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tipos de Seguros"
            subtitle="Soluções para cada aspecto da sua vida"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                icon: Car,
                title: "Responsabilidade Civil (Automóvel)",
                description: "Proteção contra danos a terceiros em acidentes com o seu veículo",
                features: [
                  "Danos corporais a terceiros",
                  "Danos materiais a terceiros",
                  "Assistência jurídica",
                  "Cobertura nacional e internacional",
                  "Limites de capital ajustáveis",
                ],
              },
              {
                icon: Shield,
                title: "Contra Todos os Riscos (Automóvel)",
                description: "Proteção abrangente para o seu veículo, incluindo danos próprios",
                features: [
                  "Danos próprios por colisão",
                  "Roubo e furto total/parcial",
                  "Danos por fenómenos naturais",
                  "Vidros e faróis",
                  "Assistência 24h em viagem",
                ],
              },
              {
                icon: Heart,
                title: "Saúde",
                description: "Acesso a cuidados médicos de qualidade e tratamentos especializados",
                features: [
                  "Consultas médicas gerais e especializadas",
                  "Hospitalizações e cirurgias",
                  "Exames diagnósticos",
                  "Medicamentos e tratamentos",
                  "Acesso a rede privada de saúde",
                ],
              },
              {
                icon: Plane,
                title: "Viagem",
                description: "Segurança e assistência durante as suas viagens nacionais e internacionais",
                features: [
                  "Assistência médica no estrangeiro",
                  "Repatriamento sanitário",
                  "Cancelamento ou interrupção de viagem",
                  "Perda ou dano de bagagem",
                  "Responsabilidade civil em viagem",
                ],
              },
              {
                icon: Home,
                title: "Multirisco Habitação",
                description: "Proteção completa para a sua casa e conteúdo contra diversos riscos",
                features: [
                  "Incêndio e explosão",
                  "Roubo e furto",
                  "Danos por água",
                  "Responsabilidade civil familiar",
                  "Quebra de vidros e eletrodomésticos",
                ],
              },
              {
                icon: Home,
                title: "Multirisco Incêndio",
                description: "Proteção específica contra incêndio e riscos associados",
                features: [
                  "Incêndio e explosão",
                  "Raio e tempestade",
                  "Danos por fumo",
                  "Despesas de salvamento",
                  "Alojamento alternativo",
                ],
              },
              {
                icon: Users,
                title: "Acidente de Trabalho e Doenças Profissionais (Individual)",
                description: "Proteção para acidentes ocorridos no exercício da atividade profissional",
                features: [
                  "Invalidez permanente ou temporária",
                  "Morte por acidente de trabalho",
                  "Despesas de tratamento médico",
                  "Indemnizações diárias",
                  "Reabilitação profissional",
                ],
              },
            ].map((insurance, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#1D285E] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md mx-auto">
                    <insurance.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1D285E] mb-3 group-hover:text-[#676B49] transition-colors duration-300 line-clamp-2">
                    {insurance.title}
                  </h3>

                  <p className="text-[#1D285E]/70 text-sm leading-relaxed mb-4 grow">
                    {insurance.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {insurance.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#1D285E]/60">
                        <div className="w-1.5 h-1.5 bg-[#676B49] rounded-full shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                    {insurance.features.length > 3 && (
                      <li className="text-xs text-[#676B49] font-medium">
                        + {insurance.features.length - 3} outras coberturas
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fases da Vida */}
      <section className="py-20 md:py-28 bg-[#F8F9FA]">
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
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Imagem */}
            <motion.div variants={itemVariants} className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/28.jpg"
                alt="Fases da vida"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1D285E]/20" />

              {/* Badge na Imagem */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-[#1D285E]">Para Todas as Idades</p>
                <p className="text-xs text-[#676B49]">Proteção Adaptada</p>
              </div>
            </motion.div>

            {/* Conteúdo */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Lista de Fases */}
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
                    className="flex items-center gap-4 p-4 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#676B49]/10"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-10 h-10 bg-[#676B49] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Porque Escolher */}
      <section className="py-20 md:py-28 bg-white">
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
            viewport={{ once: true, amount: 0.2 }}
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
                  <div className="w-16 h-16 bg-[#1D285E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1D285E] mb-4 group-hover:text-[#676B49] transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-[#1D285E]/70 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Linha decorativa */}
                  <div className="w-12 h-1 bg-[#1D285E] rounded-full mt-6 group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-[#1D285E] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
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
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium tracking-wide">
                Proteção Personalizada
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Pronto para{" "}
                <span className="text-white">
                  proteger
                </span>{" "}
                o que é importante?
              </h2>

              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Receba uma cotação personalizada dos nossos especialistas
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
                href="/simulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D285E] rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#1D285E]/5 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Shield className="w-5 h-5 relative" />
                <span className="relative">Solicitar Cotação</span>
              </motion.a>
            </motion.div>

            {/* Footer Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/50 text-sm"
            >
              Resposta em 24 horas • Análise personalizada • Sem compromisso inicial
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}