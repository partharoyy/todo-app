import firebase from "firebase";

// var firebaseConfig = {
//     apiKey: "AIzaSyCv8MxsyjmAgKQ7fdfSH_aQNTWG1k72HoM",
//     authDomain: "todo-app-79226.firebaseapp.com",
//     projectId: "todo-app-79226",
//     storageBucket: "todo-app-79226.appspot.com",
//     messagingSenderId: "1013742479335",
//     appId: "1:1013742479335:web:d6dd80d2bd17673b36bf42"
// };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };