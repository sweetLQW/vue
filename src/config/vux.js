import Vue from 'vue'
//弹窗组件
import {Actionsheet,Popup,Toast,ToastPlugin} from 'vux';
//表单组件
import {XButton,XInput} from 'vux'
//其他组件
import {XHeader,Icon,LoadMore} from 'vux'

//弹窗组件
Vue.component("actionsheet",Actionsheet);
Vue.component("popup",Popup);
Vue.use(ToastPlugin, {position: 'middle',type:'text'});
Vue.component("toast",Toast);

//表单组件
Vue.component("XButton",XButton);
Vue.component("XInput",XInput);
Vue.component("Popup",Popup);

//其他组件
Vue.component("XHeader",XHeader);
Vue.component("Icon",Icon);
Vue.component("LoadMore",LoadMore);

export default {

}

