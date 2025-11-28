"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Search, Calendar, ArrowRight, Star, Users } from "lucide-react"
import { useState } from "react"
import SectionHeader from "@/components/section-header"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// Mock blog data - ready for Hygraph integration
const mockPosts = [
  {
    id: 1,
    title: "Guia Completo: Seguro de Automóvel em Angola",
    excerpt: "Tudo o que precisa saber sobre coberturas, tipos de seguros e como poupar na renovação.",
    category: "Seguros Auto",
    date: "15 de Novembro, 2025",
    slug: "guia-seguro-automovel",
    readTime: "8 min de leitura"
  },
  {
    id: 2,
    title: "5 Razões Para Ter um Seguro de Vida",
    excerpt: "Proteção para sua família: saiba como um seguro de vida pode fazer toda a diferença.",
    category: "Seguros Vida",
    date: "12 de Novembro, 2025",
    slug: "razoes-seguro-vida",
    readTime: "6 min de leitura"
  },
  {
    id: 3,
    title: "Como Fazer Réclamações em Caso de Sinistro",
    excerpt: "Passo a passo para navegar o processo de reclamação e obter indenização rápida.",
    category: "Dicas",
    date: "10 de Novembro, 2025",
    slug: "reclamacoes-sinistro",
    readTime: "10 min de leitura"
  },
  {
    id: 4,
    title: "Proteção Empresarial: Riscos Comuns e Soluções",
    excerpt: "Quais os riscos mais frequentes em empresas e como proteger-se adequadamente.",
    category: "Empresas",
    date: "8 de Novembro, 2025",
    slug: "riscos-empresariais",
    readTime: "7 min de leitura"
  },
  {
    id: 5,
    title: "Seguro de Saúde: Benefícios e Cobertura Explicados",
    excerpt: "Entenda o que cobre um seguro de saúde e como escolher o plano certo.",
    category: "Saúde",
    date: "5 de Novembro, 2025",
    slug: "seguro-saude",
    readTime: "9 min de leitura"
  },
  {
    id: 6,
    title: "Tendências em Seguros para 2025",
    excerpt: "As principais tendências e inovações que moldarão o mercado de seguros este ano.",
    category: "Tendências",
    date: "1 de Novembro, 2025",
    slug: "tendencias-2025",
    readTime: "5 min de leitura"
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const categories = ["Todos", ...new Set(mockPosts.map((post) => post.category))]

  const filteredPosts = mockPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="w-full pt-16">
      {/* Hero - Harmonizado com outras páginas */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1D285E]/98 via-[#1D285E]/95 to-[#676B49]/90">
        {/* Background Pattern Elegante */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1D285E] via-[#1D285E]/95 to-[#676B49]/85" />
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-[#676B49]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-[#1D285E]/20 rounded-full blur-3xl" />
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #DDDED3 1px, transparent 1px),
                linear-gradient(180deg, #DDDED3 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DDDED3] leading-tight tracking-tight"
              variants={textVariants}
            >
              Blog{" "}
              <span className="bg-gradient-to-r from-[#DDDED3] via-[#DDDED3] to-[#676B49] bg-clip-text text-transparent">
                ÓPTIMA
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-[#DDDED3]/80 leading-relaxed font-light"
              variants={textVariants}
            >
              Artigos, dicas e insights sobre seguros e proteção
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#DDDED3]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Search Bar - Estilo Harmonizado */}
            <div className="relative group">
              <Search className="absolute left-4 top-3.5 text-[#1D285E]/40 group-hover:text-[#676B49] transition-colors duration-300" size={20} />
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-[#1D285E]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#676B49] focus:border-transparent bg-white/80 backdrop-blur-sm text-[#1D285E] placeholder-[#1D285E]/40 transition-all duration-300 group-hover:border-[#676B49]/30"
              />
            </div>

            {/* Category Filters - Estilo Harmonizado */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#1D285E] to-[#1D285E]/90 text-white shadow-lg"
                      : "bg-white text-[#1D285E] border border-[#1D285E]/10 hover:border-[#676B49]/30 hover:text-[#676B49] shadow-md hover:shadow-lg"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Artigos em Destaque" 
            subtitle="Conteúdo preparado para integração com Hygraph"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 overflow-hidden h-full">
                    {/* Thumbnail/Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-[#1D285E] to-[#676B49] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1D285E]/80 to-[#676B49]/60" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-[#1D285E] text-xs font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-4 text-white/80 text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date.split(',')[0]}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-[#1D285E] text-lg mb-3 group-hover:text-[#676B49] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-[#1D285E]/70 text-sm mb-4 leading-relaxed line-clamp-2">
                        {post.excerpt}
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
          </motion.div>

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

      {/* Newsletter CTA - Harmonizado */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1D285E] via-[#1D285E]/95 to-[#676B49]/90 relative overflow-hidden">
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
                Em Breve
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Receba os{" "}
                <span className="bg-gradient-to-r from-white to-[#DDDED3] bg-clip-text text-transparent">
                  últimos artigos
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Estrutura preparada para newsletter - integração futura
              </p>
            </div>

            {/* Info Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/50 text-sm max-w-2xl mx-auto"
            >
              Conteúdo em breve... Esta seção será conectada via Hygraph para gerenciamento dinâmico de artigos e newsletter.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}