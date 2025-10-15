'use client'

import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function Product(){
    const router = useRouter();
    const { id } = router.query
    console.log(id)
    return (
        <Layout>
            <div>Este es el ID a buscar {id}</div>
        </Layout>
    )
}