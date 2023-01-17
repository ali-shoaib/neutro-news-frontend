import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaFspreMWo-dHSahNN4GyX3otfezGxQcs",
  authDomain: "todo-list-app-ali.firebaseapp.com",
  databaseURL: "https://todo-list-app-ali-default-rtdb.firebaseio.com",
  projectId: "todo-list-app-ali",
  storageBucket: "todo-list-app-ali.appspot.com",
  messagingSenderId: "220115512794",
  appId: "1:220115512794:web:a88f6d3c853a7bebe164e3",
  measurementId: "G-V98XL775PL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;