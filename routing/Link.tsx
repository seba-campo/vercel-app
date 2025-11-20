import Link from 'next/link';
import { ReactNode, AnchorHTMLAttributes } from 'react';

interface AppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    href: string;
    children: ReactNode;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    prefetch?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * Componente Link personalizado para CSR
 * Envuelve Next/Link sin SSR
 */
export function AppLink({
    href,
    children,
    replace = false,
    scroll = true,
    shallow = false,
    prefetch = false, // Deshabilitado por defecto en CSR
    className,
    style,
    ...props
}: AppLinkProps) {
    return (
        <Link
            href={href}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            prefetch={prefetch}
            passHref
            legacyBehavior
        >
            <a className={className} style={style} {...props}>
                {children}
            </a>
        </Link>
    );
}
