"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Phone, Star, Shield, ArrowRight } from "lucide-react"

interface UltimateCTASectionProps {
    hideSecondaryAction?: boolean
}

export default function UltimateCTASection({ hideSecondaryAction = false }: UltimateCTASectionProps) {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0f1225]">
            {/* ========================================= */}
            {/* Background Elements - Immersive & Premium */}
            {/* ========================================= */}

            {/* Deep Blue Base Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-[#1D285E] to-[#0a0d1c] opacity-90" />

            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1D285E] rounded-full blur-[120px] mix-blend-screen opacity-40 -translate-y-1/2 translate-x-1/4"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 15, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#676B49] rounded-full blur-[100px] mix-blend-screen opacity-20 translate-y-1/3 -translate-x-1/4"
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-image:linear-gradient(180deg,white,rgba(255,255,255,0)) opacity-10" />

            {/* ========================================= */}
            {/* Content Container */}
            {/* ========================================= */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-10">

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
                    >
                        <Shield className="w-4 h-4 text-[#bbc096]" />
                        <span className="text-[#bbc096] text-sm font-medium tracking-wide">
                            Comece Agora Seu Compromisso
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl"
                    >
                        Pronto para proteger o que é{" "}
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-[#bbc096] via-[#e2e5c8] to-[#bbc096] animate-gradient-x">
                                importante?
                            </span>
                            <div className="absolute -inset-1 bg-[#676B49]/20 blur-xl opacity-50 -z-10" />
                        </span>
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
                    >
                        Fale com um dos nossos consultores especializados hoje mesmo
                    </motion.p>

                    {/* CTA Buttons Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                    >
                        {/* Primary Simulation Button */}
                        <Link
                            href="/consultar-cotacao"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#676B49] text-white rounded-2xl font-bold text-lg shadow-lg shadow-[#676B49]/20 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#676B49]/30"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <div className="relative flex items-center gap-3">
                                <Calendar className="w-5 h-5" />
                                <span>Solicite a Sua Cotação</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Secondary Contact Button */}
                        {!hideSecondaryAction && (
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Falar Imediatamente</span>
                            </Link>
                        )}
                    </motion.div>

                    {/* Trust Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="pt-8 flex items-center gap-6 text-white/40 text-sm font-medium flex-wrap justify-center"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#676B49] rounded-full" />
                            <span>Consultoria</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#676B49] rounded-full" />
                            <span>Compromisso</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#676B49] rounded-full" />
                            <span>Resposta em 24h</span>
                        </div>
                        <div className="w-full text-center mt-2 text-white/30 text-xs">
                            Resposta garantida em até 24 horas úteis
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
