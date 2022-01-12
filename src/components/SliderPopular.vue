<template>
    <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        :dragging-distance="70"
        :bullets="false">

        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide['strDrinkThumb']"
            :title="slide['strDrink']"
        />

    </vueper-slides>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    import dotenv from 'dotenv'
    
    dotenv.config()

    export default {
        name: 'SliderPopular',
        components: { 
            VueperSlides, 
            VueperSlide
        },
        data() {
            return {
                slides: []
            }
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
    .vueperslides {
        width: 75%;
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