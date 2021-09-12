import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6MgeNDP3QphJuzSn5qN8HbsfXFGxI9Mw",
  authDomain: "portomovies-b2f9b.firebaseapp.com",
  projectId: "portomovies-b2f9b",
  storageBucket: "portomovies-b2f9b.appspot.com",
  messagingSenderId: "172457831007",
  appId: "1:172457831007:web:7a3746beb7a2b9f6b049ea",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
