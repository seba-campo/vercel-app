import { atom } from "recoil";

export const isLoggedState = atom({
    key: "IsLogged",
    default: false
})

export const userDataState = atom({
    key: "UserData",
    default: {
        "email": "-",
        "nombre": "-",
        "apellido": "-",
        "address": "-"
    }
})