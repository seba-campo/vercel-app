import fs from "../lib/firebase";
import * as jwt from "jsonwebtoken"
import { addMinutes } from "date-fns";
import { User } from "./user";


export class Auth{
    collection = fs.collection("auth");
    email: string
    token: number
    expiration: Date
    ref: FirebaseFirestore.DocumentReference
    constructor(email?: string){
        this.email = email;
    }
    async PullAllAsync(){
        const authDocs = await this.collection.get();
        var docs = [];
        authDocs.forEach(doc => {
            docs.push({id: doc.id, data: doc.data()})
        })
        return docs
    }
    private GenerateRandomToken(){
       return Math.floor(10000000 + Math.random() * 90000000);
    }
    async FindOrCreateAsync(){
        const data = await this.PullAllAsync();
        const auth = data.find(e => e.data.email === this.email);
        if(auth == undefined){
            const newAuth = await this.CreateAsync();
            return newAuth
        }

        this.token = this.GenerateRandomToken();
        this.expiration = addMinutes(new Date(), 5);

        await this.collection.doc(auth.id).update({
            token: this.token,
            expiration: this.expiration
        })

        return auth
    }
    async CreateAsync(){
        const newUser = new User(this.email);
        this.token = this.GenerateRandomToken();
        this.expiration = addMinutes(new Date(), 5);
        const newAuth = await this.collection.add({
            email: this.email,
            token: this.token,
            expiration: this.expiration
        })
        await newUser.PushAsync();
        const userDoc = await newAuth.get();
        const userData = userDoc.data();
        return {id: userDoc.id, data: userData};
    }
}