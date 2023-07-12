import firebase from "firebase";

const firebaseConfig = {
  // apiKey: process.env.APP_KEY,
  // authDomain: "netflix-151df.firebaseapp.com",
  // projectId: "netflix-151df",
  // storageBucket: "netflix-151df.appspot.com",
  // messagingSenderId: "316700975498",
  // appId: "1:316700975498:web:15063159b205c1a349a873",
  // measurementId: "G-2ZGE63ES9F",
  apiKey: "AIzaSyB6NQSpMPWiKpLS1mdh2AgirYtzhUEPHag",
  authDomain: "netflix-clone-19ad8.firebaseapp.com",
  projectId: "netflix-clone-19ad8",
  storageBucket: "netflix-clone-19ad8.appspot.com",
  messagingSenderId: "319271540393",
  appId: "1:319271540393:web:64d98988e4974269f4fbb8"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
