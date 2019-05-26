<style type="scss" scoped>
  .date-input{
    width:50px;
    width: 59px;
    margin-right: 10px;
    margin-left: 10px;


  }
  .date-input:first-child{
    margin-left:0px;
  }
  .width{
    width:440px;
  }
  .form{
    width:460px;
  }
  .el-form-item__label::before{
    content: none;
    position:absolute;
  }
  .error{
    white-space: nowrap;
    color:red;
    position: absolute;
    left: 300px;
    top: 1px;
    word-break: keep-all
  }

  .error:nth-child(2){
    left:420px;
  }
  .goback{
    font-size:18px;
    font-family: PingFangSC;
    color:#00b4c5;
    margin-top:10px;
    cursor:pointer;
  }
  .title{
    font-family: PingFangSC;
    font-size: 18px;
    color:#000000;
    margin-top:30px;
    margin-bottom:20px;
  }
  .el-form-item__label{
    font-family: PingFangSC;
    color: #686868;
  }
  .el-form-item{
    margin-bottom:20px;
  }
  .submit{
    background: #00b4c5;
    border-radius: 5px;
    font-family: PingFangSC;
    font-size: 14px;
    color: #ffffff;
  }
  .el-button--primary.is-active, .el-button--primary:active {
    background: #00b4c5;
    border-color:#00b4c5;
  }
  .el-button--primary.is-active, .el-button--primary:focus{
    background: #00b4c5;
    border-color:#00b4c5;
  }
  .el-button--primary.is-active, .el-button--primary:hover{
    background: #00b4c5;
    border-color:#00b4c5;
  }
  .cancel{
    color: #00b4c5;
    font-family: PingFangSC;
  }
  .el-button--text:focus, .el-button--text:hover,.el-button--text:active{
    color: #00b4c5;
  }
</style>
<template>
  <div>
    <div class="goback" @click = "goback">返回</div>
    <h2 class="title">创建训练营</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="form" label-position="left">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" @blur="checkTitle"></el-input>
        <div v-if="titleError" class="error">
          <div>* 标题不能为空</div>
        </div>
      </el-form-item>
      <el-form-item label="时间" prop="name">
        <el-input v-model="ruleForm.year" class　="date-input" @blur="checkDate"></el-input>年
        <el-input v-model="ruleForm.month" class="date-input" @blur="checkDate"></el-input>月
        <el-input v-model="ruleForm.day" class="date-input" @blur="checkDate"></el-input>日
        <div v-if="dateError" class="error">
          <div>* 日期填写不正确</div>
        </div>
      </el-form-item>
      <el-form-item label="描述" prop="description" >
        <el-input type="textarea" v-model="ruleForm.description" @blur="checkDesc" maxlength="300" show-word-limit rows="5"></el-input>
        <div v-if="descError" class="error">
          <div>* 描述不能为空</div>
        </div>
      </el-form-item>
      <el-form-item style="float: right;">
        <el-button @click="resetForm('ruleForm')" class="cancel" type="text">取消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')" class="submit">创建</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
  import api from '@/api/index'
  export default {
    data() {
      return {
        titleError: false,
        descError: false,
        dateError: false,
        ruleForm: {
          title: '',
          date: '',
          year:'',
          month: '',
          day: '',
          description: ''
        },
        rules:{}
      };
    },
    methods: {
      submitForm(formName) {
        this.checkTitle();
        this.checkDesc();
        this.checkDate();
        if(!this.titleError&& !this.descError && !this.dateError) {
          let opt = {
            title: this.ruleForm.title,
            startTime: `${this.ruleForm.year}-${this.ruleForm.month}-${this.ruleForm.day}`,
            description:  this.ruleForm.description
          }
          api.create(opt).then(res=>{
            if(res) {
              this.$message.success( '恭喜你，这是一条成功消息');
              this.$router.push({name:'train'})
            }else {
              this.$message.error('错了哦，这是一条错误消息');
            }
          })
        }else{
          this.$message.error('表单验证不通过')
        }
      },

      checkTitle(){
          this.titleError = !this.ruleForm.title;
      },
      checkDesc(){
          this.descError = !this.ruleForm.description;
      },
      checkDate(){
        const temp = `${this.ruleForm.year}-${this.ruleForm.month}-${this.ruleForm.day}`
        if(!this.rightDate(temp)){
          this.dateError = true;
        } else {
          this.dateError = false;
        }
      },
      rightDate(date) {
        let RegDate = /\d{4}-\d{1,2}-\d{1,2}/
        return RegDate.test(date) > 0
      },
      resetForm(formName) {
        this.$confirm('是否退出', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$refs[formName].resetFields();
          this.$router.push({name:'train'})
        }).catch(()=>{
        })

      },
      goback(){
        this.resetForm("ruleForm");
      }
    },
    mounted() {
    }
  }
</script>
