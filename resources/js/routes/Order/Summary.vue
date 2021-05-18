<template>
  <div style="min-height: 83vh;">
    <h1 class="py-2 my-24px;">Alışverişiniz için Teşekkür Ederiz</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ürün adı</th>
          <th scope="col">Ürün adedi</th>
          <th scope="col">Fiyat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in order" :key="item.id">
          <td v-text="item.name"></td>
          <td v-text="item.quantity"></td>
          <td v-text="cartLineTotal(item)"></td>
        </tr>
        <tr>
          <td>Toplam Tutar</td>
          <td v-text="cartQuantity"></td>
          <td v-text="cartTotal"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    cartLineTotal(item) {
      let amount = item.price * item.quantity;
      amount = amount / 100;

      return amount.toLocaleString("tr-TR", {
        style: "currency",
        currency: "TRY",
      });
    },
    processPayment() {
      this.$store.dispatch("clearCart");
      this.$router.push({ name: "order.summary" });
    },
  },

  computed: {
    order() {
      return this.$store.state.order;
    },
    cartQuantity() {
      return this.$store.state.order.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    cartTotal() {
      let amount = this.$store.state.order.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      amount = amount / 100;

      return amount.toLocaleString("tr-TR", {
        style: "currency",
        currency: "TRY",
      });
    },
  },
};
</script>
