import fs from "../lib/firebase";
import * as jwt from "jsonwebtoken"
import { User } from "./user";
import { Mail } from "./mail";
import { addMinutes, addMilliseconds } from "date-fns";
import { timeStamp } from "console";

export class Auth{
    collection = fs.collection("auth");
    email: string
    token: string
    expiration: Date
    ref: FirebaseFirestore.DocumentReference
    constructor(email: string, token?: string){
        this.email = email;
        this.token = token;
    }
    async PullAllAsync(){
        const roomDocs = await this.collection.get();
        var rooms = [];
        roomDocs.forEach(doc => {
            rooms.push({id: doc.id, data: doc.data()})
        })
        return rooms
    }
    async UpdateAsync(){
        const authDoc = await this.ref.update({
            token: this.token,
            expiration: this.expiration
        })
        if(authDoc){
            console.log("User updated")
        }
    }
    private GenerateJwt(){
       return jwt.sign({data: {
        email: this.email,
        ref: this.ref
       }}, 'secret', { expiresIn: '25MIN' });
    }
    private GenerateToken(){
        const token =  Math.floor(100000 + Math.random() * 900000).toString();
        const expDate = addMinutes(new Date(), 25);
        this.token = token;
        this.expiration = expDate;
    }
    async FindOrCreateAsync(){
        const data = await this.PullAllAsync();
        const auth = data.find((e) =>{return e.data.email == this.email});
        this.GenerateToken();
        const mailInstance = new Mail(this.email, "Acceso", this.token);
        if(auth){
            this.ref = this.collection.doc(auth.id);    
            console.log("Logeando User")
            await this.UpdateAsync();
            await mailInstance.SendAsync();
            return auth.data
        }
        else{
            console.log("CreandoUser")
            const userId =  await this.CreateAsync();
            await mailInstance.SendAsync();
            return userId
        }
    }
    async CreateAsync(){
        const newUser = new User(this.email);
        const newAuth = await this.collection.add({
            email: this.email,
            token: this.token,
            expiration: this.expiration
        })
        await newUser.PushAsync();
        this.ref = newAuth
        return newAuth.id;
    }
    async AuthenticateUser(){
        const dateNow = new Date();
        const allAuths = await this.PullAllAsync();
        const authDoc = allAuths.find((e) =>{return e.data.email == this.email});
        const expiration = (authDoc.data.expiration).toDate() as Date;

        //chequeo si el token no esta vencido
        if(dateNow >= expiration){
            console.log("Expirado")
            throw new Error("Token expirado");
        }
        else{
            const jwt = this.GenerateJwt();
            console.log(jwt)
            return jwt;
        }
    }
}