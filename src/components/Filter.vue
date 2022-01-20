<template>
    <div class="container-filter">
        <div class="container-filter-name">
            <label for="searchByName">Rechercher par nom de cocktails:</label>
            <input
                type="text"
                @input="$emit('update:name', $event.target.value)"
                :value="name"
                @keyup.enter="getByName"
                placeholder="Rechercher par nom..."
            />
        </div>
        <div class="container-filter-ingredient">
            <label for="searchByIngredient">
                Rechercher par nom d'ingrédient:
            </label>
            <input
                type="text"
                @input="$emit('update:ingredient', $event.target.value)"
                :value="ingredient"
                @keyup.enter="getByIngredient"
                placeholder="Vodka,orange,fraise,..."
            />
        </div>
        <button @click="getByIngredient(); getByName();">
            Rechercher
        </button>
    </div>
</template>

<script>
    export default {
        name: "Filter",
        props: {
            name: String,
            ingredient: String,
            getByName: Function,
            getByIngredient: Function,
        },
        emits: ["update:name", "update:ingredient"],
    };
</script>

<style scoped>
    .container-filter {
        /* background: rgb(255,255,255); */
        background: linear-gradient(
            180deg,
            rgba(210, 229, 245, 1) 0%,
            rgba(130, 167, 202, 1) 100%
        );

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        width: 25vw;
    }

    .container-filter div {
        display: flex;
        flex-direction: column;
    }

    .container-filter div input {
        margin: 10px 0;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        padding-left: 10px;
    }

    .container-filter-name button {
        background-color: #bace6a;
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 5px;
        border-radius: 10px;
        margin-top: 10px;
    }
</style>
