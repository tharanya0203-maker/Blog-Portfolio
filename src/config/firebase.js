
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9NLxe6aWhdaxZ_MF0_IcvBWTNq7VDjIo",
  authDomain: "blog-portfolio-65172.firebaseapp.com",
  projectId: "blog-portfolio-65172",
  storageBucket: "blog-portfolio-65172.firebasestorage.app",
  messagingSenderId: "977700461734",
  appId: "1:977700461734:web:fb127d5694fd52042da867",
  measurementId: "G-9B8T2M72NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth