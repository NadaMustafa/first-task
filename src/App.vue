<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import '~bootstrap-vue/dist/bootstrap-vue.css';
.btn-primary {
  color: white;
  background-color: #ff9933;
  border-color: #ff9933;
}
</style>
