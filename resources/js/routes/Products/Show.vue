<template>
  <section v-if="product">
    <div class="mobile-display d-flex">
      <img class="mobile-image mr-4" alt="ecommerce" src="https://dummyimage.com/540x540" />
      <div class="flex-column">
        <div>
          <h2 v-for="category in product.categories" :key="category.id" v-text="category.name"></h2>
          <h1 v-text="product.name"></h1>
          <p v-text="product.description"></p>
          <div class="mb-2" v-text="formatCurrency(product.price)"></div>
          <button class="btn btn-primary" role="button" @click="addToCart(product)">Sepete Ekle</button>
        </div>
        <div style="margin-top: 50px;">
          <button class="btn btn-primary" @click="$router.go(-1)">Alışverişe Devam Et</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString("tr-TR", {
        style: "currency",
        currency: "TRY",
      });
    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
      setTimeout(function () {
        alert(`${product.name} isimli ürün sepete başarı ile eklendi`);
      }, 100);
    },
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    product() {
      return this.products.find(
        (product) => product.slug === this.$route.params.slug
      );
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .mobile-display {
    flex-direction: column;
  }
  .mobile-image {
    margin-right: 0 !important;
  }
}
</style>