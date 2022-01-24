<template>
  <Navbar />
  <router-view />

  <Chatbot v-if="reveleChat" />
  <div class="iconChat" v-if="!reveleChat" @click="toggleChat">
    <i class="far fa-comments"></i>
  </div>
  <div class="iconChatClose" v-else @click="toggleChat">
    <i class="fas fa-times"></i>
  </div>

  <Warning v-bind:appear="appear" v-bind:toggleModal="toggleModal" />

  <vue-cookie-comply
    :preferences="preferences"
    @on-accept-all-cookies="onAccept"
    @on-save-cookie-preferences="onSavePreferences"
  />

  <Footers />
</template>

<script>

  import "normalize.css"
  import "@fortawesome/fontawesome-free/js/all.js"
  import "@fontsource/roboto";
  import Footers from "./components/Footer.vue"
  import Navbar from './components/Navbar.vue'
  import Warning from "./components/Warning.vue"
  import Chatbot from "./components/Chatbot.vue"

  export default {
    name: 'App',
    components: {
      Navbar,
      Footers,
      Warning,
      Chatbot
    } ,
    data() {
      return {
        appear: true,
        reveleChat: false
      };
    },
    methods: {
      toggleModal: function () {
        this.appear = !this.appear;
      },
      toggleChat() {
        this.reveleChat = !this.reveleChat
      }
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

  .iconChat {
    position: fixed;
    bottom: 10%;
    right: 10px;
    font-size: 30px;
    background-color: #BACE6A;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    cursor: pointer;
  }

  .iconChatClose {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10.5%;
    right: 10px;
    font-size: 20px;
    padding: 3px 6px;
    background-color: #eb5757;
    border-radius: 50%;
    border: 1px solid #000;
    cursor: pointer;
  }

  .iconChat,
  .iconChatClose {
    z-index: 102;
  }

  .cookie-comply,
  .cookie-comply__modal {
    z-index: 103;
  }

  button {
    cursor: pointer;
  }
  
  /* MEDIA MOBILE */
  @media screen and (max-width: 450px) and (orientation: portrait) {}
</style>
