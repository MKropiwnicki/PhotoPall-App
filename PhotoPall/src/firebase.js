// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKxa4qvFWb1zf_yIOkoEOP2swBGU34ud8",
    authDomain: "photopall.firebaseapp.com",
    projectId: "photopall",
    storageBucket: "photopall.appspot.com",
    messagingSenderId: "643491170347",
    appId: "1:643491170347:web:f410b5c08cc4d62e1c426e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app