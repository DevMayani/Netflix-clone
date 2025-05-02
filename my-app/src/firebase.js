// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7krg_8FbdBJElafZTnqMLWMcFFjgmu1s",
  authDomain: "netflix-clone-ab0f5.firebaseapp.com",
  projectId: "netflix-clone-ab0f5",
  storageBucket: "netflix-clone-ab0f5.appspot.com", // fixed typo
  messagingSenderId: "974321025466",
  appId: "1:974321025466:web:ffede0174a3b65e230dd83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

// Export services
export { auth };
export default db;
