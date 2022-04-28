<template>
    <div class="container-form">
        <img src="../assets/images/fond-left-form-contact.png" alt="" />
        <div class="container-form-contact">
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
                <input id="inputEmail" type="email" required v-model="email" />
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
                <textarea
                    type="text"
                    required
                    rows="5"
                    v-model="message"
                    @keyup.enter="
                        mailSend();
                        showResponse();
                    "
                />
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

                <span v-if="mineur">
                    {{ messMineur }}
                </span>
            </div>
        </div>
        <img
            class="img-droite"
            src="../assets/images/fond-right-form-contact.png"
            alt=""
        />
    </div>
</template>

<script>
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
            show: false,
            mineur: false,
            messMineur:
                "Vous êtes mineur, vous ne pouvez pas envoyer de message",
        };
    },
    methods: {
        mailSend: function () {
            //valid email
            let inputEmail = document.getElementById("inputEmail");
            let validRegex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (inputEmail.value.match(validRegex)) {
                //valid age
                let today = new Date(),
                    birthDate = new Date(this.birthDate),
                    age = today.getFullYear() - birthDate.getFullYear(),
                    m = today.getMonth() - birthDate.getMonth();
                if (
                    m < 0 ||
                    (m === 0 && today.getDate() < birthDate.getDate())
                ) {
                    age--;
                }
                if (age > 18) {
                    this.$axios
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
                                this.show = true;
                            } else {
                                this.response =
                                    "Votre message a bien été envoyé.";
                                this.show = true;

                                //nettoyer les input si le message est bien envoyé
                                this.firstname = "";
                                this.name = "";
                                this.email = "";
                                this.birthDate = "";
                                this.subject = "";
                                this.message = "";
                            }
                        });
                } else {
                    this.mineur = true;
                }
            } else {
                this.response = "email invalide";
                this.show = true;
            }
        },
        showResponse: function () {
            setTimeout(() => {
                this.show = false;
                this.mineur = false;
            }, 6000);
        },
    },
};
</script>

<style scoped>
.container-form {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container-form img {
    height: 65vh;
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

.container-btn-msg {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-btn-msg input {
    background-color: #bace6a;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 5px;
    margin-top: 10px;
}

@media (max-width: 900px) {
    .container-form {
        height: 80vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .container-form:before {
        content: "";
        background: center / cover no-repeat
            url("../assets/images/fond-left-and-right-contact.png");
        opacity: 0.5;
        display: block;
        width: 100%;
        height: 80vh;
        position: absolute;
        z-index: 1;
    }
    .container-form-contact {
        height: 100%;
        z-index: 2;
        background-color: #fffef9;
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .container-form img {
        display: none;
    }
}

@media screen and (max-width: 450px) and (orientation: portrait) {
    .container-form {
        height: 100%;
    }
}
</style>
