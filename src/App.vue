<template>
  <div>
    <CardRecipes></CardRecipes>
    <Recipes></Recipes>
    <Contact></Contact>

  </div>
</template>

<script>

import "normalize.css"
import "@fortawesome/fontawesome-free/js/all.js"
import CardRecipes from "./components/CardRecipes.vue"
import Recipes from "./views/Recipes.vue"
import Contact from "./views/Contact.vue";

export default {
  name: 'App',
  components: {
    CardRecipes,
    Recipes,
    Contact
  }   
}

</script>



<style></style>
