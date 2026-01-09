import { Auth } from "../models/auth";
import { Mail } from "../models/mail";

export async function getAllRoomsAsync() {
    const authInstance = new Auth("testdt");
    return await authInstance.PullAllAsync()
}

export async function createAuthAsync(email: string) {
    const authInstance = new Auth(email);
    const mailInstance = new Mail(email);
    try {
        const authDoc = await authInstance.FindOrCreateAsync();
        await mailInstance.SendTokenByEmailAsync(authDoc.data.token);
        return authDoc
    } catch (e) {
        throw new Error("Ocurrió un error al validar el usuario");
    }
}

export async function auntenticateAsync(email: string, token: number) {
    const authInstance = new Auth(email, token);
    try {
        const token = await authInstance.AuthenticateUser();
        return { token }
    } catch (e) {
        return false
    }
}