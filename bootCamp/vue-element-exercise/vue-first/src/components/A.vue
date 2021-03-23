<template>
        <el-form :model="ruleForm" :label-position="labelPosition" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="user" class="name-a">
            <el-input type="text"  placeholder="liyi" v-model="ruleForm.user" autocomplete="off"></el-input>
          </el-form-item>

           <el-form-item label="职业" class="name-a" >
            <el-radio-group v-model="ruleForm.resources">
            <el-radio label="成员" ></el-radio>
            <el-radio label="管理员" ></el-radio>
            </el-radio-group>
          </el-form-item>
       
          <el-form-item label="真实姓名" prop="myuser" class="name-a">
            <el-input type="text"  placeholder="李一" v-model="ruleForm.myuser" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="myemail" class="name-a">
            <el-input type="text"  placeholder="liyi@edusoho.com" v-model="ruleForm.myemail" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age" class="name-a">
            <el-input v-model.number="ruleForm.age"  placeholder="18"></el-input>
          </el-form-item>
          
          <el-form-item label="职业" class="name-a" >
            <el-radio-group v-model="ruleForm.resource">
            <el-radio label="学生" ></el-radio>
            <el-radio label="上班族" ></el-radio>
            </el-radio-group>
          </el-form-item>
          
          <el-form-item label="学校" prop="school" class="name-a" id="useSchool" :class="{'sca':ruleForm.display}"> 
            <el-input type="text"  placeholder="家里蹲大学" v-model="ruleForm.school" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="公司" prop="compe" class="name-a" id="useCompany" :class="{'scb':ruleForm.displayb}">
            <el-input type="text" v-model="ruleForm.compe" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item id="idl" label="兴趣爱好" prop="type" class="name-a">
            <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="游戏" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="足球" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="篮球" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="唱歌" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="跳舞" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="听音乐" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="看小说" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="看电影" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="撸铁" name="type" class="name-b"></el-checkbox>
            <el-checkbox label="跑步" name="type" class="name-b"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          

          <el-form-item>
           
            <el-button class="btn-name" type="primary" @click="submitForm('ruleForm')">保存</el-button>
          </el-form-item>
        </el-form>

</template>

<script>
export default {
  name: 'A',
  props: {
    msg: String
  },
      data() {
 
      var userP = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }else {
          callback();
        }
      };
  
       var myuserP = (rule, value, callback) => {
           const regUserp =  /^[\u4e00-\u9fa5]+$/;  
        if ( regUserp.test(value)) {
            return callback()
        } else {
           callback(new Error('只能输入中文'));
        }
      };
      var checkEmail = (rule, value, callback) => {
            const regEmail =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if(regEmail.test(value)){
                return callback()
            }
            callback(new Error('请输入合法的邮箱'))
        };
        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
       var checkSc = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入学校'));
        }else {
          callback();
        }
      };
       var checkCoe = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入公司'));
        }else {
          callback();
        }
      };
      return {
        labelPosition: 'top',
        ruleForm: {
          user: '',
          myuser: '',
          age:'',
          resource: '学生',
          school: '',
          compe: '',
          type: ['篮球'],
          display: false ,
          displayb: true,
          resources:'管理员'
        },
        rules: {
          user: [
            { validator: userP, trigger: 'blur' }
          ],
          
          myuser: [
              {required: true, message: '请输入真实姓名',trigger: 'blur'},
            { validator: myuserP, trigger: 'blur' }
          ],
          myemail: [
                 {required: true, message: '请输入邮箱',trigger: 'blur'},
            {validator: checkEmail, trigger: 'blur'}
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          school: [
            { validator: checkSc, trigger: 'blur' }
          ],
          compe: [
            { validator: checkCoe, trigger: 'blur' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
        }
      };
    },

 watch: {
      "ruleForm.resource"() {
        //   console.log(this.ruleForm.resource)
        let checkSc = this.ruleForm.resource;
        let useSchool=document.getElementById('useSchool');
        let useCompany=document.getElementById('useCompany');
        let idl=document.getElementById('#idl');
        console.log(checkSc)
        if(checkSc == "学生"){
            this.ruleForm.display = false;
            this.ruleForm.displayb = true;
        }
        else{
            this.ruleForm.display = true;
            this.ruleForm.displayb = false;
        }
      }
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
      },
     
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sca{
    display: none;
}
.scb{
    display: none;
}

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
    margin: 20px auto 0;
  }
  .name-a p{
    display: inline;
    margin-right: 10px;
  }
  .name-button{
    width: 40%;
    /* margin-top: 20px; */
  }
.btn-name{
  width: 180px;
  margin:  20px 0;
  margin-left: 170px;
}
.name-b{
    padding-left: 3px;
    margin-right: 10px;
}
</style>
