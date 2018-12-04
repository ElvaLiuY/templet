<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="flex-row">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    </div>
    <p>这里是test</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Hello!'
    }
  },
  mounted () {
    this.$api.get('testGet', {}, function (data) {
      console.log(data)
    }, function (err) {
      console.log(err)
    })
  }
}
</script>
<style src ="./test.less" lang ="less"></ style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
/* <style scoped> */
/* h1, h2 {
  font-weight: normal;
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
</style> */
