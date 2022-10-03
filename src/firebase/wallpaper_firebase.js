import { initializeApp } from "firebase-new/app";
import { getStorage } from "firebase-new/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA6oBX-nWBJ-we8LHCPMSTPqZ2clUzRy8Y",
  authDomain: "wallpaper-ef312.firebaseapp.com",
  projectId: "wallpaper-ef312",
  storageBucket: "wallpaper-ef312.appspot.com",
  messagingSenderId: "98544346701",
  appId: "1:98544346701:web:5308796aba29b769775e04",
  measurementId: "G-7P031ETDXH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
