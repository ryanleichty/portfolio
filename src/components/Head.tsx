import NextHead from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  title: string
  description: string
  children?: React.ReactNode
}

export default function Head({ title, description, children }: Props) {
  const router = useRouter()

  return (
    <NextHead>
      <title>{title}</title>

      <meta name="author" content="Ryan Leichty" />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://www.ryanleichty.com/api/og?title=${encodeURIComponent(title)}`}
      />
      <meta property="og:image:alt" content="Ryan Leichty" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://www.ryanleichty.com${router.pathname}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ryanleichty" />
      <meta name="twitter:creator" content="@ryanleichty" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://www.ryanleichty.com/api/og?title=${encodeURIComponent(title)}`}
      />
      {children}
    </NextHead>
  )
}
