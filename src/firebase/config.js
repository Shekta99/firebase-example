import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2Y9xJb9ukDRsbgy4_Y8L3WE9EEzSpa7E",
  authDomain: "bd-clase-firebase.firebaseapp.com",
  projectId: "bd-clase-firebase",
  storageBucket: "bd-clase-firebase.appspot.com",
  messagingSenderId: "842763883666",
  appId: "1:842763883666:web:b97ba4f343d2681e1b824b",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
