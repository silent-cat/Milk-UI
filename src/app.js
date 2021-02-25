import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import Input from './Input'

Vue.component("m-button", Button);
Vue.component("m-icon", Icon);
Vue.component("m-button-group", ButtonGroup);
Vue.component('m-input',Input)
new Vue({
  el: "#app",
  data: {
    loading1: false,
    mes:''
  },
  methods:{
    test(){
      console.log(111);
    }
  }
});
