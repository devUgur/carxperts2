<template>
  <div class="container">
    <ServicesCardListComponent></ServicesCardListComponent>
  </div>
</template>

<script>
import ServicesCardListComponent from "@/components/services/ServicesCardList.component.vue";
export default {
  name: "ServiceView",
  components: {
    ServicesCardListComponent
  }
}
</script>

<style scoped>

</style>