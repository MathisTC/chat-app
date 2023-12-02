<template>
  <div >
    <NavBar :key="$userStore.isUserConnected()" v-if="$userStore.isUserConnected()"/>
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import LoginView from './views/LoginView.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    NavBar,
    LoginView
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped></style>