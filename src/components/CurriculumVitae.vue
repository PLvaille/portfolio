<template>

  <div class="cv">
    <aside>
      <div class="img--container">
        <img class="img" src="../../public/me.jpg">
      </div>
      <div class="contact">
        <p class="contact--list">Lille, 30 ans</p>
        <p class="contact--list">0659012487</p>
        <p class="contact--list"> <a href="mailto: pierrelouis.vaille@gmail.com">Pierrelouis.vaille@gmail.com</a></p>

      </div>
      <div class="skills">
        <h2>Compétences</h2>
        <div class="skills--list">
          <label for="html">
            <font-awesome-icon icon="fa-brands fa-html5" /><span>Html5 </span>
          </label>
          <div class="progress" id="html">
            <div class="progress--9"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="css">
            <font-awesome-icon icon="fa-brands fa-css3" /><span>Css3 </span>
          </label>
          <div class="progress" id="css">
            <div class="progress--8"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="sass">
            <font-awesome-icon icon="fa-brands fa-sass" /><span>Sass </span>
          </label>
          <div class="progress" id="sass">
            <div class="progress--7"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="bootsrap">
            <font-awesome-icon icon="fa-brands fa-bootstrap" /><span>Bootsrap </span>
          </label>
          <div class="progress" id="bootsrap">
            <div class="progress--4"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="js">
            <font-awesome-icon icon="fa-brands fa-js" /> <span>JavaScript </span>

          </label>
          <div class="progress" id="js">
            <div class="progress--7"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="node">
            <font-awesome-icon icon="fa-brands fa-node-js" /><span>NodeJS </span>
          </label>
          <div class="progress" id="node">
            <div class="progress--6"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="vue">
            <font-awesome-icon icon="fa-brands fa-vuejs" /><span>VueJS</span>
          </label>
          <div class="progress" id="vue">
            <div class="progress--5"></div>
          </div>
        </div>
        <div class="skills--list">
          <label id="mysqlLabel" for="mysql">
            <div><img src="mysql.png" /></div><span>MySQL</span>
          </label>
          <div class="progress" id="mysql">
            <div class="progress--6"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="seo">
            <font-awesome-icon icon="fa-solid fa-eye" /><span>SEO</span>
          </label>
          <div class="progress" id="seo">
            <div class="progress--6"></div>
          </div>
        </div>
      </div>
      <div class="langs">
        <h2>Langues</h2>
        <ul>

          <li>🇫🇷 <span>Français maternel</span></li>
          <li>🇬🇧 <span>Anglais courant</span></li>
          <li>🇪🇸 <span>Espagnol basique</span></li>
        </ul>

      </div>
      <div class="hobbies">
        <h2>Loisirs</h2>
        <ul>
          <li>🏸 <span>Pratique sportive</span></li>
          <li>🎹 <span>M.A.O. </span></li>
          <li>🎲 <span>Jeux de Société</span></li>
        </ul>
      </div>

    </aside>


    <main>

      <div class="presentation">
        <h1>Vaille Pierre-Louis</h1>
        <h2 id="poste">Développeur Web Fullstack</h2>
        <span>Nouveau diplomé d'OpenClassrooms, parcours Développeur Web Fullstack, diplôme de niveau 5 (bac+2), je
          cherche à intégrer une équipe
          dynamique dès que possible afin
          d'approfondir mes connaissances, en acquérir de nouvelles et contribuer à de beaux projets.
        </span>
      </div>
      <div class="transition"></div>
      <div class="experience block">
        <h2>Expérience Professionnelle</h2>
        <ul>
          <li><strong>Commercial VRP</strong>, Stratygo, Hauts-de-france : 2019-2020</li>
          <li><strong>Commercial VRP</strong>, Ranger, Hauts-de-france : 2018-2019</li>
          <li><strong>Employé en vente</strong>, Auchan, Arras : 2017</li>
          <li><strong>Préparateur de commande</strong>, Dispeo, Wasquehal : 2016</li>
          <li><strong>Recruteur de donnateur</strong>, ONG Conseil, Lille : 2015</li>
          <li><strong>Employé de Rayon</strong>, Auchan, Leclerc : 2014</li>
          <li><strong>Vendanges</strong>, Domaine Carage, Beaujolais : 2013</li>
          <li><strong>Manutention</strong> et Employé Polyvalent, Phildar, Auchan, Quick : 2010-2012</li>
        </ul>
      </div>
      <div class="transition"></div>
      <div class="formation block">
        <h2>Formation</h2>
        <ul>
          <li><strong>Dev Web (bac+2)</strong>, OpenClassrooms : Nomvembre 2021 - Juin 2022</li>
          <li>Formation interne Commercial, Ranger France : Janvier 2018</li>
          <li>DUT Informatique, IUT A Lille 1 (non validé) : 2011</li>
          <li>Baccalauréat Scientifique, Lycée R. Queneau : Juin 2009</li>
        </ul>
      </div>
      <div class="transition"></div>
      <div class="softskills block">
        <h2>Soft-skills</h2>
        <ul>
          <li>Sociabilité</li>
          <li>Curiosité</li>
          <li>Polyvalence</li>
          <li>Patience</li>
          <li>Autonomie</li>
        </ul>
      </div>

    </main>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$dark-main: darken(#475C7A, 10%);
$grey : #685D79;
$darkred : #AB6C82;
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;

font-awesome-icon {
  width: 18px;
  height: 18px;
}

.cv {
  font-family: 'Roboto', sans-serif;
  text-align: start;
  border: solid 4px $darkred;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: $cream;
  display: flex;

  & h1,
  h2 {
    font-family: 'Bebas Neue', cursive;
  }

  & .langs span {
    margin-left: 6px;
  }
}

aside {
  margin: 0;
  color: $cream;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  width: 50%;
  max-width: 500px;
  min-width: 236px;
  background-color: $dark-main;

  & ul {
    list-style-type: none;
    width: 86%;
    margin: 0 auto;
    padding: 0;
  }

  & h2 {
    color: $grey;
    padding: 4px 0 4px 3%;
    background: $cream;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: block;
    margin: 8px 28% 8px 0;
  }

  & .img {
    border: 3px solid $cream;
    margin: 0 auto;
    margin-top: 8px;
    object-fit: cover;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    filter: brightness(1.8);

    &--container {
      display: flex;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 76%;
    height: 80px;
    margin: 0 auto;
    margin-bottom: 8px;
    border: 2px solid $cream;
    border-radius: 8px;
    padding: 8px;
    overflow: hidden;


    &--list {
      display: flex;
      margin: 0;
      max-width: 180px;

      & a {
        text-decoration: none;
        color: $cream;

      }
    }
  }

  .skills {
    text-align: left;
    margin: 0;
    margin-top: -8px;

    &--list {
      width: 86%;
      display: flex;
      justify-content: space-between;
      margin: 2px auto;

      & span {
        margin-left: 4px;
      }
    }

    & label {
      display: block;
      width: 80%;
      margin-left: 1%;

    }

    & .progress {
      border: none;
      width: 100%;
      height: 24px;
      background-color: $cream;
      border-radius: 2px;

      //chaque progress--i   
      @for $i from 1 through 10 {
        &--#{$i} {
          height: 24px;
          background-color: $darkred;
          width: 1%* (10*$i);
        }
      }
    }

  }

  & .hobbies {
    padding-bottom: 8px;
  }
}

#mysqlLabel {
  display: flex;

  & img {
    width: 17px;
    height: 16px;
  }
}

ul {
  margin-top: -8px;
}

li {
  margin: 4px 0;
}

main {
  // color:$dark-main;
  color: black;
  margin-block: 0;
  background: $cream;
  display: flex;
  flex-direction: column;
  width: 100%;

  & h1 {
    margin-top: 16px;
    font-weight: bold;
  }

  & h2 {
    position: relative;
    top: -16px;
    z-index: 999;
    padding: 4px 0 4px 4%;
    color: $cream;
    background: linear-gradient(to right, $dark-main, $darkred);
    margin: 0 25% 0 0;
    min-width: 235px;

  }
}

.transition {
  min-width: 248px;
  z-index: 1;
  margin: 0 25% 0 0;
  height: 32px;
  background: linear-gradient(to right, $grey, $darkred);
  border-top-right-radius: 16px;

}

.block {
  margin-top: 0;
  margin-bottom: 8px;
}

.presentation {
  padding-left: 4%;
  color: $cream;
  background-color: $dark-main;
  padding-bottom: 3%;

  & span {
    display: block;
    width: 91%;
    margin: 0 auto;
  }

  & h1 {
    font-size: 40px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 100;
  }

  #poste {
    background: linear-gradient(to left, $dark-main, $darkred, $darkred, $dark-main);
    margin-right: 42%;
  }
}

//----------- Media query -----------
@media screen and (max-width : 1024px) {
  .cv {
    font-family: 'Roboto' !important;
    width: 94%;
    border: 2px solid $darkred;
  }

  aside .contact {
    width: 90%;
    margin: 0 auto;
  }

  aside {
    justify-content: space-around;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
  }
}

@media screen and (max-width : 600px) {

  .cv {
    width: 100%;
    border:none;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    aside {
      position: absolute;
      top: 402px;
      width: 100%;
      min-width: 100%;


      & .img--container {
        position: absolute;
        top: -324px;
        right: 6px;
        z-index: 9999;

        & img {
          width: 160px;
          height: 160px;
        }
      }

      .contact {
        margin: 4px auto;
        width:84%;

        & p {
          margin: 0 auto;
        }
      }
    }

    .presentation {
      width: 100%;
      border-top:2px solid $red;
      position: absolute;
      top: -1052px;
      height: 400px;
      padding: 0;
      margin: 0;
  & h1 {
    margin-left:4%;
  }
    }

    main {
      position: absolute;
      top: 1052px;
      h2 {
        position:initial;
        margin-bottom:16px;
      }
      ul {
        padding-left:24px;
      }

    }
  }
  .softskills{
    height:278px;
    overflow-y:hidden;
  }



}
</style>