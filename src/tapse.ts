// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArbcWuV0fHDAGg3yO_TX50Ys4V1WONmDs",
  authDomain: "cpzei-a91ab.firebaseapp.com",
  projectId: "cpzei-a91ab",
  storageBucket: "cpzei-a91ab.appspot.com",
  messagingSenderId: "946221080270",
  appId: "1:946221080270:web:88c33013566023c6a43a9f",
  measurementId: "G-6W5GE2J756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
