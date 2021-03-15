<template>
      <div class="frame">
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <a href="http://localhost:8080/#/">登录</a>
          </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
          <a href="http://localhost:8080/#/Setup">注册</a>
          </div></el-col>
      </el-row>
        <el-form :model="ruleForm" :label-position="labelPosition" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="user" class="name-a">
            <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" class="name-a">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="name-a">
            <p>记住密码</p>
            <el-switch v-model="ruleForm.resource" class=" name-a-change"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button class="btn-name" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
        <div class="foot">
                  <a href="#">找回密码</a> 
                  <p>还没有注册账号 ?</p>
                  <a href="#">立即注册</a> 
        </div>
      </div>
</template>

<script>
export default {
  name: 'Setupa',
  props: {
    msg: String
  },
      data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var userP = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }else {
          callback();
        }
      };
      return {
        labelPosition: 'top',
        ruleForm: {
          user: '',
          pass: '',
          resource: false
        },
        rules: {
          user: [
            { validator: userP, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a,a:link,a:visited,a:active,a:hover{
    text-decoration: none;
    color:inherit;
}
a{
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
}

p,div{
    margin: 0;
    padding: 0;
}

/* 表单部分 */
.frame{
    width: 500px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 40px auto 0;
}
.el-row {
    margin-bottom: 20px;
    width: 100%;
    height: 100px;
  }
.el-row:last-child {
      margin-bottom: 0;
  }
  .bg-purple {
    line-height: 100px;
    color: white;
    font-weight: bold;
    text-align: center;
    color: rgb(132, 199, 33);
    /* float: left; */
    /* margin-left: 30px; */
  }
  .bg-purple-light {
    font-weight: bold;
    line-height: 100px;
    color: white;
    text-align: center;
    background-color: rgb(132, 199, 33);
    /* float: right; */
    /* margin-right: 30px; */
  }
  .grid-content {
    min-height: 100px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .name-a{
    text-align: left;
    width: 70%;
    margin: 0 auto;
  }
  .name-a p{
    display: inline;
    margin-right: 10px;
  }
  .name-button{
    width: 40%;
  }
  .foot{
    /* float: left; */
    text-align: left;
    /* margin-bottom: 30px; */
    padding-bottom: 30px;
    margin-left: 76px;
}
.foot a{
    font-size: 10px;
    letter-spacing: normal;
    color: rgb(132, 199, 33);
    padding-right: 5px;
}
.foot p{
    display: inline;
    font-size: 10px;
    border-left: 1px solid black;
    padding:0 5px;
}
.btn-name{
  width: 180px;
}
</style>
