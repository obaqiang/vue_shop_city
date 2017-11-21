import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	mode: 'history',
	routes: routers
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})