<template>
  <header class="header">
    <MainHeader />
  </header>

  <div classs="fullContainer">
    <div class="navContainer">
      <button class="btn filter-btn" id="btn-main" @click="handleMain(), btnColorFilter()">Portfolio</button>
      <button class="btn" id="btn-cv" @click="handleCV(), btnColorFilter()">Resume</button>
      <button class="btn" id="btn-project" @click="handleProject(), btnColorFilter()">Projects</button>
      <button class="btn" id="btn-contact" @click="handleInfo(), btnColorFilter()">More</button>
      <!-- <h2 class="btn" id="btn-link" @click="handleLink(), btnColorFilter()">Liens</h2> -->
    </div>


    <div class="landing-container bg-img2" v-if="toogleMain">
      <LandingPage />
    </div>
    <div class="cv-container bg-img " v-if="toogleCv">
      <CurriculumVitae />
    </div>
    <div class="projects-container bg-img " v-if="toogleProjects">
      <ProjectsList :cardsData="projectsData" />
    </div>
    <div class="bg-img " v-if="toogleInfo">
      <InfoPage />
    </div>

    <footer>
      <MainFooter :toogleCv="toogleCv" />
    </footer>
  </div>
</template>

<script>
import CurriculumVitae from "./components/CurriculumVitae.vue";
import ProjectsList from './components/ProjectsList.vue';
import MainHeader from './components/MainHeader.vue';
import projectsData from './projectsData.json';
import MainFooter from "./components/MainFooter.vue";
import LandingPage from "./components/LandingPage.vue";
import InfoPage from "./components/InfoPage.vue";

export default {
  components: {
    CurriculumVitae,
    ProjectsList,
    MainHeader,
    MainFooter,
    LandingPage,
    InfoPage,

  },
  data() {
    return {
      toogleMain: true,
      toogleCv: false,
      toogleProjects: false,
      toogleInfo: false,
      toogleLink: false,
      projectsData: []
    }
  },
  methods: {
    btnColorFilter() {
      let butons = document.querySelectorAll(".btn");
      butons.forEach(buton => {
        buton.classList.remove("filter-btn");
      });
      let butonToStyle = document.querySelector(`#${event.target.id}`);
      butonToStyle.classList.add("filter-btn");
    },
    handleMain() {

      if (this.toogleMain == false)
        this.toogleMain = !this.toogleMain;
      this.toogleInfo = false;
      this.toogleCv = false;
      this.toogleProjects = false;
      this.toogleLink = false;

    },
    handleCV() {
      if (this.toogleCv == false)
        this.toogleCv = !this.toogleCv;
      this.toogleInfo = false;
      this.toogleMain = false;
      this.toogleProjects = false;
      this.toogleLink = false;

    },
    handleProject() {
      if (this.toogleProjects == false)
        this.toogleProjects = !this.toogleProjects;
      this.toogleInfo = false;
      this.toogleMain = false;
      this.toogleCv = false;
      this.toogleLink = false;
    },
    handleInfo() {
      if (this.toogleInfo == false)
        this.toogleInfo = !this.toogleInfo;
      this.toogleProjects = false;
      this.toogleMain = false;
      this.toogleCv = false;
      this.toogleLink = false;

    },
    handleLink() {
      if (this.toogleLink == false)
        this.toogleLink = !this.toogleLink;
      this.toogleProjects = false;
      this.toogleMain = false;
      this.toogleCv = false;
      this.toogleInfo = false;

    },
    fetchProjectsData() {
      this.projectsData = projectsData;
    }
  },
  created() {
    this.fetchProjectsData();
  }
}

</script>

<style lang="scss">
$dark-main: #475C7A;
$grey : #685D79;
$darkred : #AB6C82;
$red : #D8737F;
$orange : #FCB860;
// orange = rgba(252, 184, 96, 1)
$cream : #dbd5ce;
$bgcolor : #e8d0b6;
$bgcolor2: whitesmoke;


.fullContainer {
  margin: 0;
  padding: 0;
}

.landing-container,
.cv-container {
  background-position: 0%;
  animation: translateY_bg 1.2s ease forwards;
  width: 100%;

}

.bg-img,
.projects-container {
  border-top: 2px solid $orange;
  background-image: url("../public/bg2.webp");
  background-size: cover;
}

.bg-img2 {
  border-top: 2px solid $orange;
  background-image: url("../public/bg1.webp");
  background-size: cover;
}


.header {
  background: #333;
  // rgb(246, 171, 74)
  //background: linear-gradient(to top, #e8d0b6, white 99%);
  padding-bottom: 42px;
}

#app {
  background: #333;
  position: relative;
  //background: linear-gradient(#222, #222, #444, #444, #555);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: $cream;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2px 0;
  //background: linear-gradient(to left, $bgcolor, whitesmoke 50%, $bgcolor);
  margin: 0 auto 24px;
  max-width: 1100px;
}


//-----------btns---

.filter-btn {
  background: rgba(252, 184, 96, 1) !important;
  border: 1px solid white !important;
  text-shadow: 2px 2px $cream !important;
  border-radius: 12px !important;
  color: #333 !important;
  letter-spacing: 3px !important;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.4) !important;

}

.btn {
  font-size: large;
  font-family: 'Roboto';
  color: $cream;
  text-shadow: 2px 2px black;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  letter-spacing: normal;
  background-color: #333;
  border-radius: 16px;
  border: 1px solid $cream;
  width: 240px;
  padding: 3% 0;
  margin: 0 4px;
  transition: all ease 0.6s;


  &:hover {
    box-shadow: 4px 4px rgba(0, 0, 0, 0.4);
    letter-spacing: 3px;
    border-radius: 12px;
    cursor: pointer;
  }

}

#btn-main {
  transition: all 1s;
  background-position: 40% 40%;
  background-image: url("../public/livre.jpg");

  &:hover {
    background-position: 35% 90%;
  }
}

#btn-cv {
  background-position: 28% 28%;
  transition: all 1s;
  background-image: url("../public/rouage.webp");

  &:hover {
    background-position: 65% 65%;

  }
}

#btn-project {
  background-position: 50% 5%;
  transition: all 1s;
  background-image: url("../public/projet.jpg");

  &:hover {
    background-position: 90% 80%;
  }
}

#btn-contact {
  transition: all 1s;
  background-image: url("../public/contact.jpg");

  &:hover {
    background-position: 40% 60%;

  }
}

@media screen and (max-width : 730px) {

  .btn {
    padding: 28px 0 !important;
  }

}
@media screen and (max-width : 530px) {
  .btn:hover { 
    letter-spacing: normal;
  }
  .filter-btn {
    letter-spacing: normal !important;
  }
}
</style>
