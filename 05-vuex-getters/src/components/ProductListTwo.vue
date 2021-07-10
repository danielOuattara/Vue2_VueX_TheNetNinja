<template>
  <div id="product-list-two">
    <h2>Product List Two : Light Sold</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="name"> {{ product.name}} </span>
        <span class="price"> $ {{ product.price}} </span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
    data() {
      return {}
    },
    
    computed: {

       // case 1 -----------------------------------------------------------------

      // products() {
      //   return this.$store.state.productsMain;
      // },

      // saleProducts() { //  NO ** this way is tedious for changing 100 components
      //     return this.products.map( product => {
      //       return {
      //         name:  '**' + product.name,
      //         price:  product.price * 0.5
      //       }
      //     });
      // }

      // case 2 -------------------------------------------------------------------

      // saleProducts() { //  NO ** this way is tedious for changing 100 components
      //     return this.$store.state.productsMain.map( product => {
      //       return {
      //         name:   product.name + ' *',
      //         price:  product.price * 0.5
      //       }
      //     });
      // }

       // case 3 -----------------------------------------------------------------

      saleProducts() {
        return this.$store.getters.saleProducts;
      }
    }
}
</script>


<style scoped>

#product-list-two {
  background: #a8c8f5;
  box-shadow:  1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

#product-list-two ul {
  padding: 0;
  list-style-type: none;
}
#product-list-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

.price {
  font-weight: bold;
  color: #860CE8;
  display: block;
}



</style>