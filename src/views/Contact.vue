<template>
    <div class="container-contact">
        <FormContact />
    </div>
</template>

<script>
import FormContact from "../components/FormContact.vue";
export default {
    name: "Contact",
    components: { FormContact },
};
</script>

<style>
.container-contact {
    width: 100vw;
    height: 72.6vh;
}
</style>
