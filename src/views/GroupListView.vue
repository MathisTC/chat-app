<template>
  <div>
    <h1 class="text-center py-4 text-2xl font-bold">Vos conversations:</h1>

    <ChatPreview link="/messages"
      img="https://static.vecteezy.com/system/resources/previews/013/441/267/original/chat-bubble-icon-png.png"
      title="Général" description="Tout le monde participe" />


    <div @click="displayNewChat = true" class="flex justify-center mt-2">
      <NewChat />
    </div>

  </div>
</template>

<script>
import ChatPreview from "../components/ChatPreview.vue"
import NewChat from "../components/NewChat.vue"
export default {
  data() {
    return {
    }
  },
  components: {
    ChatPreview, NewChat
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped></style>