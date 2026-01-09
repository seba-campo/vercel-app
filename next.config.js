/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Configuración nativa de styled-components
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
            fileName: true,
            minify: true,
            transpileTemplateLiterals: true,
            pure: true,
        },
    },

    // Deshabilitar SSR completamente
    experimental: {
        // Forzar renderizado solo en cliente
        disableOptimizedLoading: true,
    },

    // Deshabilitar optimización de imágenes para export
    images: {
        unoptimized: true,
    },

    pageExtensions: ['tsx', 'jsx'],
}

module.exports = nextConfig
