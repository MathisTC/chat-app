<template>
  <div>
    <h1 class="text-red-700 text-2xl text-center my-10"> About </h1>

    <div class="bg-blue-100 border rounded-lg flex gap-10 justify-center p-16">
      <p>input1:</p>
      <input class="bg-blue-200 border border-black" v-model="text1" />
      <p>input2:</p>
      <input class="bg-blue-200 border border-black mx-10" v-model="text2" />      
    </div>

    <ComposantReutilisable :textRed="text1" :textBlue="text2" />

    <ComposantReutilisable :textRed="text2" :textBlue="text1" />

  </div>
</template>

<script>
import ComposantReutilisable from '../components/ComposantReutilisable.vue'
export default {
  data() {
    return {
      text1: '',
      text2: ''
    }
  },
  components: { ComposantReutilisable }
}
</script>
<style>

</style>
