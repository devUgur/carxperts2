<template>
  <div class="card"
       @mouseenter="selected = true"
       @mouseleave="selected = false"
       @click="routeTo(service.name)"
       :style="{ backgroundImage: 'url(' + require('@/assets/services/' + service.img) + ')' }"
  >
    <div class="bg-filter" :class="{'blur': selected }"></div>
    <div class="content">
      <div class="name">{{ service.name }}</div>
      <div
          class="btn primary"

          :class="{'selected-btn': (selected || isMobileMode) }"
      >
        <div class="text" :class="{'selected-text': (selected || isMobileMode) }"> Erfahren Sie mehr </div>
        <img class="btn-img" src="@/assets/flaticons/next.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  data(){
    return {
      selected: false,
    }
  },
  computed: {
    isMobileMode(){
      return !this.$store.getters['style/isLGDevice']
    }
  }
}
</script>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  service: Object
});

const store = useStore();

function routeTo(routeTo) {
  routeTo = routeTo.split(" ").join("-");
  routeTo = routeTo.toString().toLowerCase();
  store.dispatch("menu/routeTo", "/services/" + routeTo);
}
</script>

<style scoped>
.name{
  color: white;
  font-size: 22px;
  font-weight: 600;
}

.card{
  flex: 200px 1 1;
  position: relative;
  background-position: center center;
  background-size: cover;

  height: 160px;
  width: calc(100% - 60px);

  display: flex;
  flex-direction: column;

  padding: 30px;
}

.card:hover{
  cursor: pointer;
}

.bg-filter{
  z-index: 0;
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  background-color: rgba(11, 14, 16, 0.35);
  transition: all 0.7s;
}

.content{
  z-index: 5;
  display: flex;
  flex-direction: column;
}

.content .btn{
  position: absolute;
  display: flex;
  place-items: center;
  justify-content: center;
  background: rgb(28,28,24);
  bottom: 30px;
  height: 40px;
  transition: all 0.7s;
  padding: 0 10px;
  font-size: 12px;
  color: white;
  overflow: hidden;
  align-self: end;
}

.btn img{
  height: 18px;
  width: 18px;
}

.content .btn .text{
  width: 0px;
  overflow: hidden;
  transition: all 0.7s;
  white-space: nowrap;
}
.selected-text{
  width: 120px !important;
}
.selected-btn{
  background: rgb(219, 23, 23) !important;
}
</style>
