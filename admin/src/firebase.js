import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.messagingSenderId,
  appId: process.env.appId
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
