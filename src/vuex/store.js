import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isBusy: false,
    sales: 0,
    products: 
    [ {id: '0001', nombre: 'Agua sin gas', stock: 30, precio: 670},
      {id: '0002', nombre: 'Leche extra proteína', stock: 25, precio:1190}, 
      {id: '0003', nombre: 'Huevos Docena', stock: 10, precio: 1590}, 
      {id: '0004', nombre: 'Pan marraqueta integral 1kg', stock: 100,precio: 990},
      {id: '0005', nombre: 'Avena multisemillas', stock: 0, precio: 1390}]
  },
  mutations: {
    TOGGLE_BUSY: (state) =>
    {
      state.isBusy = !state.isBusy
    },
    ADD_STOCK: (state, product) =>
    {
      let selectedProduct = state.products.find((prod) => {
        return product.id == prod.id
      }
       ) 
       selectedProduct.stock++
    }
  },
  actions: {
    toggleBusy ({ commit }){
      commit("TOGGLE_BUSY")
    },
    addStock({ commit }, product){
      commit('ADD_STOCK', product)
    }
  },
  getters: {// getters trae los datos de state
    availableProducts (state)  {
      return state.products.filter((product) => {
        return product.stock > 0
      })
    },
    cheapProducts (state, getters) {
      return  getters.availableProducts.filter((product) => {
        return product.precio < 1000
      })
    },
    getProductById: (state, getters) => (id) => {// lleva : por que anida varias funciones, es una funcion que retorna una funcion
     return getters.availableProducts.find((product) => {
      return product.id == id
        }) 
    }
  }
})

export default store
