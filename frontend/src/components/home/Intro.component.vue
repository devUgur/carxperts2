<template>
  <div id="intro-view">
    <vueper-slides
        fixed-height="90vh"
        autoplay
        :pause-on-hover="pauseOnHover"
        :arrows="!isMobile"
        lazy-load-on-drag
        :dragging-distance="70"
        :pause-on-touch="false"
        :duration="10000"
        fade
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="getImage(slide.image)">
        <template v-slot:content>
          <IntroContentComponent :slide="slide"></IntroContentComponent>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>

import SlideButtonComponent from "@/components/buttons/SlideButton.component.vue";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import IntroSlides from '@/objects/IntroSlides.json';
import IntroContentComponent from "@/components/home/IntroContent.component.vue";

export default {
  name: "IntroComponent",
  components: {
    VueperSlides,
    VueperSlide,
    SlideButtonComponent,
    IntroContentComponent
  },
  computed: {
    isMobile(){
      return this.$store.getters['style/getDeviceMode'].name !== 'lg'
    }
  },
  data(){
    return {
      autoPlaying: true,
      pauseOnHover: false,
      arrows: false,
      touchable: true,
      slides: IntroSlides
    }
  },
  methods: {
    getImage(src){
      return require("@/assets/intro/" + src);
    }
  },
  watch: {

  }
}
</script>

<style scoped>
#intro-view{
  position: relative;
}

</style>
