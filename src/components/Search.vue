<template>
    <div class="container-search">
        <div class="carousel">
            <div class="container-input-search">
                <input
                    v-model="search"
                    @keyup.enter="getList"
                    placeholder="Rechercher par nom..."
                />

                <ul class="list-search">
                    <li
                        @click="
                            toggleModal();
                            test($event);
                        "
                        class="list-search-item"
                        v-for="element in tab"
                        :key="element.idDrink"
                        :id="element.idDrink"
                    >
                        <img
                            class="img-search-home"
                            :src="element.strDrinkThumb"
                            :id="element.idDrink"
                        />

                        <span :id="element.idDrink">{{
                            element.strDrink
                        }}</span>
                    </li>
                </ul>
                <button @click="getList">Rechercher</button>
            </div>
            <div class="carousel-item">
                <div class="carousel-container-img1"></div>
            </div>
            <div class="carousel-item">
                <div class="carousel-container-img2"></div>
            </div>
            <div class="carousel-item">
                <div class="carousel-container-img3"></div>
            </div>
            <div class="carousel-item">
                <div class="carousel-container-img4"></div>
            </div>
            <div class="carousel-item">
                <div class="carousel-container-img5"></div>
            </div>
            <div class="carousel-item">
                <div class="carousel-container-img6"></div>
            </div>
            <div class="carousel-item">
                <div class="carousel-container-img7"></div>
            </div>
        </div>
        <CardRecipes
            :idModal="idDrinkChoice"
            v-bind:revele="revele"
            v-bind:toggleModal="toggleModal"
        />
    </div>
</template>

<script>
import CardRecipes from "./CardRecipes.vue";
import dotenv from "dotenv";
dotenv.config();

export default {
    name: "Search",
    components: {
        CardRecipes,
    },

    data() {
        return {
            search: "",
            tab: [],
            revele: false,
            idDrinkChoice: "",
        };
    },

    methods: {
        test(event) {
            this.idDrinkChoice = event.target.id;
            return this.idDrinkChoice;
        },
        async getList() {
            const res = await this.$axios.get(
                process.env.VUE_APP_BASE_URL_API +
                    `/search.php?s=${this.search}`
            );
            this.tab = res.data.drinks;
            return this.tab;
        },
        toggleModal: function () {
            this.revele = !this.revele;
        },
    },
};

//carousel
window.onload = function () {
    var slides = document.getElementsByClassName("carousel-item"),
        addActive = function (slide) {
            slide.classList.add("active");
        },
        removeActive = function (slide) {
            slide.classList.remove("active");
        };
    addActive(slides[0]);

    setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                slides[0].style.zIndex = 100;
                setTimeout(removeActive, 750, slides[i]); //Doesn't be worked in IE-9
                break;
            }
            if (slides[i].classList.contains("active")) {
                slides[i].removeAttribute("style");
                setTimeout(removeActive, 750, slides[i]); //Doesn't be worked in IE-9
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 5000);
};
</script>

<style scoped>
.container-search {
    width: 100vw;
    height: 72.6vh;
}
.none {
    display: none;
}

/* search home */
.container-input-search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-input-search input {
    height: 50px;
    width: 40vw;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 10px;
}

.container-input-search button {
    background-color: #bace6a;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 10px;
    margin-top: 10px;
}

/* list search */

.list-search {
    padding: 0;
    margin: 0;
    max-height: 214px;
    overflow: scroll;
    overflow-x: hidden;

    border-radius: 5px;
}
::-webkit-scrollbar {
    width: 2px;
    height: 90%;
}
::-webkit-scrollbar-track {
    background-color: rgb(182, 177, 177);
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-corner {
    background-color: black;
}
.list-search-item {
    background-color: #fff;
    width: 40vw;
    list-style: none;
    display: flex;
    align-items: center;
    margin: 1px 0;
    cursor: pointer;
}

.list-search :hover {
    background-color: #dedbcc;
}

.list-search-item span {
    padding-left: 10px;
}
.img-search-home {
    height: 50px;
    width: 60px;
    border-radius: 2px;
    padding: 10px;
}

.carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: center / cover no-repeat url(../assets/images/cocktail10.jpg);
}
.carousel .carousel-item {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 100%;
}
.carousel .carousel-item.active {
    left: 0;
    transition: all 0.8s ease-out;
}
.carousel .carousel-item div {
    height: 100%;
}

.carousel .carousel-item .carousel-container-img1 {
    background-image: url(../assets/images/cocktail1.jpg);
    background-size: cover;
    background-position: center;
}
.carousel .carousel-item .carousel-container-img2 {
    background-image: url(../assets/images/cocktail2.jpg);
    background-size: cover;
    background-position: center;
}
.carousel .carousel-item .carousel-container-img3 {
    background-image: url(../assets/images/cocktail8.jpg);
    background-size: cover;
    background-position: center;
}
.carousel .carousel-item .carousel-container-img4 {
    background-image: url(../assets/images/cocktail4.jpg);
    background-size: cover;
    background-position: center;
}

.carousel .carousel-item .carousel-container-img5 {
    background-image: url(../assets/images/cocktail5.jpg);
    background-size: cover;
    background-position: center;
}

.carousel .carousel-item .carousel-container-img6 {
    background-image: url(../assets/images/cocktail6.jpg);
    background-size: cover;
    background-position: center;
}

.carousel .carousel-item .carousel-container-img7 {
    background-image: url(../assets/images/cocktail9.jpg);
    background-size: cover;
    background-position: center;
}

@media (max-width: 900px) {
    .container-input-search input {
        width: 60vw;
    }
}

@media screen and (max-width: 450px) and (orientation: portrait) {
    .carousel {
        position: relative;
        width: 100%;
        height: 100%;
        background: center / cover no-repeat
            url(../assets/images/cocktail10.jpg);
    }
    .carousel .carousel-item {
        display: none;
    }
    .carousel .carousel-item.active {
        display: none;
    }
    .carousel .carousel-item div {
        display: none;
    }

    .carousel .carousel-item .carousel-container-img1 {
        display: none;
    }
    .carousel .carousel-item .carousel-container-img2 {
        display: none;
    }
    .carousel .carousel-item .carousel-container-img3 {
        display: none;
    }
    .carousel .carousel-item .carousel-container-img4 {
        display: none;
    }

    .carousel .carousel-item .carousel-container-img5 {
        display: none;
    }

    .carousel .carousel-item .carousel-container-img6 {
        display: none;
    }

    .carousel .carousel-item .carousel-container-img7 {
        display: none;
    }
}
</style>
