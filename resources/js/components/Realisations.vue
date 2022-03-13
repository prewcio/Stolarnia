<template>
    <div>
        <img src="/img/test.png" @click="showMultiple(0)" />
        <img src="/img/test2.png" @click="showMultiple(1)" />
        <img src="/img/test3.png" @click="showMultiple(2)" />
        <img src="/img/test4.png" @click="showMultiple(3)" />
        <img src="/img/wood.jpg" @click="showMultiple(4)" />

        <!-- all props & events -->
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
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
    components: {
        VueEasyLightbox
    },
    data() {
        return {
            imgs: '', // Img Url , string or Array of string
            visible: false,
            index: 0 // default: 0
        }
    },
    methods: {
        showMultiple(index) {
            this.imgs = [
                { title: 'test img', src: '/img/test.png' },
                { title: 'test img', src: '/img/test2.png' },
                { title: 'test img', src: '/img/test3.png' },
                { title: 'test img', src: '/img/test4.png' },
                { title: 'test img', src: '/img/wood.jpg' },
            ]
            // allow mixing

            this.index = index // index of imgList
            this.show()
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    }
}
</script>

<style scoped>
</style>
