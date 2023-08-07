<template>
  <div id="menu-routes-component">
    <div class="list">
      <div class="list-item" v-for="(route, index) in routes">
        <!-- Normal Route -->
        <div v-if="!route.routes" class="menu-link link" @click="routeTo(route)">
          <router-link to="/">{{route.name}}</router-link>
        </div>
        <!-- Dropdown Route -->
        <div class="menu-link link" v-else>
          <div class="name" @click="openDropdown(route)">
            {{route.name}}
            <img src="@/assets/flaticons/down.png" :class="{'collapsed': route.dropdown}" alt="">
          </div>
        </div>
        <div class="menu-dropdown" v-if="(route.dropdown)">
          <div class="dropdown-link"
               v-for="dRoute in route.routes"
               @click="routeTo(dRoute)"
               ref="drouteLinks"
          >
            {{ dRoute.name }}
          </div>
        </div>
      </div>
      <div class="social-links">
        <!-- <SocialBtnComponent></SocialBtnComponent> -->
      </div>
    </div>
  </div>
</template>

<script>
import {gsap} from "gsap";
import {TimelineLite} from "gsap/all";
//import SocialBtnComponent from "@/components/buttons/SocialBtn.component.vue";

export default {
  name: "MenuRoutesComponent",
  components: {
    //SocialBtnComponent
  },
  computed: {
    routes(){
      return this.$store.getters['menu/routes'];
    },
    menuIsOpen(){
      return this.$store.getters['menu/isOpen'];
    }
  },
  methods: {
    async openDropdown(route){
      if (route.dropdown){
        route.dropdown = !route.dropdown;
      }else{
        this.$store.dispatch('menu/closeAllDropdowns');
        route.dropdown = !route.dropdown;
      }
      // If dropdown is now true, animate the links
      if (route.dropdown) {
        await this.$nextTick(); // Wait for the DOM update before animating
        this.animateDropdownLinks();
      }
    },
    routeTo(route){
      this.$store.dispatch('nav/to', route.to);
    },
    animateDropdownLinks() {
      const links = this.$refs.drouteLinks;
      gsap.set(links, { x: '-50%', opacity: 0 });

      // Create a timeline for the animation
      const timeline = new TimelineLite();

      // Animate each link smoothly from left to right
      timeline.staggerTo(
          links,
          0.5, // Animation duration
          { x: '0%', opacity: 1, ease: 'power2.out' },
          0.03 // Stagger delay between links
      );
    },
  }
}
</script>

<style>
/* Stil, um die Scrollbar für den gesamten body zu deaktivieren, wenn das Menü geöffnet ist */
body.menu-open {
  overflow: hidden;
}
</style>

<style scoped>
.list{
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  padding: 30px;
  scrollbar-width: thin;
  display: flex;
  flex-direction: column;
}
.link{
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;

  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.link:hover, .dropdown-link:hover{
  color: var(--primary-color);
}

.link:hover, .dropdown-link:hover{
  color: var(--primary-color);
  cursor: pointer;
}

.menu-dropdown{
  padding-bottom: 30px;
}

.menu-link{
  color: white;
  font-size: 22px;
  border-top: 1px solid grey;
}

.menu-link:hover a{
  cursor: pointer;
  color: var(--primary-color);;
}

.menu-link .name{
  display: flex;
  justify-content: space-between;
  place-items: center;
}

.dropdown-link{
  text-transform: none;
  font-size: 18px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
}

img{
  transition: 0.3s;
  rotate: 90deg;
}

img.collapsed{
  rotate: 0deg;
}

a{
  text-decoration: none;
  color: white;
}

.social-links{
  display: flex;
  justify-content: right;
  margin-top: 10px;
  height: 100%;
  width: calc(100% - 20px);
}
</style>