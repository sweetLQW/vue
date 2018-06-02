<template>
  <div class="hello">
    <h1>{{ $store.state.count }}</h1>
    <h1>{{ $store.state.userInfo.name }}</h1>
    <h1>{{ $store.state.userInfo.tel }}</h1>
    <div @click="$router.push('test1')">jump</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    let vm = this;
    setInterval(function () {
      //更改store
      vm.$store.commit('increment');
      vm.$store.commit('setUserInfo',{name:'lqw',tel:'18511753482'});
    },1000);
    //请求数据
    vm.$axios({
      url:vm.$util.getUrl('aaaaa')
    }).then(function (res) {
      vm.$vux.toast.show('请求成功');
    }).catch(function (err) {
      vm.$vux.toast.show('请求失败');
    })
  },
  methods:{
    jump:function () {
      let vm = this;
      vm.$router.push('/test1');
    }
  }
}
</script>

<style scoped lang="less" type="text/less">

</style>
