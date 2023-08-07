<template>
  <div id="line-timer-component">
    <div class="timer-line" :style="{ width: timerWidth }"></div>
  </div>
</template>

<script>
export default {
  props: ['duration'],
  data() {
    return {
      startTime: 0,
      timerWidth: '100%', // Start width of the timer (100% represents full width)
    };
  },
  methods: {
    startAnimation() {
      this.startTime = performance.now();
      this.animate();
    },
    animate() {
      const currentTime = performance.now();
      const elapsed = currentTime - this.startTime;
      let progress = (elapsed / (this.duration * 1000)) * 100;

      if (progress >= 100) {
        // Animation finished, reset timer
        this.timerWidth = '100%';
        this.startAnimation();
      } else {
        this.timerWidth = `${100 - progress}%`;
        requestAnimationFrame(this.animate);
      }
    },
  },
  mounted() {
    this.startAnimation(); // Start the initial animation when the component is mounted
  },
};
</script>

<style scoped>
#line-timer-component {
  width: 100%;
  height: 4px;
  background-color: #ccc;
  position: relative;
}

.timer-line {
  height: 100%;
  background-color: #f00;
}
</style>
