<template>
  <b-container fluid class="footer">
    <p class="footer__title font-weight-bold">Brand</p>
    <b-row>
      <b-col lg="4">
        <p class="font-weight-bold mb-0">Company</p>
        <a>About Us</a>
        <a>Sign Up / Log In</a>
        <a>FAQ</a>
      </b-col>
      <b-col lg="4">
        <p class="font-weight-bold mb-0 mt-2">Information</p>
        <a>Inventory Notifications</a>
        <a>Terms & Conditions</a>
        <a>Imprint</a>
      </b-col>
      <b-col lg="4">
        <p class="font-weight-bold mb-0 mt-2">Contact</p>
        <a>b2b@brand.com</a>
        <a>skype: b2b_brand</a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style <style lang="scss" scoped>
p {
  font-size: 14px;
}
a {
  display: block;
}
.footer {
  background-color: white;
  padding-bottom: 32px;
  &__title {
    font-size: 18px;
    padding-top: 16px;
  }
}
</style>
