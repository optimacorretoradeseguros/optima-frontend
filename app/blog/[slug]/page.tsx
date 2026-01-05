import React from 'react'
import { notFound } from 'next/navigation'
import { fetchPostBySlug } from '@/lib/hygraph'
import HygraphRichText from '@/components/hygraph-rich-text'

type Props = {
  params: Promise<{
    slug?: string | string[]
  }>
}

function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
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
    <main className="py-12 px-4 max-w-3xl mx-auto">
      {post.thumbnail?.url && (
        <img
          src={post.thumbnail.url}
          alt={post.title}
          className="w-full h-auto rounded-md mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

      <div className="text-sm text-gray-600 mb-6">
        <span>{formatDate(post.date)}</span>
        {post.readTime && <span> • {post.readTime} min</span>}
      </div>

      {post.excerpt && (
        <p className="text-gray-700 mb-6">{post.excerpt}</p>
      )}

      <article className="prose max-w-none">
        <HygraphRichText content={post.content} />
      </article>
    </main>
  )
}
