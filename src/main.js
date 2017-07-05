import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

Vue.use(VueResource);


//creating view instance: glue between component and view
//view instance to create a global view object
new Vue({
    el: '#app', //element where the vue file will be loaded
    render: h => h(App)
})