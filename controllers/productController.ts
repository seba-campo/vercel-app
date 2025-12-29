import { PRODUCT_COLLECTION } from "../lib/firebase";
import { algoliaContext } from "../lib/algolia";

/*
GET /search?q=query&offset=0&limit=10
Buscar productos en nuestra base de datos. Chequea stock y todo lo necesario. 
Este endpoint utiliza la técnica que vimos sobre Airtable y Algolia.
*/

export async function getProductByIdAsync(id: string) {
    const product = await PRODUCT_COLLECTION.doc(id).get();
    if (product.exists) {
        return product.data()
    }
    else {
        throw new Error("Product not found")
    };
}

export async function getFeaturedProductsAsync() {
    const productsId = [
        '0ys8U68rrYHzXBOOAVo1', 
        '3Ly0aZ0nvbFUiDwC40Ze', 
        '5NK7aKwOQ50VrO4cTJZg', 
        '5UuOmmHrpfC81JCAzYIW', 
        '8DasMm48uGInHAuX6SSB',
        '8I5pFFg41hXbn381rQmF'
    ];

    var productsFirebase = [];
    for (const id of productsId) {
        productsFirebase.push(await getProductByIdAsync(id));
    };

    return productsFirebase;
}

export async function getProductByQuery(query: string, limit: number, offset: number) {
    const algoliaSearch = await searchProductsInAlgolia(query, limit, offset);
    if (algoliaSearch.results.length == 0) return { results: [], total: 0};

    var productsFirebase = [];
    for (const id of algoliaSearch.results) {
        productsFirebase.push(await getProductByIdAsync(id));
    };

    return { results: productsFirebase, total: algoliaSearch.total };
}

async function searchProductsInAlgolia(query: string, limit: number, offset: number) {
    const page = Math.floor(offset / limit);
    const index = algoliaContext.initIndex("products");
    const results = await index.search(query, {
        hitsPerPage: limit,
        page: page
    });

    const hits = results.hits ?? [];
    const total = results.nbHits ?? 0;

    var resultsId = [];
    hits.forEach((element: any) => {
        resultsId.push(element.id)
    });

    return { results: resultsId, total: total };
}