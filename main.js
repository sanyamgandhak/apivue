import Vue from 'vue'
import App from './App.vue'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// App.use(VueAxios, axios)

// Vue.axios.get('https://reqres.in/api/users?page=2').then((response) => {
//   console.log(response.data)
// })

// this.axios.get(api).then((response) => {
//   console.log(response.data)
// })

// this.$http.get(api).then((response) => {
//   console.log(response.data)
// })

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
