<template>
  <div id="app">
    <product-list-one v-bind:products='productsMain'></product-list-one>
    <product-list-two v-bind:products='productsMain'></product-list-two>
  </div>
</template>

<script>

import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';

export default {
  name: 'App',
  
  components: { 
  'product-list-one': ProductListOne,
  'product-list-two': ProductListTwo
  },

  data() {
    return {
      productsMain: [
        { name:'Banana Skin' , price: 20 },
        { name:'Shiny Star'  , price: 40 },
        { name:'Green Shells', price: 60 },
        { name:'Red Shells'  , price: 80 },
      ]
    }
  },

}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}

</style>
