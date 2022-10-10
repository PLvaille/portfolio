<template>
    <div class="footer">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/pierre-louis-vaille-143877241/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" /><span>• Profil Linkedin</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/PLvaille?tab=repositories" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" /><span>• Dépôt GitHub</span>
                </a>
            </li>
            <li>
                <a href = "mailto: pierrelouis.vaille@gmail.com">
                <font-awesome-icon icon="fa-solid fa-envelope" /><span>• Pierrelouis.vaille@gmail.com</span>
                </a>
            </li>
            <li> 
                <a href="https://vuejs.org/">
                        <span class="vueCredit"><font-awesome-icon icon="fa-brands fa-vuejs" /> VueJs Empowered</span>
                </a>
            </li>
        </ul>      
    </div>
</template>

<script>

export default {
    props : {
        toogleCv : Boolean,
    },
    methods : {
    },
}
</script>

<style lang="scss" >
$orange : #FCB860;
$darkred : #AB6C82;

.vueCredit {
    font-size:x-small;
    position:absolute;
    bottom:4px;
    right:8px;
}
.footer {
    border-top:solid 2px $orange;
    display:flex;
    flex-grow: 1;
    padding-top:18px;
    margin-block: 0;
    background: #333;
    display: flex;
    justify-content: space-around;
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

</style>