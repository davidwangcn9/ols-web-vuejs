<template>
  <div class="page-list">
    <div class="search-bar">
      <el-form :inline="true" :model="formData">
        <el-form-item>
          <el-input v-model="formData.query" @keyup.enter.native="onSearch" @clear="onSearch" clearable>
        </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="camp-list">
      <div class="camp-card">
        <router-link class="add-card" tag="div" to="/train/create">
          <div class="add-card-icon"></div>
          <div class="add-card-text">创建训练营</div>
        </router-link>
      </div>
      <template v-if="campList.length > 0">
        <div class="camp-card" v-for="(item, index) in campList" :key="index">
          <router-link tag="div" :to="{ path: 'detail', query: { id: item.id }}">
            <Card :item="item"></Card>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import api from '../api'

export default {
  components: {Card},
  data() {
    return {
      formData: {
        query: ''
      },
      listData: []
    }
  },
  computed: {
    campList() {
      return this.listData.map(({id, title, description, startTime}) => ({id, title, description, createTime: `${startTime}开营`}))
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const params = {
        query: this.formData.query
      }
      const {data} = await api.getCampList(params)
      if (data.length === 0) {
        const options = {
          title: '提示',
          content: '您好，您所搜索的内容不存在！',
          onConfirm: () => {
            this.clearQuery()
            this.getList()
          }
        }
        this.showAlert(options)
      }
      this.listData = data
    },
    onSearch() {
      this.getList()
    },
    showAlert(options) {
      const {title, content, onConfirm, confirmButtonText = '确定'} = options
      this.$alert(content, title, {
        confirmButtonText,
        callback: onConfirm
      });
    },
    clearQuery() {
      this.formData.query = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-list {
    .search-bar {
      .el-form {
        margin: 10px 0 8px;
        /deep/ input {
          width: 438px;
        }
        button {
          width: 84px;
        }
      }
    }
    .camp-list {
      display: flex;
      flex-wrap: wrap;
      .add-card {
        width: 340px;
        height: 200px;
        padding: 50px 0 40px;
        border-radius: 8px;
        box-sizing: border-box;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        background-color: #fff;
        &-icon {
          width: 66px;
          height: 66px;
          margin: 0 auto 20px;
          background-image: url("../assets/circlePlus/circle_plus.png");
          background-image: image-set(url("../assets/circlePlus/circle_plus.png") 1x,
                            url("../assets/circlePlus/circle_plus@2x.png") 2x,
                            url("../assets/circlePlus/circle_plus@3x.png") 3x);
        }
        &-text {
          line-height: 24px;
          font-size: 18px;
          color: #00b4c5;
          text-align: center;
        }
        &:hover {
          cursor: pointer;
          box-shadow: 0 0 10px 0 #00b4c5;
        }
      }
      .camp-card {
        width: 33.333%;
      }
    }
  }
</style>
