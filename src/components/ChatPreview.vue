<template>
  <div class="flex flex-col w-full overflow-y-auto">
    <div @click="$router.push(link)"
      class="flex flex-row py-4 px-2 justify-center items-center border rounded-3xl mx-2 border-newblue">
      <div class="w-1/4">
        <img :src="img" class="h-8 w-8 ml-4" alt="" />
      </div>
      <div class="w-full">
        <div class="text-lg font-semibold text-newwhite">{{ title }}</div>
        <span class="text-newgrey">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['link', 'img', 'title', 'description'],
  data() {
    return {
    }
  },
  components: {

  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped></style>