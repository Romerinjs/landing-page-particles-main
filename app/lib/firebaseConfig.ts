// lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnncktS_RYvGIr91mRzc39ZQv6FzwpiUs",
  authDomain: "boost-your-business2024.firebaseapp.com",
  projectId: "boost-your-business2024",
  storageBucket: "boost-your-business2024.appspot.com",
  messagingSenderId: "836378684063",
  appId: "1:836378684063:web:b4debeb7442285884cd0aa",
  measurementId: "G-Q3Y2YDRNV7"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.error("Error al inicializar Firebase Analytics:", error);
  });
}

export { auth, analytics };
