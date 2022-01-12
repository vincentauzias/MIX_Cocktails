<template>
    <div>
        <div class="list-search-all">
            <div
                :style="{ backgroundImage: `url(${element.strDrinkThumb})` }"
                @click="
                    getId($event);
                    toggleModal();
                "
                class="list-search-item"
                v-for="element in tab"
                :key="element.idDrink"
                :id="element.idDrink"
            >
                <span :id="element.idDrink">{{ element.strDrink }}</span>
            </div>
        </div>

        <!-- <Modal
            :idModal="idDrinkChoice"
            v-bind:revele="revele"
            v-bind:toggleModal="toggleModal"
        ></Modal> -->
    </div>
</template>

<script>
// import Modal from "../components/Modal.vue";

export default {
    name: "ResultFilter",
    // components: { Modal },
    props: ["tab"],
    data() {
        return { idDrinkChoice: "", revele: false };
    },
    methods: {
        //retieve id for modal
        getId(event) {
            this.idDrinkChoice = event.target.id;
            // console.log(this.tab);
            return this.idDrinkChoice;
        },
        toggleModal: function () {
            this.revele = !this.revele;
        },
     
    },
};
</script>

<style scoped>
.list-search-all {
    width: 80vw;
    height: 72.6vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-height: 72.6vh;
    overflow: scroll;
    overflow-x: hidden;
    cursor: pointer;
}

::-webkit-scrollbar {
    width: 2px;
    height: 90%;
}
::-webkit-scrollbar-track {
    background-color: rgb(182, 177, 177);
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-corner {
    background-color: black;
}

.list-search-item {
    margin: 15px;
    height: 150px;
    width: 150px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
}

.list-search-item span {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: center;
}
</style>
