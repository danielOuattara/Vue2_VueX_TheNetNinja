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
    
    // ------------------------------------------------------------------------
    getters: { // A kind of computed properties for the store
      
        saleProducts: state => {
          return state.productsMain.map( product => {
                return {
                  name:  '**' + product.name,
                  price:  Math.round(product.price * 0.8* 100)/100
                }
          });
        },

        superSaleProducts: state => {
          return state.productsMain.map( product => {
                return {
                  name:  '**' + product.name,
                  price:  Math.round(product.price * 0.6* 100)/100
                }
          });
        }
    },
          
    // ------------------------------------------------------------------------
    mutations: {
      
      // reducePrice(state) {
        //   setTimeout(() => { // Not this way:  data changes are not synch. with Vue tool
        //     state.productsMain.forEach(product => {
          //       product.price -= 1;
          //     });
          //   }, 3000)
          // }
          
          //-----------------------------------------
          
          reducePriceMutation_NoParam(state) {  // for case 1
            state.productsMain.forEach( product => {
              product.price -= 2;
            });
          },

          // -------------------------------------------  
            reducePriceMutation(state, payload) {  //  for case 2
              state.productsMain.forEach(product => {
                product.price -= payload;
              });
            }
          },
                
    // ------------------------------------------------------------------------
    actions: {

      reducePriceAction_NoParam: (context) => {  // case 1
        setTimeout(()=>{
          context.commit('reducePriceMutation_NoParam')
        }, 1000)
      },

      reducePriceAction: (context, payload) => {  // case 2
        setTimeout(()=>{
          context.commit('reducePriceMutation', payload)
        }, 1000)
      }
    }
    
})