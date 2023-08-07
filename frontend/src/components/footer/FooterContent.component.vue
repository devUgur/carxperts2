<template>
  <div id="footer-content-component">
    <div class="content">
      <div class="title">CarXperts</div>
      <div class="body">
        <div>
          <div class="item">
            <div class="name">Telefon:</div>
            <div class="value">0162 202 52 50</div>
          </div>
          <div class="item">
            <div class="name">E-mail:</div>
            <div class="value">info@sv-carxperts.de</div>
          </div>
        </div>
        <div>
          <div class="value">Harkortstraße 75,</div>
          <div class="value">44225 Dortmund</div>
        </div>

        <div>
          <div class=""><router-link to="">Impressum</router-link></div>
          <div class=""><router-link to="">Datenschutz</router-link></div>
        </div>
      </div>
      <div class="footer">
        <SocialBtnComponent></SocialBtnComponent>
      </div>
    </div>
  </div>
</template>

<script>
import SocialBtnComponent from "@/components/buttons/SocialButtons.component.vue";
export default {
  name: "FooterContentComponent",
  components: {
    SocialBtnComponent
  }
}
</script>

<style scoped>
#footer-content-component{
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;

}

.content{
  z-index: 10;
  color: white;
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
}

.content .title{
  font-size: 22px;
}
.content .body{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.item{
  display: flex;
  gap: 10px;
}

.value{
  color: #b60e17;
}
</style>