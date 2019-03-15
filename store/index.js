import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cartArray = window.localStorage.getItem('cartArray');

const store = () => new Vuex.Store({
  state: {
    cartArray: cartArray ? JSON.parse(cartArray) : []
  },
  mutations: {
    addItemToCart (state, item) {
        function formatDate(date) {
          var dd = date.getDate();
          if (dd < 10) dd = '0' + dd;
          var mm = date.getMonth() + 1;
          if (mm < 10) mm = '0' + mm;
          var yy = date.getFullYear() % 100;
          if (yy < 10) yy = '0' + yy;
          return dd + '.' + mm + '.' + yy;
        }
        Vue.set(item, 'date', formatDate(new Date()));
        state.cartArray.unshift(item);
        this.commit('saveCart');
    },
    removeCart(state) {
      state.cartArray = [];
      this.commit('saveCart');
    },
    saveCart(state) {
      window.localStorage.setItem('cartArray', JSON.stringify(state.cartArray));
    }
  }
})

export default store