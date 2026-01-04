
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/product";
import Loader from "../../components/Loader";
import { SearchContainer, ResultCount, Grid, EmptyState } from "./styles";

export default function Search() {
    const router = useRouter();
    const { q } = router.query;
    const [products, setProducts] = useState<IProduct[]>([]);
    const [total, setTotal] = useState(0);

    const {
        mutate: searchProducts,
        isPending,
        error
    } = useMutation({
        mutationFn: async (query: string) => {
            const res = await fetch(`/api/products?q=${query}&limit=10&offset=0`);
            if (!res.ok) {
                throw new Error("Error al buscar productos");
            }
            return res.json();
        },
        onSuccess: (data) => {
            setProducts(data.results || []);
            setTotal(data.pagination?.total || data.results?.length || 0);
        },
        onError: (err) => {
            console.error(err);
        }
    });

    useEffect(() => {
        if (q) {
            searchProducts(q as string);
        }
    }, [q]);

    return (
        <Layout>
            <SearchContainer>
                {isPending ? (
                    <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
                        <Loader />
                    </div>
                ) : error ? (
                    <EmptyState>Ocurrió un error al realizar la búsqueda.</EmptyState>
                ) : (
                    <>
                        <ResultCount>{products.length} resultados de {total}</ResultCount>
                        {products.length > 0 ? (
                            <>
                                <Grid>
                                    {products.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            price={product.variants?.[0]?.price || 0}
                                            imageUrl={product.mainImageUrl}
                                            onClick={() => router.push(`/product/${product.id}`)}
                                        />
                                    ))}
                                </Grid>
                            </>
                        ) : (
                            q && <EmptyState>No se encontraron resultados para "{q}"</EmptyState>
                        )}
                    </>
                )}
            </SearchContainer>
        </Layout>
    );
}
