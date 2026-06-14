import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxexcRTEfnQ5NrdOMNvVnZNupHZb-DZhY",
    authDomain: "medical-websites-daef3.firebaseapp.com",
    projectId: "medical-websites-daef3",
    storageBucket: "medical-websites-daef3.firebasestorage.app",
    messagingSenderId: "198816215064",
    appId: "1:198816215064:web:b0169ab9f12291401f936d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);