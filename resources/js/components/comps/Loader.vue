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
              $(document).ready(function (){
                  console.log("OK");
                  document.getElementById("loadPageCompo").style.opacity = "0";
                  setTimeout(() => {
                      document.getElementById("loadPageCompo").style.visibility="hidden";
                      this.loading = false;
                  },500)
              }
              )
          },1500);
      },100);
    },

  },
  mounted() {
    this.loaderFunc();
  },
};
</script>
<style scoped>
</style>
