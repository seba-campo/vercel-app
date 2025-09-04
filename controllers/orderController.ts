import { randomUUID } from "crypto";
import { ORDER_COLLECTION } from "../lib/firebase";
import { createSingleProductPreference } from "../lib/mercadopago";
import { getProductByIdAsync } from "./productController";
import order from "../pages/api/order";


export async function generateOrderAndPaymentAsync(productId: string, userId: string){
    const productData = await getProductByIdAsync(productId);
    if(productData == undefined) return;
    const newOrderDoc = await ORDER_COLLECTION.add({
        userId: userId,
        productId: productId,
        status: "pending",
        paymentUrl: ""
    });
    
    
    const productOrder = await createSingleProductPreference({
        productName: productData.name,
        productDescription: productData.description,
        productId: productId,
        productPrice: productData.variants[0].price,
        transactionId: newOrderDoc.id
    })

    await newOrderDoc.update({
        paymentUrl:  productOrder.init_point
    })

    const orderData = (await ORDER_COLLECTION.doc(newOrderDoc.id).get()).data();
    return {
        id: newOrderDoc.id,
        orderData: orderData,
    }
}

export async function getOrderByIdAsync(id: string){
    const orderDoc = await ORDER_COLLECTION.doc(id).get();
    if(!orderDoc.exists) return;

    const orderData = orderDoc.data();
    return orderData
}

export async function getOrdersByUserIdAsync(userId: string){
    const orderSnapshot = await ORDER_COLLECTION.where("userId", "==", userId).get();
    if(orderSnapshot.empty) return; 

    var orders = []

    orderSnapshot.docs.forEach((e)=>{
        orders.push(e.data())
    })
    return orders;
}