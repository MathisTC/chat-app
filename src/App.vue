<template>
  <div class="h-screen flex flex-col justify-between background">
    <RouterView  :class="$userStore.isUserConnected() ? 'h-[90%] mb-12 md:mb-14' : 'h-[100%]'" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <NavBar class="overflow-hidden fixed w-full h-[9%] bottom-0" v-if="$userStore.isUserConnected()" />
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
    }
}
</script>

<style>
.background {
  scroll-behavior: smooth;
  background-image: url('./components/BackgroundSVG.svg');
  background-repeat: repeat;
}

.scroll-possible {
  overflow-y: auto;
  touch-action: initial;
  overscroll-behavior-y:initial;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.element-sans-scroll {
   overflow: hidden;
   touch-action: none; /* ou touch-action: pan-y; */
   overscroll-behavior-y: contain; /* ou overscroll-behavior-y: none; */
}
</style>