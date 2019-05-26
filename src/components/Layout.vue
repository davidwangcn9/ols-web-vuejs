<style type="scss" scoped>
  .out-container{
    display:block;
    min-width:1200px;
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
  .menu {
    float: left;
    margin-right: 20px;
    border-bottom:none;
  }

  .menu  li {
    font-size: 18px;
    font-family: PingFangSC;
    color: #000000;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    color:#00b4c5;
    border-bottom: 4px solid #00b4c5;
  }
  .el-menu--horizontal>.el-menu-item{
    border:0px;
  }

  .nav-icon {
    float:left;
    font-size: 35px;
    margin-right: 80px;
  }
  .main{
    flex-shrink: 0;
  }

  .oval {
    width:40px;
    height:40px;
    border-radius: 20px;
    float: right;
    margin-top:10px;
    margin-right:30px;
  }
</style>
<template>
  <el-container class="out-container">
    <div class="container">
      <el-header class="header">
        <img  class="nav-icon" :src="logo" alt="" height="60">
        <img class="oval" :src="oval" alt="">
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
  import logo from "@/assets/logo.jpg";
  import oval from "@/assets/oval.jpg";
  export default {
    data(){
      let name = this.$route.path.split('/')[1];
      return {activeIndex: name || 'account', logo,oval}
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
