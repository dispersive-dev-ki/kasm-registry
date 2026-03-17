/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Dispersive Kasm Registry',
    description: 'The official store for Dispersive Kasm workspaces.',
    icon: 'https://dispersive.io/hs-fs/hubfs/Dispersive-Theme-2025/Global%20Assets/Images/Disersive-Logo_Header.png?width=240&height=50&name=Disersive-Logo_Header.png',
    listUrl: 'https://dispersive-dev-ki.github.io/kasm-registry/',
    contactUrl: 'https://github.com/dispersive-dev-ki/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
