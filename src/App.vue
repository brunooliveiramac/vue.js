<template>
  <div class="body">
    
   <my-menu :routes="routes"></my-menu>

    <transition name="page"> 
      <!-- ng-view like angularJs -->
      <router-view></router-view>
    </transition>

  </div> 
 </template> 

<script> 

  import { routes } from './routes';
  import MyMenu from './components/shared/menu/MyMenu.vue'

  export default {
    
    components:{
      'my-menu': MyMenu
    },

    data(){
      return {
        routes: routes
      }
    }

  }

</script>

<style>
  .body{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margim: 0 auto;
    }

  .page-enter, .page-leave-active {
    opacity: 0
  } 

  .page-enter-active, .page-leave-active {
    transition: opacity .4s
  }
</style>
