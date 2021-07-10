import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    // use: strict,
    state: {
        productsMain: [
            { name:'Banana Skin' , price: 20 },
            { name:'Shiny Star'  , price: 40 },
            { name:'Green Shells', price: 60 },
            { name:'Red Shells'  , price: 80 },
        ]
    },

    //----------------------------------------------------------------
    getters: { // A kind of computed properties for the store
        saleProducts: state => {
          return state.productsMain.map( product => {
                return {
                  name:  '**' + product.name,
                  price:  Math.round(product.price * 0.8 * 100 ) / 100,
                }
            });
          },
          
        superSaleProducts: state => {
            return state.productsMain.map( product => {
              return {
                name:  '**' + product.name,
                price:  Math.round(product.price * 0.6 * 100 ) / 100,
              }
            });
          }
        },
        
    //----------------------------------------------------------------
    mutations: {
        reducePriceMutation_NoParam(state) {
          state.productsMain.forEach( product => {
            product.price -= 2;
          });
        },
        
        reducePriceMutation(state, payload) {
          state.productsMain.forEach(product => {
            product.price -= payload;
          });
        }
    },
    
    //----------------------------------------------------------------
    actions: {
        reducePriceAction_NoParam: (context) => {
          setTimeout(()=>{
            context.commit('reducePriceMutation_NoParam')
          }, 1000)
        },

        reducePriceAction: (context, payload) => {
          setTimeout(()=>{
            context.commit('reducePriceMutation', payload)
          }, 1000)
        }
    }
})