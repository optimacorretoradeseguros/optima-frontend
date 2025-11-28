"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Eye, Heart } from "lucide-react"
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

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Sobre a Óptima</h1>
            <p className="text-xl text-foreground/70">
              Uma história de confiança, expertise e dedicação à proteção do que importa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="relative h-96">
              <Image
                src="/placeholder.svg?key=company-story"
                alt="Equipa Óptima"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Quem Somos</h2>
              <p className="text-lg text-foreground/70 mb-4">
                A Óptima Corretora de Seguros é resultado de anos de experiência no mercado português de mediação
                seguros. Nascemos da paixão de um grupo de profissionais que acreditavam que era possível fazer
                diferente.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Não nos satisfazemos em oferecer produtos genéricos. Cada cliente é único, e por isso, cada solução que
                recomendamos é personalizada, pensada ao detalhe e adequada à realidade de quem nos procura.
              </p>
              <p className="text-lg text-foreground/70">
                Somos parceiros de confiança de empresas e particulares que sabem o valor de uma proteção bem feita.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Missão, Visão e Valores" subtitle="Os pilares que nos guiam" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Missão */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Target size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
              <p className="text-foreground/70">
                Ser o intermediário de confiança que simplifica o processo de contratação de seguros, protegendo o que
                verdadeiramente importa aos nossos clientes.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Eye size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
              <p className="text-foreground/70">
                Ser a corretora de seguros mais recomendada em Portugal, reconhecida pela excelência do atendimento e
                qualidade das soluções apresentadas.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              variants={itemVariants}
              className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Heart size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Integridade e transparência</li>
                <li>• Comprometimento com o cliente</li>
                <li>• Excelência operacional</li>
                <li>• Inovação contínua</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Nossos Diferenciais" subtitle="O que nos torna únicos no mercado" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Consultoria Independente",
                description: "Recomendações baseadas unicamente em suas necessidades, não em comissões.",
              },
              {
                title: "Parceiros Premium",
                description: "Relação exclusiva com as melhores seguradoras do mercado português.",
              },
              {
                title: "Atendimento 24/7",
                description: "Suporte dedicado disponível sempre que precisar.",
              },
              {
                title: "Acompanhamento Total",
                description: "Desde a simulação até à resolução de sinistros.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quer conhecer melhor a equipa?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contacto conosco para uma conversa sem compromisso
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Contactar Óptima
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
