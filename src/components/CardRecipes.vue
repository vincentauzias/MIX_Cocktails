<template>
    <div @mouseenter="getResult()" class="card-recipes" v-if="revele">
        <div class="overlay" @click="toggleModal"></div>

        <div class="contour">
            <button class="btn-cancel-card-recipes" @click="toggleModal">
                X
            </button>
            <div
                class="container-card-recipes"
                v-for="item in tabi"
                :key="item.idDrink"
                :id="item.idDrink"
            >
                <div class="card-recipes-image">
                    <img
                        style="height: 100%; width: 100%"
                        :src="item[0].strDrinkThumb"
                        alt=""
                    />
                </div>

                <div class="card-recipes-title">
                    <h2>{{ item[0].strDrink }}</h2>
                </div>

                <div class="card-recipes-ingredients">
                    <div class="h3">
                        <h3>Ingrédients :</h3>
                    </div>
                    <div class="ingredients-p">
                        <p>
                            <span>{{ item[0].strIngredient1 }}</span>
                            {{ item[0].strMeasure1 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient2 }}</span>
                            {{ item[0].strMeasure2 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient3 }}</span>
                            {{ item[0].strMeasure3 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient4 }}</span>
                            {{ item[0].strMeasure4 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient5 }}</span>
                            {{ item[0].strMeasure5 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient6 }}</span>
                            {{ item[0].strMeasure6 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient7 }}</span>
                            {{ item[0].strMeasure7 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient8 }}</span>
                            {{ item[0].strMeasure8 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient9 }}</span>
                            {{ item[0].strMeasure9 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient10 }}</span>
                            {{ item[0].strMeasure10 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient11 }}</span>
                            {{ item[0].strMeasure11 }}
                        </p>
                        <p>
                            <span>{{ item[0].strIngredient12 }}</span>
                            {{ item[0].strMeasure12 }}
                        </p>
                    </div>
                </div>

                <div class="card-recipes-recipe">
                    <div class="h3">
                        <h3>Préparation :</h3>
                    </div>
                    <div class="recipe">
                        {{ item[0].strInstructions }}
                    </div>
                </div>

                <div class="card-recipes-add-comment">
                    <form action="">
                        <textarea
                            class="form-control"
                            minlength="16"
                            maxlength="100"
                            v-model="User.commentaire"
                        >
Laissez un commentaire</textarea
                        >
                        <br />
                        <input
                            type="submit"
                            value="Envoyer"
                            @click.once="addToAPI"
                        />
                    </form>
                </div>

                <div class="card-recipes-comments">
                    <vueper-slides
                        class="no-shadow"
                        :visible-slides="3"
                        slide-multiple
                        :gap="3"
                        :slide-ratio="1 / 7"
                        :dragging-distance="70"
                        :bullets="false"
                        :arrows-outside="false"
                    >
                        <vueper-slide
                            v-for="(slide, i) in slides"
                            :key="i"
                            :content="slide['commentaire']"
                        />
                    </vueper-slides>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    name: "CardRecipes",
    props: ["revele", "toggleModal", "idModal"],
    data() {
        return {
            User: { commentaire: "" },
            tabi: [],
            slides: [],
        };
    },
    methods: {
        addToAPI() {
            let newUser = {
                comment: this.User.commentaire,
                idCocktail: this.idModal,
            };
            console.log(newUser);
            this.$axios
                .post("http://localhost:4001/api/commentaires", newUser)
                .then((res) => {
                    if (res.data.mess === "ok") {
                        this.User.commentaire = "";
                    }
                });
        },
        async getResult() {
            const res = await this.$axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.idModal}`
            );
            this.tabi = res.data;
            console.log(this.tabi);
            return this.tabi;
        },
        idcock() {
            this.$axios
                .get("http://localhost:4001/api/userComment", {
                    params: { idC: this.idModal },
                })
                .then((rep) => {
                    (this.slides = rep.data.comments),
                        console.log("test comment : " + rep.data);
                    console.log("test slides : " + this.slides);
                })
                .catch((error) => {
                    console.log("error" + error);
                });
        },
    },
    beforeUpdate() {
        this.idcock();
    },
    components: {
        VueperSlides,
        VueperSlide,
    },
};
</script>

<style scoped>
.card-recipes {
    z-index: 103;
}
.contour {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 560px;
    width: 840px;
    padding: 10px;
    border-radius: 2px;
    z-index: 1020;
    background: #ffffff;
}
.btn-cancel-card-recipes {
    position: absolute;
    top: 10px;
    right: 10px;
}

.overlay {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 102;
}

.container-card-recipes {
    position: absolute;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    border: 1px solid black;
    width: 780px;
    height: 520px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    z-index: 1020;
    background: #fffef9;
}

.card-recipes-image {
    display: flex;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    width: 440px;
    height: 440px;
    z-index: 1020;
}

.card-recipes-title {
    display: flex;
    justify-content: center;
    align-items: center;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
    width: 340px;
    height: 40px;
    z-index: 1020;
    background: #fffef9e0;
}

.card-recipes-ingredients {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-ordinal-group: 5;
    -ms-flex-order: 4;
    order: 4;
    width: 340px;
    height: 200px;
    z-index: 1020;
    background: #fffef9;
}
.ingredients-p {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 150px;
    width: 90%;
    margin: 0 5% 0 5%;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
}
.card-recipes-ingredients span {
    font-weight: 900;
}
.card-recipes-ingredients .h3 {
    display: inline-block;
}
.card-recipes-ingredients p {
    padding: 1px;
    margin: 1px;
}

.card-recipes-recipe {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-ordinal-group: 6;
    -ms-flex-order: 5;
    order: 5;
    width: 340px;
    height: 200px;
    z-index: 1020;
    background: #fffef9;
}
::-webkit-scrollbar {
    width: 5px;
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
.recipe {
    width: 90%;
    margin: 0 5% 0 5%;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
}

.card-recipes-add-comment {
    display: flex;
    flex-direction: column;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-ordinal-group: 7;
    -ms-flex-order: 6;
    order: 6;
    width: 340px;
    height: 80px;
    z-index: 1020;
    background: #fffef9;
}
.card-recipes-add-comment textarea {
    min-width: calc(100% - 7px);
    max-width: calc(100% - 7px);
    height: calc(70% - 2px);
    width: calc(100% - 7px);
}

.card-recipes-add-comment input {
    min-width: calc(100% - 1px);
    max-width: calc(100% - 1px);
    height: calc(30% - 1px);
    width: calc(100% - 1px);
}

.card-recipes-comments {
    display: flex;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    align-items: center;
    width: 440px;
    height: 80px;
    z-index: 1020;
    background: #fffef9;
}
.vueperslides {
    width: 100%;
}
.vueperslide {
    background-color: #fffef9;
    transform: scale(0.85);
    opacity: 1;
}

/*
    @media (min-width: 1401px){

    }
    */
@media (max-width: 900px) {
    .contour {
        height: 450px;
        width: 450px;
        padding: 20px;
        border-radius: 2px;
    }
    .btn-cancel-card-recipes {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .container-card-recipes {
        width: 410px;
        height: 460px;
    }

    .card-recipes-image {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 2;
        order: 2;
        width: 260px;
        height: 260px;
        z-index: 1020;
    }

    .card-recipes-title {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 1;
        order: 1;
        width: 150px;
        height: 40px;
    }

    .card-recipes-ingredients {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 5;
        order: 5;
        width: 150px;
        height: 230px;
    }
    .ingredients-p {
        height: 150px;
        width: 90%;
        margin: 0 5% 0 5%;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .card-recipes-ingredients span {
        font-weight: 900;
    }
    .card-recipes-ingredients .h3 {
        display: inline-block;
    }
    .card-recipes-ingredients p {
        padding: 1px;
        margin: 1px;
    }

    ::-webkit-scrollbar {
        width: 5px;
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

    .card-recipes-recipe {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 6;
        order: 6;
        width: 150px;
        height: 230px;
    }

    .card-recipes-add-comment {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 4;
        order: 4;
        width: 260px;
        height: 80px;
    }
    .card-recipes-add-comment textarea {
        min-width: calc(100% - 7px);
        max-width: calc(100% - 7px);
        height: calc(70% - 2px);
        width: calc(100% - 7px);
    }

    .card-recipes-comments {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 3;
        order: 3;
        width: 260px;
        height: 80px;
    }
}

@media screen and (max-width: 450px) and (orientation: portrait) {
    .contour {
        position: fixed;
        top: 0;
        left: 0;
        transform: none;
        height: 90%;
        width: 400px;
        padding: 10px;
        border-radius: 2px;
    }
    .btn-cancel-card-recipes {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    .container-card-recipes {
        display: flex;
        flex-direction: row;
        height: 90%;
        width: 380px;
        overflow-y: auto;
    }

    .card-recipes-image {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 2;
        order: 2;
        width: 380px;
        height: 380px;
    }

    .card-recipes-title {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 1;
        order: 1;
        width: 380px;
        height: 40px;
    }

    .card-recipes-ingredients {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 3;
        order: 3;
        width: 380px;
        height: 230px;
    }

    .card-recipes-recipe {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 4;
        order: 4;
        width: 380px;
        height: 230px;
    }

    .card-recipes-add-comment {
        -webkit-box-ordinal-group: 6;
        -ms-flex-order: 6;
        order: 6;
        width: 380px;
        height: 80px;
    }

    .card-recipes-comments {
        -webkit-box-ordinal-group: 5;
        -ms-flex-order: 5;
        order: 5;
        width: 380px;
        height: 80px;
    }
}
</style>
