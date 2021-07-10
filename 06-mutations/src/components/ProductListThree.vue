<template>
  <div id="product-list-three">
    <h2>Product List Three</h2>
    <ul>
      <li v-for="product in superSaleProducts" :key="product.name">
        <span class="name"> {{ product.name}} </span>
        <span class="price"> $ {{ product.price}} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed: {
      products() {
        return this.$store.state.productsMain;
      },

      superSaleProducts() {
        return this.$store.getters.superSaleProducts;
      }
    }
}
</script>

<style scoped>
  #product-list-three {
    background: #bdb885;
    box-shadow:  1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }
  #product-list-three ul {
    padding: 0;
    list-style-type: none;
  }
  #product-list-three li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
  .price {
    font-weight: bold;
    color: #860CE8;
    /* display: block; */
  }
</style>