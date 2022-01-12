<template>
  <div>
    <CardRecipes></CardRecipes>
    <Recipes></Recipes>

  </div>
</template>

<script>

import "normalize.css"
import "@fortawesome/fontawesome-free/js/all.js"
import CardRecipes from "./components/CardRecipes.vue"
import Recipes from "./views/Recipes.vue"

export default {
  name: 'App',
  components: {
    CardRecipes,
    Recipes
  }   
}

</script>

<style>
    
</style>
