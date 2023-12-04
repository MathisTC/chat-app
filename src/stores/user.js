import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { getUserdata, addUrlInUserData} from "../queries/userQueries.js"
import { auth } from '../firebaseConfig.js'
import { ref } from 'vue';

const uid = ref('')
const userConnected = ref(false);
const userNom = ref('')
const userPrenom = ref('')
const userImage = ref('')


const isUserConnected = () => {
  return userConnected.value
}

const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password).then((userCredential)=> {
    userConnected.value = true
    uid.value = userCredential.user.uid
    updateData()
  })
}

const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential)=> {
      userConnected.value = true
      uid.value = userCredential.user.uid
      addUrlInUserData(uid.value).then(() => {
        updateData()
      })
    })
}

const updateData = async () => {
  await getUserdata(uid.value).then((res) => {
    userNom.value = res.nom
    userPrenom.value = res.prenom
    userImage.value = 'https://firebasestorage.googleapis.com/v0/b/chat-app-mtc.appspot.com/o/' + res.userId + '.jpg?alt=media&token=4e62345b-cf86-4ff8-a6ef-1b1c1f4a1a86'
  })
}

const getUID =() => {
  return uid.value
}

const getUserNom =() => {
  return userNom.value
}

const getUserImage = () => {
  return userImage.value
}

const getUserPrenom = () => {
  return  userPrenom.value
}


export default { isUserConnected, register, login, getUID, getUserNom, getUserImage, getUserPrenom, updateData }