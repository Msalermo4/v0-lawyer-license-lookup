import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HeyLEXII - Directorio de Abogados de Puerto Rico",
  description:
    "Encuentra y evalúa abogados en Puerto Rico. Directorio completo con reseñas, calificaciones y información disciplinaria actualizada.",
  keywords: "abogados puerto rico, lawyers puerto rico, directorio legal, reseñas abogados, colegio abogados pr",
  authors: [{ name: "HeyLEXII Team" }],
  creator: "HeyLEXII",
  publisher: "HeyLEXII",
  metadataBase: new URL("https://heylexii.com"),
  alternates: {
    canonical: "https://heylexii.com",
    languages: {
      "es-PR": "https://heylexii.com/es",
      "en-US": "https://heylexii.com/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: "https://heylexii.com",
    siteName: "HeyLEXII",
    title: "HeyLEXII - Directorio de Abogados de Puerto Rico",
    description:
      "Encuentra y evalúa abogados en Puerto Rico. Directorio completo con reseñas, calificaciones y información disciplinaria actualizada.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HeyLEXII - Directorio de Abogados de Puerto Rico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@heylexii",
    creator: "@heylexii",
    title: "HeyLEXII - Directorio de Abogados de Puerto Rico",
    description:
      "Encuentra y evalúa abogados en Puerto Rico. Directorio completo con reseñas, calificaciones y información disciplinaria actualizada.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-PR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HeyLEXII" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <PWAInstallPrompt />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
