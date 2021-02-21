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

import chai, { expect } from "chai";
import spies from "chai-spies";
chai.expect = expect;
chai.use(spies);
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
  // 将vm挂载到页面的元素上
  vm.$mount(div);
  // 获取到use标签
  let useElement = vm.$el.querySelector("use");
  // 获取到href属性
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#m-left");
  vm.$el.remove();
  vm.$destroy();
}
// 测试button的loading
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  let vm = new Constructor({
    propsData: {
      icon: "left",
      loading: true,
    },
  });
  vm.$mount(div);
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#m-loading");
  vm.$el.remove();
  vm.$destroy();
}
//  测试未传iconPosition,icon的order为1
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  let vm = new Constructor({
    propsData: {
      icon: "left",
    },
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("1");
  vm.$el.remove();
  vm.$destroy();
}
// 测试iconPosition为right,icon的order为2
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  let vm = new Constructor({
    propsData: {
      icon: "left",
      iconPosition: "right",
    },
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.eq("2");
  vm.$el.remove();
  vm.$destroy();
}
// 测试click
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon: "left",
//     },
//   });
//   vm.$mount();
//   vm.$on("click", function () {
//     console.log(1);
//   });
//   let button = vm.$el;
//   button.click();
//   vm.$el.remove();
//   vm.$destroy();
// }
//使用chai-spy
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "left",
    },
  });
  vm.$mount();
  let spy = chai.spy(function () {});
  vm.$on("click", spy);
  let button = vm.$el;
  button.click();
  //点击后期待调用间谍
  expect(spy).to.have.been.called();
}
