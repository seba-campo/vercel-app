import { FeaturedProductsWrapper, FeaturedProductsContainer } from "./FeaturedProductsStyle"
import Router from "next/router"
import ProductGrid from "../../../ProductGrid"
import ProductCard from "../../../ProductCard"
import { useEffect, useState } from "react"
import { IProduct } from "../../../../interfaces/product"
import { useMutation } from "@tanstack/react-query"
import Loader from "../../../Loader"

export const FeaturedProducts = () => {
    const [products, setProducts] = useState<IProduct[]>(undefined);

    const {
        mutate: mutateProducts,
        isPending,
        error,
        data: dataLogin
    } = useMutation({
        mutationFn: async () => {
            if (products) return null;

            const productFetch = fetch("/api/products/featured")
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data.results)
                });
            return productFetch
        },
        onSuccess: (productsData) => {
            console.log(products)
        },
        onError: (error: Error) => {
            alert(error.message);
        }
    });

    useEffect(() => {
        mutateProducts();

    }, [])

    return (
        <FeaturedProductsWrapper>
            <h1 className="title">Productos Destacados</h1>
            {isPending && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                    <Loader />
                </div>
            )}
            <FeaturedProductsContainer>
                <ProductGrid>
                    {products && (
                        products.map(product => (
                            <ProductCard
                                key={product?.id}
                                id={product?.id.toString()}
                                name={product?.name}
                                price={product?.variants[0].price}
                                imageUrl={product?.mainImageUrl}
                                onClick={() => Router.push(`/product/${product?.id}`)}
                            />
                        ))
                    )}
                </ProductGrid>
            </FeaturedProductsContainer>
        </FeaturedProductsWrapper>
    )
}