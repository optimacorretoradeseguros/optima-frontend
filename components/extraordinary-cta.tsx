"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageSquare, Shield } from "lucide-react"

export default function ExtraordinaryCTA() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#1D285E]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1D285E] via-[#151b3d] to-[#0f1225]" />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#676B49]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1D285E]/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden group">

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2s] ease-in-out" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Content */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#676B49]/20 border border-[#676B49]/30 text-[#bbc096] text-sm font-medium mb-6">
                                    <Shield className="w-4 h-4" />
                                    <span>Proteção Premium</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                                    Pronto para elevar <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bbc096] to-white">
                                        a sua segurança?
                                    </span>
                                </h2>

                                <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                                    Não deixe o futuro ao acaso. Fale hoje com os nossos especialistas e descubra soluções de seguros desenhadas exclusivamente para si e para o seu negócio.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link
                                    href="/simulation"
                                    className="group relative px-8 py-4 bg-[#676B49] text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:bg-[#5a5d3d] hover:shadow-lg hover:shadow-[#676B49]/30"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Iniciar Simulação
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>

                                <a
                                    href="https://wa.me/244933043525"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Falar no WhatsApp
                                </a>
                            </motion.div>
                        </div>

                        {/* Visual/Image Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 bg-gradient-to-tr from-[#1D285E] to-[#2a3875] p-2 rounded-[2.5rem] shadow-2xl rotate-3 border border-white/10">
                                <div className="bg-[#0f1535] rounded-[2rem] p-8 h-[400px] flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden">
                                    {/* Abstract UI Elements */}
                                    <div className="w-24 h-24 bg-[#676B49] rounded-2xl rotate-12 flex items-center justify-center shadow-lg shadow-[#676B49]/20 mb-4 z-10">
                                        <Shield className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white z-10">Óptima Seguros</h3>
                                    <div className="text-white/50 text-sm max-w-[200px] z-10">
                                        Excelência em corretagem e gestão de riscos desde 2015.
                                    </div>

                                    {/* Decorative Circles */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dashed border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                                </div>
                            </div>

                            {/* Back Card */}
                            <div className="absolute inset-0 bg-[#676B49]/20 rounded-[2.5rem] -rotate-6 blur-sm -z-10 translate-y-4 translate-x-4" />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
