import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import posts from './store/Posts'

Vue.config.productionTip = false

Vue.use( Vuex )

const store = new Vuex.Store( {
  modules: {
    posts
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
