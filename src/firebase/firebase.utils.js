import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC8AVAUzQZd2IoyY1bj7bjSgp_4vph9Il0",
    authDomain: "crwn-clothing-db-b1fc9.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-b1fc9.firebaseio.com",
    projectId: "crwn-clothing-db-b1fc9",
    storageBucket: "crwn-clothing-db-b1fc9.appspot.com",
    messagingSenderId: "758980411936",
    appId: "1:758980411936:web:437805e26329437f7c7245",
    measurementId: "G-CQX0VP7Q6Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //snapshot is used to read the doc  or collections it only represents the data only read the full Data
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' });//used for the popup to select google account
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase