// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfK1cMq9WS_iMqNxBZk-NW1bSR1H82fIU",
  authDomain: "hackathoncarapp.firebaseapp.com",
  projectId: "hackathoncarapp",
  storageBucket: "hackathoncarapp.appspot.com",
  messagingSenderId: "866384972662",
  appId: "1:866384972662:web:5ebc53e4c609f837df0857",
  measurementId: "G-3ZWL7G7B95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;