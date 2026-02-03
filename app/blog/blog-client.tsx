"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Search, Calendar, ArrowRight, User, Users, X } from "lucide-react"
import { useState } from "react"
import SectionHeader from "@/components/section-header"
import UltimateCTASection from "@/components/home/ultimate-cta-section"

// Tipos para os posts do Hygraph
export interface HygraphPost {
    id: string
    tituloDoPost: string
    slugDoPost: string
    categoriaDoPost: string[]
    fotoDeCapa?: {
        url: string
    }
    resumoDoPost: string
    conteudoDoPost: {
        text: string
    }
}

interface BlogClientProps {
    initialPosts: HygraphPost[]
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
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

export default function BlogClient({ initialPosts }: BlogClientProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Todos")

    // Use initialPosts directly, defaulting to empty array
    const posts = initialPosts || []

    // Extrair categorias únicas dos posts (ensure posts exists)
    const categories = ["Todos", ...new Set(posts.flatMap((post) => post?.categoriaDoPost || []).filter(Boolean))]

    // Filtrar posts baseado na pesquisa e categoria
    const filteredPosts = posts.filter((post) => {
        if (!post) return false

        const term = searchTerm.toLowerCase().trim()
        const matchesCategory = selectedCategory === "Todos" || (post.categoriaDoPost && post.categoriaDoPost.includes(selectedCategory))

        if (!term) return matchesCategory

        const matchesSearch =
            (post.tituloDoPost?.toLowerCase() || "").includes(term) ||
            (post.resumoDoPost?.toLowerCase() || "").includes(term)

        return matchesSearch && matchesCategory
    })

    // Formatar data para exibição
    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        try {
            const date = new Date(dateString)
            return date.toLocaleDateString("pt-AO", {
                day: "numeric",
                month: "long",
                year: "numeric"
            })
        } catch {
            return ""
        }
    }

    return (
        <div className="w-full pt-20">
            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#1D285E]">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[#1D285E]" />
                    <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#676B49]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-[#1D285E]/20 rounded-full blur-3xl" />
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
                                <span className="text-sm font-medium text-[#DDDED3] tracking-wider uppercase">
                                    Conhecimento em Seguros
                                </span>
                            </div>
                        </motion.div>

                        {/* Título Principal */}
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-tight tracking-tight"
                            variants={textVariants}
                        >
                            Blog{" "}
                            <span className="text-white">
                                ÓPTIMA
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl lg:text-2xl text-[#ffffff]/80 leading-relaxed font-light"
                            variants={textVariants}
                        >
                            Artigos, dicas e insights sobre seguros e proteção
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Search Bar */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Pesquisar artigos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-12 py-4 border border-[#1D285E]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#676B49] focus:border-transparent bg-white/80 backdrop-blur-sm text-[#1D285E] placeholder:text-[#1D285E]/70 transition-all duration-300 group-hover:border-[#676B49]/30"
                            />
                            <Search className="absolute left-4 top-3.5 text-[#1D285E]/80 group-hover:text-[#676B49] transition-colors duration-300 pointer-events-none z-10" size={20} />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-4 top-3.5 text-[#1D285E]/60 hover:text-[#676B49] transition-colors duration-300 z-10"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                        ? "bg-[#1D285E] text-white shadow-lg"
                                        : "bg-white text-[#1D285E] border border-[#1D285E]/10 hover:border-[#676B49]/30 hover:text-[#676B49] shadow-md hover:shadow-lg"
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                        <p className="text-center text-sm text-[#1D285E]/60 mt-4 animate-pulse">
                            {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Artigos em Destaque"
                        subtitle="Conteúdo dinâmico gerenciado via Hygraph"
                    />

                    {/* Posts Grid */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                    >
                        {filteredPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                                className="group"
                            >
                                <Link href={`/blog/${post.slugDoPost}`}>
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 overflow-hidden h-full">
                                        {/* Thumbnail */}
                                        <div className="relative h-48 overflow-hidden">
                                            {post.fotoDeCapa?.url ? (
                                                <img
                                                    src={post.fotoDeCapa.url}
                                                    alt={post.tituloDoPost || 'Artigo do Blog'}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-[#1D285E]" />
                                            )}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 text-[#1D285E] text-xs font-medium px-3 py-1 rounded-full">
                                                    {post.categoriaDoPost?.[0] || 'Geral'}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="flex items-center gap-4 text-white/80 text-xs">
                                                    {/* Date and read time removed as not in query */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="font-bold text-[#1D285E] text-lg mb-3 group-hover:text-[#676B49] transition-colors duration-300 line-clamp-2">
                                                {post.tituloDoPost || 'Sem título'}
                                            </h3>

                                            <p className="text-[#1D285E]/70 text-sm mb-4 leading-relaxed line-clamp-2">
                                                {post.resumoDoPost || ''}
                                            </p>

                                            {/* CTA */}
                                            <div className="flex items-center gap-2 text-[#676B49] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                                Ler Artigo Completo
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {/* No Results State */}
                    {filteredPosts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="max-w-md mx-auto">
                                <Search className="w-16 h-16 text-[#1D285E]/20 mx-auto mb-4" />
                                <p className="text-lg text-[#1D285E]/70 mb-2">Nenhum artigo encontrado</p>
                                <p className="text-sm text-[#1D285E]/50">Tente ajustar os filtros ou termos de pesquisa</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Ultimate CTA */}
            <UltimateCTASection />
        </div>
    )
}
