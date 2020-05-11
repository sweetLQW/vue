<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <router-link to="/">go to home</router-link>
        <router-link to="/about">go to about</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                title: '我是根App.vue'
            }
        }
    }
</script>

<!-- scoped的作用是指定css只对当前组件有效 -->
<style scoped>
    h1 {
        color: red;
    }
</style>