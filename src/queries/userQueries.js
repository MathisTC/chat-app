import { db } from '../firebaseConfig';
import { setDoc, doc, updateDoc, getDoc, getDocs, collection, addDoc, deleteDoc, query, where } from "firebase/firestore";
import { storage } from '../firebaseConfig';
import { ref, deleteObject } from 'firebase/storage';

export async function createUserData(userId, nom, prenom, url) {
  try {
    await addDoc(collection(db, "userData"), {
      userId: userId,
      nom: nom,
      prenom: prenom,
      image: url,
    });
    } catch (error) {
    console.log(error)
    console.error('Erreur lors de la création des données utilisateur :', error);
  }
}

export async function getUserdata(id) {
  const userDataRef = collection(db, "userData");
  const querySnapshot = await getDocs(query(userDataRef, where("userId", "==", id)));

  if (!querySnapshot.empty) {
    // Récupérer le premier document correspondant à la requête
    const docSnapshot = querySnapshot.docs[0];
    const userData = docSnapshot.data();
    return userData;
  } else {
    console.log("Aucun document correspondant trouvé !");
    return null;
  }
}

export async function addUrlInUserData(imageId) {

}