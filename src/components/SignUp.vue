<template id="registerTemplate">
    <form @submit.prevent='onSubmit' ref='form' action="" class='register-form'>
            <h2>Register</h2>
            <div class="form-group" >
                <label for="pseudo">Pseudo :</label>
                <input required type="text" v-model.trim='user.pseudo' id='pseudo' placeholder="Pseduo">
            </div>
            <div class="form-group">
                <label for="email">Email :</label>
                <input required type="email" v-model.trim='user.email' id='email' placeholder="Email">
            </div>
            <div class="form-group">
                <label for="password">Mot de passe :</label>
                <input required type="password" v-model='user.password' placeholder="Mot de passe" id='password'>
            </div>
            <div class="form-group">
                <label for="passwordcheck">Vérification du mot de passe :</label>
                <input required type="password" v-model='user.passwordCheck' placeholder="Vérification du mot de passe" id='passwordcheck'>
            </div>
            <input type="submit" value='Register'>
    </form>
</template>

<script>

export default {
    name: 'SignUp',
    data () {
        return { 
            user : {
                pseudo:'',
                email:'',
                password:'',
                passwordCheck:''
            }
        }
    },
    methods: {
        onSubmit () {
            
        }
    }
}

</script>

<style scoped>
    
</style>