(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-admin","pages-admin-databuild-databuild","pages-admin-datashow-datasCount"],{"1c08":function(e,t,n){"use strict";var a=n("4ea4");n("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r={name:"Record",data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,recordList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,recordIndex:null,recordText:null,recordUser1:null,recordUserName1:null,recordUser2:null,recordUserName2:null,recordUser3:null,recordUserName3:null,recordUser4:null,recordUserName4:null,recordUser5:null,recordUserName5:null},form:{},rules:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,listRecord(this.queryParams).then((function(t){e.recordList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={recordId:null,recordIndex:null,recordText:null,recordUser1:null,recordUserName1:null,recordUser2:null,recordUserName2:null,recordUser3:null,recordUserName3:null,recordUser4:null,recordUserName4:null,recordUser5:null,recordUserName5:null},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.recordId})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加bzrecord"},handleUpdate:function(e){var t=this;this.reset();var n=e.recordId||this.ids;getRecord(n).then((function(e){t.form=e.data,t.open=!0,t.title="修改bzrecord"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null!=e.form.recordId?updateRecord(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):addRecord(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,n=e.recordId||this.ids;this.$modal.confirm('是否确认删除bzrecord编号为"'+n+'"的数据项？').then((function(){return delRecord(n)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("system/record/export",(0,i.default)({},this.queryParams),"record_".concat((new Date).getTime(),".xlsx"))}}};t.default=r},"2bfd":function(e,t,n){"use strict";n.r(t);var a=n("a984"),i=n("38e6");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=s.exports},"361f":function(e,t,n){"use strict";var a=n("4ea4");n("4160"),n("4e82"),n("d3b7"),n("e25e"),n("ac1f"),n("5319"),n("1276"),n("498a"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),r={data:function(){return{count:10,percentage:100,message1:"上传数据集: 目的为将数据集的索引-单词(0-0-0 word)上传至数据库，方便后期的标注工作。\n\t\t\t\t\t  理论上只需一次上传即可。切勿随意操作，打乱数据库中保存的数据集格式。",message2:"清理所有数据集: 谨慎操作，会删除数据表中所有数据，包括已标注的数据。该功能在初始化数据集无误\n\t\t\t\t\t\t后，理应禁用。",timer:null}},methods:{delAll:function(){uni.request({method:"DELETE",url:this.$store.state.url+"/bz-record/delAll",success:function(e){uni.showToast({title:e.data.message})}})},initDatas:function(){var e=this;console.log("初始化开始...");var t=2540,n=2540,a=setInterval((function(){e.getDuiHua(n),e.percentage=n/t*100,n==t&&clearInterval(a),n++}),4e4)},diGuiInitDatas:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(e,typeof e,"**"),!(e>=t.count)){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,t.getDuiHua(e);case 5:return n.next=7,t.diGuiInitDatas(e+1);case 7:case"end":return n.stop()}}),n)})))()},getDuiHua:function(e){var t=this;new Promise((function(n,a){uni.request({method:"GET",url:t.$store.state.url+"/file/getFiles",data:{idx:e},success:function(e){if(200==e.data.code){var t=e.data.result,a=[];t.forEach((function(e){var t=e.split(".");"txt"==t[1]&&a.push(e)})),n(a)}else uni.showToast({title:"资源获取失败"})}})})).then((function(n){t.read_f(n,e)}),(function(e){console.log(e),t.$message({message:e.msg,type:"error"})}))},ceshi1:function(){setTimeout((function(){console.log("一次")}),1e3)},read_f:function(e,t){var n=this,a=e;a.sort((function(e,t){return parseInt(e.replace(/_(.*).txt/g,""))-parseInt(t.replace(/_(.*).txt/g,""))}));var i="http://121.41.10.38:8822/"+t+"/",r=0,o=setInterval((function(){n.readTxt(i+a[r],t,r),r==a.length&&clearInterval(o),r++}),2e3)},readTxt:function(e,t,n){var a=this;uni.request({url:e,method:"GET",success:function(e){if(200==e.statusCode){var i=e.data,r=i.replace(/[(?<!\.{1,})\.(?!\.{1,})]|[,?!]/g," $&").trim(),o=r.replace(/[-]/g," $& ").trim(),l=o.split(" ");uni.request({method:"POST",url:a.$store.state.url+"/bz-record/addJz",data:{words:l,dh:t,jz:n},success:function(e){console.log(e.data.message)}})}}})}}};t.default=r},"38e6":function(e,t,n){"use strict";n.r(t);var a=n("1c08"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},4073:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".el-header[data-v-34cad046]{font-size:%?58?%;background-color:#545c64}.el-aside[data-v-34cad046]{background-color:#545c64;text-align:center;line-height:200px}.el-main[data-v-34cad046]{background-color:#e9eef3;color:#333;text-align:center;line-height:160px}.el-menu-item[data-v-34cad046]{padding-top:10px;font-size:18px;text-align:center;height:80px}.el-menu-item-action[data-v-34cad046]{padding:0;width:190px;height:55px;font-size:15px;color:#204d74}[data-v-34cad046] .el-submenu__title{padding-top:10px;height:80px;padding-bottom:10px;font-size:18px;text-align:center}",""]),e.exports=t},"44c5":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("el-container",{staticStyle:{position:"absolute",left:"0",top:"0",bottom:"0",right:"0",overflow:"hidden"}},[e.popupshow?n("popup",{attrs:{option:e.option},on:{closepopup:function(t){arguments[0]=t=e.$handleEvent(t),e.closepopup.apply(void 0,arguments)}}}):e._e(),n("el-header",{staticClass:"flex align-center justify-between",attrs:{height:"80px"}},[n("v-uni-view",{staticStyle:{"font-size":"65rpx","font-weight":"500"}},[n("v-uni-text",{staticStyle:{color:"#FFFFFF","font-family":"Hiragino Sans GB","letter-spacing":"10rpx"}},[e._v("人工数据标注管理员管理中心")])],1),n("v-uni-view",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSelect.apply(void 0,arguments)}}},[n("el-menu-item",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.loout.apply(void 0,arguments)}}},[e._v("退出登录")])],1)],1)],1),n("el-container",[n("el-aside",{style:e.WindowsHeight,attrs:{width:"200px"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","unique-opened":"true","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:function(t){arguments[0]=t=e.$handleEvent(t),e.handleOpen.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClose.apply(void 0,arguments)},select:function(t){arguments[0]=t=e.$handleEvent(t),e.handSelect.apply(void 0,arguments)}}},[n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页中心")])]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[e._v("数据生成")])]),n("el-menu-item",{staticClass:"el-menu-item-action",attrs:{index:"2-1"}},[e._v("生成数据集")])],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[e._v("数据查看")])]),n("el-menu-item",{staticClass:"el-menu-item-action",attrs:{index:"3-1"}},[e._v("标注记录")])],2)],1)],1),n("el-main",{style:e.WindowsHeight},[n("v-uni-view",["1"==e.index?n("admin-index"):e._e(),"2-1"==e.index?n("databuild"):e._e(),"3-1"==e.index?n("datashow"):e._e()],1)],1)],1)],1)],1)},r=[]},4802:function(e,t,n){var a=n("4073");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("37a5a982",a,!0,{sourceMap:!1,shadowMode:!1})},"5e20":function(e,t,n){"use strict";n.r(t);var a=n("b2ed"),i=n("c718");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"3682a8db",null,!1,a["a"],o);t["default"]=s.exports},"6a47":function(e,t,n){"use strict";var a=n("4802"),i=n.n(a);i.a},"8df1":function(e,t,n){"use strict";n.r(t);var a=n("44c5"),i=n("ef56");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("6a47");var o,l=n("f0c5"),s=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"34cad046",null,!1,a["a"],o);t["default"]=s.exports},"8e6a":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5e20")),r=a(n("4c3c")),o=a(n("2bfd")),l={data:function(){return{activeIndex:"1",activeIndex2:"1",index:"1",Gid:-1,popupshow:!1,option:null}},computed:{WindowsHeight:function(){var e;return uni.getSystemInfo({success:function(t){e=t.windowHeight-20}}),"height:".concat(e,"px")}},onLoad:function(){this.isAdmin()},methods:{loout:function(){uni.setStorageSync("status",""),uni.setStorageSync("user_label",""),uni.setStorageSync("username",""),uni.redirectTo({url:"../login/login"})},isAdmin:function(){"admin"!=uni.getStorageSync("status")&&(uni.showToast({title:"不是管理员"}),uni.redirectTo({url:"../login/login"}))},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},handSelect:function(e,t){this.index=e,console.log(e)},getIndex:function(e){this.index=e[0],this.Gid=e[1]},closepopup:function(){this.popupshow=!1},openpopup:function(e){console.log(e),this.option=e,this.popupshow=!0}},components:{databuild:i.default,datashow:r.default,dataCount:o.default}};t.default=l},a984:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",staticStyle:{"line-height":"30px","text-align":"left"},attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[n("el-form-item",{attrs:{label:"单词索引",prop:"recordIndex"}},[n("el-input",{attrs:{placeholder:"请输入单词索引",clearable:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.recordIndex,callback:function(t){e.$set(e.queryParams,"recordIndex",t)},expression:"queryParams.recordIndex"}})],1),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:record:export"],expression:"['system:record:export']"}],attrs:{type:"success",plain:!0,icon:"el-icon-search",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleExport.apply(void 0,arguments)}}},[e._v("搜索")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.recordList},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.handleSelectionChange.apply(void 0,arguments)}}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{label:"标注id",align:"center",prop:"recordId"}}),n("el-table-column",{attrs:{label:"标注4",align:"center",prop:"recordUser4"}}),n("el-table-column",{attrs:{label:"标注5",align:"center",prop:"recordUser5"}}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:record:edit"],expression:"['system:record:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleUpdate(t.row)}}},[e._v("修改")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:record:remove"],expression:"['system:record:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.queryParams,"pageSize",t)},pagination:function(t){arguments[0]=t=e.$handleEvent(t),e.getList.apply(void 0,arguments)}}})],1)},r=[]},b2ed:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticStyle:{"line-height":"30px",padding:"10px","margin-bottom":"30px","text-align":"left"}},[n("el-button",{staticStyle:{width:"240px"},attrs:{plain:!0,disabled:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.initDatas.apply(void 0,arguments)}}},[e._v("上传数据集")]),n("el-button",{staticStyle:{width:"240px"},attrs:{plain:!0,disabled:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delAll.apply(void 0,arguments)}}},[e._v("清理所有数据集")])],1),n("v-uni-view",{staticStyle:{margin:"30px 0","line-height":"30px"}},[n("el-alert",{attrs:{title:e.message1,type:"warning"}}),n("v-uni-view",{staticStyle:{margin:"5px"}}),n("el-alert",{attrs:{title:e.message2,type:"error"}})],1),n("v-uni-view",{staticStyle:{"background-color":"#FFFFFF",padding:"10px"}},[n("v-uni-view",{staticStyle:{"text-align":"left","font-weight":"700","line-height":"30px"}},[e._v("上传进度（已完成上传）：")]),n("v-uni-view",{},[n("el-progress",{attrs:{percentage:e.percentage,status:"success"}})],1)],1)],1)},r=[]},c718:function(e,t,n){"use strict";n.r(t);var a=n("361f"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},ef56:function(e,t,n){"use strict";n.r(t);var a=n("8e6a"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a}}]);