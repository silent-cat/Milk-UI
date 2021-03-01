import Toast from './Toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(mes, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = [mes]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
