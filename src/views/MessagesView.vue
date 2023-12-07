<template>
  <div class="justify-between flex flex-col element-sans-scroll">
    <div class="w-full h-[8%] relative">
      <MessageHeader />
    </div>

    <div class="flex flex-col flex-1 overflow-hidden">
      <div class="scroll-possible overflow-y-auto flex-1" ref="messageList">
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
          <div class="chat-bubble"
            :class="$userStore.getUID() == message.userId ? 'bg-[#0071fb] text-newwhite' : 'text-newwhite'">{{
              message.texte }}</div>
        </div>
      </div>
    </div>
    <div class="mt-2 relative bottom-0 w-full">
      <MessageBottom @send="(message) => sendMessage(message)" />
    </div>
  </div>
</template>

<script>
import { db } from '../firebaseConfig';
import { doc, setDoc, onSnapshot, collection } from 'firebase/firestore'

import { getMessage, getMessages, sendNewMessage } from '../queries/messageQueries.js'
import MessageBottom from '../components/MessageBottom.vue';
import MessageHeader from '../components/MessageHeader.vue';
export default {
  data() {
    return {
      unsubscribe: null,
      subscribePopUp: null,
      messagesList: [],
      loaded: false
    }
  },
  components: {
    MessageHeader, MessageBottom
  },
  async mounted() {
    this.getMessagesFromDatabase()
    this.unsubscribe = onSnapshot(collection(db, 'message'), (snap) => {
      if (snap.docChanges()[0].type == 'added' && this.loaded && snap.docChanges().length == 1) {
        getMessage(snap.docChanges()[0].doc.id).then((r) => {
          this.messagesList.push(r)
          this.scrollMessageListToBottom();
        })
      } else {
        this.scrollMessageListToBottom();
        this.loaded = true
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
      this.$nextTick(() => {
        const messageList = this.$refs.messageList;
        if (messageList) {
          messageList.scrollTop = messageList.scrollHeight;
        }
      });
    }
  },
};
</script>

<style scoped></style>