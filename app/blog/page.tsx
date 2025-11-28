"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { useState } from "react"

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

// Mock blog data - ready for Hygraph integration
const mockPosts = [
  {
    id: 1,
    title: "Guia Completo: Seguro de Automóvel em Portugal",
    excerpt: "Tudo o que precisa saber sobre coberturas, tipos de seguros e como poupar na renovação.",
    category: "Seguros Auto",
    date: "15 de Novembro, 2025",
    slug: "guia-seguro-automovel",
  },
  {
    id: 2,
    title: "5 Razões Para Ter um Seguro de Vida",
    excerpt: "Proteção para sua família: saiba como um seguro de vida pode fazer toda a diferença.",
    category: "Seguros Vida",
    date: "12 de Novembro, 2025",
    slug: "razoes-seguro-vida",
  },
  {
    id: 3,
    title: "Como Fazer Réclamações em Caso de Sinistro",
    excerpt: "Passo a passo para navegar o processo de reclamação e obter indenização rápida.",
    category: "Dicas",
    date: "10 de Novembro, 2025",
    slug: "reclamacoes-sinistro",
  },
  {
    id: 4,
    title: "Proteção Empresarial: Riscos Comuns e Soluções",
    excerpt: "Quais os riscos mais frequentes em empresas e como proteger-se adequadamente.",
    category: "Empresas",
    date: "8 de Novembro, 2025",
    slug: "riscos-empresariais",
  },
  {
    id: 5,
    title: "Seguro de Saúde: Benefícios e Cobertura Explicados",
    excerpt: "Entenda o que cobre um seguro de saúde e como escolher o plano certo.",
    category: "Saúde",
    date: "5 de Novembro, 2025",
    slug: "seguro-saude",
  },
  {
    id: 6,
    title: "Tendências em Seguros para 2025",
    excerpt: "As principais tendências e inovações que moldarão o mercado de seguros este ano.",
    category: "Tendências",
    date: "1 de Novembro, 2025",
    slug: "tendencias-2025",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(mockPosts.map((post) => post.category))]

  const filteredPosts = mockPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Blog Óptima</h1>
            <p className="text-xl text-foreground/70">Artigos, dicas e insights sobre seguros e proteção</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-foreground/40" size={20} />
              <input
                type="text"
                placeholder="Pesquisar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:opacity-0 transition-opacity" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/50">{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-secondary font-medium hover:opacity-70 transition-opacity text-sm"
                  >
                    Ler Artigo →
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-lg text-foreground/70">Nenhum artigo encontrado. Tente outra busca.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Receba os últimos artigos</h2>
            <p className="text-lg text-foreground/70 mb-8">Estrutura preparada para newsletter - integração futura</p>
            <p className="text-sm text-foreground/60">
              Conteúdo em breve... Esta seção será conectada via Hygraph para gerenciamento dinâmico de artigos.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
