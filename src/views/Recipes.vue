<template>
	<div class="container-recipes">
		<Filter
			v-model:name="name"
			v-model:ingredient="ingredient"
			v-bind:getByName="getByName"
			v-bind:getByIngredient="getByIngredient"
			v-bind:clear="clear"
		/>
		<div v-if="this.tab.length == 0" class="container-recipes-slider">
			<SliderPopular />
			<SliderRandom />
		</div>
		
		<ResultFilter v-else v-bind:tab="tab" />
	</div>
</template>

<script>
	import Filter from '../components/Filter.vue';
	import SliderRandom from '../components/SliderRandom.vue';
	import SliderPopular from '../components/SliderPopular.vue'
	import ResultFilter from '../components/ResultFilter.vue';

	export default {
		name: 'Recipes',

		components: { 
			Filter, 
			SliderRandom,
			SliderPopular,
			ResultFilter 
		},
		data() {
			return {
				name: '',
				ingredient: '',
				tab: []
			};
		},
		methods: {
			//search by name
			async getByName() {
				const res = await this.$axios.get(process.env.VUE_APP_BASE_URL_API + `/search.php?s=${this.name}`);

				this.tab = res.data.drinks;
				return this.tab;
			},
			//search by ingredient
			async getByIngredient() {
				const res = await this.$axios.get(process.env.VUE_APP_BASE_URL_API + `/filter.php?i=${this.ingredient}`);
				this.tab = res.data.drinks;
				return this.tab;
			}
		}
	};
</script>

<style scoped>
	.container-recipes {
		width: 100vw;
		height: 80vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.container-recipes-slider {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
</style>
