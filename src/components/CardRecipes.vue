<template>
      <div class="card-recipes">
        <button class="btn-cancel-card-recipes">X</button>

        <div class="container-card-recipes">

            <div class="card-recipes-image"> image </div>

            <div class="card-recipes-title"> titre </div>

            <div class="card-recipes-ingredients"> ingredients </div>

            <div class="card-recipes-recipe"> recette </div>

            <div class="card-recipes-add-comment">

                <form action="">
                    <!-- <input type="textarea" maxlength="512" value="déposez un commentaire">
                    <br/> -->
                    <textarea  class="form-control" maxlength="512">Laissez un commentaire</textarea>
                    <br/>
                    <input type="submit" value="Envoyer">
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

import SliderComments from './SliderComments.vue'

export default {
    name: 'Card_Recipes',
    data() {

        
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


        
</style>