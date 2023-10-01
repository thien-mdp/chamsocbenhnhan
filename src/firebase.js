// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj-yct89noS-nZ6MHO4TGNBQq3Qdtl-cQ",
  authDomain: "fir-universe-f.firebaseapp.com",
  projectId: "fir-universe-f",
  storageBucket: "fir-universe-f.appspot.com",
  messagingSenderId: "890043450849",
  appId: "1:890043450849:web:99a881bb5285564d1f7ea0",
  measurementId: "G-1HWG34PEQQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default app