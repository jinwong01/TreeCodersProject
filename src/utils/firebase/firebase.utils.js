import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwOvy3WLAl1PRhD0tnZwQM946bR2RHw0Q",
  authDomain: "treehacks-cab76.firebaseapp.com",
  projectId: "treehacks-cab76",
  storageBucket: "treehacks-cab76.appspot.com",
  messagingSenderId: "265251837989",
  appId: "1:265251837989:web:5403546498e6a7487547cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logInWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmailAndPassword = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;

  await setDoc(doc(db, "to-do", email), {
    items: [],
  });
};

export const getToDoList = async (email) => {
  try {
    const docSnap = await getDoc(doc(db, "to-do", email));

    return docSnap.data().items;
  } catch (error) {
    console.error(error);
  }
};

export const addToDoItem = async (currentItems, email, newItem) => {
  await updateDoc(doc(db, "to-do", email), {
    items: [...currentItems, newItem],
  });
};

export const deleteToDoItem = async (currentItems, email, deleteItem) => {
  var newItems = currentItems;

  const index = newItems.indexOf(deleteItem);

  if (index > -1) {
    newItems.splice(index, 1);
  }

  await updateDoc(doc(db, "to-do", email), {
    items: [...newItems],
  });
};
