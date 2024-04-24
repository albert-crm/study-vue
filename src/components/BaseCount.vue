<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{count}}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script >
export default {
  // data() {
  //   console.log('函数执行了')
  //   return {
  //     count: 100,
  //   }
  // },
  data () {
    return {
      count: 999
    }
  }
}
</script>

<style scoped>
.base_count {
  margin: 20px;
}
</style>