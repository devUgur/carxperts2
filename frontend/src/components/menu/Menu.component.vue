<template>
  <transition
      @enter="enter"
      @leave="leave"
      v-bind:css="false"
      appear
  >
    <div id="menu-component" v-if="show" :class="{'blur': show}">
      <div class="body" :class="{'full-mode': fullmode}">
        <MenuRoutesComponent></MenuRoutesComponent>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from "gsap";
import { TimelineMax, Power4, TweenMax } from "gsap";

import MenuRoutesComponent from "@/components/menu/MenuRoutes.component.vue";
export default {
  name: "FullPageMenu",
  props: ['show'],
  components: {
    MenuRoutesComponent,
  },
  data(){
    return {

    }
  },
  computed: {
    routes(){
      return this.$store.getters['menu/routes'];
    },
    fullmode(){
      let fullm =  this.menuIsOpen && this.topnavIsSticky;
      if(fullm){
        document.body.classList.add("menu-open");
      }else{
        document.body.classList.remove("menu-open");
      }
      return fullm;
    },
    topnavIsSticky(){
      return this.$store.getters['topnav/isSticky'];
    },
    menuIsOpen(){
      return this.$store.getters['menu/open'];
    }
  },
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      })

      tl.set(el, {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50%'
      })

      tl.to(el, 1, {
        autoAlpha: 1,
        rotationX: 0,
        ease: Power4.easeOut
      })
    },
    leave(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      })

      tl.set(el, {
        autoAlpha: 0,
        rotationX: 180,
        transformOrigin: '0% 0%'
      })

      tl.to(el, 1, {
        autoAlpha: 0,
        rotationX: 0,
        ease: Power4.easeOut
      })
      /*
      TweenMax.to(el, 1, {
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done
      });

       */
    },

    enterMenu(el, done) {
      console.log(el.dataset.index)
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }
  },

}
</script>

<style scoped>
#menu-component{
  position: absolute;
  left: 0; top: 0;
  height: calc(100vh - 80px);
  width: calc(100%);
  z-index: 900;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.body{
  overflow-y: auto;
  height: 100%;
  scrollbar-width: thin;
  padding-bottom: 100px;
}
</style>