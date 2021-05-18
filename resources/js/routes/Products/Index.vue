<template>
  <section>
    <div class="list-item">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div v-for="product in products" :key="product.id">
          <router-link
            class="text-decoration-none"
            :to="{ name: 'products.show', params: { slug: product.slug } }"
          >
            <div class="col mb-4">
              <div class="card">
                <img src="https://dummyimage.com/320x200" alt="ecommerce image" />
                <div class="card-body py-2" style="color: black;">
                  <h5
                    class="card-title mb-2"
                    v-for="category in product.categories"
                    :key="category.id"
                    v-text="category.name"
                  ></h5>
                  <p class="card-text mb-2" v-text="product.name"></p>
                  <star-rating
                    v-bind:raiting="product.star_rating"
                    v-bind:star="(product.star_rating * 83) / 5"
                  ></star-rating>
                  <p v-text="formatCurrency(product.price)"></p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from "../../components/StarRating";

export default {
  components: {
    StarRating,
  },

  methods: {
    formatCurrency(price) {
      price = price / 100;
      return price.toLocaleString("tr-TR", {
        style: "currency",
        currency: "TRY",
      });
    },
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style>
.list-item:hover {
  cursor: pointer;
}
</style>