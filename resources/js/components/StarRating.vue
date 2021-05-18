<template>
  <div
    class="overflow-hidden text-muted"
    v-bind:style="{ width: star + 'px' }"
    v-bind:title="rating"
  >
    <div class="text-muted" style="width: 83px">
      <span>
        <i class="fa fa-star"></i>
      </span>
      <span>
        <i class="fa fa-star"></i>
      </span>
      <span>
        <i class="fa fa-star"></i>
      </span>
      <span>
        <i class="fa fa-star"></i>
      </span>
      <span>
        <i class="fa fa-star"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rating", "star"],
};
</script>