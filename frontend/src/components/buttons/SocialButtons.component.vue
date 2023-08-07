<template>
  <div id="social-buttons-component">
    <div class="btn">
      <img src="@/assets/flaticons/instagram-white.png" alt="">
    </div>
    <div class="btn">
      <img src="@/assets/flaticons/whatsapp-white.png" alt="">
    </div>
    <div class="btn">
      <img src="@/assets/flaticons/youtube-white.png" alt="">
    </div>
    <div class="btn">
      <img src="@/assets/flaticons/email-white.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialButtonsComponent",
}
</script>

<style scoped>
#social-buttons-component{
  display: flex;
  gap: 10px;
}
.btn{
  background: var(--primary-dark-color);
  display: flex;
}
.btn:hover{
  background: var(--primary-color);
  cursor: pointer;
  transition: background var(--sm-delay);
}
img{
  padding: 5px;
  height: 28px;
}


</style>