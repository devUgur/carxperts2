<template>
  <router-view/>
</template>

<script>
export default {
  methods: {
    handleResize(){
      this.$store.dispatch('style/handleResize')
    },
    handleViewScroll(){
      this.$store.dispatch('style/handleScroll',  window.pageYOffset)
    }
  },
  mounted() {
    this.$store.dispatch('style/init');
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleViewScroll);
  }
}
</script>

<style>
@import url('./styles/fonts.style.css');
@import url('./styles/colors.style.css');
@import url('./styles/transitions.style.css');
@import url('./styles/main.style.css');

</style>
