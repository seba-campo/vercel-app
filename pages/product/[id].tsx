import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { SingleProductWrapper } from "./ProductStyle";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/product";
import Loader from "../../components/Loader";

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<IProduct | null>(null);

    const {
        mutate: fetchProduct,
        isPending,
        error
    } = useMutation({
        mutationFn: async (productId: string) => {
            const res = await fetch(`/api/products/${productId}`);
            if (!res.ok) {
                throw new Error("Error al obtener el producto");
            }
            return res.json();
        },
        onSuccess: (data) => {
            setProduct(data);
        },
        onError: (err) => {
            console.error(err);
        }
    });

    useEffect(() => {
        if (id) {
            fetchProduct(id as string);
        }
    }, [id]);

    if (!id) return (<Layout> <div>No se indicó ningun id</div></Layout>);

    return (
        <Layout>
            <SingleProductWrapper>
                {isPending ? (
                    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
                        <Loader />
                    </div>
                ) : error ? (
                    <div style={{ textAlign: "center", padding: "2rem" }}>Error al cargar el producto</div>
                ) : product ? (
                    <ProductDetail product={product} />
                ) : (
                    <div style={{ textAlign: "center", padding: "2rem" }}>Producto no encontrado</div>
                )}
            </SingleProductWrapper>
        </Layout>
    );
}