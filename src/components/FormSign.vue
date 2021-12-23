<template>
    <SignIn />
    <SignUp />
</template>

<script>
    import SignIn from './SignIn.vue'
    import SignUp from './SignUp.vue'
    
    export default {
        name: 'FormSign',
        components: {
            SignIn,
            SignUp
        }
    }

</script>

<style>

</style>