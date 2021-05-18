<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ürün adı</th>
          <th scope="col">Ürün adedi</th>
          <th scope="col">Fiyat</th>
          <th scope="col">İşlem</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.id">
          <td v-text="item.name"></td>
          <td v-text="item.quantity"></td>
          <td v-text="cartLineTotal(item)"></td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="$store.commit('removeFromCart', index)"
            >Remove</button>
          </td>
        </tr>
        <tr>
          <td>Toplam Tutar</td>
          <td v-text="cartQuantity"></td>
          <td v-text="cartTotal"></td>
        </tr>
      </tbody>
    </table>
    <form>
      <fieldset disabled>
        <div class="form-group" disabled>
          <label for="cardNumber">Kart numarası</label>
          <input
            type="text"
            class="form-control col-md-4"
            id="cardNumber"
            placeholder="Kart numarası"
          />
        </div>
        <div class="form-group">
          <label for="name">Kart üzerindeki isim</label>
          <input
            type="text"
            class="form-control col-md-4"
            id="name"
            placeholder="Kart üzerindeki isim"
          />
        </div>
        <div class="form-group">
          <label for="expirationDate">Son kullanma tarihi</label>
          <input
            type="text"
            class="form-control col-md-4"
            id="expirationDate"
            placeholder="Son kullanma tarihi"
          />
        </div>
        <div class="form-group">
          <label for="cardVerificationCode">Güvenlik kodu</label>
          <input
            type="text"
            class="form-control col-md-4"
            id="cardVerificationCode"
            placeholder="Güvenlik kodu"
          />
        </div>
      </fieldset>
    </form>
    <div class="col-md-2 pl-0">
      <button
        class="btn btn-primary"
        @click="processPayment()"
        v-if="!paymentProcessing"
      >Alışverişi Tamamla</button>
      <button class="btn btn-primary" v-if="paymentProcessing" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        processing...
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paymentProcessing: false,
    };
  },
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
      this.paymentProcessing = true;
      // fake delay
      let that = this;
      setTimeout(function () {
        that.$store.commit("setToOrder");
        that.$store.dispatch("clearCart");
        that.$router.push({ name: "order.summary" });
      }, 2000);
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartQuantity() {
      return this.$store.state.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    cartTotal() {
      let amount = this.$store.state.cart.reduce(
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
