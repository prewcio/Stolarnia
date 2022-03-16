<template>
  <div class="page-loader" v-if="loading == true" id="loadPageCompo">
    <img src="/img/loading.svg" />
  </div>
</template>

<script>
export default {
  Name: "loader",
  data() {
    return {
      loading: true,
    };
  },
  props: {
    loadTime: {
      type: Number,
      default: 1500,
    },
  },
  methods: {
    loaderFunc() {
      document.getElementById("loadPageCompo").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loadPageCompo").style.opacity = "1";
        this.loading = true;
        setTimeout(() => {
          document.getElementById("loadPageCompo").style.opacity = "0";
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }, this.loadTime);
      }, 500);
    },
  },
  mounted() {
    this.loaderFunc();
  },
};
</script>
<style scoped>
</style>
