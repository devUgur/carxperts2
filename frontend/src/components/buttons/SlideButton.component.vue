<template>
  <div
      id="slide-button-component"
      @mouseenter="onHover"
      @mouseleave="onLeave"
  >
    <div class="content"
         :class="{'active': isActive}"
         @click="routeTo(to)"
    >
      <div class="text-container">
        <div class="text" :class="{'expanded': (expanded || isActive), 'active': (expanded) }" :style="{'max-width': textWidth + 'px'}">
          {{ text }}
        </div>
      </div>
      <div class="img-container" :class="{'active': isActive}">
        <img :src="imgSrc" alt="" :class="{'scroll-btn': scrollBtn }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideButtonComponent",
  props: ['expanded', 'to', 'text', 'scrollBtn' ],
  data() {
    return {
      expand: false,
      textWidth: 0,
      imgWidth: 0,
      isActive: false,
    };
  },
  computed: {
    imgSrc() {
      return require('@/assets/flaticons/next.png');
    },
  },
  methods: {
    onHover(){
      this.expandButton(true);
      this.isActive = true;
    },
    onLeave(){
      this.expandButton(false);
      this.isActive = false;
    },

    expandButton(isHover) {
      this.expand = isHover;
      if (isHover) {
        this.$nextTick(() => {
          this.textWidth = this.$el.querySelector('.text').scrollWidth;
          this.imgWidth = this.$el.querySelector('img').clientWidth;
        });
      } else {
        this.textWidth = 0;
      }
    },

    routeTo(to){
      this.$store.dispatch('nav/to', to);
    }
  },
  mounted() {
    this.expandButton(this.expanded || false)
    this.isActive = this.active || false;
  },
  watch: {
    expanded(newVal){
      this.expandButton(newVal)
    }
  }
};
</script>

<style scoped>

.text-container {
  display: flex;
  place-items: center;
  height: 50px; /* Adjust the height as needed */
}

.content {
  background: var(--primary-dark-color);
  display: flex;
  place-items: center;
  height: 50px; /* Adjust the height to match the text-container */
  transition: all var(--lg-delay);
}

.img-container{
  background-color: transparent;
  display: flex;
  place-items: center;
  padding: 0 15px;
  height: 50px; /* Adjust the height to match the text-container */
  transition: all var(--lg-delay);
}
.content.active {
  background: var(--primary-color);
}
img{
  height: 18px;
}

.text {
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.7s ease, opacity 0.7s ease;
  line-height: 50px; /* Vertically center the text */
}


.text.active {
  padding-left: 10px;
}

.content {
  display: inline-flex;
  place-items: center;
  cursor: pointer;
}

.content.expanded {

}


.scroll-btn{
  rotate: 90deg;
}

@media (max-width: 768px) {
  .content{
    width: 100%;
  }
}
</style>
