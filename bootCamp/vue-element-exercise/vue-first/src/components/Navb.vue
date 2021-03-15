<template>
    <el-row>
    <el-col :span="12"><div class="grid-content bg-purple">bootcamp</div>
        <div class="nav-a">
         <a href="http://localhost:8080/#/Ba">用户</a>
         <a href="">讨论区</a>
         <a href="http://localhost:8080/#/Bb">我的设置</a>
        </div>
    </el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light">
        <p>你好，李一</p>
        <a href="http://localhost:8080/#/">登录</a>
        </div></el-col>
    </el-row>
</template>

<script>
export default {
  name: 'Navb',
  props: {
    msg: String
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
.nav-a{
    
    line-height: 100px;
}
.nav-a a{
    color: white;
    padding: 13px;
    padding-right: 10px;
    border: 3px white solid;
}



.nav-a a:first-child{
    
    border-right: 0;
    
}
.nav-a a:last-child{
    border-left: 0 ;color: 
    rgb(132, 199, 33);
    background-color: white;
}



.el-row {
    margin-bottom: 20px;
    width: 100%;
    height: 100px;
    background-color: rgb(132, 199, 33);
    box-shadow: 4px 4px 8px rgb(114, 114, 114);
    -moz-box-shadow: 4px 4px 8px rgb(114, 114, 114);
    -webkit-box-shadow: 4px 4px 8px rgb(114, 114, 114);
  }
.el-row:last-child {
      margin-bottom: 0;
  }
  .bg-purple {
    line-height: 100px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    float: left;
    margin-left: 30px;
  }
  .bg-purple-light p{
      float: left;
      font-size: 20px;
      font-weight: bold;
      margin-right: 40px;
  }
  .bg-purple-light {
    line-height: 100px;
    color: white;
    float: right;
    margin-right: 30px;
  }
  .grid-content {
    min-height: 100px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
