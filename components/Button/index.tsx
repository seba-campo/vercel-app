import { ReactNode, ButtonHTMLAttributes } from 'react';
import { StyledButton, Spinner } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
    children: ReactNode;
    fullWidth?: boolean;
    isLoading?: boolean;
}

export default function Button({
    variant = 'primary',
    children,
    fullWidth = false,
    isLoading = false,
    ...props
}: ButtonProps) {
    return (
        <StyledButton
            $variant={variant}
            $fullWidth={fullWidth}
            $isLoading={isLoading}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <>
                    <Spinner />
                    <span style={{ marginLeft: '8px' }}>Cargando...</span>
                </>
            ) : (
                children
            )}
        </StyledButton>
    );
}

