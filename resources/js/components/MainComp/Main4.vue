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
            :slidesPerView="3"
            :spaceBetween="30"
            :slidesPerGroup="3"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
                clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
        ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
        ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
        ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
        ><swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper-vue2";

// Import Swiper styles
import 'swiper/swiper-bundle.css'

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<style scoped>
</style>
