import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMOsWyC7CYbVanGLML-2AgNfCzSQepX3w",
  authDomain: "greenshopn17.firebaseapp.com",
  projectId: "greenshopn17",
  storageBucket: "greenshopn17.firebasestorage.app",
  messagingSenderId: "552332144397",
  appId: "1:552332144397:web:7b625de1e690f6ff284a44",
  measurementId: "G-8ESPJZMYRH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
