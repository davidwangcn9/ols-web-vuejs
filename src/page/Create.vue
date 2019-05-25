<style type="scss">
  .date-input{
    width:50px;
  }
  .width{
    width:440px;
  }
  .form{
    width:500px;
  }
</style>
<template>
  <div>
    <div>返回</div>
    <h2>创建训练营</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form" >
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name" ></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="name">
        <el-input v-model="ruleForm.name" class　="date-input"></el-input>年
        <el-input v-model="ruleForm.name" class="date-input"></el-input>月
        <el-input v-model="ruleForm.name" class="date-input"></el-input>日
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc" ></el-input>
      </el-form-item>
      <el-form-item style="float: right;">
        <el-button @click="resetForm('ruleForm')">取消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">创建</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
