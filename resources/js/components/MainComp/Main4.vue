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
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :autoplay="{
          delay: 5000,
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
              <img src="/img/test.png" alt="" />
            </div>
            <div class="product-desc pt-2">
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
              <img src="/img/test3.png" alt="" />
            </div>
            <div class="product-desc pt-2">
              <h2>Standy</h2>
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
              <img src="/img/test4.png" alt="" />
            </div>
            <div class="product-desc pt-2">
              <h2>Łóżka</h2>
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
              <img src="/img/test.png" alt="" />
            </div>
            <div class="product-desc pt-2">
              <h2>Stacje</h2>
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
              <img src="/img/test2.png" alt="" />
            </div>
            <div class="product-desc pt-2">
              <h2>Agata Meble</h2>
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
              <img src="/img/test3.png" alt="" />
            </div>
            <div class="product-desc pt-2">
              <h2>Żabka</h2>
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
              <img src="/img/test4.png" alt="" />
            </div>
            <div class="product-desc pt-2">
              <h2>Meble</h2>
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
              <img src="/img/test.png" alt="" />
            </div>
            <div class="product-desc pt-2">
              <h2>Meble</h2>
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
