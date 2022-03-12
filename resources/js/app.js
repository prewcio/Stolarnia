/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('ftr', require('./components/includes/Footer.vue').default);
Vue.component('navi', require('./components/includes/Navi.vue').default);
Vue.component('mainy', require('./components/Main.vue').default);
Vue.component('main_c1', require('./components/MainComp/Main.vue').default);
Vue.component('main_c2', require('./components/MainComp/Main2.vue').default);
Vue.component('main_c3', require('./components/MainComp/Main3.vue').default);
Vue.component('main_c4', require('./components/MainComp/Main4.vue').default);
Vue.component('main_c5', require('./components/MainComp/Main5.vue').default);
Vue.component('socials', require('./components/Socials.vue').default);

//Components Global
Vue.component('lazy_img',require('./components/comps/LazyImage').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
