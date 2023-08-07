<template>
  <div id="leaflet" ref="map">
    <div id="map"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet"
export default {
  name: "LeafletComponent",
  mounted() {
    this.setupLeafletMap();

    // disable leaflet banner
    let leafletBanner = document.querySelector('.leaflet-control-attribution');
    if(leafletBanner){
      leafletBanner.style.display = 'none'
    }
    let leafletBanner2 = document.querySelector('.leaflet-top.leaflet-left');
    if(leafletBanner2){
      leafletBanner2.style.zIndex = 400;
    }
  },
  data(){
    return {
      center: [51.4756323, 7.4367198],
      token: "<pk.eyJ1IjoidWd1cjQ0ZG8iLCJhIjoiY2w0eTE4Z2Q5MW5qNDNlcGhqdGIzYWw1YSJ9.hPlCpu8a0ByrESRZMSjJzA>",
      map: null,
      zooming: false,
    }
  },
  computed: {
    scrollTop(){
      return this.$store.getters['style/getScrollTop'];
    }
  },
  watch: {
    /*
    scrollTop(newVal, oldVal){
      if(oldVal < newVal ){
        // scrolling from up to down
        if(newVal > this.$refs.map.offsetTop - 600){
          this.zoomToAdress();
        }
      }else{
        //scrolling from down to top
        if(newVal < this.$refs.map.offsetTop - 600){
          this.zoomOutAdress();
        }
      }
    }
     */
  },
  methods: {
    setupLeafletMap: function () {

      this.map = L.map('map', {
        scrollWheelZoom: false,
      }).setView(this.center, 12);

      this.map.dragging.disable();

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(this.map);

      //this.zoomToAdress();

    },
    zoomToAdress: function () {

      if(!this.zooming){
        console.log("wird ausgeführt");
        this.zooming = true;
        setTimeout( () => {
          this.zooming = false;
        }, 3000);

        this.map.setView(this.center, 14);
        this.map.flyTo(this.center, 16, {
          animate: true,
          duration: 3,
        });
      }



    },
    zoomOutAdress: function () {
      if(!this.zooming){
        this.zooming = true;
        setTimeout( () => {
          this.zooming = false;
        }, 3000);

        this.map.flyTo(this.center, 14, {
          animate: true,
          duration: 3,
        });
      }
    },
  }
}
</script>

<style scoped>
#leaflet{

  width: 100%;
  overflow: hidden;
}
#map {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.leaflet-container {
  background-color:rgba(255,0,0,0.0);
}

</style>

<style>

.leaflet-bar a{
  color: var(--light-color) !important;
  background-color: var(--dark-green-bg) !important;
}
</style>