
require('./bootstrap');

window.Vue = require('vue').default;

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router';
import axios from 'axios';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: require('./routes.js')
});

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    order: []
    // for real payment processing
    // order: {}
  },

  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },

    setToOrder(state) {
      for (var i = 0; i < state.cart.length; i++) {
        state.order[i] = state.cart[i];

      }
    },

    addToCart(state, product) {
      let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug);
      if (productInCartIndex !== -1) {
        state.cart[productInCartIndex].quantity++;
        return;
      }

      product.quantity = 1;
      state.cart.push(product);
    },

    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },

    // for real payment processing
    updateOrder(state, order) {
      state.order = order;
    },

    updateCart(state, cart) {
      state.cart = cart;
    }
  },

  actions: {
    getProducts({ commit }) {
      axios.get('/products')
        .then((response) => {
          commit('updateProducts', response.data);
        })
        .catch((error) => console.log(error))
    },
    clearCart({ commit }) {
      commit('updateCart', []);
    }
  }
});

Vue.component('star-raiting', require('./components/StarRating.vue').default);

const app = new Vue({
  router,
  store,
  el: '#app',
  created() {
    store.dispatch('getProducts')
      .then(_ => { })
      .catch((error) => console.log(error));
  }
});
