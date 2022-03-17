<template>
  <div class="page-loader" v-if="loading === true" id="loadPageCompo">
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
  methods: {
    loaderFunc() {
      document.getElementById("loadPageCompo").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loadPageCompo").style.opacity = "1";
        setTimeout(() => {
          $(document).ready(function () {
            window.scrollTo(0, 0);
            document.getElementById("loadPageCompo").style.opacity = "0";
            setTimeout(() => {
              document.getElementById("loadPageCompo").style.visibility =
                "hidden";
              this.loading = false;
            }, 500);
          });
        }, 500);
      }, 100);
    },
  },
  mounted() {
    this.loaderFunc();
  },
};
</script>
<style scoped>
</style>
