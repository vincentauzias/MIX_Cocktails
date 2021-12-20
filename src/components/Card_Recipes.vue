<template>
      <div class="card-recipes">
        <button class="btn-cancel-card-recipes">X</button>
        <div class="container-card-recipes">
            <div class="div1"> </div>
            <div class="div2"> </div>
            <div class="div3"> </div>
            <div class="div4"> </div>
            <div class="div5"> 
                <button class="btn-add-comment">Ajoutez un commentaire</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card_Recipes',

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
    /* position: fixed; */
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    /* width: 80%;
    height: 80%; */
    border: 1px solid black;
    top: 50px;
    left: 50px;
    right: 50px;
    bottom: 50px;
    border-radius: 5px;
    }
    
    .div1 { grid-area: 1 / 1 / 4 / 3;
        border: 1px solid black;
        background: red; }
    .div2 { grid-area: 1 / 3 / 2 / 5;
        border: 1px solid black;
        border-bottom: none;
        background: yellow; }
    .div3 { grid-area: 2 / 3 / 3 / 5;
        border: 1px solid black;
        border-bottom: none;
        border-top: none;
        background: blue; }
    .div4 { grid-area: 3 / 3 / 4 / 5;
        border: 1px solid black;
        border-top: none;
        background: green; }
    .div5 { grid-area: 4 / 1 / 5 / 5;
        border: 1px solid black;
        background: purple; }
        
</style>