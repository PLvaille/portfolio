<template>
    <div class="footer">
        <ul>

            <li>
                <a href="https://www.linkedin.com/in/pierre-louis-vaille-143877241/" target="_blank">
                <font-awesome-icon icon="fa-brands fa-linkedin" /><span>Profil LinkedIn</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/PLvaille?tab=repositories" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" /><span>Repository GitHub</span>
                </a>
            </li>
            <li>
                <a href = "mailto: pierrelouis.vaille@gmail.com">
                <font-awesome-icon icon="fa-solid fa-envelope" /><span>Pierrelouis.vaille@gmail.com</span>
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
.footer {
    margin-block: 0;
    margin-top: 24px;
    background: #111;
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