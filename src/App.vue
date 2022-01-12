<template>
  <div>
    <CardRecipes></CardRecipes>
    <Recipes></Recipes>
    <Contact></Contact>
    <Footers></Footers>
  </div>

</template>

<script>

import "normalize.css"
import "@fortawesome/fontawesome-free/js/all.js"
import CardRecipes from "./components/CardRecipes.vue"
import Recipes from "./views/Recipes.vue"
import Contact from "./views/Contact.vue";

import Footers from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    CardRecipes,
    Recipes,
    Contact,
    Footers
  }   
}

</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background-color: #FFFEF9;
    overflow: hidden;
  }  
</style>
