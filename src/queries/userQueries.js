import { db } from '../firebaseConfig';
import { setDoc, doc, updateDoc, getDoc, getDocs, collection, addDoc, deleteDoc, query, where } from "firebase/firestore";
import { storage } from '../firebaseConfig';
import { ref, deleteObject } from 'firebase/storage';

export async function createUserData(userId, nom, prenom, image) {
  try {
    await addDoc(collection(db, "userData"), {
      nom: nom,
      prenom: prenom,
      image: image,
    });
    console.log('Données utilisateur créées avec succès!');
  } catch (error) {
    console.log(error)
    console.error('Erreur lors de la création des données utilisateur :', error);
  }
}

export async function getUserdata(id) {
  console.log(id)
  const docRefUserData = doc(db, "userData", id);
  console.log(docRefUserData)

  const docSnap = await getDoc(docRefUserData);

  if(docSnap) {
    console.log(docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  return res;
}