// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAacuiuUfx9xPozqMnx2gjVhvlLrKDW8U8",
  authDomain: "pyz-test.firebaseapp.com",
  projectId: "pyz-test",
  storageBucket: "pyz-test.appspot.com",
  messagingSenderId: "1002244320159",
  appId: "1:1002244320159:web:e30ed55eb549fef3fc2baa",
  measurementId: "G-RDP6P39C09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, set, get, update, remove, ref, child} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
const db = getDatabase();

var idCode;
var enterTitle = document.querySelector("#enterTitle");
var enterDesc = document.querySelector("#enterDesc");
var enterHours = document.querySelector("#enterHours");
var enterContact = document.querySelector("#enterContact");
var findTitle = document.querySelector("#findName");
var findHours = document.querySelector("#findHours");
var findDesc = document.querySelector("#findDesc");

var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

function GenerateID(){
    // generating id
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let blogTitle = enterTitle.value.split(" ").join("-");
    let id = '';
    for(let i = 0; i < 4; i++){
        id += letters[Math.floor(Math.random() * letters.length)];
    }
    return id
}

var idCode = GenerateID()
console.log(idCode)

function InsertData(){
    set(ref(db, "Positions/" + enterTitle.value),{
        // ID: idCode,
        Title: enterTitle.value,
        Description: enterDesc.value,
        Contact: enterContact.value,
        Hours: enterHours.value,
    })
    .then(()=>{
        alert("Data added successfully!")
    })
    .catch((error)=>{
        alert(error)
    })
};

function FindData(){}

function UpdateData(){}

function RemoveData(){}

insertBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
removeBtn.addEventListener('click', RemoveData);
findBtn.addEventListener('click', FindData);