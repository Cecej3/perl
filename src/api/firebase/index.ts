// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);