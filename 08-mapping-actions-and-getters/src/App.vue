<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <product-list-three></product-list-three>
  </div>
</template>

<script>

import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';
import ProductListThree from './components/ProductListThree';

export default {
  name: 'App',
  data() {
    return { }
  },

  components: { 
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
    'product-list-three': ProductListThree,
   }
}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}

</style>
