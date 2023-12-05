<template>
  <div class="h-screen flex flex-col justify-between background">
    <RouterView class="h-[90%] sm:h-[75%]" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <NavBar class="w-full h-[10%] sm:h-[7%]" v-if="$userStore.isUserConnected()" />
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
  background-image: url('./components/MessageBackgroundSVG.svg');
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