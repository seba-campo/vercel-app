import React from 'react';
import { IProduct } from '../../interfaces/product';
import { Container, ImageContainer, Image, InfoContainer, Title, Price, Button, Description } from './styles';
import { useRecoilValue } from "recoil";
import { userIdState } from "../../store/atoms";

interface ProductDetailProps {
    product: IProduct;
    isOrderPending: boolean;
    isProcessingPayment: boolean;
    onBuyClick?: (userId: string) => void;
}

export default function ProductDetail({
    product,
    isOrderPending,
    isProcessingPayment,
    onBuyClick
}: ProductDetailProps) {
    const price = product.variants?.[0]?.price || 0;
    const userId = useRecoilValue(userIdState);
    console.log(userId)

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
                <Button
                    onClick={() => onBuyClick(userId)}
                    disabled={isOrderPending}
                >
                    {!isOrderPending && 'Comprar'}
                    {isOrderPending && 'Procesando...'}
                </Button>
                <Description>{product.description}</Description>
            </InfoContainer>
        </Container>
    );
}   
