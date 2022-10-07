<template>

  <hr>
  <h2 class="projects-type">Projets d'autoformation</h2>


  <div class="cardsContainer">
    <div class="projectCard" v-for="data in cardsDataSolo" :key="data.id">
      <ImgModal v-if="showModal" :carousel="carouselImg" :id="data.id" />

      <div class="cardTitle">
        <div class="card-head">
          <h2 class="projectName">{{ data.projectName }}</h2>
          <div class="summary">{{ data.summary }}</div>
          <div class="cardLink-container">
            <a class="cardLink" v-if="data.site" :href="data.site" target="_blank">Voir le
              site</a>
            <a class="cardLink" v-if="data.github" :href="data.github" target="_blank">Repo
              git</a>
          </div>
        </div>
        <img class="img-preview" title="Cliquez moi !" :src="require(`../assets/preview/${data.img}`)" :alt="data.alt"
          @click="displayImg(data.carousel)" />
      </div>

      <div class="cardMore--info">
        <div class="cardMore">
          <div class="improved-skill">
            <label>Improved skills :</label>
            <div class="improved-skill-img-container">
              <div class="improved-skill-element" v-for="skill in data.skills" :key="skill">
                <img class="improved-skill-img" :src='skill + ".svg"' :alt="skill + ' logo'" />
                <p class="improved-skill-label">{{skill}}</p>
              </div>
            </div>
          </div>
          <div>
            <p><label>Description :</label> {{ data.description }}</p>
          </div>
          <div v-if="data.realisation">
            <p><label>Réalisation :</label> {{ data.realisation }}</p>
          </div>
        </div>
      </div>
    </div> <!-- fin cardmore -->
  </div>

  <hr>
  <h2 class="projects-type">Projets professionnalisants soumis à l'évaluation lors de ma formation</h2>


  <div class="cardsContainer">
    <div class="projectCard" v-for="data in cardsDataPro" :key="data.id">
      <ImgModal v-if="showModal" :carousel="carouselImg" :id="data.id" />
      <div class="cardTitle">
        <div class="card-head">
          <h2 class="projectName">{{ data.projectName }}</h2>
          <div class="summary">{{ data.summary }}</div>
          <div class="cardLink-container">
            <a class="cardLink" v-if="data.site" :href="data.site" target="_blank">Voir le site</a>
            <a class="cardLink" v-if="data.github" :href="data.github" target="_blank">Repo git</a>
          </div>
        </div>
        <img class="img-preview" :src="require(`../assets/preview/${data.img}`)" :alt="data.alt"
          @click="displayImg(data.carousel)" />
      </div>

      <div class="cardMore">
        <div class="cardMore--info">
          <div class="improved-skill">
            <label>Improved skills :</label>
            <div class="improved-skill-img-container">
              <div class="improved-skill-element" v-for="skill in data.skills" :key="skill">
                <img class="improved-skill-img" :src='skill + ".svg"' :alt="skill + ' logo'" />
                <p class="improved-skill-label">{{skill}}</p>
              </div>
            </div>
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

        <div class="btn-more" @click="displayImg(data.carousel)">
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
      toogleMoreDetails: false,
    }
  },
  methods: {
    cardMore(e) {
      this.cardId = e.target.id;
      this.toogleMoreDetails = !this.toogleMoreDetails
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
    cardsDataPro: Array,
    cardsDataSolo: Array,
  },
  components: {
    ImgModal
  }
}
</script>


<style lang="scss">
// -------- colors --------
$dark-main : #444;
// $dark-main: darken(#475C7A, 10%);
$grey : #685D79;
// $darkred : #AB6C82;
$darkred: #475C7A;
$red: darken(#475C7A, 10%);
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;

// -------- banner OC --------
.projects-type {
  font-size: xxx-large;
  color: $red;
  font-family: 'Bebas Neue', cursive;
  margin: 32px auto;
  padding: 16px 0 0;
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

.card-head {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 180px;
}

.projectCard {
  background-color:#333;
  box-shadow: 12px 16px #111;
  display: flex;
  flex-direction: column;
  background: $dark-main;
  width: 46%;
  border: 4px solid $orange;
  border-radius: 4px;
  border-top-right-radius: 24px;
  margin: 16px;
}

.cardTitle {
  border-top-right-radius: 20px;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  & .img-preview {
    height: 360px;
    min-height: 280px;
    object-fit: cover;
    border-top: $orange 4px solid;
    border-bottom: $orange 4px solid;
    cursor: pointer;
  }
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

.btn-more {
  display: none;
}

.cardLink-container {
  display: flex;
  justify-content: center;
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
  margin: 16px 3%;
  background: darken($dark-main, 20%);

  &:hover {
    cursor: pointer;
    color: $orange;
    border: 2px solid $cream;
    background: $grey;
  }
}

.cardMore {
  text-align: left;
  white-space: break-spaces;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &-btn {
    width: 40%;
    margin: 0 auto;
  }

  &--info {
    padding: 0 12px;
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

.improved-skill {
  padding: 12px 0;
  display: flex;
  align-items: center;

  &-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 4px;
  }

  &-img {
    height: 62px;
    width: 62px;

    &-container {
      display: flex;
      flex-direction: row;
    }
  }

  &-label {
    margin: 2px 0 !important;
    font-size: small !important;
  }
}

.more-detail-btn {
  width: 100px;
}

//----------- Media query -----------
// ---- laptop ----
@media screen and (max-width : 1400px) {

  .projectCard {
    width: 80%;
    margin: 32px 0;
  }

  .cardTitle {
    & img {
      height: auto;
      background: #222;

    }
  }

  .improved-skill-img {
    height: 62px;
    width: 62px;
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
    margin: 8px auto;

  }

  .cardsContainer {
    flex-direction: column;
  }

  .projectCard {
    width: 88%;
    margin: 16px auto;
  }

  .improved-skill-img {
    height: 52px;
    width: 52px;
  }

}

// ----- MOBILE -----
@media screen and (max-width : 730px) {
  .projectName {
    font-size: x-large;
  }

  .summary {
    font-size: larger;
    letter-spacing: 0.2px;
  }

  .projectCard {
    width: 92%;
    margin: 16px auto;
  }

  .cardTitle {
    & img {
      object-fit: contain;
    }
  }

  .improved-skill-img {
    height: 42px;
    width: 42px;
  }
}
</style>