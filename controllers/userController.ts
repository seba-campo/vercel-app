import { AUTH_COLLECTION } from "../lib/firebase";
import { User } from "../models/user";

export async function updateUserAddressAsync(email: string, newAddress: string) {
    const userInstance = new User(email);
    try {
        await userInstance.GetUserByEmailAsync();
        userInstance.address = newAddress;
        await userInstance.UpdateAsync();
        return await userInstance.GetUserByEmailAsync();
    }
    catch (e) {
        throw new Error(e)
    }
}

export async function getUserDataAsync(email: string) {
    const userInstance = new User(email);
    try {
        return await userInstance.GetUserByEmailAsync();
    }
    catch (e) {
        throw new Error(e);
    }
}

export async function getUserByIdAsync(id: string) {
    const userDoc = await AUTH_COLLECTION.doc(id).get();
    if (!userDoc.exists) return;

    const userData = userDoc.data();
    return userData;
}