<template>
  <div>
    BONJOUR {{ $userStore.getUserPrenom() }} {{ $userStore.getUserNom() }}
  </div>
</template>

<script>

export default {
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

<style scoped>

</style>