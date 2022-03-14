import { createApp } from "vue";
import mainy from './components/Main.vue'
import ftr from './components/includes/Footer.vue';
import navi from './components/includes/Navi.vue';
import socials from './components/Socials.vue';
import contact from './components/Contact.vue';
import realisations from './components/Realisations.vue';
import about from './components/About.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

//Imports Local Comps
import main_c1 from './components/MainComp/Main.vue';
import main_c2 from './components/MainComp/Main2.vue';
import main_c3 from './components/MainComp/Main3.vue';
import main_c4 from './components/MainComp/Main4.vue';
import main_c5 from './components/MainComp/Main5.vue';

//Components
import lazy_img from './components/comps/LazyImage.vue';
import VueEasyLightbox from 'vue-easy-lightbox'

const Vue = createApp({
    components: {
        ftr,
        navi,
        mainy,
        socials,
        contact,
        realisations,
        about,
        main_c1,
        main_c2,
        main_c3,
        main_c4,
        main_c5,
        lazy_img
    }
})
Vue.use(VueEasyLightbox);

Vue.mount("#app");
