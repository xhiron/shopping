import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBwAZUefCEvPLIEDxiwmwxOM6uy12rq3Tc",
  authDomain: "crownshop-6c362.firebaseapp.com",
  projectId: "crownshop-6c362",
  storageBucket: "crownshop-6c362.appspot.com",
  messagingSenderId: "239216383807",
  appId: "1:239216383807:web:7f45af1e54df071332a58a",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
