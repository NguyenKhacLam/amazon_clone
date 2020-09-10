import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDn40xAmN33SESlrqFycvlI9qfT_inH3dI",
  authDomain: "clone-93b44.firebaseapp.com",
  databaseURL: "https://clone-93b44.firebaseio.com",
  projectId: "clone-93b44",
  storageBucket: "clone-93b44.appspot.com",
  messagingSenderId: "296454046746",
  appId: "1:296454046746:web:f7ad607bd966d203effda3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
