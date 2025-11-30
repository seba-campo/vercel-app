import { ReactNode } from 'react';
import { Title, Subtitle, LargeText, Body, BodyBold } from './styles';

interface TypographyProps {
    variant?: 'title' | 'subtitle' | 'body' | 'bodyBold' | 'large';
    children: ReactNode;
    className?: string;
}

export function Typography({ variant = 'body', children, className = '' }: TypographyProps) {
    switch (variant) {
        case 'title':
            return <Title className={className}>{children}</Title>;
        case 'subtitle':
            return <Subtitle className={className}>{children}</Subtitle>;
        case 'large':
            return <LargeText className={className}>{children}</LargeText>;
        case 'bodyBold':
            return <BodyBold className={className}>{children}</BodyBold>;
        default:
            return <Body className={className}>{children}</Body>;
    }
}
