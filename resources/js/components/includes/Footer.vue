<template>
  <footer>
      <div id="btn-top-lbl" class="btn-top-label">
          Przejdź do góry
      </div>
    <div class="btn-top" id="btn-top">
      <i class="ri-arrow-up-line" id="btn-top-arrow"></i>
    </div>
    <div class="footer bg-gray-100">
      <p>&copy; {{ CurrentYear }} Anmar-Meble S.C Wszelkie prawa zastrzeżone</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function () {
    return {
      CurrentYear: new Date().getFullYear(),
    };
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>
