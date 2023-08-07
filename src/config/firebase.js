import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm3ZrFenL5s1GQyd8UMiApbNRvgOyEaG8",
  authDomain: "p4-react.firebaseapp.com",
  projectId: "p4-react",
  storageBucket: "p4-react.appspot.com",
  messagingSenderId: "620491682166",
  appId: "1:620491682166:web:1b2456194bffea60d70a57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database
export const db = getFirestore(app);