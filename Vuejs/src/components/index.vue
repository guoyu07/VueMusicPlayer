<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiperA">
			<swiper-slide v-for="item in imgArray">
				<img class="player" v-bind:src="item.source"/>
			</swiper-slide>
		</swiper> 
		<div class="lists">
			<div class="title">电台</div>
			<div class="listItem">
				<div class="itemContainer">
					<div class="displayImg">
						<img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000"/>
						<span class="icon"></span>
					</div>
					<div class="content">热歌</div>
				</div>
				<div class="itemContainer">
					<div class="displayImg">
						<img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000"/>
						<span class="icon"></span>
					</div>
					<div class="content">热歌</div>
				</div>
			</div>
		</div>
		<div class="lists">
			<div class="title">热门歌单</div>
			<div class="listItem">
				<div class="itemContainer">
					<div class="displayImg">
						<img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000"/>
						<span class="icon"></span>
					</div>
					<div class="content">热歌</div>
				</div>
				<div class="itemContainer">
					<div class="displayImg">
						<img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000"/>
						<span class="icon"></span>
					</div>
					<div class="content">热歌</div>
				</div>

			</div>
			<div class="listItem">
				<div class="itemContainer">
					<div class="displayImg">
						<img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000"/>
						<span class="icon"></span>
					</div>
					<div class="content">热歌</div>
				</div>
				<div class="itemContainer">
					<div class="displayImg">
						<img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000"/>
						<span class="icon"></span>
					</div>
					<div class="content">热歌</div>
				</div>
				
			</div>
			<div class="listItem">
				<div class="itemContainer">
					<div class="displayImg">
						<img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000"/>
						<span class="icon"></span>
					</div>
					<div class="content">热歌</div>
				</div>
				<div class="itemContainer">
					<div class="displayImg">
						<img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000"/>
						<span class="icon"></span>
					</div>
					<div class="content">热歌</div>
				</div>
				
			</div>
		</div>

		
		
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from "vue-awesome-swiper"
	export default{
		components: {
            	swiper,
            	swiperSlide
        },
		data(){
			
			return {
				swiperOption: {          
				// 所有配置均为可选（同Swiper配置）           
					//direction: 'vertical',
    				loop: true,
    				autoplay:2000,
				},
				imgArray:[{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000002n6Zxs2rVEHO.jpg?max_age=2592000"
				},{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000002mHeKg3VEVvq.jpg?max_age=2592000"
				},{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000003sAJCh1ynM0x.jpg?max_age=2592000"
				},{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000000B8wHB1Si6Iz.jpg?max_age=2592000"
				},{
					source:"https://y.gtimg.cn/music/photo_new/T003R720x288M000002ZjiJg0jKc1w.jpg?max_age=2592000"
				}]
			}
		}
	}
</script>
<style >
	.wrapper{
		margin-top:2px;
	}
	.player{
		width:100%;
		height:auto;
	}
	.lists{
		display:flex;
		flex-direction:column;
		margin-top:-2px;
		background-color:#ddd;
	}
	.title{
		font-size: 16px;
	    color: #000;
	    padding:10px;
	    font-weight: normal;
	}
	.listItem{
		display:flex;
		flex-direction:row;
		flex:1;
		padding-bottom:8px;
	}
	.itemContainer{
		position:relative;
		padding:0 10px;
	}
	.icon{
		position:absolute;
		bottom:55px;
		right:15px;
		display:inline-block;
		width:24px;
		height:24px;
		background:url('../../static/images/list_sprite.png') no-repeat;
		background-size: 24px 60px;
	}
	.displayImg{
		width:100%;
	}
	.displayImg>img{
		width:100%;
		height:auto;
	}
	.content{
		background-color:#fff;
		padding:5px;
		height:36px;
	}
</style>
