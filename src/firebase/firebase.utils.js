import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBzBvhq1ZXH6wIVaAx66_T6bRI2LQGmOgQ",
  authDomain: "crwn-db-11c49.firebaseapp.com",
  databaseURL: "https://crwn-db-11c49.firebaseio.com",
  projectId: "crwn-db-11c49",
  storageBucket: "",
  messagingSenderId: "394998614278",
  appId: "1:394998614278:web:ef919081cfce05e3fcb687"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
