import { useEffect, useState, ReactNode } from 'react';

interface ClientOnlyProps {
    children: ReactNode;
    fallback?: ReactNode;
}

/**
 * Componente que solo renderiza en el cliente
 * Útil para evitar problemas de hidratación
 * 
 * @example
 * <ClientOnly fallback={<Loader />}>
 *   <ComponenteQueUsaWindow />
 * </ClientOnly>
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}

/**
 * Hook para detectar si estamos en el cliente
 * 
 * @example
 * const isClient = useIsClient();
 * if (!isClient) return null;
 */
export function useIsClient() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}
