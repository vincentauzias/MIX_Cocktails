<template>
  <Footers></Footers>
</template>

<script>

import "normalize.css"
import "@fortawesome/fontawesome-free/js/all.js"

import Footers from './components/Footer.vue'


export default {
  name: 'App',
    components: {
      Footers,
    },
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
