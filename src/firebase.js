import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBCiXJQfoYg2ATXX61RpI6MZlOw_48F6Vg",
    authDomain: "slack-clone-f70ab.firebaseapp.com",
    projectId: "slack-clone-f70ab",
    storageBucket: "slack-clone-f70ab.appspot.com",
    messagingSenderId: "669998561078",
    appId: "1:669998561078:web:c9a6f1871bda10f744e597"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;