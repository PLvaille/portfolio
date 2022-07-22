<template>
  <hr>
  <h2>Projets professionnalisants</h2>
  <div class="cardsContainer">
    <div class="projectCard" v-for="data in cardsData" :key="data.id">
      <ImgModal v-if="showModal" :carousel="carouselImg" :id="data.id" />
      <div class="cardTitle">
        <h2 class="projectName">{{ data.projectName }}</h2>
        <div class="summary">{{ data.summary }}</div>
        <a class="cardLink" v-if="data.link.includes('.io')" :href="data.link" target="_blank">Voir le site</a>
        <a class="cardLink" v-if="!data.link.includes('.io')" :href="data.link" target="_blank">Repo git</a>

      </div>

      <div class="cardMore" :id="data.id" @mouseenter="mouseInCard($event)" @mouseleave="mouseOutCard($event)"
        @click="displayImg(data.carousel)">
        <Transition name="fade">
          <img title="Cliquez moi !" v-if="isCursorInCard && data.id == cardId" :src="require(`../assets/preview/${data.img}`)"
            :alt="data.alt">

          <div v-else class="cardMore--info">
            <div>
              <p><label>Improved skills :</label> {{ data.skills }}</p>
            </div>
            <div>
              <p><label>Resources :</label> {{ data.ressources }}</p>
            </div>
            <div>
              <p><label>Description :</label> {{ data.description }}</p>
            </div>
            <div>
              <p><label>Specifications :</label> {{ data.specs }}</p>
            </div>
            <div>
              <p><label>Realisations :</label> {{ data.realisation }}</p>
            </div>
          </div>
        </Transition>


        <div class="btnMore">
          +
        </div>

      </div> <!-- fin cardmore -->
    </div>
  </div>



</template>

<script>
import ImgModal from './ImgModal.vue'

export default {
  data() {
    return {
      isCursorInCard: false,
      showModal: false,
      cardId: "",
      projectImg: "",
      carouselImg: [],
    }
  },
  methods: {
    mouseInCard(e) {
      if (screen.width > 580) {
        this.cardId = e.target.id;
        this.isCursorInCard = true;
      }
    },
    mouseOutCard() {
      this.isCursorInCard = false;
    },

    displayImg(carousel) {
      
      this.carouselImg = carousel;
      this.showModal = !this.showModal;

    },
    closeModalBtn() {
      if (this.closeModal)
        this.showModal = false;
    }
  },
  props: {
    cardsData: Array
  },
  components: {
    ImgModal
  }
}
</script>


<style lang="scss">
// -------- colors --------
$dark-main: #475C7A;
$grey : #685D79;
$darkred : #AB6C82;
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;

// -------- anim --------
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// -------- banner OC --------
h2 {
  font-size: xx-large;
  color: $grey;
  font-family: 'Bebas Neue', cursive;
  margin: 16px;
}

// -------- cards --------

.cardsContainer {
  position: relative;
  margin-top: -8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & p {
    font-family: 'Roboto', sans-serif;
    margin: 14px 0;
  }
}

.projectCard {
  background: darken($dark-main, 10%);
  width: 42%;
  border: 4px solid $darkred;
  border-radius: 8px;
  margin: 16px;

}

.cardTitle {
  background: ($dark-main);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  border-bottom: 1px solid $cream;
  height: 160px;
}

.projectName {
  font-family: 'Shadows Into Light', cursive;
  //font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 800;
  margin: 4px 0;
  color: $orange;
  font-size: xx-large,
}

.summary {
  font-family: 'Bebas Neue', cursive;
  color: whitesmoke;
  font-size: x-large;
  // margin-bottom: 24px;
}

.btnMore {
  display: none;
}

.cardLink {
  //@debugfont-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-family: 'Shadows Into Light', cursive;
  font-weight: 400;
  border: 2px solid $red;
  border-radius: 8px;
  padding: 8px;
  text-decoration: none;
  text-align: center;
  font-size: large;
  color: $orange;
  width: 120px;
  margin: 16px auto;
  background: darken($dark-main, 20%);

  &:hover {
    color: $orange;
    border: 2px solid $cream;
    background: $grey;
  }
}

.cardMore {
  position: relative;
  cursor: pointer;
  text-align: left;
  white-space: break-spaces;
  min-height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &--info {
    position: relative;
    padding: 0 8px;
  }

  & img {
    z-index: 2;
    position: absolute;
    top: 8px;
    min-height:450px;
    height:450px;
    max-height: 450px;
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    object-fit: cover;
    margin: 0 6px;


  }

  & label {
    font-family: 'Bebas Neue', cursive;
    font-size: larger;
    color: $red;
    text-decoration: underline;
    text-decoration-color: white;
    text-underline-offset: 3px;
  }
}

//----------- Media query -----------
// ---- laptop ----
@media screen and (max-width : 1400px) {

  .projectCard {
    width: 46%;
    margin: 8px;
  }

  .cardTitle {
    height: 180px;
  }

  .cardMore {
    height: 610px;

    & img {
      top: 20%;
    }
  }
}

// ----- TABLETTES -----
@media screen and (max-width : 1024px) {
  .btnMore {
    border: 2px solid $red;
    color: $orange;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: xx-large;
    z-index: 9990;
    display: initial;
    background: darken($dark-main, 20%);
    margin:8px auto;

  }

  .cardsContainer {
    flex-direction: column;
  }

  .projectCard {
    width: 88%;
    margin: 16px auto;
  }

  .cardMore {
    & img {
      top: 8%;
      margin: 0 7px;
    }
  }

}

// ----- MOBILE -----
@media screen and (max-width : 600px) {


  .projectName {
    font-size: x-large;
  }

  .summary {
    font-size: larger;
    letter-spacing: 0.2px;
  }

  .projectCard {
    height: auto;
    width: 92%;
    margin: 16px auto;
  }

  .cardMore {
    height: auto;
  }

  .cardTitle {
    height: 180px;
  }
}
</style>