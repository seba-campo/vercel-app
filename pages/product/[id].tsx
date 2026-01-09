import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import SingleProductWrapper from "./ProductStyle";
import Loader from "../../components/Loader";
import useProduct from "./useProduct";
import { useRecoilValue } from "recoil";
import { isLoggedState } from "../../store/selectors";

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const isLogged = useRecoilValue(isLoggedState);
    const {
        product,
        fetchProductPending,
        fetchProductError,
        isOrderPending,
        isProcessingPayment,
        onBuyClick
    } = useProduct(id as string, isLogged);


    if (!id) return (<Layout> <div>No se indicó ningun id</div></Layout>);

    return (
        <Layout>
            <SingleProductWrapper>
                {fetchProductPending ? (
                    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
                        <Loader />
                    </div>
                )
                    : fetchProductError ? (
                        <div style={{ textAlign: "center", padding: "2rem" }}>Error al cargar el producto</div>
                    )
                        : product ? (
                            <ProductDetail
                                product={product}
                                onBuyClick={onBuyClick}
                                isOrderPending={isOrderPending}
                                isProcessingPayment={isProcessingPayment}
                            />
                        )
                            :
                            (
                                <div style={{ textAlign: "center", padding: "2rem" }}>Producto no encontrado</div>
                            )}
            </SingleProductWrapper>
        </Layout>
    );
}