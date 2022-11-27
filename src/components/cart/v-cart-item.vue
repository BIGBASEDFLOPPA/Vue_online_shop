<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../../assets/images/' + cart_item_data.image)" alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
  <div class="v-cart-item__quantity">
    <p>quantity</p>
    <span>
      <span class ="quantity_btn" @click="decrementItem">-</span>
      {{cart_item_data.quantity}}
      <span class ="quantity_btn" @click="incrementItem">+</span>
    </span>
  </div>
    <button @click="deleteFromCart" class="btn">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  components: {
  },
  props:{
    cart_item_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{}
  },
  computed:{},
  methods:{
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
      this.$emit('increment')
    },
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/Styles/styles";
 .v-cart-item {
   background: blanchedalmond;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

   box-shadow: 1px 12px 10px 0px rgba(125, 129, 131, 0.2) ;
  padding: $padding*2;
  margin-bottom: $margin*2 ;
  &__image{
    height: 70px;
    width: 90px;
  }
  .quantity_btn{
    cursor:pointer;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none;   /* Chrome/Safari/Opera */
      -khtml-user-select: none;    /* Konqueror */
      -moz-user-select: none;      /* Firefox */
      -ms-user-select: none;       /* Internet Explorer/Edge */
      user-select: none;           /* Non-prefixed version, currently
                                  not supported by any browser */

    padding: 4px;
    background: lightsalmon;
    border: 0;
    border-radius: $radius;

  }

 }

</style>