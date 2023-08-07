<template>
  <div id="topnav-component" ref="stickyElement">
    <nav :class="{'sticky': isSticky }">
      <div class="side-content left">
        <TopnavLogoComponent :isSticky="isSticky"></TopnavLogoComponent>
        <CallButtonComponent v-show="(mobileMode && !isSticky)"></CallButtonComponent>
      </div>
      <div class="content" v-if="!mobileMode">
        <TopnavContentComponent></TopnavContentComponent>
      </div>
      <div class="side-content right">
        <MenuButtonComponent v-show="mobileMode"></MenuButtonComponent>
        <SocialButtonsComponent v-show="!mobileMode && isSticky"></SocialButtonsComponent>
      </div>
    </nav>
    <div class="menu">
      <!-- {{ currentTopValue }}, {{ windowY }} -->
      <MenuComponent :show="menuIsOpen"></MenuComponent>
    </div>
  </div>
</template>

<script>

import TopnavLogoComponent from "@/components/topnav/TopnavLogo.component.vue";
import CallButtonComponent from "@/components/buttons/CallButton.component.vue";
import TopnavContentComponent from "@/components/topnav/TopnavContent.component.vue";
import MenuButtonComponent from "@/components/buttons/MenuButton.component.vue";
import MenuComponent from "@/components/menu/Menu.component.vue";
import SocialButtonsComponent from "@/components/buttons/SocialButtons.component.vue";
/*
import TopnavMenuBtnComponent from "@/components/menu/MenuBtn.component.vue";
import SocialBtnComponent from "@/components/buttons/SocialBtn.component.vue";
*/

export default {
  name: "TopnavComponent",
  components: {
    TopnavLogoComponent,
    CallButtonComponent,
    TopnavContentComponent,
    MenuButtonComponent,
    MenuComponent,
    SocialButtonsComponent
  },
  data(){
    return{

    }
  },
  computed: {
    isSticky(){
      return this.$store.getters['topnav/isSticky'];
    },
    deviceMode(){
      return this.$store.getters['style/getDeviceMode'];
    },
    mobileMode(){
      return !(this.deviceMode && this.deviceMode.name === 'lg');
    },
    menuIsOpen(){
      return this.$store.getters['menu/open'];
    },

  },
  mounted() {
    // Scroll-Event-Listener hinzufügen
    this.scrollListener = () => this.$store.dispatch('topnav/handleScroll', this.$refs.stickyElement);
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    // Scroll-Event-Listener entfernen, um Speicherlecks zu vermeiden
    window.removeEventListener('scroll', this.scrollListener);
  },
  methods: {

  },
}
</script>

<style scoped>
#topnav-component{
  background-color: rgb(28, 28, 24);
  z-index: 1000;
}
nav {
  height: 80px;
  display: flex;
  place-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  padding: 0 20px;
  gap: 10px;
}
.content{
  width: 100%;
}

.side-content{
  display: flex;
  place-items: center;
  height: 100%;
  width: calc(100% - 120px) !important;
}

.side-content.left{}
.side-content.right{
  justify-content: right;
}

.menu{
  position: relative;
  color: white;
}

</style>