<template>
<div  class="btm-nav-custom fixed bottom-0">
  <button class="text-info" :class="menuSelected == 1 ? 'active': ''" @click="goTo(1)">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2M20 17.2L18.8 16H4V4H20V17.2Z" /></svg>
    <span class="btm-nav-custom-label">Messages</span>
  </button>
  <button class="text-info" :class="menuSelected == 2 ? 'active': ''" @click="goTo(2)">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    <span class="btm-nav-custom-label">Menu</span>
  </button>
  <button class="text-info" :class="menuSelected == 3 ? 'active': ''" @click="goTo(3)">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    <span class="btm-nav-custom-label">Paramètres</span>
  </button>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuSelected: 2
    }
  },
  methods: {
    goTo(id){
      this.menuSelected = id;
      switch(id) {
        case 1:
          this.$router.push('/messages')
          break
        case 2:
          this.$router.push('/')
          break
        case 3: 
          this.$router.push('/settings')
          break
        default:
          console.log("error")
          break
      }
    }
  }
}
</script>

<style scoped>
.btm-nav-custom {
  padding-top: 4px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom);
  height: 4rem/* 64px */;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
  color: currentColor;
}
.btm-nav-custom > * {
  display: flex;
  height: 100%;
  flex-basis: 100%;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem/* 4px */;
  border-color: currentColor;
}
@media (hover: hover) {
  .btm-nav-custom > *.disabled:hover,
    .btm-nav-custom > *[disabled]:hover {
    pointer-events: none;
    --tw-border-opacity: 0;
    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
    --tw-bg-opacity: 0.1;
    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
    --tw-text-opacity: 0.2;
  }
}
@media (hover: hover) {
  .btm-nav-custom > *.disabled:hover,
    .btm-nav-custom > *[disabled]:hover {
    pointer-events: none;
    --tw-border-opacity: 0;
    background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
    --tw-bg-opacity: 0.1;
    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
    --tw-text-opacity: 0.2;
  }
}
.btm-nav-custom > *:not(.active) {
  padding-top: 0.125rem/* 2px */;
}
.btm-nav-custom > *:where(.active) {
  border-top-width: 2px;
  --tw-bg-opacity: 1;
  background-color: var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));
}
.btm-nav-custom > *.disabled,
  .btm-nav-custom > *[disabled] {
  pointer-events: none;
  --tw-border-opacity: 0;
  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
  --tw-bg-opacity: 0.1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-text-opacity: 0.2;
}
.btm-nav-custom > *.disabled,
  .btm-nav-custom > *[disabled] {
  pointer-events: none;
  --tw-border-opacity: 0;
  background-color: var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));
  --tw-bg-opacity: 0.1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-text-opacity: 0.2;
}
.btm-nav-custom > * .label {
  font-size: 1rem/* 16px */;
  line-height: 1.5rem/* 24px */;
}</style>