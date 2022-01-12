<template>
    <div id="nav">
        <div class="logo">
            <img class="logo" src="../assets/Logo.svg" alt="">
        </div>
        <div class="nav-menu">
            <router-link to="/">Accueil</router-link> | 
            <router-link to="/recipes">Recettes</router-link> | 
            <router-link to="/contact">Contact</router-link> | 
            <router-link to="/myspace">Mon espace</router-link>
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
        height: 100px;
        background-color: #D2E5F5;
        border-bottom: 1px solid #90C5F2;
    }

    .logo {
        height: 90%;
        padding-left: 20px;
    }

    .nav-menu {
        padding-right: 20px;
        font-size: 2em;
        font-weight: bold;
        color: #333;
    }

    .nav-menu a {
        color: #333;
        text-decoration: none;
    }

    .nav-menu a.router-link-exact-active {
        color: #0029FF;
    }
</style>