import React from 'react'
import { notFound } from 'next/navigation'
import { fetchPostBySlug } from '@/lib/hygraph'
import HygraphRichText from '@/components/hygraph-rich-text'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

type Props = {
  params: Promise<{
    slug: string
  }>
}

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('pt-AO', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return dateStr || ''
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const finalSlug = Array.isArray(slug) ? slug.join('/') : slug

  if (!finalSlug) return notFound()

  const post = await fetchPostBySlug(finalSlug)
  if (!post) return notFound()

  return (
    <main className="min-h-screen bg-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-[50vh] lg:h-[70vh] w-full overflow-hidden">
        {post.thumbnail?.url ? (
          <Image
            src={post.thumbnail.url}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-1000 scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-[#1D285E]" />
        )}

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-linear-to-t from-[#1D285E] via-[#1D285E]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-12 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="text-sm font-medium">Voltar ao Blog</span>
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#676B49] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  {post.category || 'Seguros'}
                </span>
                <div className="h-px w-12 bg-white/30" />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 gap-y-4 text-white/90 mb-8">
                <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                  <Calendar className="w-4 h-4 text-[#676B49]" />
                  <span className="text-sm font-medium">{formatDate(post.date)}</span>
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                    <Clock className="w-4 h-4 text-[#676B49]" />
                    <span className="text-sm font-medium">{post.readTime} min de leitura</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="relative -mt-12 lg:-mt-20 pb-24 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="bg-white rounded-3xl p-6 md:p-16 shadow-2xl shadow-[#1D285E]/5">
              {post.excerpt && (
                <div className="mb-12">
                  <p className="text-xl md:text-2xl font-semibold text-[#1D285E] leading-relaxed italic border-l-4 border-[#676B49] pl-6">
                    {post.excerpt}
                  </p>
                </div>
              )}

              <article className="prose prose-lg prose-slate max-w-none 
                prose-headings:text-[#1D285E] prose-headings:font-black
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-strong:text-[#1D285E]
                prose-img:rounded-3xl prose-img:shadow-xl
                prose-a:text-[#676B49] prose-a:no-underline hover:prose-a:underline
              ">
                <HygraphRichText content={post.content} />
              </article>
            </div>

            {/* Sidebar Sticky */}
            <aside className="space-y-8">
              <div className="sticky top-24">

                <div className="mt-8 bg-slate-50 rounded-3xl p-8 border border-slate-100">
                  <h3 className="text-xl font-bold text-[#1D285E] mb-4">Precisa de Ajuda?</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    A nossa equipa de especialistas está pronta para o ajudar a escolher o melhor seguro.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-[#676B49] text-white text-sm font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-[#676B49]/40 transition-all"
                  >
                    Falar com Especialista
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
