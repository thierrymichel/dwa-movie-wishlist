import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

import VueSvgSprite from 'vue-svg-sprite'
Vue.use(VueSvgSprite, {
  url: require('@/assets/sprite.svg'),
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
