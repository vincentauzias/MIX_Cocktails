<template>
    <div class="container-recipes">
        <Filter
            v-model:name="name"
            v-model:ingredient="ingredient"
            v-bind:getByName="getByName"
            v-bind:getByIngredient="getByIngredient"
        >
        </Filter>
        <ResultFilter v-bind:tab="tab"></ResultFilter>
    </div>
</template>

<script>
import Filter from "../components/Filter.vue";
import ResultFilter from "../components/ResultFilter.vue";

export default {
    name: "Recipes",

    components: { Filter, ResultFilter },
    data() {
        return {
            name: "",
            ingredient: "",
            tab: [],
        };
    },
    methods: {
        //search by name
        async getByName() {
            const res = await this.$axios.get(
                process.env.VUE_APP_BASE_URL_API + `/search.php?s=${this.name}`
            );

            this.tab = res.data.drinks;
            // console.log("test name: " + this.tab);
            return this.tab;
        },
        //search by ingredient
        async getByIngredient() {
            const res = await this.$axios.get(
                process.env.VUE_APP_BASE_URL_API +
                    `/filter.php?i=${this.ingredient}`
                // `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.ingredient}`
            );

            this.tab = res.data.drinks;
            // console.log("test ingre: " + this.tab);
            return this.tab;
        },
    },
};
</script>

<style>
.container-recipes {
    width: 100vw;
    height: 72.6vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
