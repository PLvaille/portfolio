<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                
                <button class="carouselBtn carouselBtnPrev">⬅️</button>             
                <button class="carouselBtn carouselBtnNext">➡️</button>
                <button class="carouselBtn carouselBtnClose" @click="$parent.displayImg()">X</button>
                 <div class="modal-body"><img :src="require(`../assets/img/${carousel[0]}`)"/></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    // v if id = id

    //transformer le tableau pour récup chaque image

    props : {
        carousel: {
            type : Array
        },
        // id : {
        //     type: Number
        // }
    },
    // data(){
    //     imgtodisplay = []
    // },
    methods:{
        log(){
            console.log(this.carousel)
           // this.imgtodisplay = carousel[0];
        }
    },
    created(){
        this.log();        
    }

}
</script>

<style lang="scss">
$dark-main: #475C7A;
$grey : #685D79;
$darkred : #AB6C82;
$red : #D8737F;
$orange : #FCB860;
$cream : #dbd5ce;

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  display: table;
  transition: opacity 0.3s ease-in-out;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
    /* display:flex;
    flex-direction: column;
    justify-content: center; */
  width: 83%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position:relative;
}

.modal-body {
    width:80%;
    & img {
        width:60%;
    }
}

.carouselBtn {
cursor:pointer;
border-radius: 4px;
}
.carouselBtnNext{
    position:absolute;
    top:50%;
    right:8px;
}
 .carouselBtnPrev {
       position:absolute;
    top:50%;
    left:8px;

}

.carouselBtnClose {
    position:absolute;
    top:8px;
    right: 8px;
    background: $darkred;
    box-shadow: #685D79 2Px 1px;
    &:hover {
        
        background:$red;
        box-shadow: #685D79 1px 0px;
    }
}

</style>