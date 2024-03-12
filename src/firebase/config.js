import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDN6qdxg4DudxDokVNjHwpy6e5OTTvfI60",

  authDomain: "feb6-5cbb4.firebaseapp.com",

  projectId: "feb6-5cbb4",

  storageBucket: "feb6-5cbb4.appspot.com",

  messagingSenderId: "768137217506",

  appId: "1:768137217506:web:29cb067478847f942fa5bb",

  measurementId: "G-1BXDTTL9SB"

};


initializeApp(firebaseConfig);

const db = getFirestore();
export default db