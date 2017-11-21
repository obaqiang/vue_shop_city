<template>

	<div>
		<img style="width: 100%;" src="http://testimg.bdvip.net/smallprogram/750px_280px_banner.png" alt="" />
		<div class="nav_title">
			<span>热销商品</span>
			<span>查看更多</span>
		</div>
		<div class="goods_area">
			<div class="goods_list" v-for="item in GoodsList">
				<img :src="item.thumb" alt="" />
				<div class="goods_list_right">
					<span class="sp_1">{{item.goods_name}}}</span>
					<span class="sp_2">快递发货</span>
					<span class="sp_3">￥{{item.goods_price}}</span>
					<img class="sp_4" src="http://testimg.bdvip.net/smallprogram/46px_42px_gouwuche.png" alt="" />
				</div>
			</div>
			<!--<div class="goods_list">
				<img src="http://testimg.bdvip.net//2017/9/thumb_c21df7bf-2fa5-4e32-9aa9-62288fa2c29c.png" alt="" />
				<div class="goods_list_right">
					<span class="sp_1">水果软糖</span>
					<span class="sp_2">快递发货</span>
					<span class="sp_3">￥13.00</span>
					<img class="sp_4" src="http://testimg.bdvip.net/smallprogram/46px_42px_gouwuche.png" alt="" />
				</div>
			</div>-->
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
//	import VueResource from 'vue-resource'
	import config from '../config.js'
//	Vue.use(VueResource)
	export default {
		name: 'Home',
		data() {
			return {
				msg: '这是Home页面',
				GetHotGoods_url: config.test_url(),
				item: {
					store_id: 713
				},
				GoodsList:{}
			}
		},
		methods: {
			GetHotGoods: function() {
				var that = this;
//				console.log(this.GetHotGoods_url)
				Vue.http.post(this.GetHotGoods_url + '/api/SmallProgram/GetHotGoods', this.item).then(function(data) {
					if(data.ok) {

						that.GoodsList=data.body.Data.GoodsList
						console.log(that.GoodsList)
					}
				})
			}

		},
		mounted: function() {
			this.GetHotGoods()
		}

	}
</script>

<style>
	.nav_title {
		border-bottom: 1px solid #ddd;
		margin-top: 20px;
		font-size: 40px;
		text-align: left;
		line-height: 80px;
	}
	
	.nav_title span:nth-child(1) {
		border-left: 3px solid #cb2920;
		padding-left: 20px;
	}
	
	.nav_title span:nth-child(2) {
		float: right;
		padding-right: 20px;
		color: #9c9c9c;
		font-size: 35px;
	}
	
	.goods_list {
		text-align: left;
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid #ddd;
		padding-bottom: 30px;
	}
	
	.goods_list img:nth-child(1) {
		width: 200px;
		height: 200px;
		float: left;
		border: 1px solid #ddd;
		margin-top: 50px;
		margin-left: 50px;
	}
	
	.goods_list_right {
		float: left;
	}
	
	.sp_1 {
		font-size: 35px;
		display: block;
		margin-top: 50px;
		margin-left: 50px;
	}
	
	.sp_2 {
		font-size: 30px;
		display: block;
		margin-top: 20px;
		margin-left: 50px;
		color: #2e74bc;
		border: 1px solid #2e74bc;
		border-radius: 5px;
		text-align: center;
		display: inline-block;
		padding: 2px 4px;
	}
	
	.sp_3 {
		font-size: 35px;
		display: block;
		color: #cb2920;
		margin-top: 40px;
		margin-left: 50px;
	}
	
	.sp_4 {
		width: 60px;
		position: absolute;
		top: 180px;
		right: 50px;
	}
</style>