<template>
    <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        :slide-ratio="2 / 20"
        :dragging-distance="70"
        :bullets="false"
        :arrows-outside='false'
       
    >
        <!-- <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" /> -->
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :content="slide['commentaire']"
        />
    </vueper-slides>
 <span v-if='idCocktail'>
    <input type="hidden" name="idCocktail" :value="idCocktail">
</span>
    
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    import axios from 'axios'

    export default {
        name: 'SliderComments',
        components: { 
            VueperSlides, 
            VueperSlide
        },
        data: () => ({
            slides: [],
            testComment: String,
            
        }),

        props: ['idCocktail'],

        methods: {
            idcock() {
                axios.get('http://localhost:4001/api/userComment', { params: { idC: this.idCocktail } })
            }
        },
        created() {
            console.log('connard' +this.idCocktail)
            
        }

        // mounted() {
        //     axios
        //     // .get('http://localhost:4001/api/commentaires', { params: { idCocktail: '11000' } })
        //     .get('http://localhost:4001/api/userComment', { params: { idC: this.idCocktail } })
      
        
        //     // .then((rep) => {
        //     //         this.slides = rep.data.comment,
        //     //         this.testComment = rep.data.comment,
        //     //         console.log('test comment' + rep)
        //     //         console.log(this.slides)
    
        //     //         }

        //     // )
        //     // .catch((error) => { console.log('bouyaka' + error)})
        // }
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

</style>