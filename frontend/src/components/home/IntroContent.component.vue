<template id="intro-content-component">
  <div class="layout">
    <div class="content" :class="slide.className">
      <div class="title">{{ slide.title }}</div>
      <div class="text"> {{slide.content}} </div>
      <div class="btn-layout">
        <SlideButtonComponent
            :text="slide.btnText"
            :expanded="true"
            :to="slide.to"
            :scroll-btn="slide.scrollBtn"
        />
      </div>
    </div>
  </div>
</template>

<script>

import SlideButtonComponent from "@/components/buttons/SlideButton.component.vue";
export default {
  name: "IntroContentComponent",
  props: ['slide'],
  components: {
    SlideButtonComponent
  },
  methods: {

  },
  watch: {
    slide(newVal){
      console.log(newVal);
    }
  }
}
</script>

<style scoped>

.layout {
  position: absolute;
  height: 100%;
  width: calc(100% - 40px);
  background-color: rgba(28, 28, 24, 0.53);
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  padding: 0 20px;

}

.content{
  max-width: 520px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.content.two, .content.four{
  max-width: 800px;
}


.title{
  font-size: 42px;
  text-align: left;
  font-weight: 700;
  line-height: 55px;
}

.text{
  font-size: 18px;
}

.btn-layout{
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}

</style>