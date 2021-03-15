<template>
  <div>
       <div class="frame">
      <div class="a-clear">
          <a href="../html/index.html">登录</a>
          <a href="../html/register.html">注册</a>
      </div>
      <div class="surface">
          <form action="/my-handling-form-page" method="post">
              <div class="in-style">
                <label for="name">用户名</label>
                <input type="text" id="name">
              </div>
              <div class="in-style">
                <label for="pass">密码</label>
                <input type="password" id="pass">
              </div>
              <div class="in-style">
                <label for="passest">确认密码</label>
                <input type="passwordest" id="pass">
              </div>
              <div class="in-style">
                <label for="email">电子邮箱</label>
                <input type="email" id="email">
              </div>
              <div class="in-style">
                <label for="year">年龄</label>
                <input type="text" id="year">
              </div>
              <div class="form-occupation">
                <p>职业</p>
                <div>
                    <label><input type="radio" name="occupation" value="学生">学生</label>
                    <label><input type="radio" name="occupation" value="上班族">上班族</label>
                </div>
              </div>
              <div class="in-style foot">
                <input type="button" value="注册">
              </div>
            </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Up'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p,div{
    margin: 0;
    padding: 0;
}
input[type*="button"]{
    border: none;
    background-color: rgb(132, 199, 33);
    outline: none;  
    box-shadow: 4px 4px 8px rgb(114, 114, 114);
    -moz-box-shadow: 4px 4px 8px rgb(114, 114, 114);
    -webkit-box-shadow: 4px 4px 8px rgb(114, 114, 114);
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

/* 表单部分 */
.frame{
    width: 480px;
    border: 3px solid  rgb(132, 199, 33);
    margin: 40px auto 0;
    box-shadow: 4px 4px 8px rgb(114, 114, 114);
    -moz-box-shadow: 4px 4px 8px rgb(114, 114, 114);
    -webkit-box-shadow: 4px 4px 8px rgb(114, 114, 114);
}
.a-clear a{
    display: block;
    float: left;
    width: 238px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    border-bottom: 3px solid rgb(132, 199, 33); 
    color: white;
}
.a-clear .a-er{
    color: rgb(132, 199, 33);
}
.a-clear a:first-child{
    border-right: 3px solid rgb(132, 199, 33);
    background-color: rgb(132, 199, 33);
}
.a-clear::after{
    content: " ";
    display: block;
    clear: both;
}
.in-style input{
    display: block;
    margin-top: 5px;
    border: none;
    outline: 3px solid rgb(132, 199, 33);
    height: 20px;
    width: 90%;
}
.in-style label{
    float: left;
    font-size: 20px;
    color: rgb(132, 199, 33);;
    font-weight: bold;
    margin-bottom: 10px;
}
form div{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
}
form div::after{
    content: " ";
    display: block;
    clear: both;
}
.check{
    margin-left: -3px;
    float: left;
}
.check+label{
    font-size: 10px;
    display: block;
    float: left;
    color: rgb(132, 199, 33);
    margin-left: 3px;
    margin-top: -3px;
}
input[type*="button"]{
    color: white;
    height: 30px;
    font-weight: bold;
}
.foot{
    margin-bottom: 30px;
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
.form-occupation div{
    float: left;
    margin-top: 0px;
    margin-left: -100px;
}
.form-occupation div label{
    margin-left: 10px;
}
.form-occupation p{
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: rgb(132, 199, 33);
}
.frame a:first-child{
    background-color: white;
    color: rgb(132, 199, 33);
}
.frame a:last-child{
    background-color: rgb(132, 199, 33);
}
</style>
