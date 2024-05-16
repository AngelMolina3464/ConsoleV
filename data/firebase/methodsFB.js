import { db } from "./firebase.config.js";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

export const GetDocsFirebase = async (collectionLibrary) => {
  const data = [];
  const q = query(collection(db, collectionLibrary));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.id, doc.data());
    // console.log(doc.id, " => ", doc.data());
  });
  return data;
};

export const CreateDocFirebase = async (collectionLibrary, objetData) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, collectionLibrary), objetData);
  console.log("Document written with ID: ", docRef.id);
};
