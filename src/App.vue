<template>
  <Navbar></Navbar>
  <router-view />
  <Footers></Footers>
  <Warning v-bind:appear="appear" v-bind:toggleModal="toggleModal"></Warning>
</template>

<script>

  import "normalize.css"
  import "@fortawesome/fontawesome-free/js/all.js"
  import Footers from "./components/Footer.vue"
  import Navbar from './components/Navbar.vue'
  import Warning from "./components/Warning.vue"


  export default {
    name: 'App',
    components: {
      Navbar,
      Footers,
      Warning
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


<style >
  #app {
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFEF9;
  }  

  button {
    cursor: pointer;
  }
</style>
