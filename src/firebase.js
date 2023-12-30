import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAekcXuGNvQy4NgGRlulXv28ti6RtN7Y54",
  authDomain: "blog-a7a1a.firebaseapp.com",
  projectId: "blog-a7a1a",
  storageBucket: "blog-a7a1a.appspot.com",
  messagingSenderId: "275710013895",
  appId: "1:275710013895:web:661b54ea42e18b2281a9e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };