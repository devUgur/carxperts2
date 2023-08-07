<template>
  <div id="topnav-logo-component">
    <img v-if="isSticky && !mobileMode" src="@/assets/logos/logo-white.png" alt="">
    <img v-if="isSticky && mobileMode" src="@/assets/logos/logo-white-2.png" alt="">
  </div>
</template>
<script>
export default {
  name: "TopnavLogoComponent",
  props: ['isSticky'],
  computed: {
    mobileMode(){
      let mode = this.$store.getters['style/getDeviceMode'];
      return !(mode && mode.name === 'lg');
    },
  }
}
</script>
<style scoped>
#topnav-logo-component{
  display: flex;
}
img{
  max-width: 200px;
}
</style>