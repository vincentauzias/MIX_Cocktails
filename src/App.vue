<template>
  <div>
    <Card_Recipes></Card_Recipes>
  </div>
</template>

<script>

import "normalize.css"
import "@fortawesome/fontawesome-free/js/all.js"
import Card_Recipes from "./components/Card_Recipes.vue"

export default {
  name: 'App',
  components: {
    Card_Recipes
  }
    
}

</script>

<style>

</style>
