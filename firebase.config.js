import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA86pKu3B6kKcpiF6WPNVrtDa_Rcs5wgh4",
  authDomain: "maltimart-my-ecommerce.firebaseapp.com",
  projectId: "maltimart-my-ecommerce",
  storageBucket: "maltimart-my-ecommerce.appspot.com",
  messagingSenderId: "651514279327",
  appId: "1:651514279327:web:c6b2f10c426303b77df9aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;