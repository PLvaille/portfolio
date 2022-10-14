<template>
    <div class="header-main">

        <div class="anim-container">

            <div class="tri-container">
                <div class="tri-1"></div>
                <div class="tri-2"></div>
                <div class="tri-3"></div>
                <div class="tri-4"></div>
                <div class="tri-5"></div>
                <div class="tri-6"></div>
                <div class="tri-7"></div>
                <div class="tri-8"></div>
                <div class="tri-9"></div>
                <div class="tri-10"></div>
                <div class="tri-11"></div>
                <div class="tri-12"></div>
                <div class="tri-13"></div>
                <div class="tri-14"></div>
                <div class="tri-15"></div>
                <div class="tri-16"></div>
                <div class="tri-17"></div>
                <div class="tri-18"></div>
                <div class="tri-19"></div>
                <div class="tri-20"></div>
                <div class="tri-21"></div>
                <div class="tri-22"></div>
                <div class="tri-23"></div>
                <div class="tri-24"></div>
                <div class="tri-25"></div>
                <div class="tri-26"></div>
            </div>



            <div class="header-frame">
                <h1 class="headerWelcome">
                    Pierre-louis Vaille
                </h1>

                <div class="links">

                    <a href="https://www.linkedin.com/in/pierre-louis-vaille-143877241/" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                        <p>Linkedin</p>
                    </a>
                    <a href="https://github.com/PLvaille?tab=repositories" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" />
                        <p>Github</p>
                    </a>
                    <a href="mailto: pierrelouis.vaille@gmail.com">
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        <p>Contact</p>
                    </a>
                </div>

                <div class="navContainer">
                    <button class="btn filter-btn" id="btn-main"
                        @click="handleMain(), btnColorFilter()">Portfolio</button>
                    <button class="btn" id="btn-cv" @click="handleCV(), btnColorFilter()">Resume</button>
                    <button class="btn" id="btn-project" @click="handleProject(), btnColorFilter()">Projects</button>
                    <button class="btn" id="btn-contact" @click="handleInfo(), btnColorFilter()">More</button>
                </div>
            </div><!-- fin header-frame -->
        </div> <!-- fin anim container -->


    </div>

</template>

<script>

export default {
    methods: {
        btnColorFilter() {
            this.$parent.btnColorFilter();
        },
        handleMain() {
            this.$parent.handleMain();
        },
        handleCV() {
            this.$parent.handleCV();
        },
        handleProject() {
            this.$parent.handleProject();
        },
        handleInfo() {
            this.$parent.handleInfo();
        },
    }

}
</script>

<style scoped lang="scss">
$dark-main: #475C7A;
$grey : #685D79;
$darkred : #AB6C82;
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;
$bgcolor : #e8d0b6;

.anim-container {
  
    background: linear-gradient(217deg, rgba(252, 184, 96, 0.30), rgba(0, 0, 0, 0.9) 90%),
     linear-gradient(127deg, rgba(252, 184, 96, 00), rgba(0, 0, 0, 0.9) 4%),
      linear-gradient(336deg, rgba(252, 184, 96, 0.6), rgba(0, 0, 0, 0.4) 80%);
      
    overflow: hidden;
}

.tri-container {
    position: relative;
    top: -20px;
    left: -40px;
}

@for $i from 1 through 26 {
    $scale : ($i/35) / ($i/50);
    $opa : ($i*0.025);
    $delay : ($i * 0.1s);

    .tri-#{$i} {
        position: absolute;
        top: ($i/12) *($i*10px);
        left: ($i*72px);

        opacity: $opa;

        //triangle
        scale: $scale;
        display: inline-block;
        height: 0;
        width: 0;
        border-right: 87px solid transparent;
        border-bottom: 150px solid $orange;
        border-left: 87px solid transparent;

        //anim triangle
        animation: anim_triangle 12s linear;
        animation-delay: $delay;
        animation-iteration-count: infinite;

    }
}

.header-frame {
    backdrop-filter: blur(6px);
    padding: 12px;
}

.headerWelcome {
    margin-bottom: 0;
    font-size: xxx-large;
    color: white;
    font-family: 'Shadows Into Light';
}

.links {
    display: flex;
    justify-content: center;
    font-size: xxx-large;
    padding: 24px;

    & a {
        transition: all ease 0.8s;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: white;
        margin: 16px;
        height: 42px;

        &:hover {
            color: $orange;
        }

        & p {
            color: white;
            text-align: center;
            font-size: x-small;
        }
    }
}

.navContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2px 0;
    //background: linear-gradient(to left, $bgcolor, whitesmoke 50%, $bgcolor);
    margin: 0 auto;
    max-width: 1100px;
}

// bouttons ----
#btn-main {
    transition: all 1s;
    background-position: 40% 40%;
    background-image: url("../../public/livre.webp");

    &:hover {
        background-position: 35% 90%;
    }
}

#btn-cv {
    background-position: 28% 28%;
    transition: all 1s;
    background-image: url("../../public/rouage.webp");

    &:hover {
        background-position: 65% 65%;

    }
}

#btn-project {
    background-position: 50% 5%;
    transition: all 1s;
    background-image: url("../../public/projet.webp");

    &:hover {
        background-position: 90% 80%;
    }
}

#btn-contact {
    transition: all 1s;
    background-image: url("../../public/contact.webp");

    &:hover {
        background-position: 40% 60%;

    }
}

@media screen and (max-width : 1300px) {
    .tri-container {
        top: -40px;
        left: -100px;
    }
}

@media screen and (max-width : 1000px) {
    .tri-container {
        top: -20px;
        left: -260px;
    }
}

@media screen and (max-width : 800px) {
    .tri-container {
        top: -30px;
        left: -220px;
    }
}

@media screen and (max-width : 600px) {
    .tri-container {
        top: -20px;
        left: -240px;
    }

    h1 {
        font-size: xx-large;
    }

    .links {
        & a {
            margin: 12px 24px;
        }
    }
}
</style>