import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { getUserdata} from "../queries/userQueries.js"
import { auth } from '../firebaseConfig.js'
import { ref } from 'vue';

const uid = ref('')
const userConnected = ref(false);
const userName = ref('')
const profilePic = ref('')

const isUserConnected = () => {
  return userConnected.value
}

const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password).then((userCredential)=> {
    userConnected.value = true
    uid.value = userCredential.user.uid
    userName.value = 'mathis'
    profilePic.value = "https://www.wwf.fr/sites/default/files/styles/page_cover_large_16_9/public/2017-05/279168-min.jpg?h=818ea07f&itok=vF2ILljB"
  })
}

const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential)=> {
      userConnected.value = true
      uid.value = userCredential.user.uid
      userName.value = 'mathis'
      profilePic.value = "https://www.wwf.fr/sites/default/files/styles/page_cover_large_16_9/public/2017-05/279168-min.jpg?h=818ea07f&itok=vF2ILljB"
    })
}

const updateData = async () => {
  await getUserdata(uid.value).then(() => {
    console.log('test')
  })
}

const getUID =() => {
  return uid.value
}

const getUserName =() => {
  return userName.value
}

const getProfilePic = () => {
  return profilePic.value
}


export default { isUserConnected, register, login, getUID, getUserName, getProfilePic, updateData }