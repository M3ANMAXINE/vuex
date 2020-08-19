<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-text="busy"></p>
    <button @click.prevent="toggleBusy" class="btn btn-danger ">Cambiar Estado</button>
    <p v-text="sale"></p>
    <input type="text" placeholder="Ingrese un articulo" v-model="search">
    <ul v-if="searchById"> 
      <li>{{ searchById.nombre }}</li>
    </ul>

    <ul v-else>
      <li v-for="(product,index) in availableProducts" :key="index">{{ product.nombre }}</li>
    </ul>

    <ul>
      <li v-for="(product,index) in products" :key="index">{{ product.nombre }} {{ product.stock}} 
        <button @click.prevent='addStock(product)' class="btn btn-danger">+</button>  </li>
    </ul>
              <p>Ofertas de ultimo minuto</p>
    <ul>
      <li v-for="(product,index) in cheapProducts" :key="index">{{ product.nombre }} {{ '$ ' + product.precio }}</li>
    </ul>

  </div>
</template>

<script>
import { mapState,mapGetters, mapActions } from "vuex";

export default {
  name: 'App',
  data(){
    return {
      search: null
    }
  },
  computed: { 
  ...mapState (['isBusy', 'sales', 'products']),
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
  methods: {
    ...mapActions(['toggleBusy', 'addStock'])
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
