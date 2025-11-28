"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, DollarSign, Users, Clock } from "lucide-react"
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

export default function MediationPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Serviço de Mediação</h1>
              <p className="text-lg text-foreground/70 mb-6">
                A ponte entre você e a proteção ideal. Simplificamos o complexo mundo dos seguros.
              </p>
              <Link
                href="/simulation"
                className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Começar Simulação
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-96">
              <Image
                src="/placeholder.svg?key=mediation-service"
                alt="Serviço de mediação"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O que é Mediação */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="O que é Mediação de Seguros?" subtitle="Explicação do nosso modelo de negócio" />

          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-lg text-foreground/70 mb-6">
              A mediação de seguros é um serviço de intermediação entre clientes e seguradoras. Como mediador,
              representamos os seus interesses, não os da companhia seguradora.
            </motion.p>

            <motion.div variants={itemVariants} className="bg-primary/5 border border-primary/10 rounded-lg p-8 mb-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Vantagens da Mediação:</h3>
              <ul className="space-y-3">
                {[
                  "Acesso a múltiplas seguradoras e coberturas",
                  "Comparação automática de preços e condições",
                  "Recomendações personalizadas",
                  "Suporte administrativo completo",
                  "Representação em caso de sinistro",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-secondary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Como Funciona na Prática" subtitle="Processo simples em 4 passos" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "1",
                title: "Consulta Inicial",
                description: "Conhecemos suas necessidades e situação",
              },
              {
                step: "2",
                title: "Análise",
                description: "Comparamos múltiplas seguradoras",
              },
              {
                step: "3",
                title: "Recomendação",
                description: "Apresentamos a melhor solução",
              },
              {
                step: "4",
                title: "Contratação",
                description: "Formalizamos o seguro escolhido",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="bg-white border border-border rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Acompanhamento no Sinistro */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="relative h-80">
              <Image
                src="/placeholder.svg?key=claims-support"
                alt="Suporte em sinistros"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-primary mb-6">Acompanhamento Completo no Sinistro</h2>
              <p className="text-lg text-foreground/70 mb-6">
                O sinistro é um momento crítico. Você não está sozinho. Acompanhamos todo o processo:
              </p>
              <ul className="space-y-4">
                {[
                  "Orientação sobre procedimentos",
                  "Documentação necessária",
                  "Negociação com seguradoras",
                  "Agilização do processo",
                  "Resolução de conflitos",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mediação vs Direto */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Mediação vs Contratação Direta" subtitle="Compare os dois modelos" />

          <motion.div
            className="overflow-x-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-bold text-primary">Aspecto</th>
                  <th className="text-center py-4 px-4 font-bold text-primary">Com Mediação</th>
                  <th className="text-center py-4 px-4 font-bold text-primary">Contratação Direta</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Comparação de preços", mediation: "✓", direct: "✗" },
                  { aspect: "Múltiplas opções", mediation: "✓", direct: "✗" },
                  { aspect: "Assessoria pessoal", mediation: "✓", direct: "✗" },
                  { aspect: "Suporte administrativo", mediation: "✓", direct: "✗" },
                  { aspect: "Acompanhamento sinistro", mediation: "✓", direct: "✗" },
                  { aspect: "Custo adicional", mediation: "✗", direct: "✗" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-primary/5">
                    <td className="py-4 px-4 font-medium text-foreground">{row.aspect}</td>
                    <td className="py-4 px-4 text-center text-secondary font-bold">{row.mediation}</td>
                    <td className="py-4 px-4 text-center text-foreground/50">{row.direct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-foreground/70 mt-8"
          >
            Não há custos adicionais. Recebemos comissão das seguradoras, não de você.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Benefícios Comprovados" subtitle="O que nossos clientes conseguem" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={DollarSign}
              title="Poupança Média"
              description="Redução de até 30% nos prémios comparativamente ao mercado"
            />
            <ServiceCard
              icon={Clock}
              title="Tempo Economizado"
              description="Processo ágil e simplificado de contratação"
            />
            <ServiceCard
              icon={Users}
              title="Tranquilidade"
              description="Suporte contínuo e representação quando precisar"
            />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para começar?</h2>
            <p className="text-xl text-white/90 mb-8">Faça uma simulação gratuita e veja quantos pode poupar</p>
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
