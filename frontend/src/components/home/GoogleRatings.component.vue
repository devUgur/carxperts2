<template>
  <div id="google-ratings-component">
    <div class="section">
      <div class="bg">
        <div class="layout">
          <div class="content">
            <RatingsListComponent :card-style="cardStyle"></RatingsListComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Components
import RatingsListComponent from "@/components/google/RatingsList.component.vue";
export default {
  name: "GoogleRatingsWithBg",
  components: {
    RatingsListComponent
  },
  data(){
    return {
      cardStyle: {
        marginBottom: "20px",
        color: "white",
        backgroundColor: "rgb(28,28,24)",
      }
    }
  }
}
</script>

<style scoped>
#google-ratings-component{
  min-height: 100vh;
}
.bg{
  position: relative;
  background-image: url("@/assets/stock/google-bg.jpg");
  background-position: center center;
  background-size: cover;
  background-attachment: scroll;
  min-height: 700px;
}

.layout{
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  place-items: center;
  background-color: rgba(28, 28, 24, 0.72);
}

.content{
  max-width: 1100px;
  width: 100%;
  display: flex;
}

@media (min-width: 64.063em){
  .bg{
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  .bg{
    min-height: 1000px;
  }
}
</style>

