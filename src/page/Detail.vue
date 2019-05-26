<template>
  <div class="detail-container">
    <el-button type="text" class="back-button" @click="backToPreviousPage()">返回</el-button>
    <div class="title">{{ campDetail.title }}</div>
    <div class="detail">{{ campDetail.startTime }}</div>
    <div class="create-time">{{ campDetail.description }}</div>
    <div class="task-container">
      <div class="card-list">
        <div v-for="(item, index) in taskDetail" :key="index" class="task-card">
          <card :item="item"></card>
        </div>    
      </div>
      <div class="user-list"></div>
    </div>
  </div>
</template>
<script>
  import Card from '../components/Card'
  import api from '../api'

  export default {
    name: 'Detail',
    components: {
      Card
    },
    data() {
      return {
        campDetail: {}
      }
    },
    computed: {
      taskDetail() {
        const task = this.campDetail.tasks || []
        return task.map(({title, description, createdTime}) => ({title, description, createTime: `${createdTime}开营`}))
      },
    },
    created() {
      this.getDetail()
    },
    methods: {
      async getDetail() {
        const id = this.$route.query.id
        const { data } = await api.getCampDetail(id)
        this.campDetail = data
      },
      backToPreviousPage() {
        this.$router.push({name:'train'})
      }
    }
  }
</script>
<style type="css" scoped>

  .back-button {
    font-size: 18px;
    color: #00b4c5;
  }

  .title {
    margin: 30px 0;
    font-size: 18px;
    color: #000000;
  }

  .create-time {
    font-size: 14px;
    color: #686868;
    margin: 16px 0;
  }

  .detail {
    font-size: 14px;
    color: #686868;
  }

  .task-container {
    margin-top: 30px;
    display: flex;
  }

  .task-card {
    margin-right: 40px;
    display: inline-block;
  }

  .user-list {
    width: 320px;
  }

</style>