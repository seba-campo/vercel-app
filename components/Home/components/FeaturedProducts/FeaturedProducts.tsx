import { FeaturedProductsWrapper, FeaturedProductsContainer } from "./FeaturedProductsStyle"
import Router from "next/router"
import ProductGrid from "../../../ProductGrid"
import ProductCard from "../../../ProductCard"

const mockProducts = [{
    id: 1,
    name: "Reloj inteligente",
    price: 79300,
    imageUrl: "https://via.placeholder.com/150"
},
{
    id: 2,
    name: "Termo con Bolso",
    price: 25999,
    imageUrl: "https://via.placeholder.com/150"
},
{
    id: 3,
    name: "Ventilador de pie",
    price: 24000,
    imageUrl: "https://via.placeholder.com/150"
},
{
    id: 4,
    name: "Mouse ergonómico inalámbrico",
    price: 17000,
    imageUrl: "https://via.placeholder.com/150"
},
{
    id: 5,
    name: "Reloj Casio",
    price: 34530,
    imageUrl: "https://via.placeholder.com/150"
}]


export const FeaturedProducts = () => {
    return (
        <FeaturedProductsWrapper>
            <h1 className="title">Productos Destacados</h1>

            <FeaturedProductsContainer>
                <ProductGrid>
                    {
                        mockProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id.toString()}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                onClick={() => Router.push(`/product/${product.id}`)}
                            />
                        ))
                    }
                </ProductGrid>
            </FeaturedProductsContainer>
        </FeaturedProductsWrapper>
    )
}