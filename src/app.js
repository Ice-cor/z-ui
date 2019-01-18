import Vue from 'vue'
import Button from './button'

Vue.component('z-button', Button)

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
