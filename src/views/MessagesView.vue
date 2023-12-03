<template>
  <div class="bg-accent-content h-full flex flex-col justify-between">
    <MessageHeader />

    <div class="h-64">
      <div v-for="(message, index) in messagesList" :key="index" class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component"
              :src="$userStore.getProfilePic()" />
          </div>
        </div>
        <div class="chat-header">
          {{ $userStore.getUserName() }}
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div class="chat-bubble">You were the Chosen One!</div>
      </div>
    </div>
    
    <MessageBottom @send="(message) => sendMessage(message)" />
  </div>
</template>

<script>

import MessageBottom from '../components/MessageBottom.vue';
import MessageHeader from '../components/MessageHeader.vue';
export default {
  data() {
    return {
      messagesList: []
    }
  },
  components: {
    MessageHeader, MessageBottom
  },
  mounted() {
  },
  methods: {
    sendMessage(message) {
      this.messagesList.push(message)
    }
  },
};
</script>

<style scoped></style>