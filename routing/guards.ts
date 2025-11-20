import { useEffect } from 'react';
import { useRouter } from './useRouter';
import { PROTECTED_ROUTES, AUTH_ONLY_ROUTES, ROUTES } from './routes';

/**
 * Tipo de guard para las rutas
 */
type RouteGuardType = 'protected' | 'auth-only' | 'public';

interface RouteGuardConfig {
    type: RouteGuardType;
    redirectTo?: string;
    onUnauthorized?: () => void;
}

/**
 * Hook para proteger rutas basado en autenticación
 * 
 * @example
 * // En una página protegida
 * useRouteGuard({ 
 *   type: 'protected',
 *   redirectTo: ROUTES.LOGIN 
 * });
 */
export function useRouteGuard(config: RouteGuardConfig) {
    const { navigate, pathname, isReady } = useRouter();

    useEffect(() => {
        if (!isReady) return;

        // Verificar autenticación (puedes adaptar esto a tu lógica)
        const isAuthenticated = checkAuth();

        if (config.type === 'protected' && !isAuthenticated) {
            // Ruta protegida y usuario no autenticado
            if (config.onUnauthorized) {
                config.onUnauthorized();
            }
            if (config.redirectTo) {
                navigate(config.redirectTo);
            }
        }

        if (config.type === 'auth-only' && isAuthenticated) {
            // Ruta solo para no autenticados (ej: login) y usuario ya autenticado
            navigate(config.redirectTo || ROUTES.HOME);
        }
    }, [pathname, isReady, config, navigate]);
}

/**
 * Verifica si el usuario está autenticado
 * TODO: Implementar lógica real de autenticación
 */
function checkAuth(): boolean {
    // Por ahora verifica si hay un token en localStorage
    if (typeof window === 'undefined') return false;

    const token = localStorage.getItem('accessToken');
    return !!token;
}

/**
 * Hook para verificar permisos en una ruta
 */
export function useRoutePermissions() {
    const { pathname } = useRouter();

    const isProtectedRoute = PROTECTED_ROUTES.some(route =>
        pathname.startsWith(route)
    );

    const isAuthOnlyRoute = AUTH_ONLY_ROUTES.some(route =>
        pathname === route
    );

    const isAuthenticated = checkAuth();

    return {
        isProtectedRoute,
        isAuthOnlyRoute,
        isAuthenticated,
        canAccess: isProtectedRoute ? isAuthenticated : true,
    };
}
