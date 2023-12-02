import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { auth } from '../firebaseConfig.js'

const isUserConnected = () => {
  const user = localStorage.getItem('user')
  if (user === '' || user == null || user === undefined) {
    return false
  } else {
    return true
  }
}

const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password).then((response)=> {
    console.log()
    localStorage.setItem("user", email)
  })
}

const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then((response)=> {
      localStorage.setItem("user", email)
    })
}

export default { isUserConnected, register, login }