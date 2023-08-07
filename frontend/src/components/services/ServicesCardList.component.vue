<template>
  <div id="services-card-list-component">
    <p class="title">Unsere Leistungen</p>
    <div class="list">
      <ServiceCardComponent
          class="card"
          v-for="(service, index) in servicesList"
          :key="service.name + index"
          :id="service.name + index"
          :service="service"
      ></ServiceCardComponent>
    </div>
  </div>
</template>

<script>
import ServiceCardComponent from "@/components/services/ServiceCard.component.vue";
import ServicesList from "@/objects/Services.json";
import {gsap} from "gsap";
export default {
  name: "ServicesCardListComponent",
  components: {
    ServiceCardComponent
  },
  data(){
    return {
      servicesList:  ServicesList
    }
  },
  methods: {
    async animateCards() {
      // Wait for the next DOM update
      await this.nextTick();
      // Convert the NodeList to an array using Array.from() or the spread operator
      const elements = document.querySelectorAll(".card");
      const elementsArray = Array.from(elements);
      // Alternatively, you can use the spread operator: const elementsArray = [...elements];

      gsap.from(elementsArray, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }

}
</script>

<style scoped>
.list{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card{
  flex: 200px 1 1;
}
</style>