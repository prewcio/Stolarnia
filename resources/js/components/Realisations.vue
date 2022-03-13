<template>
  <div class="container row">
    <div class="column">
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-1.jpg"
        alt="Test1"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(0)"
      >
        <i class="ri-fullscreen-fill"></i>
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-2.jpg"
        alt="Test2"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(1)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-3.jpg"
        alt="Test3"
        :blur-amount="2"
        class="row"
        @click="showMultiple(2)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-4.jpg"
        alt="Test4"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(3)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-5.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
    <div class="column">
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-6.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-7.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-8.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-9.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-10.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
    <div class="column">
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-11.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-12.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-13.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-14.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
    <div class="column">
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-1.jpg"
        alt="Test1"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(0)"
      >
        <i class="ri-fullscreen-fill"></i>
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-2.jpg"
        alt="Test2"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(1)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-3.jpg"
        alt="Test3"
        :blur-amount="2"
        class="row"
        @click="showMultiple(2)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-4.jpg"
        alt="Test4"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(3)"
      >
      </lazy-image>
      <lazy-image
        initial-image="/img/load.gif"
        final-image="/img/test/zdjecie-5.jpg"
        alt="Drewno"
        :blur-amount="2"
        class="klasa"
        @click="showMultiple(4)"
      >
      </lazy-image>
      <vue-easy-lightbox
        scrollDisabled
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import LazyImage from "./comps/LazyImage";

export default {
  components: {
    LazyImage,
    VueEasyLightbox,
  },
  data() {
    return {
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
    };
  },
  methods: {
    showMultiple(index) {
      this.imgs = [
        { title: "test img", src: "/img/test.png" },
        { title: "test img", src: "/img/test2.png" },
        { title: "test img", src: "/img/test3.png" },
        { title: "test img", src: "/img/test4.png" },
        { title: "test img", src: "/img/wood.jpg" },
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
  },
};
</script>

<style scoped>
</style>
