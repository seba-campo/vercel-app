import { Product } from "../models/product";
import fs from "../lib/firebase";

const PRODUCT_COLLECTION = fs.collection("products");

export async function getProductByIdAsync(id: string) {
    const product = await PRODUCT_COLLECTION.doc(id).get();
    if(product.exists){
        return product.data()
    }
    else{
        throw new Error("Product not found");
    }
}