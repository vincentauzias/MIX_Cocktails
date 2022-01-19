<template>
    <div>
        <Search class="component-search"></Search>
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
</style>
