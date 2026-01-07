import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { IProduct } from "../../interfaces/product";
import { isLoggedState } from "../../store/selectors";
import { useRecoilValue } from "recoil";

export const useProduct = (id: string, isLogged: boolean) => {
    const router = useRouter();
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
        onSuccess: (data: IProduct) => {
            setProduct(data);
        },
        onError: (err: Error) => {
            console.error(err);
        }
    });

    const onBuyClick = () => {
        if (!isLogged) router.push("/signin");

        //Implementar lógica de checkout.
    }

    useEffect(() => {
        if (id) {
            fetchProduct(id as string);
        }
    }, [id]);

    return { product, isPending, error, onBuyClick };
}
