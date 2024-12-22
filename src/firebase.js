// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDH1S-67T3tSWQbzBQTbtdfBn9-P1sLQ4",
    authDomain: "linkedin-clone-4051a.firebaseapp.com",
    projectId: "linkedin-clone-4051a",
    storageBucket: "linkedin-clone-4051a.firebasestorage.app",
    messagingSenderId: "44920167434",
    appId: "1:44920167434:web:0e7c3c49436d5f557093f3",
    measurementId: "G-E8SDSWF1FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);