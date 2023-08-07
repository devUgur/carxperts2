<template>
  <div id="home-view">
    <IntroComponent></IntroComponent>
    <WhyWeComponent></WhyWeComponent>
    <GoogleRatingsComponent></GoogleRatingsComponent>
    <StepsToDoView></StepsToDoView>
  </div>
</template>

<script>
// Import Home Components
import IntroComponent from "@/components/home/Intro.component.vue";
import WhyWeComponent from "@/components/home/WhyWe.component.vue";
import GoogleRatingsComponent from "@/components/home/GoogleRatings.component.vue";
import StepsToDoView from "@/components/home/StepsToDo.view.vue";

export default {
  name: "HomeView",
  components: {
    IntroComponent,
    WhyWeComponent,
    GoogleRatingsComponent,
    StepsToDoView
  }
}
</script>

<style>
#home-view .section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 180px;
  padding-bottom: 100px;
  height: calc(100% - 280px);
}
</style>

<style scoped>
#home-view{
  display: flex;
  flex-direction: column;
}
</style>
