<template>
  <div>
    <h1 class="text-center py-4 text-2xl font-bold">Vos conversations:</h1>

    <ChatPreview link="/messages"
      img="https://static.vecteezy.com/system/resources/previews/013/441/267/original/chat-bubble-icon-png.png"
      title="Général" description="Tout le monde participe" />

      <ChatPreview v-for="group in groups" :link="'/group/'+group.id"
      :img="group.data.image"
      :title="group.data.titre" :description="group.data.description" 
      class="py-2"/>

    <div @click="displayNewChat = true" class="flex justify-center mt-2">
      <NewChat @newGroup="updateGroups()" />
    </div>

  </div>
</template>

<script>
import ChatPreview from "../components/ChatPreview.vue"
import NewChat from "../components/NewChat.vue"
import { getGroup } from '../queries/groupQueries.js'
export default {
  data() {
    return {
      groups: []
    }
  },
  components: {
    ChatPreview, NewChat
  },
  async mounted() {
    await this.updateGroups()
  },
  methods: {
    async updateGroups() {
      await getGroup().then((result) => {
      this.groups = result
    })
    }
  },
};
</script>

<style scoped></style>