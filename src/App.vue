<template>
  <div>
    <NavBar/>
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    NavBar
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped></style>