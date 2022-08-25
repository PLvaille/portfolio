<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

                <button v-if="carousel.length > 1" @click="decrementCarousel()" class="carouselBtn carouselBtnPrev">⬅️</button>
                <button v-if="carousel.length > 1" @click="incrementCarousel()" class="carouselBtn carouselBtnNext">➡️</button>
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
            type: Array
        },
        id: {
            type: Number,
        }
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
    background-color: rgba(0, 0, 0, 0.15);
    display: table;
    transition: opacity 0.3s ease-in-out;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    z-index: 9999;
    width: 88%;
    margin: 0px auto;
    padding: 16px 24px;
    background-color: $cream;
    border: 4px solid $grey;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    position: relative;
}

.modal-body {
       & img {
        width: 100%;
        height: 780px;
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
    bottom:20%;
    right: 2%;
    box-shadow: -2px 2px rgba(0, 0, 0, 0.33);
    padding: 12px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
}

.carouselBtnPrev {
    box-shadow: 2px 2px rgba(0, 0, 0, 0.33);
    position: absolute;
    bottom:20%;
    left: 2%;
    padding: 12px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}

.carouselBtnClose {
    position: absolute;
    top: 10px;
    right: 10px;
    background: $darkred;
    border: 2px solid $red;
    box-shadow: #685D79 2px 2px;
    padding: 6px 9px;

    &:hover {
        background: $red ;
        //box-shadow: #685D79 2px 2px;
        border: 2px solid $darkred;
    }
}

//----------- Media query -----------
// ---- laptop ----
@media screen and (max-width : 1400px) {
    .modal-body {
        & img {
            height: 600px;
        }
    }
}


// ----- TABLETTES -----
@media screen and (max-width : 1024px) {
    .modal-container{
        width:88%;
    }

    .modal-body {
        & img {
            height: 460px;
        }
    }
}

// ----- MOBILE -----
@media screen and (max-width : 600px) {
        .modal-container{
        width:88%;
        padding:8px;
    }

    .modal-body {
        & img {
            height: 236px;
            object-fit: cover;
        }
    }

}
</style>