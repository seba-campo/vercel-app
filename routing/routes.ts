/**
 * Definición centralizada de todas las rutas de la aplicación
 * Facilita el mantenimiento y evita errores de tipeo en las URLs
 */

export const ROUTES = {
    // Páginas públicas
    HOME: '/',
    SEARCH: '/search',

    // Autenticación
    LOGIN: '/login',
    LOGOUT: '/logout',

    // Usuario
    PROFILE: '/profile',
    MY_ORDERS: '/profile/orders',

    // Productos
    PRODUCTS: '/products',
    PRODUCT_DETAIL: (id: string) => `/products/${id}`,

    // Órdenes
    ORDER_DETAIL: (id: string) => `/orders/${id}`,
    ORDER_SUCCESS: '/orders/success',
    ORDER_FAILURE: '/orders/failure',
    ORDER_PENDING: '/orders/pending',

    // Admin (futuro)
    ADMIN: '/admin',
    ADMIN_PRODUCTS: '/admin/products',

    // API Routes
    API: {
        AUTH: '/api/auth',
        AUTH_TOKEN: '/api/auth/token',
        ME: '/api/me',
        ME_ORDERS: '/api/me/orders',
        PRODUCTS: '/api/products',
        PRODUCT_BY_ID: (id: string) => `/api/products/${id}`,
        ORDER: '/api/order',
        ORDER_BY_ID: (id: string) => `/api/order/${id}`,
        SYNC: '/api/sync',
        IPN_MERCADOPAGO: '/api/ipn/mercadopago',
    }
} as const;

/**
 * Tipo para las rutas de la aplicación
 */
export type AppRoute = typeof ROUTES[keyof typeof ROUTES];

/**
 * Rutas que requieren autenticación
 */
export const PROTECTED_ROUTES = [
    ROUTES.PROFILE,
    ROUTES.MY_ORDERS,
    ROUTES.ADMIN,
    ROUTES.ADMIN_PRODUCTS,
] as const;

/**
 * Rutas solo para usuarios no autenticados
 */
export const AUTH_ONLY_ROUTES = [
    ROUTES.LOGIN,
] as const;

/**
 * Rutas públicas (accesibles sin autenticación)
 */
export const PUBLIC_ROUTES = [
    ROUTES.HOME,
    ROUTES.SEARCH,
    ROUTES.PRODUCTS,
] as const;
