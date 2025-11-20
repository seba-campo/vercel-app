import { useRouter as useNextRouter } from 'next/router';
import { useCallback } from 'react';
import { ROUTES } from './routes';

/**
 * Hook personalizado que envuelve el router de Next.js
 * con métodos tipados y helpers útiles
 */
export function useRouter() {
    const router = useNextRouter();

    /**
     * Navega a una ruta de forma programática
     */
    const navigate = useCallback((path: string, options?: {
        replace?: boolean;
        shallow?: boolean;
        scroll?: boolean;
    }) => {
        if (options?.replace) {
            return router.replace(path, undefined, options);
        }
        return router.push(path, undefined, options);
    }, [router]);

    /**
     * Navega hacia atrás en el historial
     */
    const goBack = useCallback(() => {
        router.back();
    }, [router]);

    /**
     * Recarga la página actual
     */
    const reload = useCallback(() => {
        router.reload();
    }, [router]);

    /**
     * Verifica si una ruta está activa
     */
    const isActive = useCallback((path: string, exact = false) => {
        if (exact) {
            return router.pathname === path;
        }
        return router.pathname.startsWith(path);
    }, [router.pathname]);

    /**
     * Obtiene parámetros de la query string
     */
    const getQueryParam = useCallback((key: string): string | string[] | undefined => {
        return router.query[key];
    }, [router.query]);

    /**
     * Actualiza la query string sin recargar la página
     */
    const updateQuery = useCallback((params: Record<string, string | number | boolean>) => {
        const newQuery = { ...router.query, ...params };
        router.push({
            pathname: router.pathname,
            query: newQuery,
        }, undefined, { shallow: true });
    }, [router]);

    return {
        // Router original de Next.js
        router,

        // Información de la ruta actual
        pathname: router.pathname,
        query: router.query,
        asPath: router.asPath,

        // Métodos de navegación
        navigate,
        goBack,
        reload,

        // Helpers
        isActive,
        getQueryParam,
        updateQuery,

        // Estado
        isReady: router.isReady,
    };
}

/**
 * Hook para navegar a rutas específicas de forma tipada
 */
export function useNavigation() {
    const { navigate } = useRouter();

    return {
        goToHome: () => navigate(ROUTES.HOME),
        goToLogin: () => navigate(ROUTES.LOGIN),
        goToProfile: () => navigate(ROUTES.PROFILE),
        goToMyOrders: () => navigate(ROUTES.MY_ORDERS),
        goToProducts: () => navigate(ROUTES.PRODUCTS),
        goToProduct: (id: string) => navigate(ROUTES.PRODUCT_DETAIL(id)),
        goToOrder: (id: string) => navigate(ROUTES.ORDER_DETAIL(id)),
        goToSearch: (query?: string) => {
            const path = query ? `${ROUTES.SEARCH}?q=${encodeURIComponent(query)}` : ROUTES.SEARCH;
            navigate(path);
        },
    };
}
