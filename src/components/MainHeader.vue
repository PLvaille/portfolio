<template>
    <h1 class="headerWelcome">
        <div class="dot dot1">•</div>
        <div class="dot dot2">•</div>
        <div class="dot dot3">•</div> Bienvenue sur mon Portfolio
        <div class="dot dot4">•</div>
        <div class="dot dot2">•</div>
        <div class="dot dot1">•</div>
    </h1>
    <p>(en cours de réalisation)</p>

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

p {
    margin: 0;
}

h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    color: white;
    // text-decoration: underline overline;
    // text-decoration-color: $grey;
    // text-underline-offset: 8px;
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
</style>