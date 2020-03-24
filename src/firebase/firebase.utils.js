import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyB4KJqaMalyl8FPev9masn3V38HpxaONVU',
    authDomain: 'crwn-db-21ace.firebaseapp.com',
    databaseURL: 'https://crwn-db-21ace.firebaseio.com',
    projectId: 'crwn-db-21ace',
    storageBucket: 'crwn-db-21ace.appspot.com',
    messagingSenderId: '144446230330',
    appId: '1:144446230330:web:e7488eb7015a728b674a03',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
