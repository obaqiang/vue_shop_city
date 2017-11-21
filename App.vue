<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<!--<HelloWorld/>-->
		<!--<lala/>-->
		<!--<router-link to="/lala">Go to Foo</router-link>-->
		<!--<router-link to="/home">Go to Foo</router-link>-->
		<!--<a href="http://www.baidu.com" target="_blank">test</a>-->
		<router-view></router-view>

		<div class="footer_area">
			<nav v-bind:class="active" v-on:click.prevent>
				<a href="#" class="footer_icon" v-on:click="makeActive('home')">
					<!--<img src="./assets/42px_42px_shouye1.png" alt="" />-->
					<img :src="home_icon"> 首页
				</a>
				<a href="#" class="footer_icon" v-on:click="makeActive('city')">
					<img :src="city_icon"> 商城
				</a>
				<a href="#" class="footer_icon" v-on:click="makeActive('car')">
					<img :src="car_icon"> 购物车
				</a>
				<a href="#" class="footer_icon" v-on:click="makeActive('mine')">
					<img :src="mine_icon"> 我的
				</a>
			</nav>
			<!--<p>你现在选择的是<b>{{active}}</b></p>-->
		</div>

	</div>

</template>

<script>
	import HelloWorld from './components/HelloWorld'
	import lala from './components/Header'
	import Home from './components/home'
	export default {
		name: 'app',
		components: {
			HelloWorld,
			lala,
			Home
		},
		data() {
			return {

				active: 'home',
				home_icon: require('./assets/42px_42px_shouye2.png'),
				city_icon: require('./assets/42px_42px_shangcheng2.png'),
				car_icon: require('./assets/42px_42px_gouwuche2.png'),
				mine_icon: require('./assets/42px_42px_wode2.png')
			}
		},
		methods: {
			makeActive: function(str) {
				this.active = str;
				this.initNav()
				if(this.active == 'home') {

					this.home_icon = require('./assets/42px_42px_shouye1.png')
					this.$router.push('/Home');
				} else if(this.active == 'city') {
					this.city_icon = require('./assets/42px_42px_shangcheng1.png')
					this.$router.push('/City');
				} else if(this.active == 'car') {
					this.car_icon = require('./assets/42px_42px_gouwuche1.png')
					this.$router.push('/Car');
				} else if(this.active == 'mine') {
					this.mine_icon = require('./assets/42px_42px_wode1.png')
					this.$router.push('/Mine');
				}
			},
			initNav: function() {

				this.home_icon = require('./assets/42px_42px_shouye2.png'),
					this.city_icon = require('./assets/42px_42px_shangcheng2.png'),
					this.car_icon = require('./assets/42px_42px_gouwuche2.png'),
					this.mine_icon = require('./assets/42px_42px_wode2.png')
			}
		}

	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/*margin-top: 60px;*/
	}
	body{
		margin: 0;
	}
	.footer_area {
		width: 100%;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #dddddd;
		background: #fff;
	}
	
	.footer_icon {
		text-align: center;
		display: inline-block;
		width: 25%;
		float: left;
		color: #999999;
		text-decoration: none;
		font-size: 20px;
	}
	
	.footer_icon img {
		display: block;
		margin: auto;
	}
</style>