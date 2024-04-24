<template>
  <div class="App">

    <base-one></base-one>
    <base-two></base-two>
  </div>
</template>

<script>
import BaseOne from './components/BaseOne.vue'
import BaseTwo from './components/BaseTwo.vue'



export default {
  name: "App",
  components: {
    BaseOne,
    BaseTwo

  }
}
</script>

<style>
</style>