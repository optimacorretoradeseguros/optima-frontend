"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

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

export default function ContactPage() {
  return (
    <div className="w-full pt-16">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Entre em Contacto</h1>
            <p className="text-xl text-foreground/70">
              Estamos aqui para ajudar. Contacte-nos através do meio que preferir
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Email</h3>
              <p className="text-foreground/70 mb-4">Enviamos resposta em até 24 horas</p>
              <a
                href="mailto:info@optima.pt"
                className="inline-block text-secondary font-semibold hover:opacity-70 transition-opacity"
              >
                info@optima.pt
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Telefone</h3>
              <p className="text-foreground/70 mb-4">Disponível de segunda a sexta</p>
              <a
                href="tel:+351212345678"
                className="inline-block text-secondary font-semibold hover:opacity-70 transition-opacity"
              >
                +351 21 234 5678
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Localização</h3>
              <p className="text-foreground/70 mb-4">Visite-nos em Lisboa</p>
              <address className="not-italic text-secondary font-semibold">
                Avenida Principal, 123
                <br />
                1000-123 Lisboa
              </address>
            </motion.div>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/10 rounded-lg p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Horário de Atendimento</h3>
                <p className="text-foreground/70">Telefone, email e chat em tempo real</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <h4 className="font-semibold text-primary mb-3">Segunda a Sexta</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>09:00 - 13:00</li>
                  <li>14:00 - 18:00</li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="font-semibold text-primary mb-3">Fim de Semana</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>Sábado: 09:00 - 13:00</li>
                  <li>Domingo: Fechado</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-border rounded-lg overflow-hidden h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin size={48} className="text-primary/30 mx-auto mb-4" />
              <p className="text-foreground/50">
                Mapa estático preparado - substituir com integração de mapas quando necessário
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Prefere uma abordagem mais rápida?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/simulation"
                className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-accent transition-colors"
              >
                Fazer Simulação
              </Link>
              <a
                href="https://wa.me/351912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
