import fs from "../lib/firebase";
export class User{
    collection = fs.collection("users");
    ref: FirebaseFirestore.DocumentReference
    nombre: string = "Foo"
    apellido: string = "Foos"
    email: string
    constructor(email: string, nombre?: string, apellido?: string){
        this.nombre = nombre;
        this.apellido = "apellido";
        this.email = email;
    }
    async PullAllAsync(){
        const userDocs = await this.collection.get();
        var users = [];
        userDocs.forEach(doc => {
            users.push({id: doc.id, data: doc.data()})
        })
        return users
    }
    async PushAsync(){
        await this.collection.add({
            nombre: this.nombre,
            apellido:  this.apellido,
            email: this.email
        })
    }

}