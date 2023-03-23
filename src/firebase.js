import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB62GGtV0a9P5gsLIyVn5bcTaSvNhVy3Ag",
  authDomain: "practice-chatroom-react.firebaseapp.com",
  projectId: "practice-chatroom-react",
  storageBucket: "practice-chatroom-react.appspot.com",
  messagingSenderId: "227028835500",
  appId: "1:227028835500:web:473cb45efd891857ed9309"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
