// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnncktS_RYvGIr91mRzc39ZQv6FzwpiUs",
  authDomain: "boost-your-business2024.firebaseapp.com",
  projectId: "boost-your-business2024",
  storageBucket: "boost-your-business2024.appspot.com",
  messagingSenderId: "836378684063",
  appId: "1:836378684063:web:b4debeb7442285884cd0aa",
  measurementId: "G-Q3Y2YDRNV7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let analytics;

if (typeof window !== "undefined") {
  // Verificar si el entorno es compatible con Analytics antes de inicializar
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.error("Error al inicializar Firebase Analytics:", error);
  });
}

export { auth, analytics };
export const storage = getStorage(app);