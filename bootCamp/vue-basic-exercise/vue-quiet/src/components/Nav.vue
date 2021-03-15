<template>
  <div>
      <nav>
        <div class="sign">
            <a href="http://localhost:8080/html/index.html#/">登录</a>
            <a href="http://localhost:8080/html/index.html#/SetUp">注册</a>
        </div>
        <h1>bootcamp-用户管理系统</h1>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Nav'
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
    background-color: greenyellow;
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

/* 导航 */
nav{
    width: 100%;
    height: 100px;
    background-color: rgb(132, 199, 33);
    box-shadow: 4px 4px 8px rgb(114, 114, 114);
    -moz-box-shadow: 4px 4px 8px rgb(114, 114, 114);
    -webkit-box-shadow: 4px 4px 8px rgb(114, 114, 114);
}
h1{
    font-size: 30px;
    margin: 0;
    float: left;
    line-height: 100px;
    color: white;
    margin-left: 30px;
    font-family: "myFonthead", serif;
}
.sign{
    float: right;
    line-height: 100px;
    margin-right: 30px;
}
.sign a{
    margin-left: 15px;
    color: white;
} 
.nav::after{
    content: " ";
    clear: both;
    display: block;
}
</style>
