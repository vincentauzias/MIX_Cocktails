<template>
  <Navbar />
  <router-view />
  <Footers />
  <Warning v-bind:appear="appear" v-bind:toggleModal="toggleModal" />
  <vue-cookie-comply
    :preferences="preferences"
    @on-accept-all-cookies="onAccept"
    @on-save-cookie-preferences="onSavePreferences"
  />
</template>

<script>

  import "normalize.css"
  import "@fortawesome/fontawesome-free/js/all.js"
  import "@fontsource/roboto";
  import Footers from "./components/Footer.vue"
  import Navbar from './components/Navbar.vue'
  import Warning from "./components/Warning.vue"

  export default {
    name: 'App',
    components: {
      Navbar,
      Footers,
      Warning,
    } ,
    data() {
      return {
        appear: true,
      };
    },
    methods: {
      toggleModal: function () {
        this.appear = !this.appear;
      },
    },  
  }
</script>


<style>
  body {
    font-family: "Roboto";
  }

  #app {
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFEF9;
  } 

  .cookie-comply{
    z-index: 103;
  }

  button {
    cursor: pointer;
  }
</style>
