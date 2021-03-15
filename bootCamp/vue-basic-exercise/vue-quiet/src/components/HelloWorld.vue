<template>
  <div>
      <div class="frame">
        <div class="a-clear">
            <a href="http://localhost:8080/html/index.html#/">登录</a>
            <a class="a-er" href="http://localhost:8080/html/index.html#/SetUp">注册</a>
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
                <div>
                  <input type="checkbox" value="carrots" class="check" id="check">
                  <label for="check">记住密码</label>
                </div>
                <div class="in-style">
                  <input type="button" value="登录">
                </div>
                <div class="foot">
                  <a href="#">找回密码</a> 
                  <p>还没有注册账号 ?</p>
                  <a href="#">立即注册</a> 
                </div>
              </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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
    margin-left: -40px;
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
    margin: -3px;
    margin-top: 5px;
}
</style>
