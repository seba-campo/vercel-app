/**
 * Helpers para construir URLs con query params
 */

interface QueryParams {
    [key: string]: string | number | boolean | undefined | null;
}

/**
 * Construye una URL con query parameters
 * 
 * @example
 * buildUrl('/products', { q: 'reloj', limit: 10 })
 * // => '/products?q=reloj&limit=10'
 */
export function buildUrl(path: string, params?: QueryParams): string {
    if (!params) return path;

    const queryString = Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join('&');

    return queryString ? `${path}?${queryString}` : path;
}

/**
 * Parsea query params de una URL
 * 
 * @example
 * parseQueryParams('?q=reloj&limit=10')
 * // => { q: 'reloj', limit: '10' }
 */
export function parseQueryParams(search: string): Record<string, string> {
    if (!search || search === '?') return {};

    const params = new URLSearchParams(search);
    const result: Record<string, string> = {};

    params.forEach((value, key) => {
        result[key] = value;
    });

    return result;
}

/**
 * Actualiza query params en una URL existente
 * 
 * @example
 * updateQueryParams('/products?q=reloj', { limit: 20 })
 * // => '/products?q=reloj&limit=20'
 */
export function updateQueryParams(url: string, params: QueryParams): string {
    const [path, search] = url.split('?');
    const existingParams = parseQueryParams(search ? `?${search}` : '');

    const updatedParams = {
        ...existingParams,
        ...Object.fromEntries(
            Object.entries(params)
                .filter(([_, value]) => value !== undefined && value !== null)
                .map(([key, value]) => [key, String(value)])
        ),
    };

    return buildUrl(path, updatedParams);
}

/**
 * Remueve query params de una URL
 * 
 * @example
 * removeQueryParams('/products?q=reloj&limit=10', ['limit'])
 * // => '/products?q=reloj'
 */
export function removeQueryParams(url: string, keysToRemove: string[]): string {
    const [path, search] = url.split('?');
    const params = parseQueryParams(search ? `?${search}` : '');

    keysToRemove.forEach(key => {
        delete params[key];
    });

    return buildUrl(path, params);
}

/**
 * Verifica si una URL coincide con un patrón
 * 
 * @example
 * matchPath('/products/123', '/products/:id')
 * // => { matched: true, params: { id: '123' } }
 */
export function matchPath(
    pathname: string,
    pattern: string
): { matched: boolean; params: Record<string, string> } {
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = pathname.split('/').filter(Boolean);

    if (patternParts.length !== pathParts.length) {
        return { matched: false, params: {} };
    }

    const params: Record<string, string> = {};

    for (let i = 0; i < patternParts.length; i++) {
        const patternPart = patternParts[i];
        const pathPart = pathParts[i];

        if (patternPart.startsWith(':')) {
            // Es un parámetro dinámico
            const paramName = patternPart.slice(1);
            params[paramName] = pathPart;
        } else if (patternPart !== pathPart) {
            // No coincide
            return { matched: false, params: {} };
        }
    }

    return { matched: true, params };
}
