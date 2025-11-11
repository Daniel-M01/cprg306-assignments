// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkZ-0SNA6kNAydmmG5QCTeJn-8z1mdI3g",
  authDomain: "cprg306-assignments-f2e93.firebaseapp.com",
  projectId: "cprg306-assignments-f2e93",
  storageBucket: "cprg306-assignments-f2e93.firebasestorage.app",
  messagingSenderId: "587758505267",
  appId: "1:587758505267:web:58f618047724341a460246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);