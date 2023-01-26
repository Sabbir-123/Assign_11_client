// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALTsHyyCuaroYXcwPVe5KjIpzv8B9fPKs",
  authDomain: "assignment-11-c4f4f.firebaseapp.com",
  projectId: "assignment-11-c4f4f",
  storageBucket: "assignment-11-c4f4f.appspot.com",
  messagingSenderId: "assignment-11-c4f4f.appspot.com",
  appId: "1:357559421744:web:8dc3e720ae1fdc06e616f5"

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
};
console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app