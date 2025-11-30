import { LoaderContainer, Spinner, DotsContainer, Dot, LoaderText } from './styles';

interface LoaderProps {
    fullScreen?: boolean;
    size?: number;
    text?: string;
    variant?: 'spinner' | 'dots';
}

export default function Loader({
    fullScreen = false,
    size = 48,
    text = "Cargando...",
    variant = 'spinner'
}: LoaderProps) {
    return (
        <LoaderContainer $fullScreen={fullScreen}>
            {variant === 'spinner' ? (
                <Spinner $size={size} />
            ) : (
                <DotsContainer>
                    <Dot $delay={0} $color="#E91E63" />
                    <Dot $delay={0.2} $color="#FFC107" />
                    <Dot $delay={0.4} $color="#5C7CFA" />
                </DotsContainer>
            )}
            {text && <LoaderText>{text}</LoaderText>}
        </LoaderContainer>
    );
}
