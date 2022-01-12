<template>
  <Navbar></Navbar>
</template>

<script>

import "normalize.css"
import "@fortawesome/fontawesome-free/js/all.js"

import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
    components: {
      Navbar,
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
