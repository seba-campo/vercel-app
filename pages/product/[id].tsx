import { useRouter } from "next/router";
import Layout from "../../components/Layout";;

export default function Product() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) return (<Layout> <div>No se indicó ningun id</div></Layout>)

    return (
        <Layout>
            <div>Este es el ID a buscar {id}</div>
            <p>---------------------------</p>
            <div>
                <p>Producto:</p>
            </div>
        </Layout>
    )
}