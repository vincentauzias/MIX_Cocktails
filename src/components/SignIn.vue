<template>
    <form @submit="onSubmit">
        <!-- PSEUDO -->
        <div class="input-pseudo">
            <label for="">Pseudo :</label>
            <input type="text" name="pseudo" id="pseudo" placeholder="Entrer votre pseudo">
        </div>

        <!-- EMAIL -->
        <div class="input-">
            <label for="">Email :</label>
            <input type="email" name="email" id="email" placeholder="Entrer votre email">
        </div>
        
        <!-- BIRTHDATE -->
        <div class="input-birthdate">
            <label for="">Date de naissance :</label>
            <input type="date" name="birthdate" id="birthdate">
        </div>
        
        <!-- PASSWORD -->
        <div class="input-password">
            <label for="">Password :</label>
            <input type="text" name="password" id="password" placeholder="Entrer votre password">
        </div>
        
        <!-- CONFIRM PASSWORD -->
        <div class="input-confirm-password">
            <label for="">Confirmation Password :</label>
            <input type="text" name="confirmPassword" id="confirmPassword" placeholder="Confirmer votre password">
        </div>

        <!-- SUBMIT BUTTON -->
        <div class="input-submit-button">
            <button>Sign In</button>
        </div>
    </form>
</template>

<script>

    export default {
        name: 'SignIn',
        methods: {
            onSubmit() {

            }
        }
    }

</script>

<style scoped>
    
</style>