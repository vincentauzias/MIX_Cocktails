<template>
    <div class="container-filter">
        <div class="container-filter-name">
            <label for="searchByName">Rechercher par nom de cocktails:</label>
            <input
                id="inputName"
                type="text"
                @input="$emit('update:name', $event.target.value)"
                @keyup.enter="getByName"
                placeholder="Mojito"
                v-model="inputName"
            />
        </div>
        <div class="container-filter-ingredient">
            <label for="searchByIngredient">
                Rechercher par nom d'ingrédient:
            </label>
            <input
                type="text"
                @input="$emit('update:ingredient', $event.target.value)"
                @keyup.enter="getByIngredient"
                placeholder="Vodka,orange..."
                v-model="inputIngredient"
            />
        </div>
        <button
            @click="
                getByIngredient();
                getByName();
                clearInput();
            "
        >
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
    data() {
        return {
            searchName: "",
            searchIngredient: "",
            inputName: "",
            inputIngredient: "",
        };
    },
    methods: {
        clearInput() {
            this.inputIngredient = "";
            this.inputName = "";
        },
    },
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
    padding: 0 15px;
}

.container-filter div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-filter div label {
    text-align: center;
}

.container-filter div input {
    margin: 10px 0;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    padding-left: 10px;
    width: 15vw;
}

.container-filter button {
    background-color: #bace6a;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 10px;
    margin-top: 10px;
}
</style>
