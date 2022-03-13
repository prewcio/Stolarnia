// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */
//
// require('./bootstrap');
//
// window.Vue = require('vue').default;
//
// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */
//
// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
//
// //Example
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//
// //Sites
// Vue.component('ftr', require('./components/includes/Footer.vue').default);
// Vue.component('navi', require('./components/includes/Navi.vue').default);
// Vue.component('mainy', require('./components/Main.vue').default);
// Vue.component('socials', require('./components/Socials.vue').default);
// Vue.component('contact', require('./components/Contact').default);
//
// //Local Components
// Vue.component('main_c1', require('./components/MainComp/Main.vue').default);
// Vue.component('main_c2', require('./components/MainComp/Main2.vue').default);
// Vue.component('main_c3', require('./components/MainComp/Main3.vue').default);
// Vue.component('main_c4', require('./components/MainComp/Main4.vue').default);
// Vue.component('main_c5', require('./components/MainComp/Main5.vue').default);
//
// //Components Global
// Vue.component('lazy_img',require('./components/comps/LazyImage').default);
//
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// const app = new Vue({
//     el: '#app',
// });

import { createApp } from "vue";
import mainy from './components/Main.vue'
import ftr from './components/includes/Footer.vue';
import navi from './components/includes/Navi.vue';
import socials from './components/Socials.vue';
import contact from './components/Contact.vue';

//Imports Local Comps
import main_c1 from './components/MainComp/Main.vue';
import main_c2 from './components/MainComp/Main2.vue';
import main_c3 from './components/MainComp/Main3.vue';
import main_c4 from './components/MainComp/Main4.vue';
import main_c5 from './components/MainComp/Main5.vue';

//Components
import lazy_img from './components/comps/LazyImage.vue';
const Vue = createApp({
    components: {
        ftr,
        navi,
        mainy,
        socials,
        contact,
        main_c1,
        main_c2,
        main_c3,
        main_c4,
        main_c5,
        lazy_img
    }
})
Vue.mount("#app");
