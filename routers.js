import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
//import Lala from './components/lala.vue'
import City from './components/City.vue'
import Car from './components/Car.vue'
import Mine from './components/Mine.vue'
const routers = [{
		path: '/Home',
		name: 'Home',
		component: Home
	}, {
		path: '/',
		component: Home
	}, {
		path: '/City',
		component: City
	},
	{
		path: '/Car',
		component: Car
	},
	{
		path: '/Mine',
		component: Mine
	},
]
export default routers