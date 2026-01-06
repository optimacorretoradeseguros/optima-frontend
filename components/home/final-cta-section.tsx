"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Phone, Star } from "lucide-react"

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-linear-to-br from-white via-[#1D285E] to-[#DDDED3]/40">
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
              Comece Agora Seu Compromisso
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Pronto para proteger o que é{" "}
              <span className="bg-[#DDDED3] bg-clip-text">
                importante
              </span>
              ?
            </h2>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Fale com um dos nossos consultores especializados hoje mesmo
            </p>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#DDDED3] rounded-full" />
              Consultoria
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#DDDED3] rounded-full" />
              Compromisso
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#DDDED3] rounded-full" />
              Resposta em 24h
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/consultar-cotacao"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D285E] rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#1D285E]/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <Calendar className="w-5 h-5 relative" />
                <span className="relative">Solicite a Sua Cotaçao</span>

              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white/30 hover:border-white/60 transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                Falar Imediatamente

              </Link>
            </motion.div>
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
  )
}