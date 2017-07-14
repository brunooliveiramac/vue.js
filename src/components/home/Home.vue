<template>
  <div>

  <h1 class="center"> {{ title }} </h1>  

  <input type="search" class="filter" v-on:input="filter = $event.target.value" placeholder="Filter"/>
  <ul class="pic-list">
    <li class="pic-list-item" v-for="picture of picturesWithFilter">
      <my-panel :title="picture.titulo">
        <responsible-image v-my-transform.animate="{increment: 14, animate: true}" slot="my-button" :url="picture.url" :title="picture.titulo"/>
        <my-button 
          slot="responsible-image"
          type="button" 
          label="Remove" 
          @buttonActive="remove(picture)"
          :confirm="false"
          btnStyle="danger"/>   <!-- :confirm="false" when you use data-binding the expression is evaluated, in this case boolean -->
      </my-panel>
    </li>
  </ul>  
  </div>
 </template>

<script> 
  
  import Panel from '../shared/panel/Panel.vue';
  import ResponsibleImage from '../shared/responsible-image/ResponsibleImage.vue';
  import Button from '../shared/button/Button.vue';

  export default {
  
    components: {
      'my-panel' : Panel,   //Declaring that you are using the panel imported with nick name, registering
      'responsible-image' : ResponsibleImage,
      'my-button': Button
    },

    data(){
      return {  //LifeCycle Hooks: when a component is created, pass through steps and each step let us to execute some code
        title : 'Vue Js',
        pictures: [],
        filter: ''
      }
    },

    computed: {  //value that need to be processed
      picturesWithFilter(){  
        if(this.filter){
            let exp = new RegExp(this.filter.trim(), 'i');
            return this.pictures.filter(picture => exp.test(picture.titulo));
        } else {
            return this.pictures;
        }
      }
    },

    methods: {
      remove(picture){
             alert(picture.titulo);     
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

  .center{
    color: #42b983;
    text-align: center;
  }

  .pic-list{
    list-style: none;
  }

  .pic-list .pic-list-item{
    display: inline-block;
  }

  .filter {
    display: block;
    width: 100%;
    border: solid 2px grey;
  }
</style>
