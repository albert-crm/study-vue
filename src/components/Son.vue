<template>
  <div style="border: 3px solid #000; margin: 10px;">

    我是Son组件 {{title}}
    <button @click="changfn">修改title</button>
  </div>
</template>

<script >
export default {
  name: 'Son-Child',

  props: ['title'],
  methods: {
    changfn () {
      // 通过this.$emit() 向父组件发送通知
      this.$emit('changTitle', '传智教育')
    },
  },
}
</script>

<style scoped>
.base_count {
  margin: 20px;
}
</style>