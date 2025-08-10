/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable PWA features
  experimental: {
    webpackBuildWorker: true,
  },
  
  // Image optimization
  images: {
    domains: ['heylexii.com', 'poderjudicial.pr', 'colegioabogadospr.org'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/www/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
  
  // Rewrites for API routes
  async rewrites() {
    return [
      {
        source: '/api/lawyers/:path*',
        destination: '/api/attorneys/:path*',
      },
    ]
  },
  
  // Environment variables
  env: {
    CUSTOM_DOMAIN: 'heylexii.com',
    APP_NAME: 'HeyLEXII',
    OWNER_EMAIL: 'alvardito92@gmail.com',
  },
  
  // Compression
  compress: true,
  
  // Output configuration for Vercel
  output: 'standalone',
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
