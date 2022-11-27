<template>
  <div class = 'v-catalog-item'>
    <v-popup
    v-if="isShowPopupDescription"
    @closePopup="closePopupDescription"
    >
      <img class="v-catalog-item__image" :src="imgLink" :alt="product_data.name" />
      <div>
      <p class="v-catalog-item__name">{{product_data.name}}</p>
      <p class="v-catalog-item__price">Price: {{product_data.price}} RUB</p>
      <p class="v-catalog-item__price">{{product_data.category}} </p>
      </div>
    </v-popup>

    <img class="v-catalog-item__image" :src="imgLink" :alt="product_data.name" />
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price}} RUB</p>
    <button

        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart">add to card
    </button>
    <br>
    <br>
    <button class="v-catalog-item__description-btn"
            @click="showPopupDescription"
    >
      description
    </button>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup'
export default {
  name: "v-catalog-item",
  components: {
    vPopup
  },
  props:{
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      isShowPopupDescription:false
    }
  },
  computed: {
    imgLink: function () {
      const fileName = this.product_data.image;
      return require(`../../assets/images/${fileName}`);
    }
  },
  methods:{
    addToCart(){
    this.$emit('addToCart',this.product_data)
    },
    showPopupDescription(){
      this.isShowPopupDescription = true;
    },
    closePopupDescription(){
      this.isShowPopupDescription = false;
    }
  },
  mounted() {
    this.$set(this.product_data,'quantity',1)
  }

}
</script>


<style lang="scss">


.v-catalog-item{
  background: blanchedalmond;
  flex-basis: 25%;
  box-shadow: 1px 12px 10px 0px rgba(125, 129, 131, 0.2);
  padding: $padding*2;
  margin-bottom: $margin*2 ;
  &__image{
    width: 200px;
    height: 130px;

  }
  &__description-btn{
    padding: 7px ;
    background: #d1a5ca;
    border: 0;
    border-radius: $radius;
    cursor:pointer;
  }
}

</style>