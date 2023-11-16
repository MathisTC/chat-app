<template>
  <div>
    <div class="w-full m-10 hover:bg-slate-200">
      <h1 class="text-red-700 text-2xl"> {{ textRed }} </h1>
      <h1 class="text-blue-700 text-2xl"> {{ textBlue }} </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['textBlue', 'textRed']
}
</script>
<style>

</style>
