<template>
  <div class="container">
    <div class="contact-form my-4 flex flex-col items-center md:flex-row">
      <div
        class="text-center basis-full md:basis-1/2"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        <h1 class="font-bold mb-4">KONTAKT</h1>
        <h2>ANMAR-MEBLE S.C. - ZAKŁAD PRODUKCYJNY</h2>
        <p>ul. Akcent 18 Warszawa</p>
        <p>tel. <a href="tel:+48602468569">504 071 698</a> Andrzej</p>
        <p>tel. <a href="tel:+48602468569">602 468 569</a> Marian</p>
        <p>
          e-mail:
          <a href="mailto:biurto@anmar-meble.com">biuro@anmar-meble.com</a>
        </p>
      </div>
      <div
        class="form w-full basis-full md:basis-1/2"
        data-aos="zoom-in-left"
        data-aos-duration="1000"
      >
        <form @submit.prevent="sendMessage">
          <div class="flex flex-col md:flex-row">
            <div class="flex flex-col w-full">
              <label for="name" class="required">Imie i Nazwisko</label>
              <input
                class="border-1 p-2 mr-0 md:mr-4"
                type="text"
                name="name"
                v-model="name"
                id="name"
                required
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="email" class="required">E-mail</label>
              <input
                class="border-1 p-2 mr-0 md:mr-4"
                type="email"
                v-model="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div class="flex flex-col w-full">
              <label for="phone" class="required">Numer Telefonu</label>
              <input
                class="border-1 p-2"
                type="tel"
                v-model="phoneNumber"
                name="phone"
                id="phone"
                required
              />
            </div>
          </div>
          <div class="flex flex-col w-full">
            <label class="required">Wiadomość</label>
            <textarea
              class="border-1 p-2"
              name="msg"
              v-model="message"
              id="msg"
              cols="30"
              rows="10"
              required
            ></textarea
            ><br />
          </div>
          <p style="color: orange" v-if="sent === 2">Wysyłam wiadomość!</p>
          <p style="color: green" v-if="sent === 1">Wiadomość wysłana!</p>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.0917319924756!2d20.881035715799108!3d52.29618947977243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb5f8404dc52b%3A0xfc68289ce34e793!2sAkcent%2018%2C%2001-937%20Warszawa!5e0!3m2!1spl!2spl!4v1647116205083!5m2!1spl!2spl"
      width="100%"
      height="100%"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      class="mb-4"
      data-aos="zoom-in"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function () {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      sent: 0,
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
    };
  },
  methods: {
    async sendMessage() {
      this.sent = 2;
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phoneNumber: this.phoneNumber,
          message: this.message,
          token: this.csrf,
        }),
      });
      const data = await res.json();
      console.log(data);
      console.log(data.sent);
      this.sent = data.sent;
    },
  },
};
</script>

<style scoped>
</style>
