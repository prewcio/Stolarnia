<template>
  <div class="realizations bg-gray-100">
    <h1>Wykonane realizacje</h1>
    <div class="lines">
      <span class="line-1"></span><br />
      <span class="line-2"></span>
    </div>

    <div class="slider">
      <h1>SLIDER</h1>
        <swiper
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            ...
        </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    name: "Main4",
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>

<style scoped>
</style>
