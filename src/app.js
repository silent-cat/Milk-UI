import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'
import Input from './Input'
import Toast from './Toast'
import plugin from './plugin.js'

Vue.component('m-button', Button)
Vue.component('m-icon', Icon)
Vue.component('m-button-group', ButtonGroup)
Vue.component('m-input', Input)
Vue.component('m-toast', Toast)
Vue.use(plugin)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    mes: ''
  },
  created() {
    this.showToast()
  },
  methods: {
    test() {
      console.log(111)
    },
    showToast(position) {
      this.$toast(`${parseInt(Math.random(10) * 100)}`, {
        position,
        closeButton: {
          text: 'center',
          callback(toast) {
            toast.log()
            console.log('用户知道了')
          }
        },
        autoClose: 3,
        enableHtml: true
      })
    },

    showToastTop() {
      this.showToast('top')
    },
    showToastBottom() {
      this.showToast('bottom')
    },
    showToastCenter() {
      this.showToast('center')
    }
  }
})
