import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";

Vue.component("m-button", Button);
Vue.component("m-icon", Icon);
Vue.component("m-button-group", ButtonGroup);
new Vue({
  el: "#app",
  data: {
    loading1: false,
  },
});
