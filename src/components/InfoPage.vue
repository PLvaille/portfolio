<template>
    <div class="info-main-container">


        <div class="info-container">
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40492.58593492475!2d3.0468978!3d50.631080600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579b3256e11%3A0x40af13e81646360!2sLille!5e0!3m2!1sfr!2sfr!4v1665509991393!5m2!1sfr!2sfr"
                    width="300" height="275" style="border:0;" loading="lazy"></iframe>
            </div>
            <div class="info-text">
                <p>
                    Mobile sur la métropole lilloise
                </p>
                <p> Disponibilité immédiate </p>
                <p>06.59.01.24.87</p>
                <a href="mailto: pierrelouis.vaille@gmail.com">
                    <p>pierrelouis.vaille@gmail.com</p>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$cream : #dbd5ce;

.info {
    &-main-container {
        backdrop-filter: brightness(0.5);
        padding: 32px 0;
        display: flex;
        justify-content: center;
    }

    &-container {
        border: 1px solid white;
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 32px;
        border-radius: 8px;
        background: linear-gradient(190deg, #e8d0b6, #222 17%);
        margin: 8px;

    }

    &-map {
        border: 1px solid white;
        border-radius: 8px;
    }


    &-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 200px;
        padding: 32px;
        color: $cream;

        & a {
            color: $cream;
        }
    }
}

@media screen and (max-width : 1024px) {

    .info-main-container {
        margin: 0 auto;

    }

    .info-container {
        max-width: 380px;
        padding-top: 24px;
    }
}
</style>