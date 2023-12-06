import { db } from '../firebaseConfig';
import { setDoc, doc, updateDoc, getDoc, getDocs, collection, addDoc, deleteDoc, query, where } from "firebase/firestore";
import { storage } from '../firebaseConfig';
import { ref, deleteObject } from 'firebase/storage';
import { uploadImage } from "./uploadImages"

export async function createGroup(userId, titre, description, fileBytes) {
  try {
    await addDoc(collection(db, "group"), {
    }).then((document) => {
      uploadImage(fileBytes, 'group/' + document.id).then(()=> {
})
      setDoc(doc(db, "group/" + document.id), {
        titre: titre,
        description: description,
        ownerId: userId,
        image: 'https://firebasestorage.googleapis.com/v0/b/chat-app-mtc.appspot.com/o/group%2F' + document.id + '.jpg?alt=media&token=e13e2f0b-24cc-4cc0-965b-9b176fe0b74d'
      })
    })
    } catch (error) {
    console.log(error)
    console.error('Erreur lors de la création du groupe :', error);
  }
}

export async function getGroup() {
  const groupsRef = collection(db, "group");
  const querySnapshot = await getDocs(query(groupsRef));
  let groupData = []
  querySnapshot.forEach((doc) => {
    const document = {
      data: doc.data(), 
      id: doc.id
    }
    groupData.push(document);
  })

  if (!querySnapshot.empty) {
    return groupData;
  } else {
    console.log("Aucun document correspondant trouvé !");
    return null;
  }
}