import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientProviders } from '../components/providers/client-providers'
import { Footer } from '../components/Footer'
import { SITE_CONFIG } from '../constants/data'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.dev'),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Portfolio',
    'Full-Stack Developer',
    'Web Development',
    'Software Engineer',
  ],
  authors: [
    {
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  ],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@yourusername',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col relative`}>
        {/* Floating shapes with glassmorphism on GitHub dark theme */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute inset-0">
            <div className="floating-shape absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-3xl rounded-2xl"></div>
            <div className="floating-shape absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-3xl rounded-full"></div>
            <div className="floating-shape absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 backdrop-blur-3xl transform rotate-45"></div>
            <div className="floating-shape absolute top-2/3 right-1/3 w-28 h-28 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-3xl rounded-lg transform -rotate-12"></div>
          </div>
        </div>

        <ClientProviders>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
