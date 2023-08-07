<template>
  <div id="one-service-view">
    <div class="container" v-if="currentService">
      <BackButtonComponent></BackButtonComponent>
      <div class="title" ref="title"> {{ currentService.name }} </div>
      <div class="content" v-if="true">
        <div class="descr">
          <div class="text" ref="descrText">
            {{ currentService.descr }}
          </div>
          <div>
            <button>Zum Online Kontaktformular</button>
            <button>Zum Online Kontaktformular</button>
          </div>
        </div>
        <div
            class="img"
            ref="image"
            v-if="currentService.img"
            :style="{ backgroundImage: 'url(' + require('@/assets/services/' + currentService.img) + ')' }">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ServicesJsonObject from '@/objects/Services.json';
import BackButtonComponent from "@/components/buttons/BackButton.component.vue";
import gsap from "gsap";

export default {
  name: "OneServiceView",
  components: {
    BackButtonComponent
  },
  computed: {
    currentService(){
      const services = ServicesJsonObject;
      for(let i = 0; i < services.length; i++) {
        let service = services[i];
        service.name = service.name.split(" ").join("-");
        if (service.name.toLowerCase() === this.$route.params.service) {
          service.name = service.name.split("-").join(" ");
          return service;
        }
        service.name = service.name.split("-").join(" ");
      }
      return null;
    },
  },
  data(){
    return {

    }
  },
  mounted() {
    this.animateTitle();
    this.animateDescrText();
    this.animateImage();

  },
  methods: {
    animateTitle(){
      // GSAP-Animation, um den Text von links nach rechts zu animieren
      gsap.fromTo(this.$refs.title, {
        opacity: 0,
        x: '-100%' // Startposition (links außerhalb des sichtbaren Bereichs)
      }, {
        opacity: 1,
        x: 0, // Endposition (Anfangsposition des Textes)
        duration: 0.5, // Animationsdauer in Sekunden
        ease: 'power2.out' // Easing-Funktion für die Animation
      });
    },
    animateDescrText(){
      // GSAP-Animation, um den Text von links nach rechts zu animieren
      gsap.fromTo(this.$refs.descrText, {
        opacity: 0,
        y: '-100%' // Startposition (links außerhalb des sichtbaren Bereichs)
      }, {
        delay: 0.3,
        opacity: 1,
        y: 0, // Endposition (Anfangsposition des Textes)
        duration: 0.7, // Animationsdauer in Sekunden
        ease: 'power2.out' // Easing-Funktion für die Animation
      });
    },
    animateImage(){
      // GSAP-Animation, um den Text von links nach rechts zu animieren
      gsap.fromTo(this.$refs.image, {
        opacity: 0,
        x: '100%' // Startposition (links außerhalb des sichtbaren Bereichs)
      }, {
        opacity: 1,
        x: 0, // Endposition (Anfangsposition des Textes)
        duration: 0.5, // Animationsdauer in Sekunden
        ease: 'power2.out', // Easing-Funktion für die Animation,
        delay: 0.5
      });
    }
  },
  watch: {
    'currentService.name': function (newValue, oldValue) {
      if(newValue){
        this.animateTitle();
      }

    },
    'currentService.descr': function (newValue, oldValue) {
      if(newValue){
        this.animateDescrText();
      }
    },
    'currentService.img': function (newValue, oldValue) {
      if(newValue){
        this.animateImage();
      }
    }
  }
}
</script>

<style scoped>
#one-service-view {



}

.container{
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  min-height: calc(100vh - 80px);
  width: calc(100% - 40px);

  overflow: hidden;
}
.title{
  font-size: 44px;
  color: #e31b25;
  overflow: hidden;
}
.content{
  display: flex;
  place-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.descr{
  min-height: 400px;
  flex: 1 1 400px;
  color: var(--font-color-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

button{
  background-color: rgb(28,28,24);
  border-radius: 5px;
}

button:hover{
  background-color: #fa0b18;
}

.descr button{
  margin-top: 15px;

}
.img{
  flex: 1 0 300px;
  height: 400px;
  width: 100%;

  background-position: center center;
  background-size: cover;
}
</style>