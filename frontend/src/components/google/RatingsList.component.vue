<template>
  <div
      id="ratings-list-component"
      class="ratings"
      @mouseenter="collapsedBtn = true"
      @mouseleave="collapsedBtn = false"
  >
    <div class="info">
      <p class="title">
        <span>Unsere Google Bewertungen</span>
        <SlideButtonComponent
            :expanded="true || collapsedBtn"
            :text="'Besuchen Sie uns auf Google'"
            :to="ratingsUrl"
        ></SlideButtonComponent>
      </p>
      <div class="page">
        seite
        {{currentIndex/3+1}} von  {{ ratings.length/3 }}
      </div>
      <LineTimerComponent :duration="10"></LineTimerComponent>
    </div>
    <transition-group
        appear
        tag="div"
        @before-enter="beforeEnter"
        @enter="enter"
        class="list"
    >
      <div
          v-for="(rating, index) in currentRatings"
          :key="rating.username"
          ref="ratingElements"
          class="rating"
          :data-index="index"
          :style="cardStyle"
          :class="{'blur': cardStyle}"
      >
        <div class="user">
          <img class="profile" src="@/assets/flaticons/user.png" alt="">
          <div>{{ rating.username }}</div>
          <div class="rating-stars">
            <img
                v-for="image in new Array(rating.stars)"
                src="@/assets/flaticons/star.png"
                alt=""
            >
          </div>
        </div>
        <div class="text">{{ rating.text }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { gsap } from "gsap";
import LineTimerComponent from "@/components/google/LineTimer.component.vue";
import SlideButtonComponent from "@/components/buttons/SlideButton.component.vue";
export default {
  name: "GoogleRatingsComponent",
  props: ['cardStyle'],
  components: {
    LineTimerComponent,
    SlideButtonComponent
  },
  data() {
    return {
      duration: 10,
      currentIndex: 0,
      ratingsPerSet: 3,
      intervalId: null,
      animated: true,
      barWidth: '100%',
      collapsedBtn: false,
    };
  },
  computed: {
    currentRatings() {
      const start = this.currentIndex;
      const end = start + this.ratingsPerSet;
      return this.ratings.slice(start, end);
    },
    ratings(){
      return this.$store.getters['google/ratings'];
    },
    ratingsUrl(){
      return this.$store.getters['google/ratingsUrl'];
    }
  },
  mounted() {
    this.intervalId = setInterval(this.rotateRatings, (this.duration * 1000));
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    rotateRatings() {
      if ((this.currentIndex + this.ratingsPerSet) >= this.ratings.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += this.ratingsPerSet;
      }
    },
    beforeEnter(el){
      el.style.opacity = 0;
      el.style.transform = 'translateX(-100px)';
    },
    enter(el, done){
      //console.log(el.dataset.index)
      gsap.to(el, {
        scrollTrigger: {
          trigger: '#google-ratings-component',
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
    },
  },
};
</script>

<style scoped>
.ratings {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 20px;
  width: calc(100% - 40px);
}

.title{
  color: white;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.list{
  height: 400px;
  scrollbar-width: thin;
}

.rating {
  box-shadow: rgba(165, 149, 156, 0.2) 0 8px 24px;
  padding: 20px 15px;
  width: calc(100% - 30px);
  border-radius: 5px;
}

.user {
  font-weight: 600;
  display: flex;
  place-items: center;
}
.user img{
  height: 14px;
  margin-left: 5px;
}

.user img.profile{
  height: 22px !important;
  width: 22px;
  margin-right: 6px;
}
.rating .text{
  font-size: 12px;
  padding: 5px;
}

.rating-stars{
  margin-left: 10px;
}

.info .page{
  color: #ffffff;
  font-size: 12px;
  background-color: rgba(75, 73, 73, 0.62);
  width: 120px;
  text-align: center;
}
</style>
