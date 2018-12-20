<template>
  <b-card img-src="../assets/product.png" img-alt="product-image" img-top class="product-card">
    <p
      class="product-card__title font-weight-bold"
    >Patagonia Netgear Samsung Bulk Bla Viel Spielzeug Lorem Ipsum….</p>
    <b-row class="mb-3" align-v="center">
      <b-col>
        <span class="product-card__old-price text-secondary">399 €</span>
        <span class="product-card__new-price font-weight-bold">289 €</span>
      </b-col>
      <b-col cols="5">
        <i v-if='condition=="Unchecked"' class="fas fa-clipboard-list pr-1"></i>
        <i v-if='condition=="Used"' class="fas fa-box-open pr-1"></i>
        <i v-if='condition=="Like New"' class="fas fa-box pr-1"></i>
        {{condition}}
      </b-col>
      <b-col>
        <span class="font-weight-bold">8</span> Units
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-button class="product-card__view-details-btn" variant="primary" block>View Details</b-button>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    condition: String
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 32px;
  &__view-details-btn {
    width: 70%;
  }
  &__old-price {
    display: block;
    text-decoration: line-through;
  }
  &__new-price {
    color: #ff6633
  }
}
</style>
