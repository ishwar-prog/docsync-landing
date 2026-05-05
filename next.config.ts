import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/docsync-landing',
  assetPrefix: '/docsync-landing/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig