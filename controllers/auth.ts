import { Auth } from "../models/auth";
import auth from "../pages/api/auth";

export async function getAllRoomsAsync(){
    const authInstance = new Auth("testdt");
    return await authInstance.PullAllAsync()
}

export async function FindOrCreateAsyncController(email: string){
    const authInstance = new Auth(email);
    return await authInstance.FindOrCreateAsync()
}