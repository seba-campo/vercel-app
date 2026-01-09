import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { IProduct } from "../../interfaces/product";

import IOrderDataResponse from "../../interfaces/orderDataResponse";


const useProduct = (id: string, isLogged: boolean) => {
    const router = useRouter();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const {
        mutate: fetchProduct,
        isPending: fetchProductPending,
        error: fetchProductError
    } = useMutation({
        mutationFn: async (productId: string) => {
            const res = await fetch(`/api/products/${productId}`);
            if (!res.ok) {
                throw new Error("Error al obtener el producto");
            }
            return res.json();
        },
        onSuccess: (data: IProduct) => {
            setProduct(data);
        },
        onError: (err: Error) => {
            console.error(err);
        }
    });

    const {
        mutate: createOrder,
        isPending: isOrderPending,
        error: orderError
    } = useMutation({
        mutationFn: async ({ productId, userId }: { productId: string, userId: string }) => {
            const res = await fetch(`/api/order`, {
                method: "POST",
                body: JSON.stringify({
                    productId,
                    userId
                })
            });
            if (!res.ok) {
                throw new Error("Error al crear el pedido");
            }
            return res.json();
        },
        onSuccess: (data: IOrderDataResponse) => {
            window.open(data.orderData.paymentUrl, '_blank');
            setIsProcessingPayment(true);
        },
        onError: (err: Error) => {
            console.error(err);
        }
    });

    const onBuyClick = (userId: string) => {
        if (!isLogged) router.push("/signin");
        createOrder({ productId: id, userId });
    }

    useEffect(() => {
        if (id) {
            fetchProduct(id as string);
        }
    }, [id]);

    return {
        product,
        fetchProductPending,
        fetchProductError,
        orderError,
        isOrderPending,
        isProcessingPayment,
        onBuyClick,
    };
}

export default useProduct
