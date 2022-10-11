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
              <div v-if="data.ressources && data.ressources.length > 3">
                <p><label>Resources :</label> {{ data.ressources }}</p>
              </div>
              <div v-if="data.description && data.ressources.description > 3">
                <p><label>Description :</label> {{ data.description }}</p>
              </div>
              <div v-if="data.specs && data.ressources.specs > 3">
                <p><label>Specifications :</label> {{ data.specs }}</p>
              </div>
              <div v-if="data.realisation && data.realisation.length > 3">
                <p><label>Realisations :</label> {{ data.realisation }}</p>
              </div>
            </div>

          </div>
        </div> <!-- fin card-more -->
      </div>
    </div>
    <button class="btn" @click="topFunction()" id="topBtn" title="Go to top"> Haut de page </button>
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

    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

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
$bgcolor : #e8d0b6;

// btn back to top
#topBtn {
  color:#333;
  text-shadow:none;
  background: rgba(252, 184, 96, 1) !important;
  font-size: x-large;
  border-radius:24px;
  padding:8px;
  margin:24px auto;

  &:hover {
    letter-spacing: normal;
    width:230px;
    background: #333 !important;
    color:$orange;
  }
}

//---

// -------- cards --------
.cards-container {
  //anim

  animation: project_pop ease-out 0.3s forwards;
  transition: all ease 2s;

  padding:0 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  


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
  height: fit-content;
}


.project-card {
  color:$cream;
  border: 1px solid white;
  height: fit-content;
  max-height: fit-content;
  max-width: fit-content;
  width: 30%;
  display: flex;
  flex-direction: column;

  background: linear-gradient(190deg,  #e8d0b6, #222 17%);
  box-shadow: 3px 5px rgba(0, 0, 0, .5);
  border-radius: 4px;
  border-top-right-radius: 24px;

  margin:42px auto;
  padding:24px 0 0 0;

  // anim hover off
  transition: all ease 1.2s;
  animation: project_hover_reverse ease-out 0.7s forwards;
  

  &:hover {
    transform : translateY(-8px);
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
    margin: 12px 12px;
    object-position: 50% 0%;
    cursor: pointer;
  }
}

.project-name {
  font-family: 'Shadows Into Light', cursive;
  font-weight: 800;
  margin: 4px 0;
  color: $orange;
  font-size: xx-large,
}

.summary {
  font-family: 'Bebas Neue', cursive;
  color: whitesmoke;
  font-size: x-large;
  padding:12px;
}


.card-link-container {
  display: flex;
  justify-content: center;
}

.card-link {
  font-family: 'Shadows Into Light', cursive;
  font-weight: 400;
  border: 1px solid $cream;
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
    border: 1px solid $orange;
    background: lighten($dark-main, 10%);
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
    color: $orange;
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
  .cards-container {
    padding : 24px 0;
  }
  .project-card {
    height:fit-content;
    width: 80%;
    margin: 32px auto 24px;
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
  
    width: 94%;
    margin: 32px auto;
  }

  .improved-skill-img {
    height: 52px;
    width: 52px;
  }

}

// ----- MOBILE -----
@media screen and (max-width : 730px) {
  .img-preview {
    animation :none !important;
  }
  .project-name {
    font-size: x-large;
  }

  .summary {
    font-size: larger;
    letter-spacing: 0.2px;
  }

  .project-card {
    padding:0;
    background: linear-gradient(190deg, #dbd5ce, #222 10%);
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