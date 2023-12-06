<template>
  <div>
    <h1 class="text-center py-4 text-2xl font-bold">Vos conversations:</h1>

    <ChatPreview link="/messages" img="src/assets/bubble.ico" title="Général" description="Tout le monde participe" />

    
    <br>
    <button class="mx-5 btn w-[90%] btn-outline btn-info">Ajouter un chat (non fonctionnel)</button>


  </div>
</template>

<script>
import ChatPreview from "../components/ChatPreview.vue"
export default {
  data() {
    return {
    }
  },
  components: {
    ChatPreview
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped></style>