<template>
<div>
    <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
            <el-select v-model="value" placeholder="用户名" class="sele-a">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

            <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" class="btn-s">搜索</el-button>
            </el-input>
            </div>

        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">
            <el-button type="primary" @click="dialogFormVisible = true" class="btn-user">添加用户</el-button>
          
            </div></el-col>
    </el-row>

    <el-row class="cen">
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple grid-content-c" style="border-top:none;"></div>学生</el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light grid-content-c grid-content-cb">全部</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light grid-content-c">上班族</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple"> </div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light"> </div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple"> </div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light"> </div></el-col>
    </el-row>

     <el-table :data="tableData" stripe style="width: 100%; padding:30px">
        <el-table-column prop="IDa" label="ID" ></el-table-column>
        <el-table-column prop="user" label="用户名" ></el-table-column>
        <el-table-column prop="ren" label="角色" ></el-table-column>
        <el-table-column prop="xm" label="姓名" ></el-table-column>
        <el-table-column prop="email" label="邮箱" ></el-table-column>
        <el-table-column prop="zye" label="职业" ></el-table-column>
        <el-table-column prop="sc" label="学校/公司"></el-table-column>
        <el-table-column prop="cz" label="操作" >
            <template>
                <el-button @click="dialogFormVisibles = true" type="text" size="small">查看</el-button>
        
                <el-button @click="opens=true"  type="text" size="small">编辑</el-button>
                 
            </template>
        </el-table-column>
    </el-table>


      <el-dialog title="添加用户" :visible.sync="dialogFormVisible" class="t">
             <el-form :model="ruleForm" :label-position="labelPosition" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="user" class="name-a">
            <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" class="name-a">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item class="name-a" label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="myuser" class="name-a">
            <el-input type="text" v-model="ruleForm.myuser" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="myemail" class="name-a">
            <el-input type="text" v-model="ruleForm.myemail" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age" class="name-a">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>
          
          <el-form-item label="职业" class="name-a" >
            <el-radio-group v-model="ruleForm.resource">
            <el-radio label="学生" ></el-radio>
            <el-radio label="上班族" ></el-radio>
            </el-radio-group>
          </el-form-item>
          
          <el-form-item label="学校" prop="school" class="name-a" id="useSchool" :class="{'sca':ruleForm.display}"> 
            <el-input type="text" v-model="ruleForm.school" autocomplete="off"></el-input>
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
            <el-button type="primary" @click="dialogFormVisible = false" style="margin-right:30px">关闭</el-button>
            <el-button class="btn-name" type="primary" @click="submitForm('ruleForm')">注册</el-button>
          </el-form-item>
        </el-form>
            </el-dialog>

                    <el-dialog title="编辑用户信息" :visible.sync="dialogFormVisibles" >
                  <A /> <el-button type="primary" @click="dialogFormVisibles = false" class="btn-e">关闭</el-button>
                </el-dialog>
                <el-dialog title="用户详情" :visible.sync="opens">
                    <el-row>
                      <el-col :span="12"><div class="grid-content bg-purple bg-purplea">用户名</div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple-light bg-purpleaa">liyi</div></el-col>
                    </el-row>
                                        <el-row>
                      <el-col :span="12"><div class="grid-content bg-purple bg-purplea">角色</div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple-light bg-purpleaa">管理员</div></el-col>
                    </el-row>
                                        <el-row>
                      <el-col :span="12"><div class="grid-content bg-purple bg-purplea">真实姓名</div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple-light bg-purpleaa">李一</div></el-col>
                    </el-row>
                                        <el-row>
                      <el-col :span="12"><div class="grid-content bg-purple bg-purplea">邮箱</div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple-light bg-purpleaa">liyi@edusoho.com</div></el-col>
                    </el-row>
                                        <el-row>
                      <el-col :span="12"><div class="grid-content bg-purple bg-purplea">年龄</div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple-light bg-purpleaa">18</div></el-col>
                    </el-row>
                                        <el-row>
                      <el-col :span="12"><div class="grid-content bg-purple bg-purplea">职业</div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple-light bg-purpleaa">学生</div></el-col>
                    </el-row>
                                        <el-row>
                      <el-col :span="12"><div class="grid-content bg-purple bg-purplea">学校</div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple-light bg-purpleaa">家里蹲大学</div></el-col>
                    </el-row>
                                        <el-row>
                      <el-col :span="12"><div class="grid-content bg-purple bg-purplea">兴趣爱好</div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple-light bg-purpleaa">篮球</div></el-col>
                    </el-row>
                    <el-button type="primary" @click="opens = false" style="margin-top:30px;width:100px;">关闭</el-button>
                </el-dialog>
</div>
</template>

<script>
import A from '@/components/A.vue'

export default {
  name: 'Baa',
    components: {
    A
  },
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
      var passb = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
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
      return {       dialogFormVisible: false,
      dialogFormVisibles: false,
      opens : false,
        input3: '' ,
        options: [{
          value: '选项1',
          label: '李一'
        }, {
          value: '选项2',
          label: '王二'
        }, {
          value: '选项3',
          label: '张三'
        }],
        value: '',
        tableData: [{
          IDa: '1',
          user: 'liyi',
          ren: '管理员',
          xm: '李一',
          email: 'liyi@edusoho.com',
          zye: '上学生',
          sc: '家里蹲大学',
        }, {
          IDa: '2',
          user: 'liyi',
          ren: '管理员',
          xm: '李一',
          email: 'liyi@edusoho.com',
          zye: '上学生',
          sc: '家里蹲大学',
        }, {
          IDa: '3',
          user: 'liyi',
          ren: '管理员',
          xm: '李一',
          email: 'liyi@edusoho.com',
          zye: '上学生',
          sc: '家里蹲大学',
        }],
        labelPosition: 'top',
        ruleForm: {
          user: '',
          pass: '',
          checkPass: '',
          myuser: '',
          age:'',
          resource: '学生',
          school: '',
          compe: '',
          type: [],
          display: false ,
          displayb: true
        },
        rules: {
          user: [
            { validator: userP, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: passb, trigger: 'blur' }
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
.bg-purplea{
  text-align: right;
  margin-right: 90px;
}
.bg-purpleaa{
  text-align: left;
}
.cen{
    /* padding: 30px 0; */
    border-bottom: solid 2px rgb(132, 199, 33);
}
.cen .grid-content-c{
    color: white;
    border: solid 2px rgb(132, 199, 33);
    border-bottom: none ;
    background-color: rgb(132, 199, 33);
}
/* .cen .grid-content-cb{
    color:rgb(132, 199, 33);    
    border: solid 2px rgb(132, 199, 33);
    border-bottom: white  solid 2px;
    background-color:white;
} */
.sele-a{
    margin-left: 30px;
    float: left;
    width: 100px;
}
.grid-content{
    margin-top: 30px;
}
.input-with-select{
    width: 200px;
    float: left;
    margin-left: 30px;
}
.btn-user{
    float: right;
    margin-right: 30px;
}
.t .sca{
    display: none;
}
.t .scb{
    display: none;
}


.t p,.t div{
    margin: 0;
    padding: 0;
}


 .t .el-row {
    margin-bottom: 20px;
    width: 100%;
    height: 100px;
  }
.t .el-row:last-child {
      margin-bottom: 0;
  }
 .t .bg-purple {
    line-height: 100px;
    color: white;
    font-weight: bold;
    text-align: center;
    color: rgb(132, 199, 33);
    /* float: left; */
    /* margin-left: 30px; */
  }
  .t .bg-purple-light {
    font-weight: bold;
    line-height: 100px;
    color: white;
    text-align: center;
    background-color: rgb(132, 199, 33);
    /* float: right; */
    /* margin-right: 30px; */
  }
  .t .grid-content {
    min-height: 100px;
  }
  .t .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .btn-e{
    position: absolute;
    top:886px;
    left: 270px;
  }
 .t .name-a{
    text-align: left;
    width: 70%;
    margin: 20px auto 0;
  }
  .t .name-a p{
    display: inline;
    margin-right: 10px;
  }
  .t .name-button{
    width: 40%;
    /* margin-top: 20px; */
  }
.t .btn-name{
  width: 180px;
  margin: 20px 0;
}
.t .name-b{
    padding-left: 3px;
    margin-right: 10px;
}


</style>
