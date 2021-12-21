<template>
    <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        :slide-ratio="2 / 20"
        :dragging-distance="70"
        :bullets="false"
        :arrows-outside='false'>
        <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />
    </vueper-slides>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    export default {
        name: 'SliderComments',
        components: { 
            VueperSlides, 
            VueperSlide
        },
        data: () => ({
            slides: [{
                title: 'Slide #1',
                content: 'Slide content.'
            }]
        })
}
</script>

<style scoped>
    .vueperslide {
       
        background-color: red;
        transform: scale(0.85);
        opacity: 0.5;
    }

    .vueperslide--active {
        transform: scale(1);
        transition: 0.5s ease-in-out;
        opacity: 1;
        z-index: 1;
    }



    /* .vueperslides__bullets--outside {
        display: none !important;
    } */
</style>