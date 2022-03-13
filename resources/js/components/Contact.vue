<template>
    <form @submit.prevent="sendMessage">
        <input
            type="text"
            name="name"
            v-model="name"
            id="name"
            placeholder="Imie i Nazwisko"
            required
        />
        <input
            type="email"
            v-model="email"
            name="email"
            id="email"
            placeholder="Email"
            required
        />
        <input
            type="tel"
            v-model="phoneNumber"
            name="phone"
            id="phone"
            placeholder="Numer Telefonu"
            required
        />
        <textarea
            name="msg"
            v-model="message"
            id="msg"
            cols="30"
            rows="10"
            placeholder="Wiadomosc"
            required
        ></textarea
        ><br />
        <p style="color: green" v-if="sent === 1">Wiadomość wysłana!</p>
        <button type="submit">Wyślij</button>
    </form>
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
            csrf: document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        };
    },
    methods: {
        async sendMessage() {
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
            this.sent = data.sent;
        },
    },
};
</script>

<style scoped>

</style>
