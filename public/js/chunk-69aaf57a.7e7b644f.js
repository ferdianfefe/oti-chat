(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69aaf57a"],{1681:function(t,e,i){},8770:function(t,e,i){},ae41:function(t,e,i){"use strict";i("8770")},c66d:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("div",{staticClass:"text-overline mb-4"},[t._v(" PROFILE ")]),t.editMode?t._e():i("v-list-item-title",{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(t.loggedUser.name)+" ")]),i("v-col",{attrs:{cols:"12"}},[t.editMode?i("v-text-field",{attrs:{label:"Name"},model:{value:t.newProfile.name,callback:function(e){t.$set(t.newProfile,"name",e)},expression:"newProfile.name"}}):t._e()],1),i("v-col",{attrs:{cols:"12"}},[t.editMode?t._e():i("v-list-item-subtitle",[t._v(t._s(t.loggedUser.bio||""))])],1),i("v-col",{attrs:{cols:"12"}},[t.editMode?i("v-textarea",{attrs:{name:"bio",label:"Bio",value:t.newProfile.bio,hint:"Bio here"},model:{value:t.newProfile.bio,callback:function(e){t.$set(t.newProfile,"bio",e)},expression:"newProfile.bio"}}):t._e()],1)],1)],1),i("v-card-actions",[i("v-btn",{attrs:{color:t.editMode?"success":"primary",outlined:"",rounded:"",text:""},on:{click:t.editBtnClicked}},[t._v(" "+t._s(t.editMode?"Save":"Edit")+" ")]),t.editMode?i("v-btn",{attrs:{color:"error",outlined:"",rounded:"",text:""},on:{click:function(e){t.editMode=!1}}},[t._v(" Cancel ")]):t._e()],1)],1)},a=[],n=i("5530"),s=(i("4de4"),i("2f62")),r={components:{},watch:{$route:function(t,e){"home"!=t&&this.getUserByRoute()}},data:function(){return{profilePhoto:null,editMode:!1,newProfile:{name:"",bio:""}}},computed:Object(n["a"])(Object(n["a"])({},Object(s["c"])(["posts","loggedUser","selectedUser"])),{},{userPost:function(){var t=this;return this.posts.filter((function(e){return e.creator._id==t.selectedUser._id}))}}),methods:Object(n["a"])(Object(n["a"])({},Object(s["b"])(["editUserProfile","getUserProfile"])),{},{editBtnClicked:function(){this.editMode&&this.editUserProfile(this.newProfile),this.editMode=!this.editMode}}),created:function(){}},l=r,c=(i("ae41"),i("2877")),u=i("6544"),d=i.n(u),h=i("8336"),f=i("b0af"),p=i("99d9"),m=i("62ad"),v=i("da13"),w=i("5d23"),b=i("8654"),g=(i("a9e3"),i("1681"),i("58df")),x=Object(g["a"])(b["a"]),_=x.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},b["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=b["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){b["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),I=Object(c["a"])(l,o,a,!1,null,"fea616fc",null);e["default"]=I.exports;d()(I,{VBtn:h["a"],VCard:f["a"],VCardActions:p["a"],VCol:m["a"],VListItem:v["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VTextField:b["a"],VTextarea:_})}}]);
//# sourceMappingURL=chunk-69aaf57a.7e7b644f.js.map