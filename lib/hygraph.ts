// lib/hygraph.ts

export const HYGRAPH_API_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_URL as string;
export const HYGRAPH_API_TOKEN = process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN as string;
// lib/hygraph.ts
export async function fetchPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query Posts {
          posts(orderBy: date_DESC) {
            id
            title
            slug
            category
            date
            readTime
            thumbnail {
              url
            }
            excerpt
            content {
              raw
            }
          }
        }
      `,
    }),
  })

  
  const { data } = await res.json()
  return data.posts
}

export async function fetchPostBySlug(slug: string) {
  if (!slug || typeof slug !== 'string') return null

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_API_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          query PostBySlug($slug: String!) {
            post(where: { slug: $slug }) {
              id
              title
              slug
              category
              date
              readTime
              thumbnail {
                url
              }
              excerpt
              content {
                raw
              }
            }
          }
        `,
        variables: { slug },
      }),
    })

    if (!res.ok) return null
    const json = await res.json()
    if (json.errors) return null
    return json.data?.post ?? null
  } catch (err) {
    console.error('fetchPostBySlug error', err)
    return null
  }
}
