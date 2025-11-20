import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
    children: ReactNode;
    fullWidth?: boolean;
}

export default function Button({
    variant = 'primary',
    children,
    fullWidth = false,
    ...props
}: ButtonProps) {
    return (
        <S.StyledButton
            $variant={variant}
            $fullWidth={fullWidth}
            {...props}
        >
            {children}
        </S.StyledButton>
    );
}
