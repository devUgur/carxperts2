<template>
  <div id="footer-component">
    <div class="red-filter"></div>
    <div class="content left">
      <FooterContentComponent></FooterContentComponent>
    </div>
    <div class="content right" @click="openGoogleMapsTab()">
      <LeafletComponent></LeafletComponent>
      <div class="btn" @mouseenter="bounceLocationIcon">
        <img src="@/assets/flaticons/placeholder.png" alt="" ref="locationIcon">
        <div>
          <div class="text">
            Hier finden Sie uns
          </div>
          <div class="descr">
            <div>Google Maps Aufrufen</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="banner">

  </div>
</template>

<script>
import FooterContentComponent from "@/components/footer/FooterContent.component.vue";
import LeafletComponent from "@/components/leaflet/leaflet.component.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  name: "FooterComponent",
  components: {
    FooterContentComponent,
    LeafletComponent
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin from gsap
    // Hier setzen wir den Scroll Trigger
    ScrollTrigger.create({
      trigger: ".banner",

      onEnter: () => {
        console.log("passiert nicht")
        this.bounceLocationIcon(); // Wir rufen die bounceLocationIcon()-Funktion auf, wenn der Trigger ausgelöst wird
      }
    });
  },
  methods: {
    openGoogleMapsTab(){
      window.open("https://www.google.de/maps/place/CarXperts+-+Ihr+KFZ-Sachverst%C3%A4ndigenb%C3%BCro/@51.4756356,7.4341449,17z/data=!3m1!4b1!4m6!3m5!1s0x47b919466e1d02e1:0x335c41fde3d8f03!8m2!3d51.4756323!4d7.4367198!16s%2Fg%2F11tf21rlqn?entry=ttu", "_blank");
    },
    bounceLocationIcon() {
      // GSAP-Animation, um den locationIcon als bouncing zu animieren
      gsap.fromTo(
          this.$refs.locationIcon,
          { y: 0 }, // Startposition (y-Koordinate)
          {
            y: -20, // Endposition (y-Koordinate, wie hoch soll der Icon bounce sein)
            duration: 0.4, // Animationsdauer in Sekunden
            yoyo: true, // Bouncing zurück zum Ausgangspunkt
            repeat: 1, // Wie oft die Animation wiederholt wird (hier 1x Bounce hoch und runter)
            ease: "power1.out" // Easing-Funktion für eine weichere Animation
          }
      );
    }
  }
}
</script>

<style scoped>
#footer-component{
  position: relative;
  min-height: 600px;
  background-color: #4f5050;
  display: flex;
  justify-content: space-between;
  background-image: url("@/assets/stock/footer-bg.jpg");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  flex-wrap: wrap-reverse;
  z-index: 10;
}

.content.left{
  flex: 1 1 400px;
  min-height: 700px;
}
.content.right{
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%);
  width: 100%;
  flex: 1 1 300px;
  min-height: 400px;
}
.content.right .btn{
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background-color: rgba(31, 26, 26, 0.18);
  z-index: 1000;
  color: white;

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  text-align: right;
  padding: 20%;
  transition: 0.4s;
  gap: 20px;
}

.content.right .btn:hover{
  background-color: rgba(31, 26, 26, 0.78);
  cursor: pointer;
}

.content.right .btn:hover .text{
  color: #f3242f;
}

.btn .text{
  font-size: 32px;
  transition: 0.4s;
}

.red-filter{
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background-color: rgba(31, 26, 26, 0.78);
  display: flex;
}

.banner{
  height: 50px;
  width: 100%;
  background-color: rgb(28, 28, 24);
}



@media (max-width: 768px) {
  .content.right{
    -webkit-clip-path: none;
    clip-path: none;
  }
}

</style>