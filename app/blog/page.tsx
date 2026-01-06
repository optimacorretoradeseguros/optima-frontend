import { fetchPosts } from "@/lib/hygraph"
import BlogClient from "./blog-client"

export const metadata = {
  title: "Blog ÓPTIMA - Seguros com Excelência",
  description: "Artigos, dicas e insights sobre seguros, proteção e bem-estar para você e sua empresa."
}

// Ensure the page is dynamic since fetchPosts might change (though often cached, we want fresh content on revalidate)
// or just rely on Next.js default caching. Next.js 13+ default is static if no dynamic functions used, but `fetch` can revalidate.
export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await fetchPosts() || []

  return <BlogClient initialPosts={posts} />
}