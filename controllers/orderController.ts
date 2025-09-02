import { randomUUID } from "crypto";
import { ORDER_COLLECTION } from "../lib/firebase";


export async function generateOrderAndPayment(productId: number){
    const newOrderDoc = await ORDER_COLLECTION.add({
        orderId: randomUUID(),
        productId: productId,
        status: "pending",
        paymentUrl: ""
    });
    const orderData = (await ORDER_COLLECTION.doc(newOrderDoc.id).get()).data();
    return {
        id: newOrderDoc.id,
        data: orderData
    }
}