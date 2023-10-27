const firebaseConfig = {
    apiKey: "AIzaSyAacuiuUfx9xPozqMnx2gjVhvlLrKDW8U8",
    authDomain: "pyz-test.firebaseapp.com",
    databaseURL: "https://pyz-test-default-rtdb.firebaseio.com",
    projectId: "pyz-test",
    storageBucket: "pyz-test.appspot.com",
    messagingSenderId: "1002244320159",
    appId: "1:1002244320159:web:e30ed55eb549fef3fc2baa",
    measurementId: "G-RDP6P39C09"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        loginButton.innerHTML = "View Profile";
        // Handle user logged in state
    } else {
        // Handle user not logged in state
    }
});