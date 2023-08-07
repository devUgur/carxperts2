<template>
  <div id="steps-to-do-view">

    <div class="container">
      <p class="title">Vier Schritte zu Ihrem Recht und Ihrem Geld</p>

      <transition-group
          appear
          tag="div"
          @before-enter="beforeEnter"
          @enter="enter"
          class="list"
      >
        <div
            class="card"
            v-for="(step, index) in steps"
            :key="step.name"
            :data-index="index"
            :class="{'shadow': (this.currentShadowIndex === index)}"
        >
          <div class="icon">
            <img :src="require('@/assets/flaticons/' + step.icon)" alt="">
          </div>
          <div class="name">{{index+1}}. {{step.name}}</div>
          <div class="description">{{step.description}}</div>
        </div>
      </transition-group>

      <div class="btn">
        <SlideButtonComponent
            :text="'Zum online Kontaktformular'"
            :collapsed="true"
            :to="'/contact'"
        ></SlideButtonComponent>
      </div>

    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideButtonComponent from "@/components/buttons/SlideButton.component.vue";
import StepsToDo from '@/objects/StepsToDo.json'
export default {
  name: "StepsToDoView",
  components: {
    SlideButtonComponent
  },
  data(){
    return {
      intervalId: null,
      currentShadowIndex: 0,
      steps: StepsToDo
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    nextShadowElement() {
      //const oldIndex = this.currentShadowIndex;
      this.currentShadowIndex++;
      if (this.currentShadowIndex === 4) {
        this.currentShadowIndex = 0;
      }
      //console.log(oldIndex, this.currentShadowIndex);
    },
    beforeEnter(el){
      el.style.opacity = 0;
      el.style.transform = 'translateY(-100px)';
    },
    enter(el, done){
      //console.log(el.dataset.index)
      gsap.to(el, {
        scrollTrigger: {
          trigger: '#steps-to-do-view .title',
          toggleActions: 'restart'
          //pin: true,
          //scrub: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        onComplete: done,
        delay: 0.4 + el.dataset.index * 0.2
      })
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.intervalId = setInterval(this.nextShadowElement, 3000);
  }
}
</script>

<style scoped>
.container{
  padding: 20px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  width: calc(100% - 40px);
}
p.title{
  text-align: center;
  font-size: 44px;
  color: var(--primary-dark-color);
}
.list{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
}

.card{
  flex: 1 1 200px;
  max-width: 240px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  place-items: center;
  transition: box-shadow 0.7s;
  color: var(--primary-dark-color);
}


.card:hover{
  box-shadow: rgba(165, 149, 156, 0.2) 0 8px 24px;
}

.card.shadow{
  box-shadow: rgba(165, 149, 156, 0.2) 0 8px 24px;
}

.card .name{
  font-size: 22px;
  text-align: center;
  margin: 20px 0;
  font-weight: 600;
}

.btn{
  margin: 20px 0;
  font-size: 16px;
  margin-left: auto; /* Das letzte Element wird am rechten Rand positioniert */
}

.icon img{
  height: 42px;
}

@media (max-width: 786px) {
  .card{
    box-shadow: rgba(165, 149, 156, 0.2) 0 8px 24px;
  }
  .description{
    text-align: center;
  }
  .btn{
    margin-left: unset;
  }
}
</style>