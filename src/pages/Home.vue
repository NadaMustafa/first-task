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
      <b-button v-b-modal.filterModal class="home__filter-button" variant="faded">Filter</b-button>
      <b-modal id="filterModal" class="filter-modal" hide-footer>
        <b-form-group v-for="(options, index) in optionsArr" :key="index">
          <template slot="label">
            <strong>{{options.label}}</strong>
          </template>
          <b-form-checkbox-group plain stacked v-model="selected" :options="options.items" />
        </b-form-group>
        <div class="filter-modal__footer">
            <b-row align-h="center" ><b-btn class="filter-modal__btn" size="sm" variant="primary">Apply</b-btn></b-row>
            <b-row align-h="center"><b-btn class="filter-modal__btn" size="sm">Cancel</b-btn></b-row>
        </div>
      </b-modal>
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
import AppFooter from "../common/Footer";
export default {
  name: "Home",
  components: {
    ProductCard,
    AppFooter
  },
  data() {
    return {
      currentPage: 1,
      selected: [],
      optionsArr: [
        {
          label: 'Category',
          items: [
            {text: 'Consumer Electronics', value: 'Consumer Electronics'},
            {text: 'Home & Living', value: 'Home & Living'},
            {text: 'Children & Baby', value: 'Children & Baby'},
            {text: 'Household', value: 'Household'}
          ]
        },
        {
          label: 'Condition',
          items: [
            {text: 'Unchecked', value: 'Unchecked'},
            {text: 'Like New', value: 'Like New'},
            {text: 'Used With Flaws', value: 'Used With Flaws'},
            {text: 'Defect', value: 'Defect'},
            {text: 'Mixed', value: 'Mixed'}
          ]
        },
        {
          label: 'Price',
          items: [
            {text: '0 € - 99 €', value: '0 € - 99 €'},
            {text: '100 € - 199 € ', value: '100 € - 199 € '},
            {text: '200 € - 299 €', value: '200 € - 299 €'},
            {text: '300 € - 399 €', value: '300 € - 399 €'},
            {text: '> 400 €', value: '> 400 €'}
          ]
        }
      ]
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
    border-style: solid;
    border-width: 1px;
    border-color: gray;
    border-radius: 0px;
    padding: 2px 32px 2px 32px;
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
.filter-modal{
  &__btn {
    width: 70%;
    margin-bottom: 8px;
  }
}
</style>
