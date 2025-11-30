import { ReactNode, ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

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
        <StyledButton
            $variant={variant}
            $fullWidth={fullWidth}
            {...props}
        >
            {children}
        </StyledButton>
    );
}
