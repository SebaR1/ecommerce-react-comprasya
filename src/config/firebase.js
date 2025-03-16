import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHT9LYm5hTwTHJYWig3QXkC45dw4S-HnY",
  authDomain: "ecommerce-react-comprasya.firebaseapp.com",
  projectId: "ecommerce-react-comprasya",
  storageBucket: "ecommerce-react-comprasya.firebasestorage.app",
  messagingSenderId: "419181120190",
  appId: "1:419181120190:web:91af49f8d1d1ec06812cef",
  measurementId: "G-N89NTEBNVN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);