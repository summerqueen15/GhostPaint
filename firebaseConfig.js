import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBzZzqLZ-kTBVAxTUXSAroN8NHabeiCEfI",
  authDomain: "ghostpaint-4ea27.firebaseapp.com",
  projectId: "ghostpaint-4ea27",
  storageBucket: "ghostpaint-4ea27.firebasestorage.app",
  messagingSenderId: "610209786993",
  appId: "1:610209786993:web:9b9dd280f630b30e1a7fd0",
  measurementId: "G-MKEBL2CXD9"
};

// init firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);