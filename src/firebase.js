import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB5RI1XH1nfWs9iKvPpia7glnTAspSSAeo",
    authDomain: "tradetron-1.firebaseapp.com",
    projectId: "tradetron-1",
    storageBucket: "tradetron-1.appspot.com",
    messagingSenderId: "652231595254",
    appId: "1:652231595254:web:edd3ad3aa53dea4c58c8d7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };