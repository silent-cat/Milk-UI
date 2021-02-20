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

import { expect } from "chai";
// 测试button的icon

{
  const div = document.createElement("div");
  document.body.appendChild(div);
  // 将Button对象转为构造函数
  const Constructor = Vue.extend(Button);
  // 实例化
  let vm = new Constructor({
    propsData: {
      icon: "left",
    },
  });
  // 将vm挂载到#test
  vm.$mount(div);
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#m-left");
}
// 测试button的loading
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  // 将Button对象转为构造函数
  const Constructor = Vue.extend(Button);
  // 实例化
  let vm = new Constructor({
    propsData: {
      icon: "left",
      loading: true,
    },
  });
  // 将vm挂载到#test
  vm.$mount(div);
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#m-loading");
}
// 测试iconPosition为left,icon的order为1
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  // 将Button对象转为构造函数
  const Constructor = Vue.extend(Button);
  // 实例化
  let vm = new Constructor({
    propsData: {
      icon: "left",
    },
  });
  // 将vm挂载到#test
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("1");
}
// 测试iconPosition为right,icon的order为2
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  // 将Button对象转为构造函数
  const Constructor = Vue.extend(Button);
  // 实例化
  let vm = new Constructor({
    propsData: {
      icon: "left",
      iconPosition: "right",
    },
  });
  // 将vm挂载到#test
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("2");
}
// 测试click
{
  //把Button对象转为构造函数
  const Constructor = Vue.extend(Button);
  //实例化一个button
  const vm = new Constructor({
    //使用propsData传组件属性
    propsData: {
      icon: "left",
    },
  });
  vm.$mount();
  vm.$on("click", function () {
    console.log(1);
  });
  //找到button的use标签
  let button = vm.$el;
  button.click();
}
