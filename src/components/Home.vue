<template>
  <div class="home">
    <b-navbar toggleable="lg" type="light" variant="faded">
        <b-navbar-brand class="brand-name">Brand</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_text_collapse">
        </b-collapse>
    </b-navbar>
    <img class="home__cover-img img-fluid" src="../assets/store.png" alt="store">
    <p class="home__cover-title">NEW LOTS POSTED DAILY. CLICK HERE TO GET NOTIFIED!</p>    
    <b-container fluid>
      <b-button variant="faded">Filter</b-button>
        <b-card title="Card Title"
          img-src="../assets/logo.png"
          img-alt="product-image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <p class="card-text">
            Patagonia Netgear Samsung Bulk Bla Viel Spielzeug Lorem Ipsum….
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.brand-name {
  color: "#4A494A";
  font-weight: bold;
}
.home {
  &__cover-img {
    width: 100%;
  }
  &__cover-title {
    background: #FF9933;
    color: white;
    padding: 8px 16px 8px 16px;
    font-weight: bold;
  }
}
</style>
