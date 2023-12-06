<template>
  <div>
    <h1 class="text-center py-4 text-2xl font-bold">Vos conversations:</h1>

    <ChatPreview link="'/messages'" img="src/assets/bubble.ico" title="Général" description="Tout le monde participe" />
    <div class="flex flex-col w-full overflow-y-auto">
      <div @click="$router.push('/messages')" class="flex flex-row py-4 px-2 justify-center items-center border rounded-3xl mx-2 border-newblue">
        <div class="w-1/4">
          <img src="src/assets/bubble.ico" class="h-8 w-8 ml-4" alt="" />
        </div>
        <div class="w-full">
          <div class="text-lg font-semibold text-newwhite">Général</div>
          <span class= "text-newgrey">Tout le monde participe</span>
        </div>
      </div>
    </div>
    
    <br>
    <button class="mx-5 btn w-[90%] btn-outline btn-info">Ajouter un chat (non fonctionnel)</button>


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