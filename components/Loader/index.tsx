import * as S from './styles';

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
        <S.LoaderContainer $fullScreen={fullScreen}>
            {variant === 'spinner' ? (
                <S.Spinner $size={size} />
            ) : (
                <S.DotsContainer>
                    <S.Dot $delay={0} $color="#E91E63" />
                    <S.Dot $delay={0.2} $color="#FFC107" />
                    <S.Dot $delay={0.4} $color="#5C7CFA" />
                </S.DotsContainer>
            )}
            {text && <S.LoaderText>{text}</S.LoaderText>}
        </S.LoaderContainer>
    );
}
