<template>
  <div class="container row">
      <span v-for="(group, i) in realisationGroups">
          <div class="column" v-for="relisation in realisations.slice(i * cols, (i + 1) * cols)">
              {{ realisation.image }}
              <img v-for="item in column" :src="'/img/'+realisations[i].realisation+'/'+item">
          </div>
      </span>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import LazyImage from "./comps/LazyImage";
import axios from 'axios';

export default {
  components: {
    LazyImage,
    VueEasyLightbox,
  },
  data() {
    return {
      realisations: [],
      cols: 4,
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
    };
  },
    computed: {
        realisationGroups () {
            return Array.from(Array(Math.ceil(this.realisations.length / this.cols)).keys())
        }
    },
  mounted() {
      this.getRealisations();
  },
    methods: {
    showMultiple(index) {
      this.imgs = [
        { title: "test img", src: "/img/test.png" },
      ];
      // allow mixing

      this.index = index; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    getRealisations: function(){
        axios.get('/api/images')
        .then((response)=> {
            this.realisations = response.data.data;
            this.imgs = this.realisations[0].images;
        })
    }
  },
};
</script>

<style scoped>
</style>
