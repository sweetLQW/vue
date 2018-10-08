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
    }
  }
</script>