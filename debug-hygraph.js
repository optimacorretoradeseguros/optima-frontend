
const fs = require('fs');
const path = require('path');

// Load .env.local manually
try {
    const envContent = fs.readFileSync(path.resolve('.env.local'), 'utf8');
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim().replace(/^["']|["']$/g, '');
        }
    });
} catch (e) {
    console.log('No .env.local found or error reading it');
}

const HYGRAPH_API_URL = process.env.NEXT_PUBLIC_HYGRAPH_API_URL;
const HYGRAPH_API_TOKEN = process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN;

console.log('URL:', HYGRAPH_API_URL ? 'Defined' : 'Undefined');
console.log('Token:', HYGRAPH_API_TOKEN ? 'Defined' : 'Undefined');

async function fetchPosts() {
    if (!HYGRAPH_API_URL) throw new Error('Missing API URL');

    console.log('Fetching from:', HYGRAPH_API_URL);

    const res = await fetch(HYGRAPH_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HYGRAPH_API_TOKEN}`,
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
    });

    if (!res.ok) {
        console.error('Fetch failed:', res.status, res.statusText);
        const text = await res.text();
        console.error('Response:', text);
        return;
    }

    const json = await res.json();
    if (json.errors) {
        console.error('GraphQL Errors:', JSON.stringify(json.errors, null, 2));
    }

    return json.data ? json.data.posts : null;
}

async function test() {
    console.log('Testing fetchPosts...');
    try {
        const posts = await fetchPosts();
        console.log('Posts fetched count:', posts ? posts.length : 'null');
        if (posts && posts.length > 0) {
            console.log('First post title:', posts[0].title);
            // Check for potential issues in data
            posts.forEach((p, i) => {
                if (!p.title) console.log(`Post ${i} missing title`);
                if (!p.slug) console.log(`Post ${i} missing slug`);
                if (!p.date) console.log(`Post ${i} missing date`);
            });
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

test();
