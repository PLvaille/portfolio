<template>
    <div class="footer">
        <ul>

            <li>
                <a href="https://www.linkedin.com/in/pierre-louis-vaille-143877241/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" /><span>LinkedIn Profil</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/PLvaille?tab=repositories" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" /><span>GitHub Repository</span>
                </a>
            </li>
            <li>
                <a href = "mailto: pierrelouis.vaille@gmail.com">
                <font-awesome-icon icon="fa-solid fa-envelope" /><span>Pierrelouis.vaille@gmail.com</span>
                </a>
            </li>
            <li> 
                <a href="https://vuejs.org/">
                        <span class="vue">Empowered with VueJs<font-awesome-icon icon="fa-brands fa-vuejs" /></span>
                </a>
            </li>
        </ul>

        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$orange : #FCB860;
$darkred : #AB6C82;

.vue {
    font-size:small;
    position:absolute;
    bottom:8px;
    right:0;
}
.footer {
    margin-block: 0;
    margin-top: 24px;
    background: #111;
    display: flex;
    justify-content: space-around;
    border-top:solid 2px $darkred;
    & a{
        text-decoration: none;
        color: inherit;
    }
    & span {
        margin: 4px;
    }

    & ul {
        padding: 0;
        list-style-type: none;

        & li {
            margin: 16px;
            &:hover {
                text-decoration: underline;
                text-decoration-color: $orange;
                text-underline-offset: 3px;
                cursor : pointer;
            }
        }
    }

}
@media screen and (max-width : 600px) {
    .footer {
        position: absolute;
        bottom:-2050px;
        width:100%;
        height: 200px;
    }
}

@media screen and (max-width : 420px) {
    .footer {
    height:140px;
    bottom:-2130px;
    }
}

</style>