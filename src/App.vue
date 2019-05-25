<template>
  <div id="app">
    <layout>
      <router-view/>
    </layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout"
export default {
  components:{
    Layout
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
