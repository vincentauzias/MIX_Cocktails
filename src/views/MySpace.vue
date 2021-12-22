<template>
  <div class="slide-random-container">
    <div class="slide-random-content">
      <SliderRandom />
    </div>
  </div>
</template>

<script>
  import SliderRandom from '../components/SliderRandom.vue'

  export default {
    name: 'MySpace',
    components: {
      SliderRandom,
    },
  }
</script>

<style>
  .slide-random-container {
    width: 100vw;
    height: 100vh;
  }

  .slide-random-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>