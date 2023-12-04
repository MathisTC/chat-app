import { db } from '../firebaseConfig';
import { setDoc, doc, updateDoc, getDoc, getDocs, collection, addDoc, deleteDoc, query, where, orderBy } from "firebase/firestore";
import { storage } from '../firebaseConfig';
import { ref, deleteObject } from 'firebase/storage';

export async function sendNewMessage(uid, prenom, nom, image, texte) {
  try {
    const currentDate = new Date();
    const jour = currentDate.getDate().toString().padStart(2, '0');
    const mois = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const heure = currentDate.getHours().toString().padStart(2, '0');
    const an = currentDate.getFullYear().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const dateFormatted = `${jour}/${mois}/${an}: ${heure}h${minutes}:${seconds}`;
    await addDoc(collection(db, "message"), {
      userId: uid,
      userNom: nom,
      userPrenom: prenom,
      userImage: image,
      texte: texte,
      date: dateFormatted
    });
  } catch (error) {
    console.log(error)
    console.error('Erreur lors de la création des données utilisateur :', error);
  }
}

export async function getMessages() {
  let messages = []
  const messageDataref = collection(db, "message");
  const querySnapshot = await getDocs(query(messageDataref, orderBy("date")));

  querySnapshot.forEach((doc) => {
    messages.push(doc.data());
  })
  return messages;
}
