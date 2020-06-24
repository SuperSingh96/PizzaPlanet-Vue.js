import firebase from 'firebase'

const config={
    apiKey: "AIzaSyBWrU5J-XR81GNzrJ-20I2WkyjASDHOBwM",
    authDomain: "pizza-planet-d840c.firebaseapp.com",
    databaseURL: "https://pizza-planet-d840c.firebaseio.com",
    projectId: "pizza-planet-d840c",
    storageBucket: "pizza-planet-d840c.appspot.com",
    messagingSenderId: "189004083956",
    appId: "1:189004083956:web:7e87deafc78e30bee3a4a1"
}

const app=firebase.initializeApp(config)
const db= app.firestore()
export const dbMenuRef=db.collection('menu')
export const dbOrdersRef=db.collection('orders')
export const firebaseAuth=firebase.auth()

// const app=firebase.initializeApp(config)
// const db=app.database()

// export const dbMenuRef=db.ref('menu')
