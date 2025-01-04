import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    authDomain: "linkedin-clone-dd9e8.firebaseapp.com",
    storageBucket: "linkedin-clone-dd9e8.firebasestorage.app",
    messagingSenderId: "1072002742617",
    measurementId: "G-SZ8RT94HSW"
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