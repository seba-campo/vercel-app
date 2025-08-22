import fs from "../lib/firebase";
export class User{
    collection = fs.collection("users");
    ref: FirebaseFirestore.DocumentReference
    nombre: string = "Foo"
    apellido: string = "Bar"
    email: string
    constructor(email: string, nombre?: string, apellido?: string){
        this.email = email;
        if(nombre && apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
        else{
            this.nombre = "foo";
            this.apellido = "bar";
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
            email: this.email
        })
    }
    async GetUserByEmailAsync() {
    const snapshot = await this.collection.where("email", "==", this.email).limit(1).get();

    if (snapshot.empty) {
        return null; // No se encontró el usuario
    }

    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
    }
}