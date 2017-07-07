import Register from './components/register/Register.vue';
import Home from './components/home/Home.vue';


export const routes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/new', component: Register, title: 'New' }
]; //When we exporting it needs to be a 'const'