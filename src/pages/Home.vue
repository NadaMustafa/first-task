<template>
  <div class="home text-dark">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand class="brand-name">Brand</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_text_collapse"></b-collapse>
    </b-navbar>
    <img class="home__cover-img img-fluid" src="../assets/store.png" alt="store">
    <p class="home__cover-title">NEW LOTS POSTED DAILY. CLICK HERE TO GET NOTIFIED!</p>
    <b-container fluid>
      <b-button class="home__filter-button" variant="faded">Filter</b-button>
      <b-row align-h="around">
        <b-col lg="3">
          <product-card condition="Unchecked"/>
        </b-col>
        <b-col lg="3">
          <product-card condition="Used"/>
        </b-col>
        <b-col lg="3">
          <product-card condition="Like New"/>
        </b-col>
      </b-row>
      <b-pagination
        align="center"
        :total-rows="100"
        v-model="currentPage"
        hide-goto-end-buttons
        hide-ellipsis
        next-text="Next"
        :per-page="10"
        variant="secondary"
      ></b-pagination>
    </b-container>
    <app-footer/>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
import AppFooter from "../common/Footer"
export default {
  name: "Home",
  components: {
    ProductCard,
    AppFooter
  },
  data() {
    return {
      currentPage: 1
    };
  }
};
</script>

<style lang="scss" scoped>
.brand-name {
  color: "#4A494A";
  font-weight: bold;
}
.home {
  &__filter-button {
    margin-bottom: 16px;
  }
  &__cover-img {
    width: 100%;
  }
  &__cover-title {
    background: #ff9933;
    color: white;
    padding: 8px 16px 8px 16px;
    font-weight: bold;
  }
}
</style>
