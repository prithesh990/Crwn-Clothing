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

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' });//used for the popup to select google account
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase