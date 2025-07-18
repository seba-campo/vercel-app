import fs from "../lib/firebase";
import { addMinutes, constructNow } from "date-fns"
import * as jwt from "jsonwebtoken"
import { User } from "./user";

export class Auth{
    collection = fs.collection("auth");
    email: string
    ref: FirebaseFirestore.DocumentReference
    constructor(email?: string){
        this.email = email;
    }
    async PullAllAsync(){
        const roomDocs = await this.collection.get();
        var rooms = [];
        roomDocs.forEach(doc => {
            rooms.push({id: doc.id, data: doc.data()})
        })
        return rooms
    }
    private GenerateToken(){
       return jwt.sign({data: 'foobar'}, 'secret', { expiresIn: '5MIN' });
    }
    async FindOrCreateAsync(){
        const data = await this.PullAllAsync();
        const auth = data.find(e => e.email = this.email);
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