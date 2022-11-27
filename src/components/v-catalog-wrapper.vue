<template>
  <div class = 'v-catalog-wrapper'>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>



export default {
  name: "v-catalog-wrapper",
  props:{},
  data(){
    return{title:"Catalog Wrapper"}
  },
  computed:{},
  methods:{},
  watch:{},
  mounted(){}
}
</script>

<style >
body{

  background-image:url("../assets/images/forest-gdec673c87_1920.jpg");
  background-repeat: no-repeat;
}
.v-catalog-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>