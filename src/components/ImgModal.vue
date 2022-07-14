<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                
                <div class="carouselBtnContainer">
                <button class="carouselBtn carouselPreviousImg">⬅️</button>             
                <button class="carouselBtn carouselNextImg">➡️</button>
                </div>

                <div class="modal-body">{{carousel[0]}}</div>
                
                <button class="carouselBtn carouselCloseBtn" @click="$parent.displayImg()">X</button>

            </div>
        </div>
    </div>
</template>

<script>
export default {

    //transformer le tableau pour récup chaque image

    props : {
        carousel : []
    }

}
</script>

<style>

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
    display:flex;
    flex-direction: column;
    justify-content: center;
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

</style>