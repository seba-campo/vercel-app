import { ORDER_COLLECTION } from "../lib/firebase";


export async function confirmateOrderAsync(id: string){
    const orderDoc = await ORDER_COLLECTION.doc(id);
    if(!(await orderDoc.get()).exists) return; 

    await orderDoc.update({
        status: "approved"
    })
    console.log("Order updated correctly in firestore");
}