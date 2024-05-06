import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC1qvINlmLa_Rtt4xsZQaZOhb1Jtmqg65U",
    authDomain: "projektpiwo-5a4e6.firebaseapp.com",
    projectId: "projektpiwo-5a4e6",
    storageBucket: "projektpiwo-5a4e6.appspot.com",
    messagingSenderId: "265722616468",
    appId: "1:265722616468:web:cba7b7163eeda74c127281",
    measurementId: "G-9LT24B2G79"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage();