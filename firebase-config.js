// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoO7sYTOcz_1JrW46VoRowvHYa5wUFSTk",
  authDomain: "rpg-prisma-f5a11.firebaseapp.com",
  projectId: "rpg-prisma-f5a11",
  storageBucket: "rpg-prisma-f5a11.firebasestorage.app",
  messagingSenderId: "65278749627",
  appId: "1:65278749627:web:804f5d41adbab5351e729e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
