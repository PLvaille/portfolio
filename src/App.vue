<template>
  <header>
    <MainHeader />
  </header>



  <div class="navContainer">
    <h2 v-if="toogleProjects" class="navBtn" @click="mainToogleSwitch()">Voir mon CV</h2>
    <h2 v-if="toogleCv" class="navBtn" @click="mainToogleSwitch()">Voir mes projets</h2>
  </div>
  <div v-if="toogleCv">
    <CurriculumVitae />
  </div>
  <div v-if="toogleProjects">
    <ProjectsList :cardsData="projectsData" />
  </div>

  <footer>
    <MainFooter />
  </footer>
</template>

<script>
import CurriculumVitae from "./components/CurriculumVitae.vue";
import ProjectsList from './components/ProjectsList.vue';
import MainHeader from './components/MainHeader.vue';
import projectsData from './projectsData.json';
import MainFooter from "./components/MainFooter.vue";

export default {
  components: {
    CurriculumVitae,
    ProjectsList,
    MainHeader,
    MainFooter
  },
  data() {
    return {
      toogleCv: true,
      toogleProjects: false,
      projectsData: []
    }
  },
  methods: {
    mainToogleSwitch() {
      this.toogleCv = !this.toogleCv;
      this.toogleProjects = !this.toogleProjects;
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
$cream : #dbd5ce;

#app {
  position:relative;
  background: linear-gradient(#222, #222, #444, #444, #555);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: $cream;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  & .headerWelcome {
    font-family: 'Shadows Into Light';
  }
}

.navContainer {
  margin-block: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.navBtn {
  font-family: 'Shadows Into Light';
  color: whitesmoke;
  min-width: 220px;
  border-radius: 16px;
  border: 4px solid $red;
  padding: 16px 0;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    cursor: pointer;
    background: $orange;
    color: black;
     text-decoration: none;
  }
}
</style>
