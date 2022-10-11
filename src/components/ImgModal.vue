<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <!-- :style="{top: position + 'px'}" -->

                <button v-if="carousel.length > 1" @click="decrementCarousel()"
                    class="carouselBtn carouselBtnPrev">⬅️</button>
                <button v-if="carousel.length > 1" @click="incrementCarousel()"
                    class="carouselBtn carouselBtnNext">➡️</button>
                <button class="carouselBtn carouselBtnClose" @click="$parent.displayImg()">X</button>
                <div class="modal-body"><img :src="require(`../assets/img/${carousel[carouselImgIndex]}`)" /></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        carousel: {
            type: Array,
        },
        id: {
            type: Number,
        },
        position: {
            type: Number,
        },
    },
    data() {
        return {
            carouselImgIndex: 0,
        }
    },

    methods: {

        incrementCarousel() {
            this.carouselImgIndex == (this.carousel.length - 1) ? this.carouselImgIndex = 0 : this.carouselImgIndex++
        },
        decrementCarousel() {
            this.carouselImgIndex == 0 ? this.carouselImgIndex = (this.carousel.length - 1) : this.carouselImgIndex--
        }
    },
}
</script>

<style lang="scss">
$dark-main: #475C7A;
$grey : #685D79;
$darkred : #AB6C82;
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: table;
    transition: opacity 0.3s ease-in-out;
}

.modal-wrapper {
    backdrop-filter: blur(8px);
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    border: 1px solid white;
    z-index: 9999;
    width: 60%;
    margin: 0px auto;
    padding: 16px 24px;
    background-color: #333;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    position: relative;
}

.modal-body {
    margin: 0 auto;

    & img {
        border-radius:16px;
        max-height: 1000px;
        width: 100%;
        height: fit-content;
        object-fit: contain;
    }
}

.carouselBtn {
    border: solid 2px $dark-main;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        box-shadow: 0 0;
    }
}

.carouselBtnNext {
    position: absolute;
    bottom: 30%;
    right: 2%;
    box-shadow: -2px 2px rgba(0, 0, 0, 0.33);
    padding: 12px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
}

.carouselBtnPrev {
    box-shadow: 2px 2px rgba(0, 0, 0, 0.33);
    position: absolute;
    bottom: 30%;
    left: 2%;
    padding: 12px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}

.carouselBtnClose {
    position: absolute;
    top: 10px;
    right: 10px;
    background: $red;
    border: 2px solid $darkred;
    border-radius: 50%;
    box-shadow: #685D79 3px 3px;
    padding: 10px 13px;

    &:hover {
        background: $darkred ;
        //box-shadow: #685D79 2px 2px;
        border: 2px solid $red;
    }
}

//----------- Media query -----------
// ---- laptop ----
@media screen and (max-width : 1400px) {
    .modal-body {

        & img {
            max-height: 700px;
        }
    }
}

// ----- TABLETTES -----
@media screen and (max-width : 1024px) {
    .modal-body {

        & img {
            max-height: 500px;
        }
    }

    .modal-container {
        width: 88%;
    }

}

// ----- MOBILE -----
@media screen and (max-width : 600px) {
    .modal-body {

        & img {
            max-height: 400px;
        }
    }

    .modal-container {
        width: 88%;
        padding: 8px;
    }

}
</style>