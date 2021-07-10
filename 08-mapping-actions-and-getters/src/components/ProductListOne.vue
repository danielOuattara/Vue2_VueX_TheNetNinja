<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span class="name"> {{ product.name}} </span>
        <span class="price"> $ {{ product.price}} </span>
      </li>
    </ul>
   <button v-on:click="reducePriceAction_NoParam">Click price reducer</button>
   <button v-on:click="reducePriceAction(3)">Click price reducer by 3</button>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
    computed: {
      products() {
        return this.$store.state.productsMain;
      },
    },

    methods: {
      ...mapActions(['reducePriceAction_NoParam', 'reducePriceAction' ])
    }
}
</script>

<style scoped>
#product-list-one {
  background: #a8c8f5;
  box-shadow:  1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

#product-list-one ul {
  padding: 0;
  list-style-type: none;
}
#product-list-one li {
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