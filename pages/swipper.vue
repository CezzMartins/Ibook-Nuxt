<template>
  <div class="swiper-container">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'ibook',
  async asyncData(){
      
    
  }
})
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>