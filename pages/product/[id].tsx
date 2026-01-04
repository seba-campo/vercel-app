import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { SingleProductWrapper } from "./ProductStyle";
import Loader from "../../components/Loader";
import { useProduct } from "./useProduct";
import { useRecoilValue } from "recoil";
import { isLoggedState } from "../../store/selectors";

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const isLogged = useRecoilValue(isLoggedState);
    const { product, isPending, error, onBuyClick } = useProduct(id as string, isLogged);


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
                    <ProductDetail product={product} onBuyClick={onBuyClick} />
                ) : (
                    <div style={{ textAlign: "center", padding: "2rem" }}>Producto no encontrado</div>
                )}
            </SingleProductWrapper>
        </Layout>
    );
}