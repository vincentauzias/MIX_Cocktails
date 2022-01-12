<template>
    <footer>
        <span>
            Technologie utilisé: NodeJs, Vue3, MongoDB. Plus d'information sur GitHub
            <a href="https://github.com/vincentauzias/MIX_Cocktails"><i class="fab fa-github"></i></a>
        </span>
        <hr class="footer-hr">
        <span>Contributeur: Vincent Auzias - Mickael Tailhades - Emmanuelle Dufrenay</span>
    </footer>
</template>

<script>

    export default {
        name: 'Footers'
    }

</script>

<style scoped>
    footer {
        padding: 15px 0;
        background-color: #82A7CA;
        border-top: 1px solid #2974BB;
        text-align: center;
        vertical-align: middle;
        width: 100%;
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
</style>