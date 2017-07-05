<template>
  <div class="body">
   
  <h1 class="center"> </h1>

  <ul class="pic-list">
    <li class="pic-list-item" v-for="picture of pictures">
      <my-panel :title="picture.titulo">
        <img class="responsive-image" v-bind:src="picture.url" v-bind:alt="picture.titulo"><img/>
      </my-panel>
    </li>
  </ul> 
  </div>
 </template>

<script> 
  export default {
    data(){
      return {  //LifeCycle Hooks: when a component is created, pass through steps and each step let us to execute some code
        pictures: []
      }
    },

    created() {
      this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(pictures => this.pictures = pictures, err => console.log(err));
    }
  }
</script>

<style>
  .body{
    font-family: Helvetica, sans-serif;
    width: 96%;
    margim: 0 auto;
    }

  .center{
    text-align: center;
  }

  .pic-list{
    list-style: none;
  }

  .pic-list .pic-list-item{
    display: inline-block;
  }

  .responsive-image {
    width: 100%;
  }
</style>
