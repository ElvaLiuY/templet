<template>
  <div>糟了，页面飞走啦~</div>
</template>

<script>
export default {
  name: 'notFind',
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
<style src ="./notFind.less" lang ="less"></ style>

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
