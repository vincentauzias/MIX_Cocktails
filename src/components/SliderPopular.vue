<template>
    <div class="conaiter-slider-populaire">
        <h2>Cocktails populaires :</h2>

        <vueper-slides
            class="no-shadow"
            :visible-slides="7"
            :slideRatio="1/7"
            :dragging-distance="70"
            :bullets="false">

            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                @click="getId($event); toggleModal();"
                :image="slide['strDrinkThumb']"
            >
                <template #content>
                    <div class="vueperslide__content-wrapper" :id="slide['idDrink']">
                        <div class="vueperslide__title" :id="slide['idDrink']">{{ slide['strDrink'] }}</div>
                    </div>
                </template>
            </vueper-slide>

        </vueper-slides>
    </div>
    <CardRecipes
        :idModal="idDrinkChoice"
        v-bind:revele="revele"
        v-bind:toggleModal="toggleModal"
    />
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    import CardRecipes from "../components/CardRecipes.vue";
    import dotenv from 'dotenv'

    dotenv.config()

    export default {
        name: 'SliderPopular',
        components: { 
            VueperSlides, 
            VueperSlide,
            CardRecipes
        },
        data() {
            return {
                slides: [],
                idDrinkChoice: "", 
                revele: false
            }
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
        mounted() {
            this.$axios
            .get(process.env.VUE_APP_BASE_URL_API + '/popular.php')
            .then(rep => {
                this.slides = rep.data.drinks
            })
        }
    }
</script>

<style>
    .conaiter-slider-populaire{
        text-align: center
    }

    .vueperslides {
        width: 70vw;
    }
    
    .vueperslide {
        transform: scale(0.85);
        opacity: 0.5;
        border-radius: 2px;
    }

    .vueperslide--active {
        transform: scale(1);
        transition: 0.5s ease-in-out;
        opacity: 1;
    }

    .vueperslide__title {
        width: 100%;
        background-color: #00000080;
        padding: 4px 0;
        color: #fff;
        
    }

    .vueperslides__arrow {
        font-size: 10px;
    }
</style>