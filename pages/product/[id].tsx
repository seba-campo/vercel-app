import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { ProductDetail } from "../../components/product";

export default function Product(){
    const router = useRouter();
    const { id } = router.query;

    if(!id) return (<Layout> <div>No se indicó ningun id</div></Layout>)

    return (
        <Layout>
            <div>Este es el ID a buscar {id}</div>
            <p>---------------------------</p>
            <div>
                <p>Producto:</p>
                <ProductDetail id={id}></ProductDetail>
            </div>
        </Layout>
    )
}