<template>
    <div>
        <Warning
            v-bind:appear="appear"
            v-bind:toggleModal="toggleModal"
        ></Warning>
    </div>
</template>

<script>
import "normalize.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Warning from "./components/Warning.vue";

export default {
    name: "App",
    components: { Warning },

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
};
</script>

<style></style>
