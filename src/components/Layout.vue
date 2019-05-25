<style type="scss">
  .out-container{
    display:block;
  }
  .container{
    width:100%;
    border-bottom:1px solid #ccc;
    box-shadow:1px 0px 3px 0px #ccc;
    flex-shrink: 0;
  }
  .header{
    width:1200px;
    margin:auto;
  }
  .menu{
    float:left;
    margin-right:20px;
  }
  .nav-icon {
    float:left;
    font-size: 35px;
  }
  .main{
    flex-shrink: 0;
  }
</style>
<template>
  <el-container class="out-container">
    <div class="container">
      <el-header class="header">
        <div class="nav-icon"><strong>Thought</strong>works</div>
        <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="account">账户</el-menu-item>
          <el-menu-item index="train" >训练营</el-menu-item>
          <el-menu-item index="task">任务卡</el-menu-item>
        </el-menu>
      </el-header>
    </div>
    <div class="main">
      <el-main>
        <slot></slot>
      </el-main>
    </div>

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
