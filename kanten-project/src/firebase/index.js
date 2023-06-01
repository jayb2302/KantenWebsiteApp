import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBGroty_DwPsUK016nqp3FH8Ps4HzAivzQ",
  authDomain: "kanten-web-a8989.firebaseapp.com",
  projectId: "kanten-web-a8989",
  storageBucket: "kanten-web-a8989.appspot.com",
  messagingSenderId: "274632996466",
  appId: "1:274632996466:web:c06c5518a56f70e13bb4eb",
  measurementId: "G-V1J8FRD5JN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics, app };
