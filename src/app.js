import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)

new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      loading1: true,
    }
  },
  methods: {
    enterLoading(){
      this.loading = true
      let timeID = setTimeout(_=>{
        this.loading = false
        clearTimeout(timeID)
      },2000)
    }
  },
})
