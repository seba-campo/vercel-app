import { ReactNode } from 'react';
import * as S from './styles';

interface TypographyProps {
    variant?: 'title' | 'subtitle' | 'body' | 'bodyBold' | 'large';
    children: ReactNode;
    className?: string;
}

export function Typography({ variant = 'body', children, className = '' }: TypographyProps) {
    switch (variant) {
        case 'title':
            return <S.Title className={className}>{children}</S.Title>;
        case 'subtitle':
            return <S.Subtitle className={className}>{children}</S.Subtitle>;
        case 'large':
            return <S.LargeText className={className}>{children}</S.LargeText>;
        case 'bodyBold':
            return <S.BodyBold className={className}>{children}</S.BodyBold>;
        default:
            return <S.Body className={className}>{children}</S.Body>;
    }
}
