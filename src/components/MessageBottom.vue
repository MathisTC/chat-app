<template>
    <form class="flex justify-around mb-2 rounded-md mx-3 items-center" @submit.prevent="sendMessage()">
    <input class="bg-white rounded-l-md p-2 w-full text-black font-semibold" placeholder="Message" v-model="message" />
    <button class="px-5 bg-slate-800 py-2 rounded-r-md mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#0C80DF" d="m2 21l21-9L2 3v7l15 2l-15 2v7Z" />
      </svg>
    </button>
  </form>
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