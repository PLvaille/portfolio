<template>
    <main class="landing-page">

        <div class="about-container">
            <div class="img-container">
                <img class="img" title="Vaille Pierre-louis" alt="photo de Piere-louis Vaille"
                    src="../../public/me.webp">
            </div>
            <span class="about">Bonjour, je suis <strong>Pierre-louis</strong>, Lillois, <strong>Développeur Web Fullstack</strong> et passionné de musique.
                <br>
                <br>
                Je suis diplômé d'un titre <strong>RNCP</strong>, parcours <strong>Développeur Web Fullstack</strong>,
                diplôme de niveau 5 (bac+2), obtenu en juin 2022.
                <br>
                <br>
                Je cherche à rejoindre une équipe dynamique dès
                que possible afin de mettre à contribution mes connaissances et participer à de beaux projets !
                <br>
                <br>
                Sportif, j'aime le challenge et les nouveaux défis ne me font pas peur.
                <br>
                <br>
                Ma curiosisté inhérente est un atout dans le développement car l'apprentissage est continu dans ce domaine.
                <br>
                <br>
                Commercial reconverti, en plus de la facilité que j'ai acquise dans les relations humaines, j'ai développé l'ambition de la réussite qui se traduit aujourd'hui par mon souhait d'évoluer au plus vite dans mon domaine.
                <br>
                Pour ce faire, je suis bien-sûr intéressé par l'acquisition de nouvelles compétences pour répondre plus aisément aux requêtes qui me seront adressées.
                <br>
                <br>
                Voici mon stack actuel :
                <div class="myskills">
                    <div class="skills-container">

                        <div class="icon-container ">
                            <!-- <font-awesome-icon icon="fa-brands fa-html5" /> -->
                            <img src="Html5.svg" alt="Html5" title="HTML 5" />
                            <span>HTML5</span>
                        </div>

                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-brands fa-css3" /> -->
                            <img src="Css3.svg" alt="Css" title="CSS 3" />
                            <span>CSS3</span>
                        </div>

                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-brands fa-sass" /> -->
                            <img src="Sass.svg" alt="Sass" title="Sass"/>
                            <span>SASS</span>
                        </div>

                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-brands fa-bootstrap" /> -->
                            <img src="Bootstrap.svg" alt="Bootstrap"  title="Bootstrap"/>
                            <span>Bootstrap</span>
                        </div>

                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-brands fa-js" /> -->
                            <img src="Javascript.svg" alt="JavaScript" title="JavaScript"/>
                            <span>JavaScript</span>

                        </div>

                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-brands fa-vuejs" /> -->
                            <img src="Vue.svg" alt="VueJS" title="VueJS"/>
                            <span>VueJS</span>
                        </div>

                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-brands fa-react" /> -->
                            <img src="React.svg" alt="ReactJS" title="ReactJS"/>
                            <span>ReactJS</span>
                        </div>

                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-brands fa-node-js" /> -->
                            <img src="Nodejs.svg" alt="NodeJS" title="NodeJS"/>
                            <span>NodeJS</span>
                        </div>

                        <div class="icon-container">
                            <img src="Mysql.svg" alt="Mysql" title="Mysql"/>
                            <span>MySQL</span>
                        </div>

                        <div class="icon-container">
                            <img src="Mongo.svg" alt="Mongodb" title="Mongodb"/>
                            <span>MongoDB</span>
                        </div>


                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-solid fa-eye" /> -->
                            <img src="Seo.svg" alt="SEO" title="SEO"/>
                            <span>SEO</span>
                        </div>

                        <div class="icon-container">
                            <!-- <font-awesome-icon icon="fa-brands fa-git-alt" /> -->
                            <img src="Git.svg" alt="Git" title="Git" />
                            <span>Git</span>
                        </div>

                    </div>
                </div>

            </span>

        </div>




    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$dark-main: #475C7A;
$grey : #685D79;
$darkred : #AB6C82;
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;
$bgcolor : #e8d0b6;
//#f8f0e8

.about {
    animation: about_anim ease-in-out 2s forwards;
    overflow: hidden;

    font-family: "Roboto";

    //background: #f8f0e8;
    background: linear-gradient(190deg, #e8d0b6, #333 17%);
    color: $cream;
    padding: 4% 3% 6% 132px;
    margin-right:2%;
    text-align: justify;
    border:1px solid $cream;
    border-radius: 32px;

    &-container {
        backdrop-filter: brightness(0.6);


        // background: linear-gradient(217deg, rgba(252, 184, 96, 0.2), rgba(0,0,0,0.5) 50.71%),
        //     linear-gradient(127deg, rgba(252, 184, 96, 0.2), rgba(0,0,0,0.5) 50.71%),
        //     linear-gradient(336deg, rgba(252, 184, 96, 0.1), rgba(0,0,0,0.5) 50.71%);


        margin: 0 auto;
        padding: 8% 0;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;

    }
}

strong {
    font-weight: normal;
}

.landing-page {

    & .img {
        left: 0;
        border: 1px solid $cream;
        object-fit: cover;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        filter: brightness(1.6);

        &-container {
            position: relative;
            left: 120px;
            display: flex;
            width: fit-content;
        }
    }

    .myskills {

        & .skills-container {
            transform: translateY(400px);
            overflow: hidden;
            animation: skill_pop 2s ease-out forwards 2s;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin: 0 auto;

            & .icon-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: $cream;
                font-family: "Roboto";
                font-size: x-small;
                margin: 4px;

                & img {
                    height: 70px;
                    width: 70px;
                    object-fit: contain;
                }
            }
        }
    }

}

@media screen and (max-width : 1330px) {
    .about{
        padding-bottom:10%;
    }
}

@media screen and (max-width : 1130px) {
    .skills-container {
        width: 100% !important;
    }

    .landing-page {
        width: 100%;

        & .img-container {
            left: 0;
            top: 18px;
            justify-content: center;

            & img {
                width: 200px;
                height: 200px;
            }
        }
    }

    .about {
        padding:32px;
        margin:0 auto;
        width: 80%;
        text-align: center;

        &-container {
            flex-direction: column;
            margin: 0 auto;
        }
    }

}

@media screen and (max-width : 730px) {
    .about {
        padding:32px;
        width: fit-content;
        margin:0 1%;
        margin-bottom: 32px;
        animation: none;

    }

    .skills-container {
        position:relative;
        left:0;
        padding:12px 0;
        width:90%;
        margin:0 auto;
        transform: translateY(0);
        animation: skill_pop 1s ease forwards 0.5s;
    }

}
</style>