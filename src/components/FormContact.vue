<template>
    <div class="container-form-contact">
        <img src="../assets/images/fond-left-form-contact.png" alt="" />
        <div>
            <div class="container-field">
                <label for="firstName">Prénom:</label>
                <input type="text" required v-model="firstname" />
            </div>
            <div class="container-field">
                <label for="name">Nom:</label>
                <input type="text" required v-model="name" />
            </div>
            <div class="container-field">
                <label for="email">Email:</label>
                <input type="email" required v-model="email" />
            </div>
            <div class="container-field">
                <label for="birthDate">Date de naissance:</label>
                <input type="date" required v-model="birthDate" />
            </div>
            <div class="container-field">
                <label for="subject">Sujet:</label>
                <input type="text" required v-model="subject" />
            </div>
            <div class="container-field">
                <label for="message">Message:</label>
                <textarea type="text" required rows="5" v-model="message" />
            </div>
            <div class="container-btn-msg">
                <input
                    @click="
                        mailSend();
                        showResponse();
                    "
                    type="submit"
                    value="Envoyer"
                />
                <span v-if="show">
                    {{ response }}
                </span>
            </div>
        </div>
        <img src="../assets/images/fond-right-form-contact.png" alt="" />
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "FormContact",
    components: {},

    data() {
        return {
            firstname: "",
            name: "",
            email: "",
            birthDate: "",
            subject: "",
            message: "",
            response: "",
            show: true,
            mineur: false,
            messMineur:
                "Vous êtes mineur, vous ne pouvez pas envoyer de message",
        };
    },
    methods: {
        mailSend: function () {
            let today = new Date(),
                birthDate = new Date(this.birthDate),
                age = today.getFullYear() - birthDate.getFullYear(),
                m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            console.log(age);
            if (age > 18) {
                axios
                    .post("/api/send", {
                        firstname: this.firstname,
                        name: this.name,
                        email: this.email,
                        birthDate: this.birthDate,
                        subject: this.subject,
                        message: this.message,
                    })
                    .then((res) => {
                        //vérifier la réponse venant de node, via les messages d'erreurs
                        if (
                            res.data.msg ===
                            "Une erreur est survenue, merci de rééssayer plus tard."
                        ) {
                            this.response = "non ok";
                            // alert("ok");
                        } else {
                            this.response = "Votre message a bien été envoyé.";
                            //nettoyer les input si le message est bien envoyé
                            this.firstname = "";
                            this.name = "";
                            this.email = "";
                            this.birthDate = "";
                            this.subject = "";
                            this.message = "";
                            // alert('fuck off')
                        }
                    });
            } else {
                this.mineur = true;
            }
        },
        showResponse: function () {
            setTimeout(() => {
                this.show = false;
            }, 6000);
        },
    },
};
</script>

<style scoped>
img {
    height: 70vh;
}
.container-form-contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container-form-contact img {
    opacity: 0.5;
}

.container-field {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px 0;
}
.container-field input,
.container-field textarea {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    padding-left: 10px;
}

.container-btn-msg{
    display: flex;
    flex-direction: column;
    align-items: center;
}

input[type="submit"] {
    background-color: #bace6a;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;
}
</style>
