import { Card, ImageContainer, Image, Info, Name, Price } from './styles';

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
        <Card
            onClick={() => onClick?.(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick?.(id);
                }
            }}
        >
            <ImageContainer>
                <Image
                    src={imageUrl}
                    alt={name}
                />
            </ImageContainer>
            <Info>
                <Name>{name}</Name>
                <Price>{formattedPrice}</Price>
            </Info>
        </Card>
    );
}
