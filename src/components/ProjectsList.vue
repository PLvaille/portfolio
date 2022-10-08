<template>
  <ImgModal v-if="showModal" :carousel="carouselImg" :position="position" />

  <div class="projects-main">
    <div class="cards-container">
      <div class="project-card" v-for="data in cardsData" :key="data.id">

        <div class="card-title">
          <div class="card-head">
            <h2 class="project-name">{{ data.projectName }}</h2>
            <div class="summary">{{ data.summary }}</div>
            <div v-if="data.projetperso">Projet perso</div>
            <div v-else>Projet réalisé lors de ma formation</div>
            <div class="card-link-container">
              <a class="card-link" v-if="data.site" :href="data.site" target="_blank">Voir le site</a>
              <a class="card-link" v-if="data.github" :href="data.github" target="_blank">Repo git</a>
            </div>
          </div>
          <img class="img-preview" :src="require(`../assets/preview/${data.img}`)" :alt="data.alt"
            @click="displayImg(data.carousel, data.id)" />
        </div>

        <div class="card-more">
          <div class="card-more--info">
            <div class="improved-skill">
              <label>Improved skills :</label>
              <div class="improved-skill-img-container">
                <div class="improved-skill-element" v-for="skill in data.skills" :key="skill">
                  <img class="improved-skill-img" :src='skill + ".svg"' :alt="skill + ' logo'" />
                  <p class="improved-skill-label">{{skill}}</p>
                </div>
              </div>
            </div>
            <div class="card-more-anim">
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

          </div>
        </div> <!-- fin card-more -->
      </div>
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
      // toogleMoreDetails: false,
      position: "",
    }
  },
  methods: {
    // cardMore(e) {
    //   this.cardId = e.target.id;
    //   this.toogleMoreDetails = !this.toogleMoreDetails
    // },

    displayImg(carousel) {
      this.position = event.clientY;
      this.carouselImg = carousel;
      this.showModal = !this.showModal;
    },

    closeModalBtn() {
      if (this.closeModal)
        this.showModal = false;
    }
  },
  props: {
    cardsData: Array,
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
$darkred1 : #AB6C82;
$red: darken(#475C7A, 10%);
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;


// -------- cards --------
.cards-container {
  //anim
  animation: project_pop ease-out 0.3s forwards;
  transition: all ease 2s;
  position: relative;
  margin: 12px 0 28px;
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


.project-card {
  height: fit-content;
  max-height: fit-content;
  max-width: fit-content;
  width: 40%;

  display: flex;
  flex-direction: column;

  background: linear-gradient(190deg, $cream, #222 17%);
  box-shadow: 4px 8px #111;


  border: 4px solid $orange;
  border-radius: 4px;
  border-top-right-radius: 24px;

  margin: 28px auto;

 
  // anim hover off
  animation: project_hover_reverse ease-out 0.7s forwards;
  transition: all ease 2s;

  &:hover {
    animation: project_hover ease-out 0.7s forwards 0.2s;
  }
}


.card-title {
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  & .img-preview {
    height: 430px;
    min-height: 280px;
    object-fit: cover;
    border-radius: 32px;
    margin: 12px 12px;
    object-position: 50% 0%;
    cursor: pointer;
   

    //img anim hover off
    transition: all linear 2s;
    border: $red 4px solid;
    animation: img_pop_reverse 0.8s ease-in-out forwards;

    &:hover {
      //img anim
      animation: img_pop 0.8s ease-in-out forwards, img_scroll 3s ease-in-out alternate infinite;
      border: solid 4px darken($red, 10%);
    }
  }
}

.project-name {
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


.card-link-container {
  display: flex;
  justify-content: center;
}

.card-link {
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

.card-more {
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
  flex-wrap: wrap;

  &-element {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 4px;
  }

  &-img {
    background: wheat;
    border-radius: 50%;
    height: 62px;
    width: 62px;

    &-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &-label {
    margin: 2px 0 !important;
    font-size: smaller;
  }
}

.more-detail-btn {
  width: 100px;
}

//----------- Media query -----------
// ---- laptop ----
@media screen and (max-width : 1400px) {

  .project-card {
    width: 80%;
    margin: 32px auto;
  }

  .card-title {
    & img {
      height: auto;
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

  .cards-container {
    flex-direction: column;
  }

  .project-card {
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
  .project-name {
    font-size: x-large;
  }

  .summary {
    font-size: larger;
    letter-spacing: 0.2px;
  }

  .project-card {
    width: 92%;
    margin: 32px auto;
  }

  .card-title {
    & img {
      object-fit: contain;
    }
  }

  .improved-skill-label {
    font-size: 10px;
  }

  .improved-skill-img {
    height: 42px;
    width: 42px;
  }
}
</style>