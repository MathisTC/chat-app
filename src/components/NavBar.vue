<template>
<div class="btm-nav-custom">
  <button class="text-info" :class="menuSelected == 1 ? 'active': ''" @click="goTo(1)">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2M20 17.2L18.8 16H4V4H20V17.2Z" /></svg>
    <span class="btm-nav-custom-label">Messages</span>
  </button>
  <button class="text-info" :class="menuSelected == 2 ? 'active': ''" @click="goTo(2)">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    <span class="btm-nav-custom-label">Menu</span>
  </button>
  <button class="text-info" :class="menuSelected == 3 ? 'active': ''" @click="goTo(3)">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>    <span class="btm-nav-custom-label">Paramètres</span>
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
  background-image: url('../components/BottomBarBackgroundSVG.svg');
  background-repeat: no-repeat;
  background-size:contain;

  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 4rem/* 64px */;
  --tw-bg-opacity: 1;
}
.btm-nav-custom > * {
  display: flex;
  height: 100%;
  flex-basis: 100%;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: currentColor;
}
@media (hover: hover) {
  .btm-nav-custom > *.disabled:hover,
    .btm-nav-custom > *[disabled]:hover {
    pointer-events: none;
    --tw-border-opacity: 0;
    --tw-bg-opacity: 0.1;
    --tw-text-opacity: 0.2;
  }
}
@media (hover: hover) {
  .btm-nav-custom > *.disabled:hover,
    .btm-nav-custom > *[disabled]:hover {
    pointer-events: none;
    --tw-border-opacity: 0;
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
}
.btm-nav-custom > *.disabled,
  .btm-nav-custom > *[disabled] {
  pointer-events: none;
  --tw-border-opacity: 0;
  --tw-bg-opacity: 0.1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-text-opacity: 0.2;
}
.btm-nav-custom > *.disabled,
  .btm-nav-custom > *[disabled] {
    background-image: url('../components/BottomBarBackgroundSVG.svg');
  background-repeat: no-repeat;
  background-size:contain;
  pointer-events: none;
  --tw-border-opacity: 0;
  --tw-bg-opacity: 0.1;
  color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
  --tw-text-opacity: 0.2;
}
.btm-nav-custom > * .label {
  font-size: 1rem/* 16px */;
  line-height: 1.5rem/* 24px */;
}
</style>