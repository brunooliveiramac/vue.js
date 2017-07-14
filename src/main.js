import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes'; //when we dont use 'export default' we neet to use '{}'
import './directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
    routes: routes,
    mode: 'history' //remove #
})


//creating view instance: glue between component and view
//view instance to create a global view object
new Vue({
    el: '#app', //element where the vue file will be loaded
    router: router,
    render: h => h(App)
})