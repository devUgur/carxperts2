<template>
  <div id="why-we-component">
    <div class="section">
      <div class="container">
        <p class="title">Warum wir der Richtige Partner sind</p>
        <div class="content">
          <div class="left">
            <div class="list">
              <transition-group
                  appear
                  tag="div"
                  @before-enter="beforeEnter"
                  @enter="enter"
              >
                <div
                    class="list-item"
                    v-for="(item, index) in arguments"
                    ref="argument"
                    :key="item.name"
                    :data-index="index"
                >
                  <div class="icon">
                    <img :src="require('@/assets/flaticons/'+item.icon)" alt="">
                  </div>
                  <div class="item-content">
                    <div class="name">{{item.name}}</div>
                    <div class="description">{{item.description}}</div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
          <div class="right">
            <div
                class="image"
                @mouseenter="imageHover = true"
                @mouseleave="imageHover = false"
                @click="routeTo"
            >
              <div class="bg-filter" :class="{'blur': imageHover }"></div>
              <div class="content">
                <SlideButtonComponent
                    :text="'Erfahren Sie mehr'"
                    :expanded="imageHover"
                    :to="'/about'"
                ></SlideButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import WhyWeArgs from '@/objects/WhyWeArgs.json';
import SlideButtonComponent from "@/components/buttons/SlideButton.component.vue";
export default {
  name: "WhyWeComponent",
  components: {
    SlideButtonComponent
  },
  data(){
    return {
      animate: false,
      imageHover: false,
      arguments: WhyWeArgs,
    }
  },
  methods: {
    routeTo(){
      this.$store.dispatch('menu/routeTo', '/about');
    },
    beforeEnter(el){
      el.style.opacity = 0;
      el.style.transform = 'translateX(-100px)';
    },
    enter(el, done){
      //console.log(el.dataset.index)
      gsap.to(el, {
        scrollTrigger: {
          trigger: '#why-we-component',
          toggleActions: 'restart'
          //pin: true,
          //scrub: true,
        },
        opacity: 1,
        x: 0,
        duration: 0.6,
        onComplete: done,
        delay: 0.3 + el.dataset.index * 0.2
      })
    }
  },
  computed: {
    isMobileMode(){
      return !this.$store.getters['style/isLGDevice']
    }
  }
}
</script>

<style scoped>
#why-we-component{

}

p.title{
  font-size: 44px;
  text-align: center;
  color: var(--font-color-dark);
  margin: 0;
}

.content{
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}

.left{
  flex: 350px 1 1;
  max-width: 420px;
  width: 100%;
}
.right{
  flex: 1 1 350px;
  background-color: #b60e17;
}

.left .list{
  padding: 30px 0;
}
.list-item{
  display: flex;
  place-items: center;
  gap: 20px;
  margin-top: 20px;
}

.list-item .name{
  color: var(--primary-dark-color);
  font-size: var(--font-size-lg);
}

.list-item .description{
  color: #4b4949;
  font-size: var(--font-size-md);
}

.right{
  position: relative;
  background-color: #42b983;
  height: 550px;
  max-width: 360px;
  width: 100%;
}

.right .image{
  position: relative;
  background-image: url("@/assets/stock/cooperation.jpg");
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  color: white;
  cursor: pointer;

}

.icon img{
  height: 42px;
}

.right .image .content{
  position: relative;
  display: flex;
  height: calc(100% - 60px);
  width: calc(100% - 60px);
  padding: 30px;
}

.right .image .content .btn img{
  height: 18px;
  width: 18px;
}

.bg-filter{
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  background-color: rgba(11, 14, 16, 0.15);
  transition: all 0.7s;
}
</style>