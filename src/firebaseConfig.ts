import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5ccaMOJFptxXHwpzwJpjNWbI9VStfdzs",
  authDomain: "tryapp-4914b.firebaseapp.com",
  projectId: "tryapp-4914b",
  storageBucket: "tryapp-4914b.firebasestorage.app",
  messagingSenderId: "98015509567",
  appId: "1:98015509567:web:28cafc7210fc4b40ae0c8a",
  measurementId: "G-YTXBPNR2YV",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
