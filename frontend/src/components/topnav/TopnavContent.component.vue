<template>
  <div id="topnav-content-component" class="content">
    <div
        v-for="(route, index) in routes"
        :key="route.name"
        class="link"
    >
      <div v-if="!route.routes">
        <router-link
            @click="routeTo(route)"
            :to="route.to"
            class="underline-link"
        >
          {{ route.name }}
        </router-link>
      </div>
      <div
          v-else
          class="dropdown-link"
          @mouseenter="openDropDown(route)"
          @mouseleave="closeDropDown(route)"
      >
        <router-link @click="routeTo(route)" :to="route.to" class="underline-link">
          {{ route.name }}
          <img src="@/assets/flaticons/down.png" alt="" />
        </router-link>
        <TopnavDropdownComponent
            ref="dd-content"
            :route="route">
        </TopnavDropdownComponent>
      </div>
    </div>
  </div>
</template>

<script>
import RoutesArray from '@/objects/Routes.json';
import TopnavDropdownComponent from '@/components/topnav/TopnavDropdown.component.vue'
export default {
  name: 'TopnavContentComponent',
  components: {
    TopnavDropdownComponent
  },
  data(){
    return {
      routes: RoutesArray
    }
  },
  computed: {
    mobileMode() {
      return this.$store.getters['style/getDeviceMode'].name !== 'lg';
    },
    menuIsOpen(){
      return this.$store.getters['menu/isOpen'];
    }
  },
  methods: {
    openDropDown(route) {
      // To select target dropdown and call child component method from parent
      for(let i = 0; i < this.$refs["dd-content"].length; i++){
        let currentDD = this.$refs["dd-content"][i];
        if(route.to === currentDD.getRoute().to){
          currentDD.open(route);
          break;
        }
      }
    },
    closeDropDown(route) {
      route.dropdown = false;
    },
    routeTo(route) {
      this.$store.dispatch('nav/to', route.to);
      /*
      if(!route.to){
        let routeTo = route.name.split(" ").join("-");
        routeTo = routeTo.toString().toLocaleLowerCase();
        this.$store.dispatch('menu/routeTo', 'services/' + routeTo);
      }else{
        this.$store.dispatch('menu/routeTo', route.to);
      }
       */
    },
  },
};
</script>


<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  place-items: center;
  gap: 15px;
}

a {
  font-weight: bold;
  color: #f7fafd;
  text-decoration: none;
  display: flex;
  place-items: center;
  gap: 5px;
  position: relative;
  white-space: nowrap;
}

a.router-link-exact-active {
  color: var(--primary-color);
}
a.underline-link {
  position: relative;
  overflow: hidden;
}

a.underline-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transform: translateX(-50%) scaleX(0);
  transform-origin: 50% 100%;
  transition: transform 0.3s ease-in-out;
}

a.underline-link:hover::before {
  width: 100%;
  transform: translateX(-50%) scaleX(1);
}

p {
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  place-items: center;
  gap: 3px;
  white-space: nowrap;
}

.dropdown-link {
  position: relative;
  height: 80px;
  display: flex;
  place-items: center;
}
</style>