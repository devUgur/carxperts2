<template>
  <div id="banner-logo-component">
    <div class="logo-block">
      <img src="@/assets/logos/full-logo.jpeg" alt="">
      <p>Ihr KFZ-Sachverständigenbüro</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "BannerLogoComponent",
}
</script>

<style scoped>
#banner-logo-component{
  display: flex;
  justify-content: center;
  padding: 20px;
}
p{
  font-family: var(--font-family-poppins);
  color: black;
  margin: 0;
}

img{
  max-width: 700px;
  width: 100%;
}
</style>