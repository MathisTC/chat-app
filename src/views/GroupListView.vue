<template>
  <div>
    <h1 class="text-center py-4 text-2xl font-bold">Vos conversations:</h1>

    <ChatPreview link="/messages"
      img="https://static.vecteezy.com/system/resources/previews/013/441/267/original/chat-bubble-icon-png.png"
      title="Général" description="Tout le monde participe" />


    <div class="flex justify-center mt-2">
      <button class="mx-5 btn w-[90%] text-center btn-outline btn-info">Ajouter un chat (non fonctionnel)</button>
    </div>

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