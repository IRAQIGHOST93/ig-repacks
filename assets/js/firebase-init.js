import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBMlczirTrHMY6E_bNwjplaqmES5Q0c-aA",
    authDomain: "ig-repacks99.firebaseapp.com",
    projectId: "ig-repacks99",
    storageBucket: "ig-repacks99.appspot.com",
    messagingSenderId: "276826564794",
    appId: "1:276826564794:web:165c941ada1d1d4a12fa83",
    measurementId: "G-VV96DCTN0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Export auth for use in other scripts
