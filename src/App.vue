<template>
  <div class="h-screen flex flex-col justify-between background overflow-hidden">
    <RouterView class="h-[90%] overflow-hidden mb-12 md:mb-14" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <NavBar class="fixed w-full h-[9%] bottom-0" v-if="$userStore.isUserConnected()" />
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
  },
  mounted() {
    document.fullscreenEnabled
    }
}
</script>

<style scoped>
.background {
  scroll-behavior: smooth;
  background-image: url('./components/BackgroundSVG.svg');
  background-repeat: repeat;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>