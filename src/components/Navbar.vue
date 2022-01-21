<template>
    <div id="nav">
        <div class="logo">
            <img class="logo" src="../assets/Logo.svg" alt="">
        </div>
        <div class="nav-menu">
            <router-link to="/">Accueil</router-link> | 
            <router-link to="/recipes">Recettes</router-link> | 
            <router-link to="/contact">Contact</router-link> 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
    #nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 12vh;
        background-color: #D2E5F5;
    }

    .logo {
        height: 90%;
        padding-left: 25px;
    }

    .nav-menu {
        padding-right: 50px;
        font-size: 2em;
        font-weight: bold;
        color: #333;
    }

    .nav-menu a {
        color: #333;
        text-decoration: none;
        padding: 0 15px
    }

    .nav-menu a.router-link-exact-active {
        color: #0029FF;
    }
</style>