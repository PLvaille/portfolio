<template>
  <div class="cv">
    <aside>
      <div class="img--container">
        <img class="img" title="Vaille Pierre-louis" alt="photo de Piere-louis Vaille" src="../../public/me.jpg">
      </div>
      <div class="contact">
        <p class="contact--list">Lille, 30 ans</p>
        <p class="contact--list">06.59.01.24.87</p>
        <p class="contact--list"> <a href="mailto: pierrelouis.vaille@gmail.com">pierrelouis.vaille@gmail.com</a></p>

      </div>
      <div class="skills">
        <h2><strong>Compétences</strong></h2>
        <div class="skills--list">
          <label for="html">
            <div class="faContainer">
              <font-awesome-icon icon="fa-brands fa-html5" />
            </div>
            <span><strong> Html5</strong></span>
          </label>
          <div class="progress" id="html">
            <div class="progress--9"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="css">
            <div class="faContainer">
              <font-awesome-icon icon="fa-brands fa-css3" />
            </div>
            <span><strong>Css3</strong></span>
          </label>
          <div class="progress" id="css">
            <div class="progress--9"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="sass">
            <div class="faContainer">
              <font-awesome-icon icon="fa-brands fa-sass" />
            </div>
            <span><strong>Sass</strong></span>
          </label>
          <div class="progress" id="sass">
            <div class="progress--8"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="bootsrap">
            <div class="faContainer">
              <font-awesome-icon icon="fa-brands fa-bootstrap" />
            </div>
            <span><strong>Bootsrap</strong></span>
          </label>
          <div class="progress" id="bootsrap">
            <div class="progress--4"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="js">
            <div class="faContainer">
              <font-awesome-icon icon="fa-brands fa-js" />
            </div>
            <span><strong>JavaScript</strong></span>
          </label>
          <div class="progress" id="js">
            <div class="progress--8"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="vue">
            <div class="faContainer">
              <font-awesome-icon icon="fa-brands fa-vuejs" />
            </div>
            <span><strong>VueJS</strong></span>
          </label>
          <div class="progress" id="vue">
            <div class="progress--7"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="node">
            <div class="faContainer">
              <font-awesome-icon icon="fa-brands fa-node-js" />
            </div>
            <span><strong>NodeJS</strong></span>
          </label>
          <div class="progress" id="node">
            <div class="progress--6"></div>
          </div>
        </div>
        <div class="skills--list">
          <label id="mysqlLabel" for="mysql">
            <div class="faContainer"><img src="mysql.png" /></div><span><strong>MySQL</strong></span>
          </label>
          <div class="progress" id="mysql">
            <div class="progress--6"></div>
          </div>
        </div>
        <div class="skills--list">
          <label id="mongodbLabel" for="mongodb">
            <div class="faContainer"><img src="mongodb.png" /></div><span><strong>MongoDB</strong></span>
          </label>
          <div class="progress" id="mongodb">
            <div class="progress--6"></div>
          </div>
        </div>
        <div class="skills--list">
          <label for="seo">
            <div class="faContainer">
              <font-awesome-icon icon="fa-solid fa-eye" />
            </div>
            <span><strong>SEO</strong></span>
          </label>
          <div class="progress" id="seo">
            <div class="progress--6"></div>
          </div>
        </div>

        <div class="skills--list">
          <label id="gitLabel" for="git">
            <div class="faContainer">
              <font-awesome-icon icon="fa-brands fa-git-alt" />
            </div><span><strong>Git</strong></span>
          </label>
          <div class="progress" id="git">
            <div class="progress--5"></div>
          </div>
        </div>
      </div>

      <div class="langs">
        <h2><strong>Langues</strong></h2>
        <ul>
          <li>🇫🇷 <span><strong>Français</strong> maternel</span></li>
          <li>🇬🇧 <span><strong>Anglais</strong> courant</span></li>
          <li>🇪🇸 <span><strong>Espagnol</strong> débutant</span></li>
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
        <h1><strong>Vaille</strong> <strong>Pierre-Louis</strong></h1>
        <h2 id="poste"><strong>Développeur Web Fullstack</strong></h2>
        <span>Diplomé d'un titre <strong>RNCP</strong>, parcours <strong>Développeur Web Fullstack</strong>,
          diplôme de niveau 5 (bac+2), je
          cherche à intégrer une équipe
          dynamique dès que possible afin
          d'approfondir mes connaissances, en acquérir de nouvelles et contribuer à de beaux projets.
        </span>
      </div>
      <div class="transition"></div>
      <div class="experience block">
        <h2><strong>Expérience Professionnelle</strong></h2>
        <ul>
          <li><strong>Commercial VRP</strong>, Stratygo, Hauts-de-france : 2019-2020</li>
          <li><strong>Commercial VRP</strong>, Ranger, Hauts-de-france : 2018-2019</li>
          <li><strong>Employé en vente</strong>, Auchan, Arras : 2017</li>
          <li><strong>Préparateur de commande</strong>, Dispeo, Wasquehal : 2016</li>
          <li><strong>Recruteur de donnateur</strong>, ONG Conseil, Lille : 2015</li>
          <li><strong>Employé de Rayon</strong>, Auchan, Leclerc, V.d'ascq, Templeuve : 2014</li>
          <li><strong>Vendanges</strong>, Domaine Carage, Beaujolais : 2013</li>
          <li><strong>Volontaire</strong>, Service Civique, AFEV Lille, V.d'ascq : 2012</li>
          <li><strong>Manutention</strong> et <strong>Employé Polyvalent</strong>, Phildar, Auchan, Quick : 2010-2011
          </li>
        </ul>
      </div>
      <div class="transition"></div>
      <div class="formation block">
        <h2>Formation</h2>
        <ul>
          <li><strong>Développeur Web</strong>, titre RNCP niveau 5 (bac+2), remote : Novembre 2021 - Juin 2022</li>
          <li>Formation commerciale interne, Ranger France : Janvier 2018</li>
          <li>DUT Informatique, IUT A Lille 1 (1<sup>ere</sup> année) : 2011</li>
          <li>Baccalauréat Scientifique, Lycée R. Queneau : Juin 2009</li>
        </ul>
      </div>
      <div class="transition"></div>
      <div class="softskills block">
        <h2><strong>Soft-skills</strong></h2>
        <ul>
          <li>Sociabilité</li>
          <li>Curiosité</li>
          <li>Polyvalence</li>
          <li>Autonomie</li>
          <li>Esprit Critique</li>
        </ul>
      </div>
    </main>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
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
  width: 827px;
  max-width: 1200px;
  margin: 1.5% auto 0;
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

  & .faContainer {
    display: flex;
    flex-direction: column;
    width: 20px;
  }

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

      & img {
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        width: 18px;
      }

      & .svg-inline--fa {
        height: 20px;
      }
    }

    & label {
      display: flex;
      width: 80%;
    }

    & .progress {
      border: none;
      width: 90%;
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
}

ul {
  margin-top: -8px;
}

li {
  margin: 4px 0;
}

main {
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
    margin-right: 30%;
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

    & .skills {
      width: 100%;

      &--list {
        width: 98%;
      }
    }
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
    border: none;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    aside {
      position: absolute;
      top: 300px;
      width: 100%;
      min-width: 100%;

      & .hobbies {
        padding-bottom: 30px;
      }

      & .skills {
        &--list {
          width: 86%;
        }
      }

      & .img--container {
        & img {
          width: 160px;
          height: 160px;
        }
      }

      .contact {
        z-index: 999;
        margin: 12px auto 8px;
        width: 84%;

        & p {
          margin: 0 auto;
        }
      }
    }

    .presentation {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0 auto;
      width: 100%;
      border-top: 2px solid $red;
      position: absolute;
      top: -1214px;
      padding: 0;
      margin: 0;

      & h1 {
        margin: 0 0;
      }

      & h2 {
        margin-right: 0 !important;
      }
    }

    main {
      position: absolute;
      top: 1214px;

      h2 {
        position: initial;
        margin-bottom: 16px;
      }

      ul {
        padding-left: 24px;
      }

    }
  }
}
</style>