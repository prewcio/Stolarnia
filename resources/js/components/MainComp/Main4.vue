<template>
  <div class="realizations py-6 px-6">
    <div data-aos="fade-up" data-aos-duration="500">
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
            <a href="/realisation#garderoba">
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
                  z-10
                "
              >
                <div class="product-img">
                  <img src="/img/05garderoba/garderoba-2.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Garderoby</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#kuchnieStyl">
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
                  <img src="/img/06Kuchnia_Stylowa/KuchniaStyl-3.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Kuchnie</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#lazienka">
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
                  <img src="/img/10lazienka/lazienka-1.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Łazienka</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#domy">
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
                  <img src="/img/04Domy/domy-4.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Domy</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#lada">
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
                  <img src="/img/09lada/lada-1.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Lady</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#standy">
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
                  <img src="/img/14standy_reklamowe/standy-7.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Standy</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#pokoj">
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
                  <img src="/img/13pokoj/pokoj-1.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Biurka</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#bank">
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
                  <img src="/img/02bank_bgz/bank-8.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Banki</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#pokoj">
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
                  <img src="/img/13pokoj/lakierowane.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Lakierowane</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/realisation#pokoj">
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
                  <img src="/img/13pokoj/pokoj-11.jpg" alt="" />
                </div>
                <div class="product-desc-2 pt-2">
                  <h2>Łóżka</h2>
                </div>
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
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
