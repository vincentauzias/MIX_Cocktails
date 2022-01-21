<template>
    <footer>
        <span>
            Technologies utilisées: NodeJs, Vue3, MongoDB. Plus d'information sur GitHub
            <a href="https://github.com/vincentauzias/MIX_Cocktails"><i class="fab fa-github"></i></a>
        </span>
        <hr class="footer-hr">
        <span>Contributeurs: Vincent Auzias - Mickael Tailhades - Emmanuelle Dufrenay</span>

        <vue-cookie-comply
        :preferences="preferences"
        @on-accept-all-cookies="onAccept"
        @on-save-cookie-preferences="onSavePreferences"
      />
    
    </footer>
</template>

<script>
    // import { useCookies } from "vue3-cookies";
    export default {
        name: 'Footers',
        //  setup() {
        //     const { cookies } = useCookies();
        //     return { cookies };
        // },

//          mounted() {
//     let my_cookie_value = this.cookies.get("myCoookie");
//     console.log(my_cookie_value);
//     this.cookies.set("myCoookie", "abcdefg");
//   }
    }

</script>

<style scoped>
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #82A7CA;
        width: 100%;
        height: 8vh;
    }

    .footer-hr {
        border: none;
        background-color: #333;
        width: 50%;
        height: 1px;
    }

    .fa-github {
        font-size: 1.25em;
        color: #333;
    }
    .cookie-comply{
        z-index: 1000;
    }
</style>