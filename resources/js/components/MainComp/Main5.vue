<template>
  <div
    class="contact p-6 flex justify-between items-center flex-col md:flex-row"
  >
    <!-- <h1>Kontakt z naszym biurem</h1>
    <span></span>
    <h2>ANMAR-MEBLE S.C. - ZAKŁAD PRODUKCYJNY</h2>
    <p>Ul.: Akcent 18</p>
    <p>Miejscowość: Warszawa</p>
    <p>tel. 504 071 698 Andrzej</p>
    <p>tel. 602 468 569 Marian</p>
    <p>e-mail: <a href="">biuro@anmar-meble.com</a></p>
    <button>Lokalizacja</button> -->
    <div class="logo-desc">
      <img src="/img/logo.png" alt="" />
    </div>
    <div class="description">
      <h2>ANMAR-MEBLE S.C. - ZAKŁAD PRODUKCYJNY</h2>
      <div class="text">
        <i class="ri-map-pin-fill"></i>
        <p>ul. Akcent 18 Warszawa</p>
      </div>
      <div class="text">
        <i class="ri-phone-fill"></i>
        <p>tel. 504 071 698 Andrzej</p>
      </div>
      <div class="text">
        <i class="ri-phone-fill"></i>
        <p>tel. 602 468 569 Marian</p>
      </div>
      <div class="text">
        <i class="ri-mail-fill"></i>
        <p>e-mail: <a href="">biuro@anmar-meble.com</a></p>
      </div>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.0917319924756!2d20.881035715799108!3d52.29618947977243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb5f8404dc52b%3A0xfc68289ce34e793!2sAkcent%2018%2C%2001-937%20Warszawa!5e0!3m2!1spl!2spl!4v1647116205083!5m2!1spl!2spl"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main5",
};
</script>

<style scoped>
</style>
