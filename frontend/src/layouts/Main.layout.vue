<template>
  <div id="main-layout">
    <TopBannerComponent></TopBannerComponent>
    <BannerLogoComponent></BannerLogoComponent>
    <div id="collapsed-view"></div>
    <div class="sticky">
      <TopnavComponent></TopnavComponent>
    </div>
    <div id="view">
      <router-view></router-view>
    </div>
    <div id="footer">
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>

import TopBannerComponent from "@/components/banners/TopBanner.component.vue";
import BannerLogoComponent from "@/components/logos/BannerLogo.component.vue";
import TopnavComponent from "@/components/topnav/Topnav.component.vue";
import FooterComponent from "@/components/footer/footer.component.vue";
export default {
  name: "MainLayout",
  components: {
    TopBannerComponent,
    BannerLogoComponent,
    TopnavComponent,
    FooterComponent
  }
}
</script>

<style scoped>
#main-layout{
  display: flex;
  flex-direction: column;
}
#view{
  display: flex;
  flex-direction: column;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>