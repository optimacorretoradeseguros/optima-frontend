"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Car, Heart, Plane } from "lucide-react"
import SectionHeader from "@/components/section-header"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function IndividualsPage() {
  return (
    <div className="w-full pt-16">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Proteção para Particulares</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Seguros personalizados para cada etapa da sua vida e todas as suas necessidades.
              </p>
              <Link
                href="/simulation"
                className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Simular Agora
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-96">
              <Image
                src="/placeholder.svg?key=personal-protection"
                alt="Proteção para particulares"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tipos de Seguros */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Tipos de Seguros" subtitle="Soluções para cada aspecto da sua vida" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Car,
                title: "Seguro de Automóvel",
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
                features: [
                  "Consultas médicas",
                  "Hospitalizações",
                  "Cirurgias",
                  "Tratamentos especializados",
                  "Acesso a rede privada",
                ],
              },
              {
                icon: Heart,
                title: "Seguro de Vida",
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
                features: [
                  "Regressos de emergência",
                  "Assistência médica",
                  "Cancelamento de viagem",
                  "Bagagem perdida",
                  "Responsabilidade civil",
                ],
              },
            ].map((insurance, index) => {
              const Icon = insurance.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{insurance.title}</h3>
                  <ul className="space-y-3">
                    {insurance.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-secondary mt-0.5" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Por Vida Stages */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Proteção Conforme a Vida Evolui" subtitle="Soluções adaptadas a cada fase" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Início de Vida",
                description: "Independência e primeiras responsabilidades",
                items: ["Saúde", "Viagem", "Responsabilidade civil"],
              },
              {
                title: "Formação de Família",
                description: "Proteção dos seus e do patrimônio",
                items: ["Vida", "Saúde", "Habitação"],
              },
              {
                title: "Reforma",
                description: "Rendimento seguro e proteção contínua",
                items: ["Rendimentos", "Saúde", "Viagem"],
              },
            ].map((stage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{stage.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{stage.description}</p>
                <ul className="space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Por que Confiar em Nós" subtitle="Vantagens para particulares" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="relative h-96">
              <Image
                src="/placeholder.svg?key=personal-choice"
                alt="Escolha dos particulares"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ul className="space-y-4">
                {[
                  "Comparação entre múltiplas seguradoras",
                  "Recomendações personalizadas sem pressão",
                  "Preços competitivos garantidos",
                  "Documentação simplificada",
                  "Suporte 24/7 em caso de sinistro",
                  "Renovações automáticas com alertas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-secondary mt-0.5" />
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comece sua proteção hoje</h2>
            <p className="text-xl text-white/90 mb-8">Simulação rápida e sem compromisso em minutos</p>
            <Link
              href="/simulation"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Fazer Simulação Gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
