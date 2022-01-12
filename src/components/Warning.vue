<template>
    <div class="bloc-modal-warning" v-if="appear">
        <div class="overlay"></div>
        <div class="modal">
            <div class="content-modal">
                <h1>Contenu réservé à un public adulte</h1>
                <h3>Êtes-vous majeur(e) dans votre pays de résidence?</h3>
                <div class="container-btn-warning">
                    <button @click="toggleModal">OUI</button>
                    <a href="https://www.google.com">NON</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Warning",
    props: ["appear", "toggleModal"],
};
</script>

<style scoped>
.bloc-modal-warning {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 102;
}

.overlay {
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.modal {
    background: #fff;
    color: #333;
    padding: 15px;
    position: fixed;
}

.content-modal {
    border: 1px solid black;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fffef9;
}

.container-btn-warning {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.container-btn-warning button,
.container-btn-warning a {
    background: #aad620;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px 30px;
    cursor: pointer;
    margin-left: 10px;
}

.container-btn-warning a {
    background: #eb5757;
    text-decoration: none;
    color: black;
}

.btn-modal {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
