<template>
  <div class="App">
    <base-count></base-count>
    <base-count></base-count>
    <base-count></base-count>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'


export default {
  name: "App",
  components: {
    BaseCount


  }
}
</script>

<style>
</style>