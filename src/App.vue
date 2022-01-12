<template>
  <div>
    <Navbar></Navbar>
    <CardRecipes></CardRecipes>
    <Recipes></Recipes>
    <Contact></Contact>
    <Footers></Footers>
    <Home></Home>
  </div>


</template>

<script>

import "normalize.css"
import "@fortawesome/fontawesome-free/js/all.js"
import CardRecipes from "./components/CardRecipes.vue"
import Recipes from "./views/Recipes.vue"
import Contact from "./views/Contact.vue";
import Footers from "./components/Footer.vue"
import Navbar from './components/Navbar.vue'
import Home from "./views/Home.vue";


export default {
  name: 'App',
  components: {
    Navbar,
    CardRecipes,
    Recipes,
    Contact,
    Footers,
    Home
  }   

}

</script>


<style>
#app {
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background-color: #FFFEF9;
    /* overflow: hidden; */
  }  
</style>
