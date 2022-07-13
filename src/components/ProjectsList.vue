<template>
  <div class="cardsContainer">
    <div class="projectCard" v-for="data in cardsData" :key="data.id">
      <div class="cardTitle">
        <h2 class="projectName">{{ data.projectName }}</h2>
        <div class="summary">{{ data.summary }}</div>
        <a class="cardLink" v-if="data.link.includes('.io')" :href="data.link" target="_blank">Voir le site</a>
        <a class="cardLink" v-if="!data.link.includes('.io')" :href="data.link" target="_blank">Repo git</a>

      </div>

      <div class="cardMore" @click="displayImg">
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
    </div>
  </div>

</template>

<script>


export default {
  data() {
    return {
    }
  },
  methods: {
    displayImg(){

    }
  },
  props: {
    cardsData: Array
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

.cardsContainer {
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
  margin: 8px;

}

.cardTitle {
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  border-bottom: 2px solid $cream;
}



.projectName {
  font-family: 'Shadows Into Light', cursive;
  //font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 800;
  margin: 4px 0;
  color: whitesmoke;
  font-size: xx-large,
}

.summary {
  font-family: 'Bebas Neue', cursive;
  color: $orange;
  font-size: x-large;
  // margin-bottom: 24px;
}

.cardLink {
  //@debugfont-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-family: 'Shadows Into Light', cursive;
  font-weight: 400;
  border: 1px solid $red;
  border-radius: 8px;
  padding: 8px;
  text-decoration: none;
  font-size: large;
  color: $orange;
  width: 120px;
  margin: 16px auto;
  background: darken($dark-main, 20%);

  &:hover {
    color: $orange;
    border: 1px solid $cream;
    background: $grey;
  }
}

.cardMore {
  cursor:pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  text-align: left;
  white-space: break-spaces;

  & label {
    font-family: 'Bebas Neue', cursive;
    font-size: large;
    color: $red;
    text-decoration: underline;
    text-decoration-color: white;
    text-underline-offset: 3px;
  }
}
</style>