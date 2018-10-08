<template>
  <div class="container">
    <div>{{ str }}</div>
  </div>
</template>

<script>
  import {
    fun
  } from '@/js/common.js';
  export default {
    data() {
      return {
        str: 'test'
      }
    },
    created() {
      this.str = fun(this.str);
      this.$axios.get('/aaaaa')
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      })
    }
  }
</script>