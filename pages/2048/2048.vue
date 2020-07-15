<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<block slot="content">2048</block>
		</cu-custom>
		<view class="action_cavas" @touchstart="tapStart" @touchmove="tapMove" @touchend="tapEnd">
			<view class="score">
				<view class="title">2048</view>
				<view>
					<view class="scoredetail">
						<view class="scoredesc">成绩</view>
						<view class="scorenumber">{{score}}</view>
					</view>
					<view class="scoredetail">
						<view class="scoredesc">历史最高</view>
						<view class="scorenumber">{{maxscore}}</view>
					</view>
				</view>
			</view>
			<view class="desc">
				<text class="game-intro">快来玩2048吧！</text>
				<view>
					<view class="newGame" style="margin-right: 10px;">排行榜</view>
					<view class="newGame" @tap="restart">新的游戏</view>
				</view>
			</view>
			<view class="bc_cavas modal">
				<view class="bc" v-for="(row,i) in numbers">
					<view v-for="(item,j) in row" :class="['','bc_ bc_'+item,animation[i][j]]"> {{item}} </view>
				</view>
				<view v-show="modalHidden===false" class="game-over flex flex-direction justify-center">
					<text class="text-center">游戏结束!</text>
					<view class="flex align-center justify-center">
						<view class="retryButton" @tap="restart"> 再来一次</view>
						<view class="AI bg-gradual-blue">AI作弊</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				score: 0,
				maxscore: 0,
				startx: 0,
				starty: 0,
				endx: 0,
				endy: 0,
				direction: '',
				numbers: [
					[0, 0, 2, 2],
					[0, 2, 4, 0],
					[0, 4, 0, 0],
					[0, 0, 0, 0]
				],
				animation: [
					['', '', '', ''],
					['', '', '', ''],
					['', '', '', ''],
					['', '', '', '']
				],
				modalHidden: true,
				move_animation: ''
			}
		},
		onLoad() {
			this.maxscore = uni.getStorageSync('maxscore')
		},

		methods: {
			onPullDownRefresh: function() {
				this.mergebottom();
				wx.stopPullDownRefresh();
			},
			restart() {
				this.setData({
					modalHidden: true,
					numbers: [
						[0, 0, 2, 2],
						[0, 2, 4, 0],
						[0, 4, 0, 0],
						[0, 0, 0, 0]
					],
					score:0
				})
			},
			storeScore: function() {
				console.log(this.maxscore, this.score)
				if (this.maxscore < this.score) {
					this.setData({
						maxscore: this.score
					})
					uni.setStorageSync('maxscore', this.maxscore)
				}
			},
			tapStart: function(event) {
				this.setData({
					startx: event.touches[0].pageX,
					starty: event.touches[0].pageY
				})
			},
			tapMove: function(event) {
				this.setData({
					endx: event.touches[0].pageX,
					endy: event.touches[0].pageY
				})
			},
			tapEnd: function(event) {
				var heng = (this.endx) ? (this.endx - this.startx) : 0;
				var shu = (this.endy) ? (this.endy - this.starty) : 0;
				// console.log(heng, shu);
				if (Math.abs(heng) > 5 || Math.abs(shu) > 5) {
					var direction = (Math.abs(heng) > Math.abs(shu)) ? this.computeDir(1, heng) : this.computeDir(0, shu);
					this.setData({
						startx: 0,
						starty: 0,
						endx: 0,
						endy: 0
					})
					this.mergeAll(direction) && this.randInsert();
				}
			},
			computeDir: function(heng, num) {
				if (heng) return (num > 0) ? 'right' : 'left';
				return (num > 0) ? 'bottom' : 'top';
			},
			mergeAll: function(dir) {
				this.checkGame();
				switch (dir) {
					case 'left':
						return this.mergeleft();
						break;
					case 'right':
						return this.mergeright();
						break;
					case 'top':
						console.log("上画")
						return this.mergetop();
						break;
					case 'bottom':
						return this.mergebottom();
						break;
					default:
				}
			},
			mergeleft: function() {
				var change = false;
				var arr = this.numbers;
				for (var i = 0; i < 4; i++) {
					//merge first
					for (var j = 0; j < 3; j++) {
						if (arr[i][j] == 0) continue;
						for (var k = 1; k < 4 - j; k++) {
							if (arr[i][j] != 0 && arr[i][j + k] != 0) {
								if (arr[i][j] != arr[i][j + k]) break; //不相同则直接跳过
								arr[i][j] = arr[i][j] * 2;
								arr[i][j + k] = 0;
								change = true;
								this.setData({
									score: this.score + arr[i][j] / 2
								})
								
								break;
							}
						}
					}
					//movemove
					for (var j = 0; j < 3; j++) {
						if (arr[i][j] == 0) {
							for (var k = 1; k < 4 - j; k++) {
								if (arr[i][j + k] != 0) {
									arr[i][j] = arr[i][j + k];
									arr[i][j + k] = 0;
									change = true;
									this.animation[i][j] = 'animation-slide-right'
									break;
								}
							}
						}
					}
				}
				setTimeout(() => {
					this.animation = [
						['', '', '', ''],
						['', '', '', ''],
						['', '', '', ''],
						['', '', '', '']
					]
				}, 200)
				this.setData({
					numbers: arr
				})
				this.storeScore()
				return change
			},
			//右滑
			mergeright: function() {
				var change = false
				var arr = this.numbers;
				for (var i = 0; i < 4; i++) {
					//merge first
					for (var j = 3; j > 0; j--) {
						if (arr[i][j] == 0) continue;
						for (var k = 1; k <= j; k++) {
							if (arr[i][j] != 0 && arr[i][j - k] != 0) {
								if (arr[i][j] != arr[i][j - k]) break;
								arr[i][j] = arr[i][j] * 2;
								arr[i][j - k] = 0;
								change = true;
								this.setData({
									score: this.score + arr[i][j] / 2
								})
								// if (this.score < arr[i][j]) {
								// 	this.setData({
								// 		score: arr[i][j]
								// 	})
								// }
								break;
							}
						}
					}
					//movemove
					for (var j = 3; j > 0; j--) {
						if (arr[i][j] == 0) {
							for (var k = 1; k <= j; k++) {
								if (arr[i][j - k] != 0) {
									arr[i][j] = arr[i][j - k];
									arr[i][j - k] = 0;
									change = true;
									this.animation[i][j] = 'animation-slide-left'
									break;
								}
							}
						}
					}
				}
				setTimeout(() => {
					this.animation = [
						['', '', '', ''],
						['', '', '', ''],
						['', '', '', ''],
						['', '', '', '']
					]
				}, 200)
				this.setData({
					numbers: arr
				})
				this.storeScore()
				return change
			},
			//下划
			mergebottom: function() {
				var change = false
				var arr = this.numbers;

				for (var i = 0; i < 4; i++) {
					//merge first
					for (var j = 3; j > 0; j--) {
						if (arr[j][i] == 0) continue;
						for (var k = 1; k <= j; k++) {
							if (arr[j][i] != 0 && arr[j - k][i] != 0) {
								if (arr[j][i] != arr[j - k][i]) break;
								arr[j][i] = arr[j][i] * 2;
								arr[j - k][i] = 0;
								change = true
								this.setData({
									score: this.score + arr[i][j] / 2
								})
								// if (this.score < arr[j][i]) {
								// 	this.setData({
								// 		score: arr[j][i]
								// 	})
								// }
								break;
							}
						}
					}
					//movemove
					for (var j = 3; j > 0; j--) {
						if (arr[j][i] == 0) {
							for (var k = 1; k <= j; k++) {
								if (arr[j - k][i] != 0) {
									arr[j][i] = arr[j - k][i];
									arr[j - k][i] = 0;
									this.animation[j][i] = 'animation-slide-top'
									change = true
									break;
								}
							}
						}
					}
				}
				setTimeout(() => {
					this.animation = [
						['', '', '', ''],
						['', '', '', ''],
						['', '', '', ''],
						['', '', '', '']
					]
				}, 200)
				this.setData({
					numbers: arr
				})
				this.storeScore()
				return change
			},
			//上滑
			mergetop: function() {
				var change = false
				var arr = this.numbers;

				for (var i = 0; i < 4; i++) {
					//merge first
					for (var j = 0; j < 3; j++) {
						if (arr[j][i] == 0) continue;
						for (var k = 1; k < 4 - j; k++) {
							if (arr[j][i] != 0 && arr[j + k][i] != 0) {
								if (arr[j][i] != arr[j + k][i]) break;
								arr[j][i] = arr[j][i] * 2;
								arr[j + k][i] = 0;
								change = true
								this.setData({
									score: this.score + arr[i][j] / 2
								})
								// if (this.score < arr[j][i]) {
								// 	this.setData({
								// 		score: arr[j][i]
								// 	})
								// }
								break;
							}
						}
					}
					//movemove
					for (var j = 0; j < 3; j++) {
						if (arr[j][i] == 0) {
							for (var k = 1; k < 4 - j; k++) {
								if (arr[j + k][i] != 0) {
									arr[j][i] = arr[j + k][i];
									arr[j + k][i] = 0;
									this.animation[j][i] = 'animation-slide-bottom'
									change = true
									break;
								}
							}
						}
					}
				}
				setTimeout(() => {
					this.animation = [
						['', '', '', ''],
						['', '', '', ''],
						['', '', '', ''],
						['', '', '', '']
					]
				}, 200)
				this.setData({
					numbers: arr
				})
				this.storeScore()
				return change
			},
			//随机插入
			randInsert: function() {
				var arr = this.numbers
				//随机2或4
				var num = Math.random() < 0.8 ? 2 : 4
				//计算随机位置
				var zeros = [];
				for (var i = 0; i < 4; i++) {
					for (var j = 0; j < 4; j++) {
						if (arr[i][j] == 0) {
							zeros.push([i, j]);
						}
					}
				}
				var position = zeros[Math.floor(Math.random() * zeros.length)];
				arr[position[0]][position[1]] = num
				this.setData({
					numbers: arr
				})
				//this.checkGame()
			},
			checkGame: function() {
				var arr = this.numbers
				for (var i = 0; i < 4; i++) {
					for (var j = 0; j < 4; j++) {
						if (arr[i][j] == 0) return;
					}
				}
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						if (arr[i][j] == arr[i + 1][j] || arr[i][j] == arr[i][j + 1]) return;
					}
				}

				for (var j = 0; j < 3; j++) {
					if (arr[3][j] == arr[3][j + 1]) return;
					if (arr[j][3] == arr[j + 1][3]) return;
				}
				this.setData({
					modalHidden: false,
				})
			},
		}
	}
</script>

<style scoped>
	.animation-slide-top {
		animation-name: slide-top;
		animation-duration: 0.2s;
		animation-fill-mode: forwards;
	}

	.animation-slide-left {
		animation-name: slide-left;
		animation-duration: 0.2s;
		animation-fill-mode: forwards;
	}

	.animation-slide-right {
		animation-name: slide-right;
		animation-duration: 0.2s;
		animation-fill-mode: forwards;
	}

	.animation-slide-bottom {
		animation-name: slide-bottom;
		animation-duration: 0.2s;
		animation-fill-mode: forwards;
	}

	@keyframes scale-up {
		0% {
			opacity: 0;
			-webkit-transform: scale(.2);
			transform: scale(.2)
		}

		100% {
			opacity: 1;
			-webkit-transform: scale(1);
			transform: scale(1)
		}
	}

	@keyframes slide-bottom {
		0% {

			transform: translateY(100%)
		}

		100% {

			transform: translateY(0)
		}
	}

	@keyframes slide-left {
		0% {

			transform: translateX(-100%)
		}

		100% {

			transform: translateX(0)
		}
	}

	@keyframes slide-right {
		0% {

			transform: translateX(100%)
		}

		100% {

			transform: translateX(0)
		}
	}

	@keyframes slide-top {
		0% {

			transform: translateY(-100%)
		}

		100% {

			transform: translateY(0)
		}
	}

	.modal {
		margin-top: 40px;
		position: relative;
		padding: 15px;
		cursor: default;
		touch-action: none;
		background: #bbada0;
		border-radius: 6px;
		/* opacity: 0.73; */
	}

	.game-over {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(238, 228, 218, 0.73);
		z-index: 100;
		/* padding-top: 40px; */
		font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;

	}

	.game-over text {
		color: #776e65;
		font-size: 60px;
		font-weight: bold;
		text-align: center;
	}

	.retryButton {
		background: #8f7a66;
		border-radius: 3px;
		padding: 0 20px;
		text-decoration: none;
		color: #f9f6f2;
		height: 40px;
		line-height: 42px;
		cursor: pointer;
		margin-left: 9px;
	}

	.AI {
		border-radius: 3px;
		padding: 0 20px;
		text-decoration: none;
		color: #f9f6f2;
		height: 40px;
		line-height: 42px;
		cursor: pointer;
		margin-left: 9px;
	}

	.score {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 10px;
	}

	.title {
		text-align: center;
		font-size: 27px;
		font-weight: bold;
		color: #776e65;
		border-radius: 10rpx;
		margin-left: 20px;
		position: relative;
		left: 10%;

	}

	.game-intro {
		
		color: #776e65;
		font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
		font-size: 18px;
	}

	.scoredetail {
		display: inline-block;
		background: #bbada0;
		padding: 5px 20px;
		font-size: 22px;
		height: 50px;
		font-weight: bold;
		border-radius: 3px;
		color: white;
		margin-top: 8px;
		text-align: center;
		margin-right: 10px;

	}

	.desc {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 25px;
		margin-right: 20px;
		margin-top: 8px;
	}

	.newGame {
		display: inline-block;
		font-weight: bold;
		border-radius: 3px;
		color: white;
		background: #bbada0;
		padding: 5px 20px;
	}

	.scoredesc {
		font-size: 13px;
		line-height: 13px;
		text-align: center;
		color: #eee4da;

	}

	.scorenumber {
		line-height: 70rpx;
	}

	.bc_ {
		height: 152rpx;
		width: 152rpx;
		margin: 6rpx 6rpx;
		line-height: 152rpx;
		text-align: center;
		font-size: 60rpx;
		color: #fff7eb;
	}

	.bc_0 {
		color: #ccc0b2;
		background: rgba(238, 228, 218, 0.35);
		font-weight: bold;
	}

	.bc_2 {
		color: #7c736a;
		background: #eee4da;
		box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);
		font-weight: bold;
	}

	.bc_4 {
		color: #7c736a;
		background: #ece0c8;
		box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);
		font-weight: bold;
	}

	.bc_8 {
		color: #f9f6f2;
		background: #f2b179;
		font-weight: bold;
	}

	.bc_16 {
		color: #f9f6f2;
		background: #f59563;
		font-weight: bold;
	}

	.bc_32 {
		color: #f9f6f2;
		background: #f57c5f;
		font-weight: bold;
	}

	.bc_64 {
		color: #fff7eb;
		background: #f65d3b;
		font-weight: bold;
	}

	.bc_128 {
		color: #f9f6f2;
		background: #edce71;
		font-weight: bold;
	}

	.bc_256 {
		color: #f9f6f2;
		background: #edcc61;
		font-weight: bold;
	}

	.bc_512 {
		color: #f9f6f2;
		background: #ecc850;
		font-weight: bold;
	}

	.bc_1024 {
		color: #f9f6f2;
		background: #edc53f;
		font-weight: bold;
	}

	.bc_2048 {
		color: #f9f6f2;
		background: #eec22e;
		font-weight: bold;
	}

	.bc {
		display: flex;
	}

	.bc_cavas {
		display: flex;
		height: 670rpx;
		background-color: #bbada0;
		;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		margin: 10rpx 40rpx;
		border-radius: 10rpx;
	}

	.action_cavas {
		width: 100%;
		height: 100%;
	}
</style>
