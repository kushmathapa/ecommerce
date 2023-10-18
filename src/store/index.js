import { createStore } from 'vuex';
import prodcutsModule from './modules/product.js';
import cartModule from './modules/cart.js';

const store = createStore({
  modules: {
    prods: prodcutsModule,
    cart: cartModule,
  },
});

export default store;
