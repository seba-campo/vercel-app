'use client'

import { useRouter } from "next/router";

export default function Product(){
    const router = useRouter();
    const { id } = router.query
    console.log(id)
    return <div>Hola desde el producto {id}</div>
}