<template>
  <div id="app">
    <v-catalog-wrapper/>
  </div>
</template>

<script>

import vCatalogWrapper from './components/v-catalog-wrapper'


export default {
  name: 'app',
  components: {
    vCatalogWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

