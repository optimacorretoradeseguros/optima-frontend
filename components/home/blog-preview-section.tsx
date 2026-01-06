"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import SectionHeader from "@/components/section-header"

interface Post {
  id: string
  title: string
  category: string
  readTime: string
  date: string
  excerpt: string
  slug: string
  thumbnail: {
    url: string
  }
}

interface BlogPreviewSectionProps {
  posts: Post[]
}

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
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
}

export default function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  // Use posts passed from parent. If empty, section might be empty or hidden, but for now assuming data.
  // Helper to format date if needed, but assuming string from API or formatting it here?
  // The API returns date string.

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#F8F9FA] to-[#DDDED3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Do Nosso Blog"
          subtitle="Artigos e dicas sobre seguros"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#1D285E]/5 hover:border-[#676B49]/20 overflow-hidden h-full flex flex-col">
                {/* Imagem/Thumbnail */}
                <div className="relative h-48 bg-[#1D285E] overflow-hidden">
                  {post.thumbnail && (
                    <Image
                      src={post.thumbnail.url}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D285E]/90 to-transparent opacity-60" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 text-[#1D285E] text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-4 text-white/90 text-xs font-medium">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime || "5 min"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-[#1D285E] text-lg mb-3 group-hover:text-[#676B49] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[#1D285E]/70 text-sm mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#676B49] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Ler Artigo Completo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1D285E] to-[#1D285E]/90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1D285E]/40 group"
          >
            Explorar Todos os Artigos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}