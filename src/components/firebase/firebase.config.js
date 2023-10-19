// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgSuhd9KxqiJ3PJVfrrObshXplM4vvgA0",
  authDomain: "car-brand-shop.firebaseapp.com",
  projectId: "car-brand-shop",
  storageBucket: "car-brand-shop.appspot.com",
  messagingSenderId: "728273251113",
  appId: "1:728273251113:web:54418d5b0618a9f66ce538",
  measurementId: "G-35KJGJQ8Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;