<template>
      <!-- <div class="card-recipes">
        <button class="btn-cancel-card-recipes">X</button> -->
    <div @mouseenter="getResult()" class="card-recipes" v-if="revele">
        <div class="overlay" @click="toggleModal"></div>
        <button class="btn-cancel-card-recipes" @click="toggleModal">X</button>
         <div class="container-card-recipes"
                v-for="item in tabi"
                :key="item.idDrink"
                :id="item.idDrink"
            >

                <div class="card-recipes-image"> <img
                        style="height: 100%; width: 100%;"
                        :src="item[0].strDrinkThumb"
                        alt=""
                    /> </div>

                <div class="card-recipes-title"> <h2>
                        {{ item[0].strDrink }}
                    </h2> </div>

                <div class="card-recipes-ingredients"> 
                    <p>
                        <span>
                            {{ item[0].strIngredient1 }}
                        </span>
                        {{ item[0].strMeasure1 }}
                    </p>
                    <p>
                        <span>
                            {{ item[0].strIngredient2 }}
                        </span>
                        {{ item[0].strMeasure2 }}
                    </p>
                    <p>
                        <span>
                            {{ item[0].strIngredient3 }}
                        </span>
                        {{ item[0].strMeasure3 }}
                    </p>
                    <p>
                        <span>
                            {{ item[0].strIngredient4 }}
                        </span>
                        {{ item[0].strMeasure4 }}
                    </p>
                    <p>
                        <span>
                            {{ item[0].strIngredient5 }}
                        </span>
                        {{ item[0].strMeasure5 }}
                    </p>
                    <p>
                        <span>
                            {{ item[0].strIngredient6 }}
                        </span>
                        {{ item[0].strMeasure6 }}
                    </p>
                    <p>
                        <span>
                            {{ item[0].strIngredient7 }}
                        </span>
                        {{ item[0].strMeasure7 }}
                    </p> 
                </div>

                <div class="card-recipes-recipe"> {{ item[0].strInstructions }} </div>

                <div class="card-recipes-add-comment">

                    <form action="">
                        <!-- <input type="textarea" maxlength="512" value="déposez un commentaire">
                        <br/> -->
                        <textarea  class="form-control" maxlength="512" v-model='User.commentaire'>Laissez un commentaire</textarea>
                        <br/>
                        <input type="submit" value="Envoyer" v-on:click='addToAPI'>
                    </form>

                </div>

                <div class="card-recipes-comments"> 
                    <div>
                        <SliderComments/>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

import axios from 'axios'
import SliderComments from './SliderComments.vue'

export default {
    name: 'CardRecipes',
    props: ["revele", "toggleModal", "idModal"],
    data() {
        return {
            User : {commentaire:''},
            tabi : []
        }

        
    },

    methods: {
        addToAPI() {

            let newUser = {
                comment: this.User.commentaire
            }
            console.log(newUser);

            axios.post('http://localhost:4001/api/commentaires' , newUser)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        },
         async getResult() {
            const res = await this.$axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.idModal}`
            );
            this.tabi = res.data;
            // console.log("idModal: " + this.idModal);
            console.log(this.tabi);
            return this.tabi;
        },

    },

    components: {
        SliderComments,
        
    }
}

</script>

<style scoped>

.card-recipes {
    position: fixed;
    border: 1px solid black;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    border-radius: 5px;
    z-index: 102;

}

.btn-cancel-card-recipes {
    position: absolute;
    top: 15px;
    right: 15px;

}

.container-card-recipes {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border: 1px solid black;
    top: 50px;
    left: 50px;
    right: 50px;
    bottom: 50px;
    border-radius: 5px;
    }
    
    .card-recipes-image { 
        
        /* box-sizing: border-box; */
        grid-area: 1 / 1 / 4 / 3;
        border: 1px solid black;
        background: red; 
    }

    .card-recipes-title { 
        grid-area: 1 / 3 / 2 / 5;
        border: 1px solid black;
        border-bottom: none;
        background: yellow; 
    }

    .card-recipes-ingredients { 
        grid-area: 2 / 3 / 3 / 5;
        border: 1px solid black;
        border-bottom: none;
        border-top: none;
        background: blue; 
    }

    .card-recipes-recipe { 
        grid-area: 3 / 3 / 4 / 5;
        border: 1px solid black;
        border-top: none;
        background: green; 
    }

    .card-recipes-add-comment {
        
        background: grey;
        grid-area: 4 / 4 / 5 / 5;
    }

    .card-recipes-comments { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-area: 4 / 1 / 5 / 4;
        border: 1px solid black;
        background: purple; 
    }

textarea {
    /* padding: 0; */
    min-width:calc(100% - 6px);
    max-width:calc(100% - 6px);
    /* min-height:80px; */
    height:calc(75% - 6px);
    width:calc(100% - 6px);
}

input {
    width:100%;
    border-radius: 5px;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: flex;
    align-items: flex-start;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}


        
</style>