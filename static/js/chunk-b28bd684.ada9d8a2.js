(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b28bd684"],{2423:function(t,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"b",function(){return l}),a.d(e,"d",function(){return s}),a.d(e,"a",function(){return r}),a.d(e,"e",function(){return o});var i=a("b775");function n(t){return Object(i["a"])({url:"/article/list",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/article/detail",method:"get",params:{id:t}})}function s(t){return Object(i["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(i["a"])({url:"/article/create",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/article/update",method:"post",data:t})}},"333d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},n=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function s(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,a){var i=r(),n=t-i,o=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=o;var r=Math.easeInOutQuad(c,i,n,e);s(r),c<e?l(t):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&o(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&o(0,800)}}},u=c,d=(a("6b95"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,"0565df52",null);e["a"]=p.exports},6724:function(t,e,a){"use strict";var i=a("5176"),n=a.n(i),l=(a("8d41"),"@@wavesContext");function s(t,e){function a(a){var i=n()({},e.value),l=n()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=l.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var r=s.getBoundingClientRect(),o=s.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",s.appendChild(o)),l.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-r.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-r.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=l.color,o.className="waves-ripple z-active",!1}}return t[l]?t[l].removeHandle=a:t[l]={removeHandle:a},a}var r={bind:function(t,e){t.addEventListener("click",s(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[l].removeHandle,!1),t.addEventListener("click",s(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[l].removeHandle,!1),t[l]=null,delete t[l]}},o=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;e["a"]=r},"6b95":function(t,e,a){"use strict";var i=a("bcd7"),n=a.n(i);n.a},"8d41":function(t,e,a){},bcd7:function(t,e,a){},ff73:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:t.$t("table.title")},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:t.$t("table.importance"),clearable:""},model:{value:t.listQuery.importance,callback:function(e){t.$set(t.listQuery,"importance",e)},expression:"listQuery.importance"}},t._l(t.importanceOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}),1),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:t.$t("table.type"),clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name+"("+t.key+")",value:t.key}})}),1),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})}),1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("\n      "+t._s(t.$t("table.search"))+"\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      "+t._s(t.$t("table.add"))+"\n    ")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("\n      "+t._s(t.$t("table.export"))+"\n    ")]),t._v(" "),a("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(e){t.tableKey=t.tableKey+1}},model:{value:t.showReviewer,callback:function(e){t.showReviewer=e},expression:"showReviewer"}},[t._v("\n      "+t._s(t.$t("table.reviewer"))+"\n    ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:t.$t("table.id"),prop:"id",sortable:"custom",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.date"),width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.title"),"min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",{staticClass:"link-type",on:{click:function(e){return t.handleUpdate(i)}}},[t._v(t._s(i.title))]),t._v(" "),a("el-tag",[t._v(t._s(t._f("typeFilter")(i.type)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.author"),width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),t.showReviewer?a("el-table-column",{attrs:{label:t.$t("table.reviewer"),width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"red"}},[t._v(t._s(e.row.reviewer))])]}}],null,!1,295318502)}):t._e(),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.importance"),width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(+e.row.importance,function(t){return a("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})})}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.readings"),align:"center",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[i.pageviews?a("span",{staticClass:"link-type",on:{click:function(e){return t.handleFetchPv(i.pageviews)}}},[t._v(t._s(i.pageviews))]):a("span",[t._v("0")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.status"),"class-name":"status-col",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-tag",{attrs:{type:t._f("statusFilter")(i.status)}},[t._v("\n          "+t._s(i.status)+"\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(i)}}},[t._v("\n          "+t._s(t.$t("table.edit"))+"\n        ")]),t._v(" "),"published"!=i.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(e){return t.handleModifyStatus(i,"published")}}},[t._v("\n          "+t._s(t.$t("table.publish"))+"\n        ")]):t._e(),t._v(" "),"draft"!=i.status?a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleModifyStatus(i,"draft")}}},[t._v("\n          "+t._s(t.$t("table.draft"))+"\n        ")]):t._e(),t._v(" "),"deleted"!=i.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleModifyStatus(i,"deleted")}}},[t._v("\n          "+t._s(t.$t("table.delete"))+"\n        ")]):t._e()]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:t.$t("table.type"),prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.date"),prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.title"),prop:"title"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.status")}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.importance")}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.remark")}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        "+t._s(t.$t("table.cancel"))+"\n      ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("\n        "+t._s(t.$t("table.confirm"))+"\n      ")])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},n=[],l=a("5d73"),s=a.n(l),r=a("5176"),o=a.n(r),c=a("e814"),u=a.n(c),d=a("2423"),p=a("6724"),m=a("ed08"),f=a("333d"),v=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],h=v.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),b={name:"ComplexTable",components:{Pagination:f["a"]},directives:{waves:p["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},typeFilter:function(t){return h[t]}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:v,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(d["c"])(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,setTimeout(function(){t.listLoading=!1},1500)})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},createData:function(){var t=this;this.$refs["dataForm"].validate(function(e){e&&(t.temp.id=u()(100*Math.random())+1024,t.temp.author="vue-element-admin",Object(d["a"])(t.temp).then(function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(t){var e=this;this.temp=o()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},updateData:function(){var t=this;this.$refs["dataForm"].validate(function(e){if(e){var a=o()({},t.temp);a.timestamp=+new Date(a.timestamp),Object(d["e"])(a).then(function(){var e=!0,a=!1,i=void 0;try{for(var n,l=s()(t.list);!(e=(n=l.next()).done);e=!0){var r=n.value;if(r.id===t.temp.id){var o=t.list.indexOf(r);t.list.splice(o,1,t.temp);break}}}catch(c){a=!0,i=c}finally{try{e||null==l.return||l.return()}finally{if(a)throw i}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(d["d"])(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-6e83591c"),a.e("chunk-5164a781"),a.e("chunk-5bdd67a2"),a.e("chunk-87968d96")]).then(a.bind(null,"4bf8d")).then(function(e){var a=["timestamp","title","type","importance","status"],i=["timestamp","title","type","importance","status"],n=t.formatJson(i,t.list);e.export_json_to_excel({header:a,data:n,filename:"table-list"}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(m["f"])(e[t]):e[t]})})}}},y=b,g=a("2877"),_=Object(g["a"])(y,i,n,!1,null,null,null);e["default"]=_.exports}}]);