import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: 'AIzaSyB4KJqaMalyl8FPev9masn3V38HpxaONVU',
    authDomain: 'crwn-db-21ace.firebaseapp.com',
    databaseURL: 'https://crwn-db-21ace.firebaseio.com',
    projectId: 'crwn-db-21ace',
    storageBucket: 'crwn-db-21ace.appspot.com',
    messagingSenderId: '144446230330',
    appId: '1:144446230330:web:e7488eb7015a728b674a03',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
