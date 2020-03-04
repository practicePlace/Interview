<template>
  <div>
    <h1>测试环境</h1>
    <ul>
      <li v-for="(item, index) in question" :key="index" @click="toPage(item.pathName)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data () {
    return {
      question: [{
        title: '029-聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的?',
        pathName: 29
      }]
    }
  },
  computed: {},
  created () {},
  methods: {
    toPage (pathName) {
      console.log('pathname', pathName)
      this.$router.push({name: pathName})
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
