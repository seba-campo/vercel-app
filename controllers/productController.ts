import { PRODUCT_COLLECTION } from "../lib/firebase";
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
    const algoliaSearch = await searchProductsInAlgolia(query, limit, offset);
    if(algoliaSearch.results.length == 0) return;

    var productsFirebase = []
    for (const id of algoliaSearch.results) {
        console.log(id)
        productsFirebase.push(await getProductByIdAsync(id));
    }

    return {results: productsFirebase, total: algoliaSearch.total}
}

async function searchProductsInAlgolia(query: string, limit: number, offset: number){
    const results = await algoliaContext.search([
            {
                indexName: "products",
                query: query      
            },
        ]) as any;

    const hits = (results.results[0].hits as any[]) ?? [];
    const totals = (results.results[0].nbHits as any[]) ?? [];
    const resultsPaged = hits
    .slice(offset, offset + limit);
    var resultsId = [];
    resultsPaged.forEach(element => {
        resultsId.push(element.id)
    });

    return {results: resultsId, total: results.results[0].nbHits};
}