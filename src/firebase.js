// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANmTTj9jz62WbSc95ZxqqHSHxT_E-zJyY",
  authDomain: "chamsocsuckhoe-3a384.firebaseapp.com",
  projectId: "chamsocsuckhoe-3a384",
  storageBucket: "chamsocsuckhoe-3a384.appspot.com",
  messagingSenderId: "897915524842",
  appId: "1:897915524842:web:b7f1a8c36c0e2961f2e993"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default app