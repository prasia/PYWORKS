// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZEm1zm_91jdufLjTb7omGmAF5bsQyIpk",
    authDomain: "pyworkswebsite.firebaseapp.com",
    projectId: "pyworkswebsite",
    storageBucket: "pyworkswebsite.appspot.com",
    messagingSenderId: "227394710474",
    appId: "1:227394710474:web:24c65cad7db61835a1fd33",
    measurementId: "G-VPQJ4R1BS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let db = firebase.firestore();