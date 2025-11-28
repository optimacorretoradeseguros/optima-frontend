"use client"

import { motion } from "framer-motion"
import SectionHeader from "@/components/section-header"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function PartnersPage() {
  const insurers = [
    { name: "Allianz", placeholder: "allianz" },
    { name: "AXA", placeholder: "axa" },
    { name: "Fidelidade", placeholder: "fidelidade" },
    { name: "Lusitania", placeholder: "lusitania" },
    { name: "Zurich", placeholder: "zurich" },
    { name: "Generali", placeholder: "generali" },
    { name: "Tranquilidade", placeholder: "tranquilidade" },
    { name: "Seguradoras Unidas", placeholder: "seguradoras-unidas" },
    { name: "Multicare", placeholder: "multicare" },
  ]

  return (
    <div className="w-full pt-16">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Seguradoras Parceiras</h1>
            <p className="text-xl text-foreground/70">
              Parcerias com as melhores seguradoras do mercado português para lhe garantir as melhores soluções.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {insurers.map((insurer) => (
              <motion.div
                key={insurer.name}
                variants={itemVariants}
                className="bg-white border border-border rounded-lg p-8 flex items-center justify-center min-h-[150px] hover:shadow-md transition-shadow cursor-pointer hover:border-secondary"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <span className="text-sm font-semibold text-primary text-center">{insurer.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Our Partners */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Por que Trabalhar com Estas Seguradoras" subtitle="Critérios de seleção rigorosos" />

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Solidez Financeira",
                description:
                  "Todas as parceiras têm elevados ratings de solidez e capacidade de pagamento de sinistros.",
              },
              {
                title: "Ofertas Competitivas",
                description: "Negociamos as melhores condições e prémios exclusivos para nossos clientes.",
              },
              {
                title: "Agilidade em Sinistros",
                description: "Processos de reclamação rápidos e eficientes com respostas em 24-48 horas.",
              },
              {
                title: "Inovação",
                description: "Parceiros que constantemente renovam produtos e serviços digitais.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para encontrar a melhor cobertura?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contacte-nos para explorar as opções das nossas seguradoras parceiras
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Falar com Consultor
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
