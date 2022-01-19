<template>
  <div class="slide-popular-container">
    <div class="slide-popular-content">
      <SliderPopular />
    </div>
  </div>
</template>

<script>
  import SliderPopular from '../components/SliderPopular.vue'

  export default {
    name: 'MySpace',
    components: {
      SliderPopular,
    },
  }
</script>

<style scoped>
  .slide-popular-container {
    width: 100vw;
    height: 80vh;
  }

  .slide-popular-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>