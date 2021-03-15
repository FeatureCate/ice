<template>
<div>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple grid-content-a">
            <p>我的设置</p>
            </div></el-col>
    </el-row>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple  grid-content-b">
            <B />
             <!-- <el-form :model="ruleForm" :label-position="labelPosition" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="user" class="name-a">
                    <el-input :disabled="true" placeholder="liyi" type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
                </el-form-item>
              
                <el-form-item label="真实姓名"  prop="myuser" class="name-a">
                    <el-input type="text" placeholder="李一" v-model="ruleForm.myuser" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="myemail" class="name-a">
                    <el-input type="text"  placeholder="liyi@edusoho.com" v-model="ruleForm.myemail" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age" class="name-a">
                    <el-input v-model.number="ruleForm.age" placeholder="18"  ></el-input>
                </el-form-item>
                
                <el-form-item label="职业" class="name-a" >
                    <el-radio-group v-model="ruleForm.resource" >
                    <el-radio label="学生" ></el-radio>
                    <el-radio label="上班族" ></el-radio>
                    </el-radio-group>
                </el-form-item>
                
                <el-form-item label="学校" prop="school" class="name-a" id="useSchool" :class="{'sca':ruleForm.display}"> 
                    <el-input type="text" placeholder="家里蹲大学"  v-model="ruleForm.school" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="公司" prop="compe" class="name-a" id="useCompany" :class="{'scb':ruleForm.displayb}">
                    <el-input type="text" v-model="ruleForm.compe" autocomplete="off" ></el-input>
                </el-form-item>

                <el-form-item id="idl" label="兴趣爱好" prop="type" class="name-a" :class="{'sca':ruleForm.display}">
                    <el-checkbox-group v-model="ruleForm.type" >
                    <el-checkbox label="游戏" name="type" class="name-b"></el-checkbox>
                    <el-checkbox label="足球" name="type" class="name-b"></el-checkbox>
                    <el-checkbox label="篮球" name="type" class="name-b" checke></el-checkbox>
                    <el-checkbox label="唱歌" name="type" class="name-b"></el-checkbox>
                    <el-checkbox label="跳舞" name="type" class="name-b"></el-checkbox>
                    <el-checkbox label="听音乐" name="type" class="name-b"></el-checkbox>
                    <el-checkbox label="看小说" name="type" class="name-b"></el-checkbox>
                    <el-checkbox label="看电影" name="type" class="name-b"></el-checkbox>
                    <el-checkbox label="撸铁" name="type" class="name-b"></el-checkbox>
                    <el-checkbox label="跑步" name="type" class="name-b"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

          

          <el-form-item class="btn-as">
            <el-button class="btn-name" type="primary" @click="submitForm('ruleForm')">保存</el-button>
          </el-form-item>
        </el-form> -->

            </div></el-col>
    </el-row>
</div>
</template>

<script>
import B from '@/components/B.vue'

export default {
  name: 'Bbs',
  props: {
    msg: String
  },
    components: {
    B
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content-a {
    margin: 30px 30px 0 30px;
    border: 3px solid rgb(132, 199, 33);
}
.grid-content-a p{
    text-align: left;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    color: rgb(132, 199, 33);
}
.grid-content-b{
    margin:0 30px 0;
    border: 3px solid rgb(132, 199, 33);
    border-top: none;
}
 
                                          

.sca{
    display: none;
}
.scb{
    display: none;
}

p,div{
    margin: 0;
    padding: 0;
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
    float: left;
    width: 50%;
    padding-top: 30px;
    margin-left: 170px;
    
  }
  .name-a p{
    /* display: inline; */
    margin-right: 10px;
  }
  .name-button{
    width: 40%;
    /* margin-top: 20px; */
  }

.btn-name{
  width: 50%;
  margin: 20px 0;
  float: left;
  margin-left: 100px;
}
.name-b{
    padding-left: 3px;
    margin-right: 10px;
}

</style>