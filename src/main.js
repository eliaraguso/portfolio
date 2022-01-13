import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import options from 'magicmouse.js'
import magicMouse from 'magicmouse.js'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

options = {
	"cursorOuter": "circle-basic",
	"hoverEffect": "circle-move",
	"hoverItemMove": false,
	"defaultCursor": false,
	"outerWidth": 50,
	"outerHeight": 50
      };
    magicMouse(options);