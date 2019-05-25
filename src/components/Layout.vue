<style type="scss">
</style>
<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="account">账户</el-menu-item>
        <el-menu-item index="train" >训练营</el-menu-item>
        <el-menu-item index="task">任务卡</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data(){
      let name = this.$route.path.split('/')[1];
      return {activeIndex: name || 'account'}
    },
    methods: {
      handleSelect(name) {

        this.$router.push({name})
      }
    },
    mounted(){
    }
  }
</script>
