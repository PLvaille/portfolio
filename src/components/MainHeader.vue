<template>
    <h1 class="headerWelcome">
        <div class="dot dot1">•</div>
        <div class="dot dot2">•</div>
        <div class="dot dot3">•</div> Bienvenue sur mon Portfolio
        <div class="dot dot4">•</div>
        <div class="dot dot2">•</div>
        <div class="dot dot1">•</div>
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

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
$dark-main: #475C7A;
$grey : #685D79;
$darkred : #AB6C82;
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;

.links {
    display: flex;
    justify-content: center;
    font-size: xxx-large;
    margin-bottom:16px;

    & a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: $cream;
        margin: 16px;
        height:42px;

        &:hover {
            color: $orange;
        }

        & p {
            text-align: center;
            font-size: x-small;
        }
    }
}

p {
    margin: 0;
}

h1 {
    margin-top: 1%;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    color: white;
    font-size: xxx-large;
}

.dot1 {
    margin: -2px 1px;
    color: $orange;
}

.dot2 {
    margin: -1px 1px;
    color: $red;
}

.dot3,
.dot4 {
    color: $darkred;
    margin: 0 1px;
}

.dot3 {
    margin-right: 4px;
}

.dot4 {
    margin-left: 4px;
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