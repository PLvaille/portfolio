<template>
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
            <p>Repo github</p>
        </a>
        <a href="mailto: pierrelouis.vaille@gmail.com">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <p>Contact</p>
        </a>
    </div>

    <div class="navContainer">
        <button class="btn filter-btn" id="btn-main" @click="handleMain(), btnColorFilter()">Portfolio</button>
        <button class="btn" id="btn-cv" @click="handleCV(), btnColorFilter()">Resume</button>
        <button class="btn" id="btn-project" @click="handleProject(), btnColorFilter()">Projects</button>
        <button class="btn" id="btn-contact" @click="handleInfo(), btnColorFilter()">More</button>
    </div>

</template>

<script>

export default {
    methods : {
        btnColorFilter(){
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

.headerWelcome {
    color: $cream;
    font-family: 'Shadows Into Light';
}

.links {
    display: flex;
    justify-content: center;
    font-size: xxx-large;
    padding: 24px;

    & a {
        transition: all ease 0.4s;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: $cream;
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

p {
    margin: 0;
}

h1 {
    margin-top: 0;
    padding-top:1%;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    color: white;
    font-size: xxx-large;
}


@media screen and (max-width : 600px) {
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