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
  console.log(data)
  return data.posts
}
