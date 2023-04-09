import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAgt1YBvWSzY5Twq_VKpuRtyLVFakvWMH8",
  authDomain: "discord-clone-2545d.firebaseapp.com",
  projectId: "discord-clone-2545d",
  storageBucket: "discord-clone-2545d.appspot.com",
  messagingSenderId: "639909799483",
  appId: "1:639909799483:web:5a2127224d8d485de15e1e",
  measurementId: "G-6WC9WV2900"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;