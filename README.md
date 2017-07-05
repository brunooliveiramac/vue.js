# alurapic

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
# vue.js




- Command Line Interface: Helps on project creation, folders structure, etc...
	
	npm install vue-cli@2.7.0 -g (global, can call from any folder the command line interface)
	vue --version
	vue init webpack-simple alurapic (template that will be used, there are a lots of templates)
	project folder, npm install
	node run dev


 - /dist/build.js -> result of the transformation of all files inside the src folder. Who do it?
			     babel and webpack
 - Babel: responsible for to get your code that written in ecmascript 2015 and transform in ecmascript 5, to be more compatible on browsers. (Transpiler)
 - webpack: packer (module bundler)
 - SingleFileTemplate: mudule that declares components insinde him. (Template: component prensentation/Script; behavior and data to component/Style)

 -main.js
	import Vue from 'from' -> Global vue object
	import App from './App.vue'

	creating view instance: glue between component and view

 - livereloading
 - template structure

 - When you have junt one element inside a template you neet to cover them with a div

 - Inside attributes you cannot use interpolation, just remove {{}} and put v-bind:attributeName (Directive) or just put ':'

 - npm install vue-resource@1.0.3 --save

	import VueResource from 'vue-resource';
	Vue.use(VueResource);

 - Options-LifeCycle-Hooks

	    created() {
	      this.$http.get('http://localhost:3000/v1/fotos')
		.then(res => res.json())
		.then(pictures => this.pictures = pictures, err => console.log(err));
    	    }

 - Component: We you work with components the whole structure must be toghetter, like the prensentation, style, data.
 - emmet
 - slot in style to avoiding change another components styles
 - importing a component inside another one
   
  import Panel from './components/shared/panel/Panel.vue';

  export default {
  
    components: {
      'my-panel' : Panel   
    },
    .....
	


	

		



 


 
