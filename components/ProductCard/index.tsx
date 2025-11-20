import * as S from './styles';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    onClick?: (id: string) => void;
}

export default function ProductCard({ id, name, price, imageUrl, onClick }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    }).format(price);

    return (
        <S.Card
            onClick={() => onClick?.(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick?.(id);
                }
            }}
        >
            <S.ImageContainer>
                <S.Image
                    src={imageUrl}
                    alt={name}
                />
            </S.ImageContainer>
            <S.Info>
                <S.Name>{name}</S.Name>
                <S.Price>{formattedPrice}</S.Price>
            </S.Info>
        </S.Card>
    );
}
