import React from 'react';
import { IProduct } from '../../interfaces/product';
import { Container, ImageContainer, Image, InfoContainer, Title, Price, Button, Description } from './styles';

interface ProductDetailProps {
    product: IProduct;
    onBuyClick?: () => void;
}

export default function ProductDetail({ product, onBuyClick }: ProductDetailProps) {
    const price = product.variants?.[0]?.price || 0;

    // Formatting price
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    }).format(price);

    return (
        <Container>
            <ImageContainer>
                {product.mainImageUrl ? (
                    <Image src={product.mainImageUrl} alt={product.name} />
                ) : (
                    <div>No image available</div>
                )}
            </ImageContainer>
            <InfoContainer>
                <Title>{product.name}</Title>
                <Price>{formattedPrice}</Price>
                <Button onClick={onBuyClick}>Comprar</Button>
                <Description>{product.description}</Description>
            </InfoContainer>
        </Container>
    );
}
