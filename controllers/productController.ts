import { Product } from "../models/product";
import { fs, PRODUCT_COLLECTION } from "../lib/firebase";
import { algoliaContext } from "../lib/algolia";



/*
GET /search?q=query&offset=0&limit=10
Buscar productos en nuestra base de datos. Chequea stock y todo lo necesario. 
Este endpoint utiliza la técnica que vimos sobre Airtable y Algolia.
*/

export async function getProductByIdAsync(id: string) {
    const product = await PRODUCT_COLLECTION.doc(id).get();
    if(product.exists){
        return product.data()
    }
    else{
        throw new Error("Product not found")
    }
}

export async function getProductByQuery(query: string, limit: number, offset: number){
    const results = await algoliaContext.search([
        {
            indexName: "products",
            query: "Batería de",
        },
    ]);

    return results
}