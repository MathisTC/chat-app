<template>
  <div class="py-2 px-3 bg-slate-900 flex flex-row justify-between items-center message-header">
    <div class="ml-4 cursor-pointer" @click="$router.push('/group-list')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path opacity=".55" fill="white"
            d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z">
          </path>
        </svg>
      </div>
    <div class="flex items-center justify-center gap-4">
      <div class="ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="white" fill-opacity=".6"
            d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z">
          </path>
        </svg>
      </div>
      <div>
      <img class="w-10 h-10 rounded-full" :src="$userStore.getUserImage()" />
    </div>
    </div>

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
.message-header {
  background-image: url('../components/MessageHeaderBackgroundSVG.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
