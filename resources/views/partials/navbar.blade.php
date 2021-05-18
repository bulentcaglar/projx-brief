<nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <a class="navbar-brand" href="/">LOGO</a>
  <router-link
    class="navbar-brand pl-3"
    style="border-left: 1.5px solid #D3D3D3;"
    :to="{name: 'products.index'}">
    Ürünler
  </router-link>
  <ul class="navbar-nav mr-auto">
  </ul>
  <router-link
    class="navbar-brand"
    :to="{name: 'order.checkout'}">
    <div style="color: rgb(132, 132, 250); !important;"><i class="fa fa-shopping-cart fa-2x"></i></div>
    <button class="btn btn-secondary btn-sm rounded-circle shopping-quantity" v-text="$store.state.cart.length"></button>
  </router-link>
</nav>
