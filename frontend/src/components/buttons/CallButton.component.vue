<template>
  <div id="call-us-button-component">
    <button class="">
      <img src="@/assets/flaticons/phone-white.png">
      Jetzt Anrufen
    </button>
  </div>
</template>
<script>
export default {
  name: "CallButtonComponent",
}
</script>

<style scoped>
button{
  white-space: nowrap;

  background: var(--primary-color);
  color: var(--white-color);
}
</style>