<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-text="busy"></p>
    <p v-text="sale"></p>
    <input type="text" placeholder="Ingrese un articulo" v-model="search">
    <ul v-if="searchById"> 
      <li>{{ searchById.nombre }}</li>
    </ul>

    <ul v-else>
      <li v-for="(product,index) in availableProducts" :key="index">{{ product.nombre }}</li>
    </ul>
              <p>Ofertas de ultimo minuto</p>
    <ul>
      <li v-for="(product,index) in cheapProducts" :key="index">{{ product.nombre }} {{ '$ ' + product.precio }}</li>
    </ul>

  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";

export default {
  name: 'App',
  data(){
    return {
      search: null
    }
  },
  computed: { 
  ...mapState (['isBusy', 'sales']),
  ...mapGetters(['availableProducts','cheapProducts', 'getProductById']),
    busy () {
let status = this.isBusy ? 'ocupado' : 'disponible'
return `Estado ${status}` 
  },
  sale () {
    return `El total de ventas es : ${this.sales}`//sale muestra las ventas
  },
  searchById () {
return this.getProductById(this.search)
    }
  },
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
