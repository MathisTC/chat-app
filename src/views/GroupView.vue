<template>
  <div class="justify-between flex flex-col element-sans-scroll">
    <div class="w-full h-[8%] relative">
      <MessageHeader @openGroupParameters="openGroupParameters()" />
    </div>

    <dialog ref="my_modal_" id="my_modal_" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box bg-[#021137d9]">
        <h2 class="font-bold text-lg text-center">Gérer les membres du groupe</h2>

        <div class="mb-4 flex flex-col mt-3">
          <label for="membres" class="block mb-2 text-sm pb-1 font-medium text-white">Membres (indiquez les emails)</label>
          <textarea id="membres" class="textarea textarea-info" placeholder="Séparer les membres avec un retour à la ligne" v-model="membres"></textarea>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button class="btn mt-5 btn-outline btn-error btn-sm btn-block">Annuler</button>
          <button class="btn mt-5 btn-outline btn-success btn-sm btn-block" @click="addMembers">Valider</button>
        </form>
      </div>
    </dialog>

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
import { setMembers, getMembers } from '../queries/groupQueries.js'

import { getGroupMessages, sendNewGroupMessage, getGroupMessage } from '../queries/messageQueries.js'
import MessageBottom from '../components/MessageBottom.vue';
import MessageHeader from '../components/MessageHeader.vue';
export default {
  data() {
    return {
      membres: [],
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
    this.unsubscribe = onSnapshot(collection(db, '/group/'+this.$route.params.id+'/messages'), (snap) => {
      if (snap.docChanges()[0].type == 'added' && this.loaded && snap.docChanges().length == 1) {
        getGroupMessage(this.$route.params.id, snap.docChanges()[0].doc.id).then((r) => {
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
    openGroupParameters() {
      this.$refs.my_modal_.showModal()
    },

    addMembers() {
      this.membres = this.membres.split("\n")
      console.log('this.membres: ', this.membres);
    },
    

    async sendMessage(message) {
      await sendNewGroupMessage(this.$userStore.getUID(), this.$userStore.getUserPrenom(), this.$userStore.getUserNom(), this.$userStore.getUserImage(), message, this.$route.params.id).then(() => {
      })
    },

    async getMessagesFromDatabase() {
      await getGroupMessages(this.$route.params.id).then((data) => {
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