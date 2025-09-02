import * as admin from "firebase-admin";


const serviceAccount = {
    "type": process.env.TYPE,
  "project_id": process.env.PROJECT_ID,
  "private_key_id": process.env.PRIVATE_KEY_ID,
  "private_key": process.env.PRIVATE_KEY,
  "client_email": process.env.CLIENT_EMAIL,
  "client_id": process.env.CLIENT_ID,
  "auth_uri": process.env.AUTH_URI,
  "token_uri": process.env.TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
  "universe_domain": process.env.UNIVERSE_DOMAIN
}


if(!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      databaseURL: "https://desafio-m6-13481-default-rtdb.firebaseio.com"
    });
}
const fs = admin.firestore();
const PRODUCT_COLLECTION = fs.collection("products");
const ORDER_COLLECTION = fs.collection("orders");
const AUTH_COLLECTION = fs.collection("auth");
const USER_COLLECTION = fs.collection("users");

export {
  fs, 
  PRODUCT_COLLECTION, 
  ORDER_COLLECTION,
  AUTH_COLLECTION,
  USER_COLLECTION
} 