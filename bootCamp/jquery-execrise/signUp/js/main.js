let user=$('#exampleInputEmail1');
let pass=$('#exampleInputPassword1');
let btn=$('button');

jQuery.validator.addMethod("chinese", function(value, element) {  
    var chinese = /^[\u4e00-\u9fa5]+$/;  
    return this.optional(element) || (chinese.test(value));  
}, "只能输入中文!");  
jQuery.validator.addMethod("chrnum", function(value, element) {  
    var chrnum = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;  
    return this.optional(element) || (chrnum.test(value));  
}, "只含有汉字、数字、字母、下划线!");  
jQuery.validator.addMethod("chrnums", function(value, element) {  
    var chrnums = /^[a-zA-Z0-9_]+$/;  
    return this.optional(element) || (chrnums.test(value));  
}, "只含数字、字母、下划线!");  
jQuery.validator.addMethod("emails", function(value, element) {  
    var emails = /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/;  
    return this.optional(element) || (emails.test(value));  
}, "只能填写电子邮箱!");  



$("#demoForm").validate({
    //便于本地调试
    // debug:true,
    rules:{
        exampleInputEmail1:{
            required:true,
            chrnum:true,
            minlength:4,
            maxlength:16
        },exampleInputPassword1:{
            required:true,
            chrnums:true,
            minlength:6,
            maxlength:18
        },
        myPass:{
            required:true,
            equalTo:"#exampleInputPassword1"
        },
        myEmail:{
            required:true,
            emails:true,
        },
        myYear:{
            required:true,
            min:1,
            max:100
        },
        mySchool:{
            required:true,
            maxlength:100
        },
        myCompany:{
            required:true,
            maxlength:100
        },
        idl:{
            required:true,
        },
        china:{
            required:true,
            chinese:true,
            min:4,
            max:10
        }
    },
    messages:{
        exampleInputEmail1:{
            required:"必须填写用户名！",
            minlength:"用户名最小4位！",
            maxlength:"用户名最大16位！"
        },exampleInputPassword1:{
            required:"必须填写密码！",
            minlength:"密码最小6位！",
            maxlength:"密码最大18位！"
        },
        myPass:{
            required:"请确认密码！",
            equalTo:"二次输入的密码不一致！"
        },
        myEmail:{
            required:"请输入电子邮箱！",
        },
        myYear:{
            required:"必须填写年龄！",
            min:"年龄最小6岁！",
            max:"年龄最大100岁！"
        },
        mySchool:{
            required:"必须填写学校！",
            maxlength:"学校最大100位！"
        },
        myCompany:{
            required:"必须填写公司！",
            maxlength:"公司最大100位！"
        },
        idl:{
            required:"必须选择一个爱好!"
        },
        china:{
            required:"必须填写真实姓名",
            min:"真实姓名最少2个汉字",
            max:"真实姓名最多5个汉字"
        }
    }
})


function checked(){
    let checkSc=$('input:radio[name="inlineRadioOptions"]:checked').val();
    let useSchool=$('#useSchool');
    let useCompany=$('#useCompany');
    let idl=$('#idl');

    if(checkSc == "option1"){
        useCompany.css("display","none");
        useSchool.css("display","block");
        idl.css("display","block");
    }
    else{
        useSchool.css("display","none");
        idl.css("display","none");
        useCompany.css("display","block");
    }
}
checked();
$('#inlineRadio1,#inlineRadio2').click(function(){
    checked();
})