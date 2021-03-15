// ------------------------------------数据类型篇1--------------------------------------------------------------
//第七题

    // function numberOperation(a,b){
    //     console.log(typeof(a)+"类型+"+typeof(b)+'类型='+(a+b)+'('+typeof(a+b)+"类型)");
    //     console.log(typeof(a)+"类型-"+typeof(b)+'类型='+(a+b)+'('+typeof(a-b)+"类型)");
    //     console.log(typeof(a)+"类型*"+typeof(b)+'类型='+(a+b)+'('+typeof(a*b)+"类型)");
    //     console.log(typeof(a)+"类型/"+typeof(b)+'类型='+(a+b)+'('+typeof(a/b)+"类型)");
    // }
    // console.log(Reflect.apply(numberOperation, undefined, [1,2]));



//第八题
// window.onload =function(){
//     function random(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;   
//     }

//     function variable(a){
//         let b = a;
//         for(let i =0 ; i<b.length ; i++){
//             if(i%2==0){
//                 console.log(random(1,10));
//             }
//             else{
//                 console.log(String.fromCharCode(random(97,123)));
//             }
//         }
//     }
//     console.log(Reflect.apply(variable, undefined, ['aaaaaaaaaa']));
// }

//第九题
// 方法一
// window.onload =function(){
//     function Arr(arr){
//         let n=[];
//         for(let i = 0; i < arr.length; i++) {
//             if (n.indexOf(arr[i]) == -1) {
//                 n.push(arr[i]);
//             }
//         }
//         console.log(n);
//     }
//     console.log(Reflect.apply(Arr, undefined, [["a","b","a","c"]]));
// }

// 方法二
// window.onload =function(){
//     function Arr(arr){
//         var n = {},r=[]; 
// 	for(var i = 0; i < arr.length; i++) 
// 	{
// 		if (!n[arr[i]]) 
// 		{
// 			n[arr[i]] = true; 
// 			r.push(arr[i]); 
// 		}
// 	}
//     console.log(r);
// }
       
    
//     console.log(Reflect.apply(Arr, undefined, [["a","b","a","c"]]));
// }

// 第十题
// window.onload =function(){
//     let car = {type:"porsche", model:"911", color:"white"};
//     function visit(obj, key) {
//         let count = 0;
//         Reflect.defineProperty(obj, key, {
//             get:function(){
//                 count++;
//                 console.log(`${key}被访问${count}次`);
//             },
//             set:function(){
//                 count++;
//                 console.log(`${key}被访问${count}次`);
//             }
//         });
//     }
//     visit(car,'type');
//     visit(car,'model');
//     visit(car,'color');
//     car.type;
//     car.model;
//     car.color;
//     car.type;
//     car.type = "aaa";
//     console.log(car.type);
//     console.log(car.model);
//     console.log(car.color);
// }

// 第十一题
// window.onload =function(){
//     let car = {type:"porsche", model:"911", color:"white"};
//     function visita(obj, key, val){
//         let count = 0;
//         let myDate = new Date();
//         Reflect.defineProperty(obj, key, {
//             get:function(){
//                 count++;
//                 console.log(`${key}被访问${count}次`);
//             },
//             set:function(newvalue) {
//                 count++;
//                 console.log(`${key}被更改${count}次,${val}更改为${newvalue},更改时间${myDate}`);
//             },
//         });
//     }
//     visita(car,'type',"porsche");
//     visita(car,'model',"911");
//     visita(car,'color',"white");
//     car.type;
//     car.model;
//     car.color;
//     car.type;
//     car.type = "aaa";
//     console.log(car.type);
//     console.log(car.model);
//     console.log(car.color);
// }

// ------------------------------------数据类型篇2--------------------------------------------------------------------

// 第六题
    // function rad(){
    //     let num=Math.floor(Math.random()*10+1)*1000;
    //     console.log(num);
    //     return num;
    // }
    // function light(cb, timer) {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             console.log(cb);
    //             resolve()
    //         }, timer);
    //     })
    // }
    // function step() {
    //     Promise.resolve().then(() => {
    //         return light(1, rad())
    //     }).then(() => {
    //         return light(2, rad())
    //     }).then(() => {
    //         return light(3, rad())
    //     }).then(() => {
    //         return light(4, rad())
    //     }).then(() => {
    //         return light(5, rad())
    //     }).then(() => {
    //         return light(6, rad())
    //     })
    // }
    // step();

// 第七题
// function red() {
//     console.log('red');
// }
// function green() {
//     console.log('green');
// }
// function yellow() {
//     console.log('yellow');
// }
// function light(cb, timer) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             cb();
//             resolve()
//         }, timer);
//     })
// }
// function step() {
//     Promise.resolve().then(() => {
//         return light(red, 4000)
//     }).then(() => {
//         return light(green, 5000)
//     }).then(() => {
//         return light(yellow, 1000)
//     }).finally(() => {
//         return step()
//     })
// }
// step();

// 第八题
    // const a = 1;
    // const b = 2;
    // const c = 3;
    // const p = new Promise(function(resolve,reject){
    //         resolve(a)
    // });
    // p.then(function(value){
    //     return new Promise((resolve,reject) => {
    //             resolve([value,b]);
    //     });
    // }).then(function(value){
    //     return new Promise((resolve,reject) => {
    //             value.push(c);
    //             resolve(value);
    //     });
    // }).then(value => {
    //     console.log(value)
    // }).catch(function(reason){
    //     console.warn("error!");
    // });

// 第九题
    // const a = 1;
    // const b = 2;
    // const c = 3;
    // const p = new Promise(function(resolve,reject){
    //         resolve(a)
    // });
    // p.then(function(value){
    //     console.log(value);
    //     return new Promise((resolve,reject) => {
    //         resolve(b);
    //     });
    // },reason=>{
    //     console.warn("error!");
    //     return new Promise((resolve,reject) => {
    //         resolve(b);
    //     });
    // }).then(function(value){
    //     console.log(value);
    //     return new Promise((resolve,reject) => {
    //         resolve(c);
    //     });
    // },reason=>{
    //     console.warn("error!");
    //     return new Promise((resolve,reject) => {
    //         resolve(c);
    //     });
    // }).then(value => {
    //     console.log(value);
    // },reason=>{
    //     console.warn("error!");
    // })

    // 第十题
    // const resolved = Promise.resolve(42);
    // const rejected = Promise.reject(-1);
    // const resolvede = Promise.resolve(42);
    // const rejectede = Promise.reject(-1);

    // const allSettledPromise = Promise.allSettled([resolved, rejected,resolvede, rejectede]);

    // allSettledPromise.then(function (results) {
    // console.log(results);
    // });

// -----------------------------------------数据类型篇三--------------------------------------------------------------------------------------------------------

// 第三题
    // let symbol = Symbol('aaaaa');
    // let game = {
    //    up: "aaa",
    //     [symbol]: "bbbb"
    // }
    //    for(let item of Reflect.ownKeys(game)){
    //     console.log(item);
    // }

//第四题
    // （方法1）
    // //传入人名
    // let arrRen = ["a某","b某","c某","d某","f某","g某"]
    // //生成为一ID
    // let setR = new Set();
    // for(let i=1 ; i<=arrRen.length ;i++){
    //     setR.add(i)
    // }
    // let arrR = [...setR];
    // //存礼物
    // const setGift = new Set([
    //     "cat",
    //     "red",
    //     "blue",
    //     "sweet",
    //     "air",
    //     "you"
    // ]);
    // let arrf = [...setGift];
    // //抽奖  
    // let num = setR.size-1;
    // for(let i=0 ; i<setR.size ; i++){
    //     //随机人的先后，抽一个，去除一个人
    //     let renID = parseInt(Math.random() * (num - 0 + 1) + 0);  
    //     //随机奖品，抽一个，去除一个奖品
    //     let gift = parseInt(Math.random() * (num - 0 + 1) + 0);  
    //     console.log("ID为 "+arrR[renID]+" 的 "+arrRen[arrR[renID]-1]+" 获得礼物："+arrf[gift]);
    //     arrR.splice(renID,1);
    //     arrf.splice(gift,1);
    //     num--;
    // }

    // (方法2)
    // // 人
    // let arrRen = ["a某","b某","c某","d某","f某","g某","h某","i某","j某","j某","m某","l某"]
    // // 奖品
    // let arrf = [Symbol("cat"),Symbol("red"),Symbol("sweet"),Symbol("air"),Symbol("you")];
    // // 抽奖
    // let num = arrRen.length-1;
    // let numg = arrf.length-1;
    // let map = new Map();
    // for(let i=0 ; i<3 ; ){
    //     if(map.size < arrRen.length){
    //     let renID = parseInt(Math.random() * (num - 0 + 1) + 0);  
    //     let gift = parseInt(Math.random() * (numg - 0 + 1) + 0);  
    //     map.set( "ID:"+renID+' '+arrRen[renID] , arrf[gift].toString())
    //     }
    //     else{
    //         break
    //     }
    // }
    // for(let item of map.entries()){
    // console.log(item);
    // }

// 第五题

    // // (1)抽奖前发现
    // let arrRen = ["a某","b某","c某","d某","f某","g某"]
    // let setR = new Set();
    // for(let i=1 ; i<=arrRen.length ;i++){
    //     setR.add(i)
    // }
    // //中途发现Id为3和id为5的人没有资格
    // setR.delete(3);
    // setR.delete(5);
    // let arrR = [...setR];
    // let arrf = ["cat","red","blue","sweet","air","you"];
    // let num = setR.size-1;
    // let numg = arrf.length-1;
    // for(let i=0 ; i<setR.size ; i++){
    //     let renID = parseInt(Math.random() * (num - 0 + 1) + 0);  
    //     let gift = parseInt(Math.random() * (numg - 0 + 1) + 0);  
    //     console.log("ID为 "+arrR[renID]+" 的 "+arrRen[arrR[renID]-1]+" 获得礼物："+arrf[gift]);
    //     arrR.splice(renID,1);
    //     arrf.splice(gift,1);
    //     num--;
    //     numg--;
    // }

    //（2）抽奖后发现
    // 人
    let arrRen = ["a某","b某","c某","d某","f某","g某","h某","i某","j某","j某","m某","l某"]
    // 奖品
    let arrf = [Symbol("cat"),Symbol("red"),Symbol("sweet"),Symbol("air"),Symbol("you")];
    // 抽奖
    let num = arrRen.length-1;
    let numg = arrf.length-1;
    let map = new Map();
    for(let i=0 ; i<3 ; ){
        if(map.size < arrRen.length){
        let renID = parseInt(Math.random() * (num - 0 + 1) + 0);  
        let gift = parseInt(Math.random() * (numg - 0 + 1) + 0);  
        map.set( renID , gift)
        }
        else{
            break
        }
    }
    // console.log(map)
    let arrZh = [];
    for(let item of map.entries()){
    // console.log(item);
    arrZh.push(item);
    }
    // console.log(arrZh)
    let weakset = new WeakSet(arrZh);
    // console.log(weakset);
    map.delete(3);
    console.log(arrZh)

// 第六题
    // // 人
    // let arrRen = ["a某","b某","c某","d某","f某","g某","h某","i某","j某","j某","m某","l某"]
    // // 奖品
    // let arrf = [Symbol("cat"),Symbol("red"),Symbol("sweet"),Symbol("air"),Symbol("you")];
    // // 抽奖
    // let num = arrRen.length-1;
    // let numg = arrf.length-1;
    // let map = new Map();
    // for(let i=0 ; i<3 ; ){
    //     if(map.size < arrRen.length){
    //     let renID = parseInt(Math.random() * (num - 0 + 1) + 0);  
    //     let gift = parseInt(Math.random() * (numg - 0 + 1) + 0);  
    //     map.set( "ID:"+renID+' '+arrRen[renID] , arrf[gift].toString())
    //     }
    //     else{
    //         break
    //     }
    // }
    // for(let item of map.entries()){
    // console.log(item);
    // }

// 第七题------------------------------假设air质量不合格
    // // 人
    // let arrRen = ["a某","b某","c某","d某","f某","g某","h某","i某","j某","j某","m某","l某"]
    // // 奖品
    // let arrf = [Symbol("cat"),Symbol("red"),Symbol("sweet"),Symbol("air"),Symbol("you")];
    // // 抽奖
    // let num = arrRen.length-1;
    // let numg = arrf.length-1;
    // let map = new Map();
    // for(let i=0 ; i<3 ; ){
    //     if(map.size < 4){
    //     let renID = parseInt(Math.random() * (num - 0 + 1) + 0);  
    //     let gift = parseInt(Math.random() * (numg - 0 + 1) + 0);  
    //     map.set( "ID:"+renID+' '+arrRen[renID] , arrf[gift].toString())
    //     }
    //     else if(map.size < 5){
    //         arrf.splice(4,1);
    //         console.log(arrf)
    //         let renID = parseInt(Math.random() * (num - 0 + 1) + 0);  
    //         let gift = parseInt(Math.random() * (numg -1 - 0 + 1) + 0);  
    //         map.set( "ID:"+renID+' '+arrRen[renID] , arrf[gift].toString())
    //         }
    //     else if( map.size < arrRen.length){
    //         let renID = parseInt(Math.random() * (num - 0 + 1) + 0);  
    //         let gift = parseInt(Math.random() * (numg -1 - 0 + 1) + 0);  
    //         map.set( "ID:"+renID+' '+arrRen[renID] , arrf[gift].toString())
    //         }
    //     else{
    //         break
    //     }
    // }
    // for(let item of map.entries()){
    // console.log(item);
    // }
    

//第八题
    // // (1)数组
    //     let arr = [1,2,3,4,5,6,7,8];
    //     for(let item of arr){
    //         console.log(item);
    //     }
    // // (2)set
    //     let set = new Set([1,2,3,4,5,6]);
    //     for(let item of set.values()){
    //         console.log(item);
    //     }
    // // (3)map
    //     let map = new Map([['baz', "s3"],['baza', "3sa"],['beaza', "3as"]]);
    //     for(let item of map.entries()){
    //         console.log(item);
    //     }
    // // (4)string
    //     let str = "string";
    //     for(let item of str){
    //         console.log(item);
    //     }