<template>
  <div class="card">
    <i class="el-icon-close icon-position"></i>
    <div class="title">{{ item.title }}</div>
    <div class="description">{{ item.description }}</div>
    <div class="created_time">{{ item.createTime }}</div>
  </div>
</template>
<script>
  export default {
    name: 'Card',
    props: {
      item: {
        title: {
          type: String,
          default: ''
        },
        description: {
          type: String,
          default: ''
        },
        createTime: {
          type: String,
          default: ''
        }
      }
    }
  }
</script>
<style type="css" scoped>
  .card {
    width: 340px;
    height: 200px;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    background-color: #ffffff;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 30px;
    position: relative;
  }
  .card:hover {
    box-shadow: 0 0 10px 0 #00b4c5;
    cursor: pointer
  }

  .title {
    font-size: 18px;
    color: #00b4c5;
  }

  .description {
    font-size: 14px;
    color: #686868;
    margin: 26px 0 9px 0;
    flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 4;
    line-height: 20px;
  }

  .created_time {
    font-size: 14px;
    color: #686868;
  }

  .icon-position {
    position: absolute;
    right: 30px;
    top: 20px;
    color: #686868;
  }

</style>
