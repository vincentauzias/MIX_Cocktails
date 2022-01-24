<template>
    <div id="nav">
        <div class="logo">
            <img class="logo" src="../assets/Logo.svg" alt="" />
        </div>

        <div id="navBar" class="container-nav-burger">
            <div class="nav-menu">
                <router-link class="link-home" to="/">Accueil</router-link>
                <span class="separator"> | </span>
                <router-link class="link-reciepes" to="/recipes">Recettes</router-link
                ><span class="separator"> | </span>
                <router-link class="link-contact" to="/contact">Contact</router-link>
            </div>
            <button @click="toggleMenu" class="burger">
                <span class="bar"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",

    methods: {
        toggleMenu() {
            const navBar = document.getElementById("navBar");
            navBar.classList.toggle("show-nav");
        },
    },
};
</script>

<style scoped>
#nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 12vh;
    background-color: #d2e5f5;
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
    position: relative;
}

/*LINK EFFECT UNDERLIGN */

.nav-menu a::before {
    content: "";
    position: absolute;
    height: 2px;
    background: #0029ff;
    opacity: 0;
    left: 50%;
    transform: translate(-50%, 10px);
    transition: all 0.2s ease-in-out;
}

.nav-menu a::before {
    width: 100%;
    bottom: 0;
}

.nav-menu a:hover::before {
    opacity: 1;
    transform: translate(-50%, 0px);
}

.nav-menu a::before {
    transition-delay: 0.1s;
}
.nav-menu a:hover::before {
    transition-delay: 0s;
}

.nav-menu a.router-link-exact-active {
    color: #0029ff;
}

.burger {
    display: none;
}

@media (max-width: 900px) {
    /* toggle menu */
    .container-nav-burger {
        width: 100%;
        background-color: #d2e5f5;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 102;
    }
    .separator {
        display: none;
    }
    .nav-menu {
        display: none;
        padding: 0;
    }

    .show-nav .nav-menu {
        width: 100%;
        height: 20vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nav-menu a {
        font-size: 0.5em;
        padding: 2px 0;
    }
    .burger {
        display: block;
        position: absolute;
        top: 0;
        right: 10px;
        padding: 0;
        width: 45px;
        height: 45px;
        border: none;
        background: transparent;
        cursor: pointer;
        z-index: 102;
    }

    .bar {
        display: block;
        width: 30px;
        height: 4px;
        background: black;
        border-radius: 3px;
    }

    .show-nav .bar {
        background: transparent;
    }

    .bar::before,
    .bar::after {
        content: "";
        width: 30px;
        height: 4px;
        background: black;
        border-radius: 3px;
        position: absolute;
        left: 0;
    }

    .bar::before {
        transform: translateY(-12px);
    }

    .show-nav .bar::before {
        transform: rotate(45deg);
        transition: all 0.5s ease-in-out;
    }

    .bar::after {
        transform: translateY(12px);
    }

    .show-nav .bar::after {
        transform: rotate(-45deg);
        transition: all 0.5s ease-in-out;
    }
}
</style>
