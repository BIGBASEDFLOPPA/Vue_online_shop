<template>
  <div class="v-popup-wrapper" ref="v-popup-wrapper">
<div class="v-popup">
  <div class="v-popup__header">
    <span>
      <i class="material-icons"
      @click="closePopup">
        close
      </i>
    </span>
  </div>
  <div class="v-popup__body">
    <slot></slot>
  </div>
  </div>
</div>

</template>

<script>
export default {
  name: "v-popup",
  props:{},
  data() {
    return{}
  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  },
  computed:{},
  mounted() {
    let a = this;
    document.addEventListener('click',function (item){
      if(item.target === a.$refs['v-popup-wrapper']){
        a.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
.v-popup-wrapper {
  background-color:rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  display: flex;
  //left:35% ;
  //top:30%;
  justify-content: center;

  .v-popup {

    border:solid 5px dimgrey;
    border-radius: 50px;
    padding: 16px 50px 100px;
    position: fixed;
    width: 400px;
    background: #ffffff;
    box-shadow: 3px 3px 100px 100px rgba(0, 0, 0, 0.2);
    z-index: 10;

    &__header, {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__body {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>