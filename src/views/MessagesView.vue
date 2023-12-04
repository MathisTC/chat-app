<template>
  <div class="bg-accent-content h-full flex flex-col justify-between">
    <MessageHeader />

    <div class="overflow-y-scroll h-full mb-2">
      <div v-for="(message, index) in messagesList" :key="index" class="chat" :class="$userStore.getUID() == message.userId ?  'chat-end' : 'chat-start'">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component"
              :src="message.userImage" />
          </div>
        </div>
        <div class="chat-header">
          {{ message.userPrenom  }} {{ message.userNom }}
          <time class="text-xs opacity-50">{{ message.date }}</time>
        </div>
        <div class="chat-bubble">{{ message.texte }}</div>
      </div>
    </div>
    
    <MessageBottom @send="(message) => sendMessage(message)" />
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
      messagesList: []
    }
  },
  components: {
    MessageHeader, MessageBottom
  },
  async mounted() {
    onSnapshot(collection(db, 'message'), (snap) => {
      this.getMessagesFromDatabase()
      })
      },
  methods: {
    async sendMessage(message) {
      await sendNewMessage(this.$userStore.getUID(), this.$userStore.getUserPrenom(), this.$userStore.getUserNom(), this.$userStore.getUserImage(), message).then(()=> {
        this.getMessagesFromDatabase()
      })
    },

    async getMessagesFromDatabase() {
      await getMessages().then((data)=> {
      for(let i = 0; i< data.length; i++) {
        this.messagesList[i] = data[i]
      }
    })
    },
  },
};
</script>

<style scoped></style>