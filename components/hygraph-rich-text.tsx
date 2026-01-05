'use client' // ESSENCIAL no Next.js App Router

import { RichText } from '@graphcms/rich-text-react-renderer'

type Props = {
  content?: any
}

// Função auxiliar para converter children de code block em string
function childrenToCode(children: any) {
  if (!children) return ''
  if (Array.isArray(children)) {
    return children
      .map((c: any) => (typeof c === 'string' ? c : c.text ?? ''))
      .join('\n')
  }
  return String(children)
}

export default function HygraphRichText({ content }: Props) {
  if (!content?.raw) return null

  const options = {
    renderers: {
      h1: ({ children }: any) => (
        <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
      ),
      p: ({ children }: any) => (
        <p className="mb-4 leading-7 text-gray-800 dark:text-gray-100">{children}</p>
      ),
      a: ({ children, href }: any) => {
        const isExternal = typeof href === 'string' && !href.startsWith('/')
        return (
          <a
            href={href}
            className="text-[#1D285E] underline"
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {children}
          </a>
        )
      },
      img: ({ src, altText }: any) => (
        <img
          src={src}
          alt={altText || ''}
          className="w-full h-auto rounded-md my-4"
          loading="lazy"
        />
      ),
      ul: ({ children }: any) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
      ol: ({ children }: any) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 pl-4 italic text-gray-600 mb-4">{children}</blockquote>
      ),

      // Code blocks
      code_block: ({ children, language }: any) => {
        const code = childrenToCode(children)
        const lang = language ? `language-${language}` : ''
        const escapeHtml = (str: string) =>
          str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')

        return (
          <pre className="bg-gray-900 text-white p-4 rounded overflow-auto mb-4">
            <code className={lang} dangerouslySetInnerHTML={{ __html: escapeHtml(code) }} />
          </pre>
        )
      },

      inline_code: ({ children }: any) => (
        <code className="bg-gray-100 px-1 rounded text-sm">{children}</code>
      ),

      // Embedded assets
      'embedded-asset-block': ({ data }: any) => {
        const target = data?.target || {}
        const url = target.url || target.file?.url
        const alt = target.alt || target.title || ''
        if (!url) return null
        return <img src={url} alt={alt} className="w-full h-auto rounded-md my-4" loading="lazy" />
      },

      // Embedded entries
      'embedded-entry-block': ({ data }: any) => (
        <pre className="bg-gray-100 p-3 rounded text-sm mb-4">{JSON.stringify(data, null, 2)}</pre>
      ),
    },
  }

  return (
    <div className="prose max-w-none text-gray-800 dark:text-white">
      <RichText content={content.raw} {...options} />
    </div>
  )
}
