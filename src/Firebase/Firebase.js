import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAVn2PjUmENsw9hQytwmXYCXEhowv7xBYI",
    authDomain: "crown-dp-6d3bd.firebaseapp.com",
    databaseURL: "https://crown-dp-6d3bd.firebaseio.com",
    projectId: "crown-dp-6d3bd",
    storageBucket: "crown-dp-6d3bd.appspot.com",
    messagingSenderId: "30221765663",
    appId: "1:30221765663:web:cc0887b1d6e59c7dd7592a",
    measurementId: "G-JKFPDX94WW"
}

export const createUserProfileDocument = async (user, ...otherProps) => {
    console.log(user, "user")
    if(!user) return

    const userRef = Firestore.doc(`users/${user.uid}`)
    console.log(userRef, "useRef")

    const snapShot = await userRef.get()
    console.log(snapShot, "snapShot")

    if(!snapShot.exists) {
        const { displayName, email } = user
        console.log(displayName, "displayName")
        const createDate = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createDate,
                ...otherProps
            })
        } catch(err) {
            console.log(err.message, "message")
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const Auth = firebase.auth()
export const Firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => Auth.signInWithPopup(provider)

export default firebase