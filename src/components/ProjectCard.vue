<template>
    <div class="cardContainer">
        <div class="cardImgContainer">
            <img title="" alt="" />
        </div>
    
        <div class="cardDescription">
            <h2>
                {{projectName}}
            </h2>
            <span>{{summary}}</span>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
.cardContainer {
    width:200px;
    height:200px;
    border : 2px solid red;

}
.cardImgContainer{
    border:2px solid green;
}
</style>