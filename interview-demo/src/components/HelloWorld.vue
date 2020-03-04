<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>目录</h2>
    <ul>
      <li v-for='(item, index) in data' :key="index" @click="toPage(item.pathName)">
       {{index + 1}} {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      data: [{
        name: '问题的测试环境',
        pathName: 'Question'
      }]
    }
  },
  methods: {
    toPage (pathName) {
      this.$router.push({ name: pathName})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
