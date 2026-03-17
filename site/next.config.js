/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Dispersive Kasm Registry',
    description: 'The official store for Dispersive Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://dispersive-dev-ki.github.io/kasm-registry',
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
