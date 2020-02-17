import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAwYNj0mG0CS7TaIwzI5dCWo8cJkjwo7vc",
  authDomain: "closes-shop.firebaseapp.com",
  databaseURL: "https://closes-shop.firebaseio.com",
  projectId: "closes-shop",
  storageBucket: "closes-shop.appspot.com",
  messagingSenderId: "694915206601",
  appId: "1:694915206601:web:b20789c1ce61d0e5106c18",
  measurementId: "G-QZWLSPB5L8"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



