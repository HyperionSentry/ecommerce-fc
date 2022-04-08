import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4JNm9WgFVRmRooe7W7r6KPPkBDae9L0Y",
  authDomain: "ecommerce-fc-c5ce7.firebaseapp.com",
  projectId: "ecommerce-fc-c5ce7",
  storageBucket: "ecommerce-fc-c5ce7.appspot.com",
  messagingSenderId: "1014418885848",
  appId: "1:1014418885848:web:fd3e443eccceb9fdfadbad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}