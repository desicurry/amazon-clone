import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDk4TZIYTHrmqYGPZDeiy5RHeHQH2fJjU8",
    authDomain: "clone-32a78.firebaseapp.com",
    projectId: "clone-32a78",
    storageBucket: "clone-32a78.appspot.com",
    messagingSenderId: "315215670988",
    appId: "1:315215670988:web:092bbfc823785af9d11c69",
    measurementId: "G-EE5RMFH2JZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };