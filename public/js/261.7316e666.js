"use strict";(self["webpackChunkweweb_front"]=self["webpackChunkweweb_front"]||[]).push([[261],{261:(e,t,n)=>{var i=n(303),s=n(641),o=n(33);const a=["ww-responsive"];function r(e,t,n,i,r,l){const c=(0,s.g2)("wwElement",!0),u=(0,s.g2)("wwLayout");return(0,s.uX)(),(0,s.Wv)((0,s.$y)(l.tag),(0,s.v6)(i.properties,{class:["ww-columns",{editing:e.wwEditorState?.canBeEdited,empty:l.isEmpty,"-link":i.hasLink&&!l.isEditing}]}),{default:(0,s.k6)((()=>[(0,s.bF)(u,{class:"ww-columns__dropzone",path:"children",direction:r.direction,style:(0,o.Tr)(l.layoutStyle),"ww-responsive":"wwLayout","onUpdate:list":l.update},{default:(0,s.k6)((({item:t,index:n})=>[(0,s.Lk)("div",{class:(0,o.C4)(["ww-columns__column",[{editing:e.wwEditorState?.canBeEdited,draging:r.dragingIndex===n}]]),"ww-responsive":`index-${n}`,style:(0,o.Tr)(l.getItemStyle(n))},[(0,s.bF)(c,(0,s.v6)(t,{class:"ww-columns__object","extra-style":l.wwObjectFlex,"ww-responsive":`wwobject-${n}`}),null,16,["extra-style","ww-responsive"])],14,a)])),_:1},8,["direction","style","onUpdate:list"])])),_:1},16,["class"])}const l={props:{content:{type:Object,required:!0},wwFrontState:{type:Object,required:!0}},emits:["update:content","update:content:effect"],setup(){const{hasLink:e,tag:t,properties:n}=wwLib.wwElement.useLink();return{hasLink:e,linkTag:t,properties:n}},data(){return{dragingHandle:"start",dragingIndex:-1,style:this.getStyle(),direction:this.getDirection()}},computed:{tag(){return this.hasLink?this.linkTag:"div"},screenSize(){return this.wwFrontState.screenSize},isBound(){return!1},isEmpty(){return!1},isEditing(){return!1},wwObjectFlex(){const e={},t="mosaic"!==this.content.type||"stretch"===this.content.alignItems;return e.flexGrow=t?"1":"unset","columns"===this.content.type&&(e.alignSelf="auto"),e},layoutStyle(){return{flexDirection:this.direction,...this.style}},children(){return this.content.children&&Array.isArray(this.content.children)?this.content.children:[]}},watch:{screenSize(e,t){e!==t&&(this.style=this.getStyle(),this.direction=this.getDirection())}},mounted(){},methods:{getItemStyle(e){const t={flexShrink:"unset",justifyContent:""};if(this.content.reverse?t.order=this.children.length-1-e:t.order=e,this.content.pushLast){const n=this.content.reverse?0===e:e===this.children.length-1;n&&("column"===this.content.direction?t.marginTop="auto":t.marginLeft="auto")}if("rows"!==this.content.type){const n=this.getGridAt(e);t.width=`calc(${n} * 100% / ${this.content.lengthInUnit})`,t.flexShrink="0"}else t.width="100%";return"mosaic"===this.content.type&&"stretch"!==this.content.alignItems&&"baseline"!==this.content.alignItems&&(t.justifyContent=this.content.alignItems),t},getStyle(){return{flexWrap:"mosaic"===this.content.type?"wrap":"unset",justifyContent:"mosaic"===this.content.type?this.content.justifyContent:"unset",alignItems:"mosaic"===this.content.type?this.content.alignItems:"unset"}},getDirection(){return"rows"===this.content.type?"column":"row"},getInheritFromElement(){return"mosaic"===this.content.type?["width","display"]:[]},getWwObjectFlex(){const e="mosaic"!==this.content.type||"stretch"===this.content.alignItems;return e?"1":"unset"},getGridAt(e,t){return e=this.isBound?0:e,t=t||this.content.grid,t?e>=t.length?t[0]||1:t[e]:1},fit(e,t){if(this.isBound)return;if("columns"!==this.content.type)return;const n=e.reduce(((e,t,n)=>e+this.getGridAt(n)||0),0),i=this.content.lengthInUnit;if(n===i&&e.length===t.length)return t;const s=Math.max(1,e.length),o=Math.floor(i/s),a=i-(s-1)*o;return e.map(((e,t)=>0===t?a:o))},async update(e){},moveItem(e,t,n){const i=[...e],[s]=i.splice(t,1);return t<n&&n--,i.splice(n,0,s),i}}};var c=n(262);const u=(0,c.A)(l,[["render",r],["__scopeId","data-v-303c466a"]]),d=u;function p(e,t,n,i,a,r){const l=(0,s.g2)("wwElement",!0),c=(0,s.g2)("wwText");return(0,s.uX)(),(0,s.Wv)((0,s.$y)(r.tag),(0,s.v6)({class:["ww-button",{button:r.tag,"-link":i.hasLink&&!r.isEditing}],type:r.buttonType,style:r.buttonStyle,"data-ww-flag":"btn-"+n.content.buttonType,disabled:n.content.disabled},i.properties,{onFocus:t[0]||(t[0]=e=>a.isReallyFocused=!0),onBlur:t[1]||(t[1]=e=>r.onBlur(e))}),{default:(0,s.k6)((()=>[n.content.hasLeftIcon&&n.content.leftIcon?((0,s.uX)(),(0,s.Wv)(l,(0,o._B)((0,s.v6)({key:0},n.content.leftIcon)),null,16)):(0,s.Q3)("",!0),(0,s.bF)(c,{tag:"span",text:r.text},null,8,["text"]),n.content.hasRightIcon&&n.content.rightIcon?((0,s.uX)(),(0,s.Wv)(l,(0,o._B)((0,s.v6)({key:1},n.content.rightIcon)),null,16)):(0,s.Q3)("",!0)])),_:1},16,["class","type","style","data-ww-flag","disabled"])}const w={center:"center",right:"flex-end",left:"flex-start",justify:"center"},h={props:{content:{type:Object,required:!0},wwFrontState:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["update:content","update:content:effect","change-menu-visibility","change-borders-style","add-state","remove-state","trigger-event"],setup(e){const{hasLink:t,tag:n,properties:i}=wwLib.wwElement.useLink({isDisabled:(0,s.EW)((()=>e.content.disabled))});return{hasLink:t,linkTag:n,properties:i}},data(){return{isReallyFocused:!1}},computed:{buttonStyle(){return{justifyContent:w[this.content["_ww-text_textAlign"]]||"center"}},isEditing(){return!1},tag(){return this.isEditing?"div":this.hasLink?this.linkTag:"submit"===this.content.buttonType||"reset"===this.content.buttonType||"button"===this.content.buttonType?"button":"div"},buttonType(){return this.isEditing||this.hasLink?"":"submit"===this.content.buttonType||"reset"===this.content.buttonType||"button"===this.content.buttonType?this.content.buttonType:""},text(){return this.wwElementState.props.text},isFocused(){return this.isReallyFocused}},watch:{"content.disabled":{immediate:!0,handler(e){e?this.$emit("add-state","disabled"):this.$emit("remove-state","disabled")}},isReallyFocused(e,t){e&&!t?this.$emit("trigger-event",{name:"focus"}):!e&&t&&this.$emit("trigger-event",{name:"blur"})},isFocused:{immediate:!0,handler(e){e?this.$emit("add-state","focus"):this.$emit("remove-state","focus")}}},methods:{onBlur(){this.isReallyFocused=!1}}},m=(0,c.A)(h,[["render",p],["__scopeId","data-v-1cc6eeab"]]),g=m;function y(e,t,n,i,a,r){return(0,s.uX)(),(0,s.Wv)((0,s.$y)(i.tag),(0,s.v6)(i.properties,{class:["ww-icon",{"-link":i.hasLink&&!r.isEditing}],style:r.style}),{default:(0,s.k6)((()=>[(0,s.Lk)("div",{class:(0,o.C4)([n.content.icon]),"aria-hidden":"true"},null,2)])),_:1},16,["style","class"])}const v={props:{content:{type:Object,required:!0}},setup(){const{hasLink:e,properties:t,tag:n}=wwLib.wwElement.useLink();return{hasLink:e,properties:t,tag:n}},computed:{style(){return{color:this.content.color,fontSize:`${this.content.fontSize}px`}},isEditing(){return!1}}},b=(0,c.A)(v,[["render",y],["__scopeId","data-v-cc81db6c"]]),f=b;function E(e,t,n,i,o,a){const r=(0,s.g2)("wwSimpleLayout"),l=(0,s.g2)("wwBackgroundVideo"),c=(0,s.g2)("wwElement",!0),u=(0,s.g2)("wwLayout");return a.noDropzone?((0,s.uX)(),(0,s.Wv)(r,(0,s.v6)({key:0,tag:i.tag,class:"ww-flexbox","ww-responsive":"wwLayoutSlot"},i.properties,{class:{"-link":i.hasLink&&!a.isEditing}}),{default:(0,s.k6)((()=>[(0,s.RG)(e.$slots,"default",{},void 0,!0)])),_:3},16,["tag","class"])):((0,s.uX)(),(0,s.Wv)(u,(0,s.v6)({key:1,class:"ww-flexbox",path:"children",direction:n.content.direction,"disable-edit":a.isFixed,"ww-responsive":"wwLayout",tag:i.tag},i.properties,{class:{"-link":i.hasLink&&!a.isEditing}}),{header:(0,s.k6)((()=>[i.backgroundVideo?((0,s.uX)(),(0,s.Wv)(l,{key:0,video:i.backgroundVideo},null,8,["video"])):(0,s.Q3)("",!0),a.noDropzone?(0,s.Q3)("",!0):(0,s.RG)(e.$slots,"default",{key:1},void 0,!0)])),default:(0,s.k6)((({item:e,index:t,itemStyle:n})=>[(0,s.bF)(c,(0,s.v6)(e,{"extra-style":n,class:"ww-flexbox__object","ww-responsive":`wwobject-${t}`,"data-ww-flexbox-index":t,onClick:a.onElementClick}),null,16,["extra-style","ww-responsive","data-ww-flexbox-index","onClick"])])),_:3},16,["direction","disable-edit","tag","class"]))}const k={props:{content:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["update:content:effect","update:content","element-event"],setup(){const{hasLink:e,tag:t,properties:n}=wwLib.wwElement.useLink(),i=wwLib.wwElement.useBackgroundVideo();return{hasLink:e,properties:n,backgroundVideo:i,tag:t}},computed:{children(){return this.content.children&&Array.isArray(this.content.children)?this.content.children:[]},isFixed(){return this.wwElementState.props.isFixed},noDropzone(){return this.wwElementState.props.noDropzone},isEditing(){return!1}},methods:{onElementClick(e){let t=e.currentTarget.dataset.wwFlexboxIndex,n=parseInt(t);isNaN(n)&&(n=0),this.$emit("element-event",{type:"click",index:n})}}},x=(0,c.A)(k,[["render",E],["__scopeId","data-v-70c6adf0"]]),L=x;function S(e,t,n,i,o,a){const r=(0,s.g2)("wwText");return(0,s.uX)(),(0,s.Wv)(r,(0,s.v6)({tag:a.tag,text:a.text},i.properties,{class:{"-link":i.hasLink&&!a.isEditing}}),null,16,["tag","text","class"])}const I={props:{content:{type:Object,required:!0},wwElementState:{type:Object,required:!0}},emits:["update-content","update:content:effect"],setup(){const{hasLink:e,tag:t,properties:n}=wwLib.wwElement.useLink();return{hasLink:e,linkTag:t,properties:n}},computed:{tag(){return this.hasLink?this.linkTag:this.content.tag},text(){return this.wwElementState.props.text},isEditing(){return!1}},methods:{}},F=(0,c.A)(I,[["render",S],["__scopeId","data-v-0b6a1aa0"]]),j=F;var W=n(751);function _(e,t,n,i,o,a){return"textarea"!==n.content.type?((0,s.uX)(),(0,s.CE)("input",(0,s.v6)({key:0,ref:"inputRef"},i.inputBindings,{class:["ww-input-basic",i.inputClasses],onInput:t[0]||(t[0]=(...e)=>i.handleManualInput&&i.handleManualInput(...e)),onBlur:t[1]||(t[1]=(...e)=>i.onBlur&&i.onBlur(...e)),onFocus:t[2]||(t[2]=e=>i.isReallyFocused=!0),onKeyup:t[3]||(t[3]=(0,W.jR)(((...e)=>i.onEnter&&i.onEnter(...e)),["enter"]))}),null,16)):((0,s.uX)(),(0,s.CE)("textarea",(0,s.v6)({key:1,ref:"inputRef"},i.textareaBindings,{class:["ww-input-basic",{editing:i.isEditing}],onInput:t[4]||(t[4]=(...e)=>i.handleManualInput&&i.handleManualInput(...e)),onFocus:t[5]||(t[5]=e=>i.isReallyFocused=!0),onBlur:t[6]||(t[6]=e=>i.isReallyFocused=!1),onKeyup:t[7]||(t[7]=(0,W.jR)(((...e)=>i.onEnter&&i.onEnter(...e)),["enter"]))}),null,16))}var T=n(953);function B(e,t){const n=(0,T.KR)(!1),i=(0,T.KR)(!1),o=(0,T.KR)(null);let a=null;const r=(0,s.EW)((()=>Object.keys(e.wwElementState.props).includes("type")?e.wwElementState.props.type:e.content.type));function l(t){if("decimal"!==r.value)return t;if(!t&&0!==t)return"";t=`${t}`.replace(",",".");const n=-1!==t.indexOf(".")?e.content.precision.split(".")[1].length:0,i=parseFloat(Number(t).toFixed(n).replace(",","."));return i}const c=(0,s.EW)((()=>void 0===e.content.value?"":l(e.content.value))),{value:u,setValue:d}=wwLib.wwVariable.useComponentVariable({uid:e.uid,name:"value",type:(0,s.EW)((()=>["decimal","number"].includes(r.value)?"number":"string")),defaultValue:c});(0,s.wB)(c,(()=>{d(c.value)}));const p=(0,s.EW)((()=>e.content?"password"===e.content.type?e.content.displayPassword?"text":"password":"decimal"===e.content.type?"number":e.content.type:"text")),w=(0,s.EW)((()=>void 0===e.wwElementState.props.readonly?e.content.readonly:e.wwElementState.props.readonly)),h=(0,s.EW)((()=>{const t={...wwLib.wwUtils.getTextStyleFromContent(e.content),"--placeholder-color":e.content.placeholderColor};return delete t["whiteSpaceCollapse"],delete t["whiteSpace"],t})),m=(0,s.EW)((()=>"date"===r.value?e.content.minDate:e.content.min)),g=(0,s.EW)((()=>"date"===r.value?e.content.maxDate:e.content.max)),y=(0,s.EW)((()=>["decimal","number"].includes(r.value)?e.content.step:"time"===r.value&&e.content.timePrecision||1)),v=(0,s.EW)((()=>n.value||"number"!==p.value?y.value:"any")),b=(0,s.EW)((()=>wwLib.wwUtils.getLengthUnit(e.content.debounceDelay)[0]));function f(e){if("decimal"===r.value){const n=l(u.value);if(n===u.value)return;d(n),t("trigger-event",{name:"change",event:{domEvent:e,value:n}})}}function E(n){const s=n.target.value;let o;if("number"!==p.value||"."!==n.data&&","!==n.data||""!==s){if("number"===p.value&&(0===s||s&&s.length))try{o=parseFloat(s)}catch(r){o=s}else o=s;o!==e.value&&(d(o),e.content.debounce?(i.value=!0,a&&clearTimeout(a),a=setTimeout((()=>{t("trigger-event",{name:"change",event:{domEvent:n,value:o}}),t("element-event",{type:"change",value:{domEvent:n,value:o}}),i.value=!1}),b.value)):(t("trigger-event",{name:"change",event:{domEvent:n,value:o}}),t("element-event",{type:"change",value:{domEvent:n,value:o}})))}}function k(e){f(e),n.value=!1}function x(){w.value||o.value&&o.value.focus()}function L(){o.value&&o.value.select()}(0,s.wB)(n,((e,n)=>{e&&!n?t("trigger-event",{name:"focus"}):!e&&n&&t("trigger-event",{name:"blur"})}));const S=(0,s.EW)((()=>n.value));return(0,s.wB)(S,(e=>{t(e?"add-state":"remove-state","focus")}),{immediate:!0}),(0,s.wB)(w,(e=>{t(e?"add-state":"remove-state","readonly")}),{immediate:!0}),{inputRef:o,variableValue:u,isReallyFocused:n,isDebouncing:i,type:r,step:y,inputType:p,isReadonly:w,style:h,min:m,max:g,stepAttribute:v,handleManualInput:E,focusInput:x,selectInput:L,onBlur:k,isFocused:S,setValue:d}}const A={props:{content:{type:Object,required:!0},uid:{type:String,required:!0},wwElementState:{type:Object,required:!0},useForm:{type:Boolean,default:!0}},emits:["element-event","trigger-event","add-state","remove-state","update:content:effect","update:sidepanel-content"],setup(e,{emit:t}){const n=(0,s.EW)((()=>!1)),{inputRef:i,variableValue:o,isReallyFocused:a,isDebouncing:r,type:l,step:c,inputType:u,isReadonly:d,style:p,min:w,max:h,stepAttribute:m,handleManualInput:g,focusInput:y,selectInput:v,onBlur:b,setValue:f}=B(e,t),E=(0,s.WQ)("_wwForm:useForm",(()=>{})),k=(0,s.EW)((()=>e.content.fieldName)),x=(0,s.EW)((()=>e.content.validation)),L=(0,s.EW)((()=>e.content.customValidation)),S=(0,s.EW)((()=>e.content.required));E(o,{fieldName:k,validation:x,customValidation:L,required:S,initialValue:(0,s.EW)((()=>e.content.value))},{elementState:e.wwElementState,emit:t,sidepanelFormPath:"form",setValue:f});const I=(0,s.EW)((()=>({...e.wwElementState.props.attributes,key:"ww-input-basic-"+c.value,value:o.value,type:u.value,name:e.wwElementState.name,readonly:d.value||n.value,required:e.content.required,autocomplete:e.content.autocomplete?"on":"off",placeholder:wwLib.wwLang.getText(e.content.placeholder),style:p.value,min:w.value,max:h.value,step:m.value}))),F=(0,s.EW)((()=>({...e.wwElementState.props.attributes,value:o.value,type:e.content.type,name:e.wwElementState.name,readonly:d.value||n.value,required:e.content.required,placeholder:wwLib.wwLang.getText(e.content.placeholder),rows:e.content.rows,style:[p.value,{resize:e.content.resize?"":"none"}]}))),j=(0,s.EW)((()=>({hideArrows:e.content.hideArrows&&"number"===u.value,"date-placeholder":"date"===e.content.type&&!o.value,"-readonly":d.value,editing:n.value})));function W(){t("trigger-event",{name:"onEnterKey",event:{value:o.value}})}return(0,s.wB)((()=>e.content.value),(e=>{t("trigger-event",{name:"initValueChange",event:{value:e}})})),{inputRef:i,isReallyFocused:a,isDebouncing:r,type:l,step:c,inputType:u,isReadonly:d,style:p,isEditing:n,min:w,max:h,stepAttribute:m,handleManualInput:g,focusInput:y,selectInput:v,onBlur:b,inputBindings:I,textareaBindings:F,inputClasses:j,onEnter:W}}},R=(0,c.A)(A,[["render",_],["__scopeId","data-v-2819f164"]]),C=R;function q(e,t,n,i,o,a){const r=(0,s.g2)("wwLayout");return(0,s.uX)(),(0,s.Wv)(r,{path:"wwObjects",class:"section-base"})}const O={props:{content:{type:Object,required:!0}}},$=(0,c.A)(O,[["render",q],["__scopeId","data-v-550ba954"]]),V=$;i.A.component("wwobject-21881619-a984-4847-81a9-922c3dbb5853",d),i.A.component("wwobject-6f8796b1-8273-498d-95fc-7013b7c63214",g),i.A.component("wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15",f),i.A.component("wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1",L),i.A.component("wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad",j),i.A.component("wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0",C),i.A.component("section-99586bd3-2b15-4d6b-a025-6a50d07ca845",V)}}]);