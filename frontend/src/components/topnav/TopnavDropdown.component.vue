<template>
  <div
      id="topnav-dropdown-component"
      class="dropdown-content blur"
      v-if="(route.dropdown && !menuIsOpen)"
  >
    <div
        class="droute-link"
        v-for="dRoute in route.routes"
        :key="dRoute.name"
        @click="routeTo(dRoute); route.dropdown = false"
        ref="drouteLinks"
    >
      {{ dRoute.name }}
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { TimelineLite } from 'gsap/all';

export default {
  name: 'TopnavDropdownComponent',
  props: ['route'],
  methods: {
    routeTo(route) {
      this.$store.dispatch('nav/to', route.to);
    },
    async open(route) {
      route.dropdown = true;
      await this.$nextTick(); // Wait for the DOM update before animating
      this.animateDropdown();
    },
    animateDropdown() {
      const links = this.$refs.drouteLinks;
      gsap.set(links, { x: '-100%', opacity: 0 });

      // Create a timeline for the animation
      const timeline = new TimelineLite();

      // Animate each link smoothly from left to right
      timeline.staggerTo(
          links,
          0.5, // Animation duration
          { x: '0%', opacity: 1, ease: 'power2.out' },
          0.08 // Stagger delay between links
      );
    },
    getRoute(){
      return this.route;
    },
  },
  computed: {
    menuIsOpen() {
      return this.$store.getters['menu/isOpen'];
    },
  },
};
</script>

<style scoped>
.dropdown-content {
  position: absolute;
  top: 80px;
  color: white;
  padding: 20px;
  overflow: hidden;
}

.droute-link {
  transition: padding-left 0.4s;
  padding: 7px 0;
  border-bottom: 1px solid grey;
  white-space: nowrap;
}

.droute-link:hover {
  padding-left: 10px;
  width: calc(100% - 10px);
  cursor: pointer;
  color: #fc131f;
}
</style>