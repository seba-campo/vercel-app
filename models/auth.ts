import fs from "../lib/firebase";
import * as jwt from "jsonwebtoken"
import { User } from "./user";
import { error } from "console";

export class Auth{
    collection = fs.collection("auth");
    email: string
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
    private GenerateToken(){
       return jwt.sign({data: 'foobar'}, 'secret', { expiresIn: '5MIN' });
    }
    async FindOrCreateAsync(){
        const data = await this.PullAllAsync();
        const auth = data.find(e => e.data.email === this.email);
        if(auth == undefined){
            const newAuth = await this.CreateAsync();
            console.log(newAuth)
            return newAuth
        };

        return auth.data
    }
    async CreateAsync(){
        const newUser = new User(this.email);
        const newAuth = await this.collection.add({
            email: this.email
        })
        await newUser.PushAsync();

        return newAuth.id;
    }
}