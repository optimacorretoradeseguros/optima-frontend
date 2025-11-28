"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Shield, Zap, TrendingUp } from "lucide-react"
import SectionHeader from "@/components/section-header"
import ServiceCard from "@/components/service-card"

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

export default function CompaniesPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Soluções para Empresas</h1>
              <p className="text-lg text-foreground/70 mb-6">
                Proteja seu negócio com coberturas abrangentes e flexíveis, adaptadas ao seu setor e tamanho.
              </p>
              <Link
                href="/simulation"
                className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Solicitar Análise
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-96">
              <Image
                src="/placeholder.svg?key=business-solutions"
                alt="Soluções empresariais"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Benefícios para sua Empresa" subtitle="Por que confiar proteção em nós" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={Shield}
              title="Proteção Completa"
              description="Coberturas abrangentes para patrimônio, responsabilidade e pessoal."
            />
            <ServiceCard
              icon={Zap}
              title="Contratos Flexíveis"
              description="Adaptados ao seu negócio com opções de personalização."
            />
            <ServiceCard
              icon={TrendingUp}
              title="Consultoria Estratégica"
              description="Análise de riscos e recomendações de proteção alinhadas com objetivos."
            />
          </motion.div>
        </div>
      </section>

      {/* Tipos de Seguros */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Tipos de Seguros Empresariais" subtitle="Soluções para cada necessidade" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Responsabilidade Civil Geral",
                items: [
                  "Proteção contra reclamações de terceiros",
                  "Cobertura de danos corporais e materiais",
                  "Defesa judicial incluída",
                ],
              },
              {
                title: "Seguro de Bens e Patrimônio",
                items: ["Incêndio e roubo", "Danos elétricos", "Cobertura de equipamentos"],
              },
              {
                title: "Proteção de Colaboradores",
                items: ["Acidentes de trabalho", "Seguro de doença profissional", "Benefícios adicionais"],
              },
              {
                title: "Seguro de Transporte",
                items: ["Mercadorias em trânsito", "Frota de veículos", "Responsabilidade do transportador"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-secondary mt-0.5" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Nosso Processo" subtitle="Como trabalhamos com empresas" />

          <motion.div
            className="max-w-3xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "1",
                title: "Análise de Risco",
                description: "Avaliamos seu negócio, operações e exposição a riscos",
              },
              {
                step: "2",
                title: "Recomendação",
                description: "Propomos coberturas adequadas com múltiplas opções",
              },
              {
                step: "3",
                title: "Implementação",
                description: "Contratamos e gerenciamos a política de seguros",
              },
              {
                step: "4",
                title: "Suporte Contínuo",
                description: "Acompanhamento regular e ajustes conforme necessário",
              },
            ].map((item) => (
              <motion.div key={item.step} variants={itemVariants} className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study / Success */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Por que Empresas Escolhem a Óptima" subtitle="Histórias de sucesso" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                metric: "200+",
                description: "Empresas protegidas em Portugal",
              },
              {
                metric: "€2M+",
                description: "Poupado em prémios anuais",
              },
              {
                metric: "24h",
                description: "Resposta em caso de sinistro",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-border rounded-lg p-8 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-4xl font-bold text-secondary mb-2">{stat.metric}</p>
                <p className="text-foreground/70">{stat.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Proteja seu negócio hoje</h2>
            <p className="text-xl text-white/90 mb-8">Solicite uma análise personalizada de riscos</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Contactar Especialista
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
