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
    showToast() {
      this.$toast('<strong>加粗</strong>', {
        position:'top',
        closeButton: {
          text: 'close',
          callback(toast) {
            toast.log()
            console.log('用户知道了')
          }
        },
        autoClose:false,
        enableHtml:true
      })
    }
  }
})
