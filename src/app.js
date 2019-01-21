import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      loading1: true
    }
  },
  methods: {
    enterLoading() {
      this.loading = true
      let timeID = setTimeout(_ => {
        this.loading = false
        clearTimeout(timeID)
      }, 2000)
    }
  }
})

import chai from 'chai'
//单元测试
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      name: 'set'
    }
  })
  vm.$mount()

  let useElement = vm.$el.querySelector('use')

  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-set')
  vm.$el.remove()
  vm.$destroy()
  // vm.beforeDestroy = function(){
  //   console.log(222)
  // }
}

// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       name: 'set'
//     }
//   })
//   vm.$mount('#test')

//   let useElement = vm.$el.querySelector('use')

//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#icon-set')
//   vm.$el.remove()
//   vm.$destroy()
// }