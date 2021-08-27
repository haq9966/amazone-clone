import firebase from 'firebase'

const firbaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCAKa043SUGNNv8krbUPlLWqyjxNjF7K8M",
  authDomain: "e-clone-29147.firebaseapp.com",
  projectId: "e-clone-29147",
  storageBucket: "e-clone-29147.appspot.com",
  messagingSenderId: "1005983595767",
  appId: "1:1005983595767:web:0d6ce06f79209405e2a7f2"
});

const db = firebaseApp.firestroe();
const auth = firebase.auth();

export {db,auth};
