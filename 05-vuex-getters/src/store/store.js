import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        productsMain: [
            { name:'Banana Skin' , price: 20 },
            { name:'Shiny Star'  , price: 40 },
            { name:'Green Shells', price: 60 },
            { name:'Red Shells'  , price: 80 },
          ]
    },

    getters: { // King of computed properties for the store

        saleProducts: state => {
          return state.productsMain.map( product => {
            return {
              name: product.name + ' *',
              price:  product.price * 0.75
            }
          });
        },

        superSaleProducts: state => {
          return state.productsMain.map( product => {
            return {
              name:  '**' + product.name + '**',
              price:  product.price * 0.5
            }
          });
        }
    }
})