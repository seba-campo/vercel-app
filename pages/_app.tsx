import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

/**
 * Custom App component configurado para CSR (Client-Side Rendering)
 * Deshabilita SSR y renderiza todo en el cliente
 */
export default function App({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);

    // Asegurar que el componente solo se renderice en el cliente
    useEffect(() => {
        setMounted(true);
    }, []);

    // No renderizar nada en el servidor
    if (!mounted) {
        return null;
    }

    return <Component {...pageProps} />;
}
