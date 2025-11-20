/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Deshabilitar SSR completamente
    experimental: {
        // Forzar renderizado solo en cliente
        disableOptimizedLoading: true,
    },

    // Configuración para CSR
    output: 'export', // Genera sitio estático

    // Deshabilitar optimización de imágenes para export
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
