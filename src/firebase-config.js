// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_CONFIG_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_CONFIG_MEASUREMENT_ID
// };

// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYVutNXMcjeOp4sDw9gCXqe3CZUJQviPY",
  authDomain: "restaurant-b6520.firebaseapp.com",
  projectId: "restaurant-b6520",
  storageBucket: "restaurant-b6520.appspot.com",
  messagingSenderId: "254996717085",
  appId: "1:254996717085:web:88faeb5cceb8c6f5e670f4",
  measurementId: "G-RB75JQHNT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);