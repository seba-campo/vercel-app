import { Auth } from "../models/auth";
import { Mail } from "../models/mail";
import auth from "../pages/api/auth";

export async function getAllRoomsAsync(){
    const authInstance = new Auth("testdt");
    return await authInstance.PullAllAsync()
}

export async function createAuthAsync(email: string){
    try{
        const authInstance = new Auth(email);
        const mailInstance = new Mail();
        const authDoc = await authInstance.FindOrCreateAsync()
        await mailInstance.SendTokenByEmailAsync(authDoc.data.token, authDoc.data.email)

        return authDoc
    }catch(e){
        throw new Error(e)
    }
}