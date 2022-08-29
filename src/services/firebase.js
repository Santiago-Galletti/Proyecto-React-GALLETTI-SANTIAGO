import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyD_plGfvfI8L8lDmJxWeZxhK6cKAaEvr04",
    authDomain: "react-proyecto-final-cdc2f.firebaseapp.com",
    projectId: "react-proyecto-final-cdc2f",
    storageBucket: "react-proyecto-final-cdc2f.appspot.com",
    messagingSenderId: "790146785389",
    appId: "1:790146785389:web:b904f1730c0e7ad042df64"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;