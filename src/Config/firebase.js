// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Importing getAuth for Email-password authentication
import { getAuth } from "firebase/auth";
//Import firebase for Database CRUD operations
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfgt2Q_c_sM4BdiqmWP_dndWip5E_fXxI",
  authDomain: "catering-service-web-app.firebaseapp.com",
  projectId: "catering-service-web-app",
  storageBucket: "catering-service-web-app.firebasestorage.app",
  messagingSenderId: "762897488238",
  appId: "1:762897488238:web:cf842f272ff8b91e52097f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Auth
const auth = getAuth(app);

//Initialize Firestore
const db = getFirestore(app);

export {auth, db};