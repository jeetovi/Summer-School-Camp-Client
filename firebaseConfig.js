// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU2Xf8nQVO781qGwQZI6dv7fxln6N41ZM",
  authDomain: "summer-school-camp-client.firebaseapp.com",
  projectId: "summer-school-camp-client",
  storageBucket: "summer-school-camp-client.appspot.com",
  messagingSenderId: "521765977760",
  appId: "1:521765977760:web:d0689cd3b1a867dffc93c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;