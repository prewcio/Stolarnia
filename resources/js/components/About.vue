<template>
  <div class="container container-about">
    <loader></loader>
    <div class="about">
      <div
        class="left-about"
        data-aos="fade-down-right"
        data-aos-duration="1000"
      >
        <div class="left-desc">
          <h2>O nas</h2>
          <span class="line-2"></span>
          <p>
            Firma Anmar-Meble S.C. rozpoczęła swoją działalność w roku 2008.
            Posiadamy wieloletnie doświadczenie w zakresie wykonywania mebli na
            wymiar wg indywidualnych projektów klienta - dbając o detale i
            najwyższą jakość materiału.
          </p>
          <br />
          <p>
            Anmar-Meble świadczy usługi stolarskie zarówno dla klientów
            indywidualnych jak i klientów firmowych na terenie Polski.
          </p>
        </div>
      </div>
      <div
        class="right-about"
        data-aos="fade-down-left"
        data-aos-duration="1000"
      >
        <img src="/img/about.jpg" alt="about-img" class="shadow-xl" />
      </div>
    </div>
    <div class="about">
      <div
        class="left-about"
        data-aos="fade-down-right"
        data-aos-duration="1000"
      >
        <img src="/img/about.jpg" alt="about-img" class="shadow-xl" />
      </div>
      <div
        class="right-about"
        data-aos="fade-down-left"
        data-aos-duration="1000"
      >
        <div class="right-desc">
          <h2>Historia</h2>
          <span class="line-1"></span>
          <p>
            Rozpoczęliśmy swoją działalność w 2008 roku, Założyliśmy wspólnie
            firmę która realizuje zlecenia dla firm i indywidualnych klientów na
            podstawie rysunków technicznych przez nas projektowanych lub
            dostarczanych przez projektantów.
          </p>
          <br />
          <p>
            Zaczęliśmy od jednej wkrętarki a dzisiaj posiadamy maszyny do
            obróbki drewna, płyty fornirów oraz mamy własną lakiernie w której
            lakierujemy elementy mebli i gabarytów.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./comps/Loader";
export default {
  name: "About",
  components: { Loader },
};
</script>

<style scoped>
</style>
