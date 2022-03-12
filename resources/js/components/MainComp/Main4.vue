<template>
  <div class="realizations">
    <h1>Nasze realizacje</h1>
    <div class="lines">
      <span class="line-1"></span>
      <span class="line-2"></span>
    </div>
    <p>
      Oryginalne pomysły i potrzeby klientów oraz nasza pasja tworzą wręcz małe
      dzieła sztuki. Każdy klient jest wyjątkowy co pozwala nam wciąż się
      rozwijać i tworzyć nowe rozwiazania.
    </p>
    <div class="slider"></div>
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
