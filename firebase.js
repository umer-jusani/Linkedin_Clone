import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB3jjovrWRVHT-RvYJhdR5tg-JpB0VWxZo",
    authDomain: "linkedinclone-945ca.firebaseapp.com",
    projectId: "linkedinclone-945ca",
    storageBucket: "linkedinclone-945ca.firebasestorage.app",
    messagingSenderId: "460199160552",
    appId: "1:460199160552:web:1dab1fabe1615cd374775d",
    measurementId: "G-TC1KLC9SYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// SignOut
export const LogOutService = (navigate) => {
    try {
        signOut(auth);
        localStorage.removeItem('user');
        navigate('/');
    } catch (error) {
        console.log(error, "error using while signOut");
    }
}

// Function to listen to auth state changes and save/remove user data
// export const listenAuthState = (navigate) => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             const { email, displayName, photoURL, uid } = user;
//             // If the user is signed in, save user data to localStorage
//             localStorage.setItem('user', JSON.stringify({ email, displayName, photoURL, uid }));
//             navigate('/home');
//         } else {
//             // If the user is signed out, remove user data from localStorage
//             localStorage.removeItem('user');
//             navigate('/');
//         }
//     });
// };

export { auth, signInWithPopup, provider }; // Export the auth and db objects