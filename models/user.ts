import { add } from "date-fns";
import { fs } from "../lib/firebase";
export class User{
    collection = fs.collection("users");
    private ref: FirebaseFirestore.DocumentReference
    userId: string
    nombre: string = "Foo"
    apellido: string = "Bar"
    address: string
    email: string
    constructor(email: string, nombre?: string, apellido?: string, address?: string){
        this.email = email;
        if(nombre && apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
        else{
            this.nombre = "foo";
            this.apellido = "bar";
        }

        if(address){
            this.address = address
        }
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
            email: this.email,
            nombre: this.nombre,
            apellido: this.apellido
        })
    }
    async UpdateAsync(){
        await this.collection.doc(this.ref.id).update({
            email: this.email,
            nombre: this.nombre,
            apellido: this.apellido,
            address: this.address
        })
    }
    async GetUserByEmailAsync() {
    const snapshot = await this.collection.where("email", "==", this.email).limit(1).get();

    if (snapshot.empty) {
        return null; // No se encontró el usuario
    }

    const doc = snapshot.docs[0];
    const docData = doc.data();
    this.nombre = docData.nombre;
    this.apellido = docData.apellido;
    this.address = docData.address;
    this.ref = doc.ref;
    this.userId = doc.id;
    return { id: doc.id, ...doc.data() };
    }
}