(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-dataList"],{1497:function(t,e,r){"use strict";r.r(e);var n=r("e510"),i=r("f9c4");for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);r("9e94");var s,o=r("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"7d218080",null,!1,n["a"],s);e["default"]=u.exports},"25a6":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.main-iframe[data-v-7d218080]{height:calc(100vh);background-color:#474546;overflow:auto}.main-iframe .box[data-v-7d218080]{height:30px;padding:20px;background-color:#fefdf5;margin:0 70px;margin-top:45px;-webkit-border-radius:20px;border-radius:20px;line-height:30px;text-align:center;font-size:30px;-webkit-box-shadow:0 5px 15px 1px #383838;box-shadow:0 5px 15px 1px #383838;cursor:pointer}.main-iframe .box[data-v-7d218080]:hover{background-color:#d1d0ca}',""]),t.exports=e},"84e0":function(t,e,r){"use strict";r("4160"),r("4e82"),r("d3b7"),r("e25e"),r("ac1f"),r("5319"),r("1276"),r("498a"),r("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{count:1270,differ:0}},onLoad:function(){this.isUser(),this.differ="1"==uni.getStorageSync("differ")?0:1270,this.count="1"==uni.getStorageSync("differ")?1270:1271},methods:{isUser:function(){"user"!=uni.getStorageSync("status")&&(uni.showToast({title:"不是用户"}),uni.redirectTo({url:"../login/login"}))},getCountList:function(){for(var t=0;t<this.count;t++);},load:function(){},toWzDetail:function(t){var e=this;new Promise((function(r,n){uni.request({method:"GET",url:e.$store.state.url+"/file/getFiles",data:{idx:t},success:function(t){if(200==t.data.code){var n=t.data.result,i=[],a=[];n.forEach((function(t){var e=t.split(".");"txt"==e[1]?i.push(t):"wav"==e[1]&&a.push(t)})),e.$store.state.arrTxtList=i,e.$store.state.arrAuList=a,r()}else uni.showToast({title:"资源获取失败"})}})})).then((function(e){uni.navigateTo({url:"./dataDetail?id="+t})}),(function(t){e.$message({message:t.msg,type:"error"})}))},read_f:function(t){this.wzTxtInfo.sort((function(t,e){return parseInt(t.replace(/_(.*).txt/g,""))-parseInt(e.replace(/_(.*).txt/g,""))})),this.wzAuInfo.sort((function(t,e){return parseInt(t.replace(/_(.*).wav/g,""))-parseInt(e.replace(/_(.*).wav/g,""))}));for(var e="http://121.41.10.38:8822/"+t+"/",r=0;r<this.wzTxtInfo.length;r++){var n=e+this.wzAuInfo[r],i={words:["加","载","ing"],music:{title:"音频文件"+r,url:n,lrc:"[00:00:00]lrc here\n[00:01:00]aplayer"}};this.dhList.push(i),this.readTxt(e+this.wzTxtInfo[r],r)}for(var a=0;a<this.dhList.length;a++){for(var s=[],o=0;o<this.dhList[a].words.length;o++)s.push(0);this.activeArr.push(s)}},readTxt:function(t,e){var r=this;uni.request({url:t,method:"GET",success:function(t){if(200==t.statusCode){var n=t.data,i=n.replace(/[(?<!\.{1,})\.(?!\.{1,})]|[,?!]/g," $&").trim(),a=i.replace(/[-]/g," $& ").trim(),s=a.split(" ");r.$set(r.dhList[e],"words",s)}}})}}};e.default=n},"9e94":function(t,e,r){"use strict";var n=r("b13f"),i=r.n(n);i.a},b13f:function(t,e,r){var n=r("25a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("aca4ae62",n,!0,{sourceMap:!1,shadowMode:!1})},e510:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"main-iframe"},[r("h1",{staticStyle:{"text-align":"center",color:"#fefdf5","padding-top":"35px"}},[t._v("对话列表")]),r("v-uni-view",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap","justify-content":"space-around"}},t._l(t.count,(function(e,n){return r("v-uni-view",{key:n,staticClass:"box",staticStyle:{"min-width":"10%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toWzDetail(n+t.differ)}}},[t._v("第"+t._s(n+t.differ)+"个对话")])})),1)],1)},a=[]},f9c4:function(t,e,r){"use strict";r.r(e);var n=r("84e0"),i=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a}}]);