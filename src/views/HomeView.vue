<template>
  <div class="hero overflow-scroll scroll-possible w-full">
  <div class="hero-content flex-col lg:flex-row">
    <img :src="$userStore.getUserImage()" class="max-w-xs rounded-full shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Bienvenue {{ $userStore.getUserPrenom() }} {{ $userStore.getUserNom() }}</h1>
      <p class="py-6 text-lg">Bienvenue sur cette application de chat créée par Mathis THUEL-CHASSAIGNE</p>
      <p class="py- text-sm">Ce site web utilise les technologies VueJS, Firebase et TailwindCSS</p>

    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  components: {

  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped>

</style>