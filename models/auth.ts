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
    constructor(email: string, token?: number){
        this.email = email;
        token ? this.token = token : null
    }
    async PullAllAsync(){
        const authDocs = await this.collection.get();
        var docs = [];
        authDocs.forEach(doc => {
            docs.push({id: doc.id, data: doc.data()})
        })
        return docs
    }
    private GenerateJwt(){
        return jwt.sign(
            {
                email: this.email,
                docRef: this.ref.path
            }, 
            process.env.JWT_SECRET_KEY, 
            {expiresIn: '45MIN'} 
        )
    }
    private GenerateRandomToken(){
       return Math.floor(10000000 + Math.random() * 90000000);
    }
    async FindOrCreateAsync(){
        const snapshot = await this.collection.where("email", "==", this.email).limit(1).get();
        if (snapshot.empty) {
            const newAuth = await this.CreateAsync();
            return newAuth;
        }
        this.token = this.GenerateRandomToken();
        this.expiration = addMinutes(new Date(), 5);
        const authRef = snapshot.docs[0].ref;
        await this.collection.doc(authRef.id).update({
            token: this.token,
            expiration: this.expiration
        })
        const updatedAuth = (await this.collection.doc(authRef.id).get()).data();
        return {id: authRef.id, data: updatedAuth}
    }
    async CreateAsync(){
        this.token = this.GenerateRandomToken();
        this.expiration = addMinutes(new Date(), 5);
        const newUser = new User(this.email);
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
    async AuthenticateUser() {
        const snapshot = await this.collection.where("email", "==", this.email).limit(1).get();
        if (snapshot.empty) {
            throw new Error("Usuario no encontrado");
        }
        const authDoc = snapshot.docs[0].data();
        this.ref = snapshot.docs[0].ref
        const expiration = authDoc.expiration.toDate() as Date;
        const token = authDoc.token as number;
        const now = new Date();
        if (token != this.token || now >= expiration) {
            throw new Error("Token expirado o inválido");
        }
        return this.GenerateJwt();
    }
}