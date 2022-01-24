<template>
    <div>
        <Search class="component-search" />
    </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
    name: "Home",
    components: { Search },
};
</script>

<style scoped>
.component-search {
    width: 100vw;
    height: 80vh;
}

@media screen and (max-width: 450px) and (orientation: portrait) {
    .component-search {
        height: 700px;
    }
}
</style>
