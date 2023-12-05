import { ref } from 'vue';

const popUp = ref(false)

const setPopUp = (value) => {
  popUp.value = value
}

const getPopUp =() => {
  return popUp.value
}


export default { setPopUp, getPopUp }