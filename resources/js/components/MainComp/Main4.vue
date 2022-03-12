<template>
  <div class="realizations bg-gray-100">
    <h1>Wykonane realizacje</h1>
    <div class="lines">
      <span class="line-1"></span><br />
      <span class="line-2"></span>
    </div>
    <div class="slider">
      <h1>SLIDER</h1>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/swiper-vue";
import 'swiper/swiper.scss'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    name: "Main4",
};
</script>

<style scoped>
</style>
