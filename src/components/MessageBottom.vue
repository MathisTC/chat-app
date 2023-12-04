<template>
  <div class="flex justify-around bg-gray-400 mb-2 rounded-md mx-3 items-center">
    <input class="bg-white rounded-md p-2 w-full text-black font-semibold" placeholder="Message" v-model="message" />
    <button class="px-5" @click="sendMessage()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="white" d="m2 21l21-9L2 3v7l15 2l-15 2v7Z" />
      </svg>
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: ''
    }
  },
  components: {

  },
  mounted() {
  },
  methods: {
    sendMessage() {
      if (this.message != '') {
        this.$emit('send', this.message)
        this.message = ''
      }
    }
  },
};
</script>

<style scoped></style>