import * as admin from "firebase-admin";

var serviceAccount = require("./certs.json");
//Se verifica que la app ya se haya inicializado
if(!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://desafio-m6-13481-default-rtdb.firebaseio.com"
    });
}
const fs = admin.firestore();
export default fs