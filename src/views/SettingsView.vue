<template>
  <button @click="test">aaa</button>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    test() {
      this.$userStore.updateData()
    }
  },
}
</script>

<style scoped></style>