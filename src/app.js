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
import spies from 'chai-spies'
chai.use(spies)
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
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      name: 'set',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')

  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      name: 'set'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      name: 'set',
      position: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('3')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      name: 'set',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})

  vm.$on('click', spy)
  // 希望这个函数被执行
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}