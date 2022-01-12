<template>
    <div>
        <Home></Home>
    </div>
</template>

<script>
import "normalize.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Home from "./views/Home.vue";

export default {
    name: "App",
    components: { Home },
};
</script>

<style>
#app {
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    background-color: #fffef9;
}
</style>
