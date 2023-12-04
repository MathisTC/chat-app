<template>
  <div class="h-screen flex flex-col justify-between">
    <RouterView />
    <NavBar class="fixed bottom-0 w-full" v-if="$userStore.isUserConnected()"/>
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