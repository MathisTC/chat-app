<template>
  <div class="justify-between flex flex-col">
    <MessageHeader class="fixed w-full h-[8%]" />
    <div class="scroll-possible overflow-y-scroll h-[85%] top-12 md:mt-2 md:mb-14 mt-20" ref="messageList">
      <div v-for="(message, index) in messagesList" :key="index" class="chat px-2"
        :class="$userStore.getUID() == message.userId ? 'chat-end' : 'chat-start'">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" :src="message.userImage" />
          </div>
        </div>
        <div class="chat-header">
          {{ message.userPrenom }} {{ message.userNom }}
          <time class="text-xs opacity-50">{{ message.date }}</time>
        </div>
        <div class="chat-bubble">{{ message.texte }}</div>
      </div>
    </div>

    <MessageBottom class="fixed bottom-16 w-full" @send="(message) => sendMessage(message)" />
  </div>
</template>

<script>
import { db } from '../firebaseConfig';
import { doc, setDoc, onSnapshot, collection } from 'firebase/firestore'

import { getMessages, sendNewMessage } from '../queries/messageQueries.js'
import MessageBottom from '../components/MessageBottom.vue';
import MessageHeader from '../components/MessageHeader.vue';
export default {
  data() {
    return {
      unsubscribe: null,
      subscribePopUp: null,
      messagesList: []
    }
  },
  components: {
    MessageHeader, MessageBottom
  },
  async mounted() {
    this.getMessagesFromDatabase()
    this.unsubscribe = onSnapshot(collection(db, 'message'), (snap) => {
      if(snap.docChanges()[0].type == 'added') {
        this.getMessagesFromDatabase()
      }
    })
  },
  async unmounted() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  },
  methods: {
    async sendMessage(message) {
      await sendNewMessage(this.$userStore.getUID(), this.$userStore.getUserPrenom(), this.$userStore.getUserNom(), this.$userStore.getUserImage(), message).then(() => {
        this.getMessagesFromDatabase()
      })
    },

    async getMessagesFromDatabase() {
      await getMessages().then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.messagesList[i] = data[i]
        }
        this.scrollMessageListToBottom();
      })
    },
    scrollMessageListToBottom() {
      const messageList = this.$refs.messageList;
      messageList.scrollTop = messageList.scrollHeight;
    }
  },
};
</script>

<style scoped>
.scroll-possible {
  overflow-y: auto;
  touch-action: initial;
  overscroll-behavior-y:initial;
}
</style>