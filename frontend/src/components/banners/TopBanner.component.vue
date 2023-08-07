<template>
  <div id="top-banner-component" v-if="!show">

    <div class="block">
      <img src="@/assets/flaticons/location.png" alt="">
      <p class="tooltip down">Harkortstraße 75, 44225 Dortmund
        <span class="tooltiptext">Google Maps</span>
      </p>
    </div>

    <div class="block">
      <img src="@/assets/flaticons/email.png" alt="">
      <p class="tooltip down">info@sv-carxperts.de
        <span class="tooltiptext">Mail schreiben</span>
      </p>
    </div>

    <div class="block">
      <img src="@/assets/flaticons/phone.png" alt="">
      <p class="tooltip down" @click="openWhatsappWeb">
        <span class="tooltiptext">Whatsapp öffnen</span>
        0162 202 52 50</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "TopBannerComponent",
  computed: {
    show(){
      let mode = this.$store.getters['style/getDeviceMode'];
      return mode.name !== 'lg';
    }
  },
  methods: {
    openWhatsappWeb(){
      this.$store.dispatch('whatsapp/openWhatsappWeb');
    }
  }
}
</script>

<style scoped>
#top-banner-component{
  display: flex;
  justify-content: space-evenly;
  place-items: center;
  height: 50px;
  padding: 5px;
  background-color: var(--light-grey-color);
  color: var(--font-color-dark);
}

img{
  height: 18px;
}

.block{
  display: flex;
  place-items: center;
  gap: 7px;
  font-size: 13px;
}

</style>