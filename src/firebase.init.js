// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZlj_mWKLRCPmWKP4Gx4qwQXydAF1YFxI",
    authDomain: "vista-mart-a165f.firebaseapp.com",
    projectId: "vista-mart-a165f",
    storageBucket: "vista-mart-a165f.firebasestorage.app",
    messagingSenderId: "188459047468",
    appId: "1:188459047468:web:96a83a71a3addb82b50f89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)