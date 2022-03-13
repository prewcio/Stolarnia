<template>
  <div class="realizations bg-gray-100 py-6 px-6">
    <h1>Wykonane realizacje</h1>
    <div class="lines">
      <span class="line-1"></span><br />
      <span class="line-2"></span>
    </div>

    <div class="slider">
      <swiper
        :slidesPerView="2"
        :breakpoints="{
          1024: {
            slidesPerView: '4',
          },
          640: {
            slidesPerView: '3',
          },
        }"
        :spaceBetween="30"
        :slidesPerGroup="2"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :autoplay="{
          delay: 3500,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div
            class="
              flex
              justify-center
              flex-col
              font-bold
              p-3
              shadow-md
              text-center
              cursor-pointer
              bg-white
              product-wd
            "
          >
            <div class="product-img">
              <img src="/img/testowe/main-4.jpg" alt="" />
            </div>
            <div class="product-desc-2 pt-2">
              <h2>Kuchenne</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="
              flex
              justify-center
              flex-col
              font-bold
              p-3
              shadow-md
              text-center
              cursor-pointer
              bg-white
              product-wd
            "
          >
            <div class="product-img">
              <img src="/img/test/zdjecie-2.jpg" alt="" />
            </div>
            <div class="product-desc-2 pt-2">
              <h2>Narożne</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="
              flex
              justify-center
              flex-col
              font-bold
              p-3
              shadow-md
              text-center
              cursor-pointer
              bg-white
              product-wd
            "
          >
            <div class="product-img">
              <img src="/img/testowe/main-3.jpg" alt="" />
            </div>
            <div class="product-desc-2 pt-2">
              <h2>Meble Łazienkowe</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="
              flex
              justify-center
              flex-col
              font-bold
              p-3
              shadow-md
              text-center
              cursor-pointer
              bg-white
              product-wd
            "
          >
            <div class="product-img">
              <img src="/img/testowe/main-2.jpg" alt="" />
            </div>
            <div class="product-desc-2 pt-2">
              <h2>Meble Kuchenne</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="
              flex
              justify-center
              flex-col
              font-bold
              p-3
              shadow-md
              text-center
              cursor-pointer
              bg-white
              product-wd
            "
          >
            <div class="product-img">
              <img src="/img/test/zdjecie-5.jpg" alt="" />
            </div>
            <div class="product-desc-2 pt-2">
              <h2>Meble Domowe</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="
              flex
              justify-center
              flex-col
              font-bold
              p-3
              shadow-md
              text-center
              cursor-pointer
              bg-white
              product-wd
            "
          >
            <div class="product-img">
              <img src="/img/test/zdjecie-6.jpg" alt="" />
            </div>
            <div class="product-desc-2 pt-2">
              <h2>Szafy</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="
              flex
              justify-center
              flex-col
              font-bold
              p-3
              shadow-md
              text-center
              cursor-pointer
              bg-white
              product-wd
            "
          >
            <div class="product-img">
              <img src="/img/testowe/main-1.jpg" alt="" />
            </div>
            <div class="product-desc-2 pt-2">
              <h2>Biurka</h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="
              flex
              justify-center
              flex-col
              font-bold
              p-3
              shadow-md
              text-center
              cursor-pointer
              bg-white
              product-wd
            "
          >
            <div class="product-img">
              <img src="/img/test/zdjecie-8.jpg" alt="" />
            </div>
            <div class="product-desc-2 pt-2">
              <h2>Meble Lakierowane</h2>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// import "swiper/css/swiper-bundle"
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
</style>
