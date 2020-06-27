<template>
	<view>
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">英文艺术字体</block>
		</cu-custom>
		
		<view style="display: block;font-family: monospace;white-space: pre;margin: 10em 0px;text-align: center;" :style="[{'font-size': fontSize+'px;'}]">{{artText}}</view>
		<view class="cu-form-group margin-lr-xl  shadow line-gradual-orange  solids light">
			<i class="cuIcon-search padding-right"></i>
			<input placeholder="例:I Love China" name="input" @input="setLetter"/>
			<button class="cu-btn line-red shadow margin-right-sm" @tap="copyArtText">复制</button>
			<button class="cu-btn bg-green shadow" @tap="genArtText">生成</button>
		</view>
		<view class="padding-sm">
			<view class="flex flex-wrap justify-around">
				<button class="margin-sm  basis-sm shadow cu-btn line-red" style="width: 25%;" @tap="changefontSize(-1)">缩小</button>
				<button class="margin-sm  basis-sm shadow cu-btn line-blue" style="width: 25%;" @tap="changefontSize(1)">放大</button>
			</view>
		</view>
		   <picker-view class="mpvue-picker-view" :indicator-style="indicatorStyle" :value="[0]" @change="changeTextStype">
		        <picker-view-column style="width: 100%;height: 200px;">
		            <view class="item" v-for="(item,index) in styleList" :key="index">样式:{{item}}</view>
		        </picker-view-column>
		    </picker-view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			setTimeout(()=>{
				this.artText = `                                                                                                                                                                          
  iiii       lllllll                                                                                        hhhhhhh               iiii                                      
 i::::i      l:::::l                                                                                        h:::::h              i::::i                                     
  iiii       l:::::l                                                                                        h:::::h               iiii                                      
             l:::::l                                                                                        h:::::h                                                         
iiiiiii       l::::l    ooooooooooo   vvvvvvv           vvvvvvv    eeeeeeeeeeee             cccccccccccccccc h::::h hhhhh       iiiiiii nnnn  nnnnnnnn      aaaaaaaaaaaaa   
i:::::i       l::::l  oo:::::::::::oo  v:::::v         v:::::v   ee::::::::::::ee         cc:::::::::::::::c h::::hh:::::hhh    i:::::i n:::nn::::::::nn    a::::::::::::a  
 i::::i       l::::l o:::::::::::::::o  v:::::v       v:::::v   e::::::eeeee:::::ee      c:::::::::::::::::c h::::::::::::::hh   i::::i n::::::::::::::nn   aaaaaaaaa:::::a 
 i::::i       l::::l o:::::ooooo:::::o   v:::::v     v:::::v   e::::::e     e:::::e     c:::::::cccccc:::::c h:::::::hhh::::::h  i::::i nn:::::::::::::::n           a::::a 
 i::::i       l::::l o::::o     o::::o    v:::::v   v:::::v    e:::::::eeeee::::::e     c::::::c     ccccccc h::::::h   h::::::h i::::i   n:::::nnnn:::::n    aaaaaaa:::::a 
 i::::i       l::::l o::::o     o::::o     v:::::v v:::::v     e:::::::::::::::::e      c:::::c              h:::::h     h:::::h i::::i   n::::n    n::::n  aa::::::::::::a 
 i::::i       l::::l o::::o     o::::o      v:::::v:::::v      e::::::eeeeeeeeeee       c:::::c              h:::::h     h:::::h i::::i   n::::n    n::::n a::::aaaa::::::a 
 i::::i       l::::l o::::o     o::::o       v:::::::::v       e:::::::e                c::::::c     ccccccc h:::::h     h:::::h i::::i   n::::n    n::::na::::a    a:::::a 
i::::::i     l::::::lo:::::ooooo:::::o        v:::::::v        e::::::::e               c:::::::cccccc:::::c h:::::h     h:::::hi::::::i  n::::n    n::::na::::a    a:::::a 
i::::::i     l::::::lo:::::::::::::::o         v:::::v          e::::::::eeeeeeee        c:::::::::::::::::c h:::::h     h:::::hi::::::i  n::::n    n::::na:::::aaaa::::::a 
i::::::i     l::::::l oo:::::::::::oo           v:::v            ee:::::::::::::e         cc:::::::::::::::c h:::::h     h:::::hi::::::i  n::::n    n::::n a::::::::::aa:::a
iiiiiiii     llllllll   ooooooooooo              vvv               eeeeeeeeeeeeee           cccccccccccccccc hhhhhhh     hhhhhhhiiiiiiii  nnnnnn    nnnnnn  aaaaaaaaaa  aaaa
				`
			},50)
		},
		//['cyberlarge', 'cybermedium', 'doom', 'dotmatrix', 'drpepper', 'epic', 'fuzzy', 'isometric1', 'isometric2', 'isometric3', 'isometric4', 'larry3d', 'nancyj', 'ogre', 'rectangles', 'roman', 'rounded', 'rowancap', 'script', 'serifcap', 'shadow', 'slant', 'speed', 'starwars', 'stop', 'thin', 'usaflag', '3-d', '3x5', '5lineoblique', 'alphabet', 'banner3-d', 'banner3', 'banner4', 'bell', 'catwalk', 'colossal', 'acrobatic', 'alligator', 'alligator2', 'block2', 'caligraphy', 'computer', 'digital', 'doh', 'eftirobot', 'graffiti', 'stellar', 'swan', 'tanja', 'thick', 'threepoint', 'tombstone', 'trek', 'twopoint', 'univers', 'weird', 'pebbles', 'puffy', 'tinker-toy', 'straight', 'stampatello', 'smslant', 'smshadow', 'smscript', 'smkeyboard', 'smisome1', 'slscript', 'slide', 'sblood', 'rozzo', 'pyramid', 'maxfour', 'nipples', 'o8', 'peaks', 'pawp', 'barbwire', 'bigchief', 'binary', 'bubble', 'calgphy2', 'cygnet', 'diamond', 'eftifont', 'eftitalic', 'eftiwater', 'fourtops', 'goofy', 'hollywood', 'invita', 'italic', 'jazmine', 'lcd', 'lean', 'letters', 'lockergnome', 'madrid', 'marquee', 'mike', 'mini', 'nancyj-fancy', 'nancyj-underlined', 'pepper', 'poison', 'rot13', 'short', 'small', 'tengwar', 'big', '1row', '3d_diagonal', '4max', 'amc3line', 'cybersmall', 'gothic', 'rev', 'smtengwar', 'term', 'amcrazor', 'amcaaa01', 'amcneko', 'amcrazo2', 'amcslash', 'amcthin', 'amctubes', 'amcun1', 'arrows', 'bear', 'benjamin', 'bigfig', 'bolger', 'braced', 'bright', 'broadway', 'cards', 'chiseled', 'cola', 'crawford', 'cricket', 'danc4', 'dancingfont', 'decimal', 'defleppard', 'dietcola', 'double', 'doubleshorts', 'eftipiti', 'filter', 'flipped', 'fraktur', 'funface', 'funfaces', 'georgi16', 'georgia11', 'ghost', 'ghoulish', 'glenyn', 'graceful', 'greek', 'heartleft', 'heartright', 'henry3d', 'horizontalleft', 'horizontalright', 'icl-1900', 'impossible', 'jacky', 'katakana', 'keyboard', 'knob', 'lildevil', 'lineblocks', 'merlin1', 'merlin2', 'modular', 'morse', 'moscow', 'muzzle', 'nscript', 'nvscript', 'octal', 'oldbanner', 'os2', 'puzzle', 'rammstein', 'red_phoenix', 'runyc', 'santaclara', 'shimrod', 'smallcaps', 'smpoison', 'soft', 'spliff', 'stacey', 'stampate', 'stforek', 'sub-zero', 'swampland', 'sweet', 'ticks', 'ticksslant', 'tiles', 'tsalagi', 'tubular', 'twisted', 'varsity', 'wavy', 'wetletter', 'whimsy', 'wow', 'alligator3', 'alpha', 'amc3liv1', 'ascii_new_roman', 'b1ff', 'dwhistled', 'eftiwall', 'fire_font-s', 'gradient', '1943', 'advenger', 'char1', 'char2', 'char3', 'char4', 'charact1', 'charact2', 'charact3', 'charact4', 'charact5', 'charact6', 'characte', 'chartr', 'chartri', 'xbrite', 'xbriteb', 'xbritebi', 'xbritei', 'xchartr', 'xchartri', 'xcour', 'xcourb', 'xcourbi', 'xcouri', 'xhelv', 'xhelvb', 'xhelvbi', 'xhelvi', 'xsans', 'xsansb', 'xsansbi', 'xsansi', 'xtimes', 'xttyb', 'heroboti', 'high_noo', 'hills', 'home_pak', 'house_of', 'hypa_bal', 'hyper', 'inc_raw', 'italics', 'kgames_i', '4x4_offr', '5x7', '5x8', '6x9', '6x10', '64f1', 'a_zooloo', 'asc', 'assalt_m', 'asslt_m', 'atc', 'atc_gran', 'battlesh', 'baz_bil', 'beer_pub', 'c1', 'c2', 'kik_star', 'krak_out', 'tsn_base', 'twin_cob', 'type_set', 'ucf_fan', 'ugalympi', 'unarmed', 'usa', 'usa_pq', 'utopia', 'utopiab', 'utopiabi', 'utopiai', 'vortron', 'war_of_w', 'xtty', 'love1', 'yie_ar_k', 'yie-ar', 'zig_zag', 'zone7', 'z-pilot', 'aquaplan', 'ascii', 'c_ascii', 'c_consen', 'clb6x10', 'clb8x8', 'clb8x10', 'cli8x8', 'clr4x6', 'clr5x6', 'clr5x8', 'clr5x10', 'clr6x6', 'clr6x8', 'clr6x10', 'clr7x8', 'clr8x8', 'clr8x10', 'coil_cop', 'contouring1', 'contouring2', 'com_sen', 'druid', 'e_fist', 'ebbs_1', 'ebbs_2', 'eca', 'faces_of', 'fair_mea', 'fairligh', 'fantasy', 'fbr_stri', 'fbr_tilt', 'fbr1', 'fbr2', 'fbr12', 'finalass', 'fireing', 'flyn_sh', 'fp1', 'fp2', 'funky_dr', 'future_1', 'future_2', 'future_3', 'future_4', 'future_5', 'future_6', 'future_7', 'future_8', 'gauntlet', 'ghost_bo', 'grand_pr', 'green_be', 'hades', 'heavy_me', 'nfi1', 'flip', 'mirror', 'mirror_flip', 'white_bubble', 'smallcaps2', 'superscript', 'subscript', 'full_width', 'antrophobia', 'currency', 'special', 'dirty', 'dirty2', 'knight', 'knight2', 'thin2', 'tiny', 'fancy1', 'fancy2', 'fancy3', 'fancy4', 'fancy5', 'fancy6', 'fancy7', 'fancy8', 'fancy9', 'fancy10', 'fancy11', 'fancy12', 'fancy13', 'fancy14', 'fancy15', 'fancy16', 'fancy17', 'fancy18', 'fancy19', 'fancy20', 'fancy21', 'fancy22', 'fancy23', 'fancy24', 'fancy25', 'fancy26', 'fancy27', 'fancy28', 'fancy29', 'fancy30', 'symbols', 'fancy31', 'fancy32', 'fancy33', 'fancy34', 'fancy35', 'fancy36', 'fancy37', 'fancy38', 'fancy39', 'fancy40', 'fancy41', 'fancy42', 'fancy43', 'fancy44', 'fancy45', 'fancy46', 'fancy47', 'fancy48', 'fancy49', 'fancy50', 'fancy51', 'fancy52', 'fancy53', 'fancy54', 'fancy55', 'fancy56', 'fancy57', 'fancy58', 'fancy59', 'fancy60', 'fancy61', 'fancy62', 'fancy63', 'fancy64', 'fancy65', 'fancy66', 'fancy67', 'fancy68', 'fancy69', 'fancy70', 'fancy71', 'fancy72', 'fancy73', 'fancy74', 'fancy75', 'fancy76', 'fancy77', 'fancy78', 'fancy79', 'fancy80', 'fancy81', 'fancy82', 'fancy83', 'fancy84', 'contouring3', 'contouring4', 'love2', 'fancy85', 'fancy86', 'white_square', 'black_square', 'paranormal', 'black_bubble', 'smallcaps3', 'fraktur2', 'bold_fraktur', 'bold_script', 'handwriting1', 'handwriting2', 'rusify', 'monospace', 'h4k3r', 'thin3', 'tiny2', 'upside_down', 'chinese_mafia', 'sunday_cuddle', 'native_lands', 'foreign_friends', 'atlantic', 'funky_fresh', 'greek_legends', 'minion', 'hippie', 'sarah', 'fancy87', 'fancy88', 'fancy89', 'fancy90', 'fancy91', 'fancy92', 'dwarf', 'lilia', 'fancy93', 'fancy94', 'fancy95', 'smooth1', 'fancy96', 'fancy97', 'fancy98', 'fancy99', 'smooth2', 'carrier1', 'fancy100', 'carrier2', 'fancy101', 'awesome', 'cjk', 'fancy102', 'fancy103', 'cute1', 'cute2', 'cute3', 'fancy104', 'malayalam', 'fancy105', 'fancy106', 'fancy107', 'cranky', 'lopioo', 'scammer', 'strikethrough', 'drako', 'celtic', 'fasion', 'curly', 'russian', 'messletters', 'coptic1', 'swirly', 'dotted', 'coptic2', 'parenthesized', 'strange', 'fancy108', 'wiggly', 'hazy', 'hyves', 'awcute', 'slammer']
		data() {
			return {
				text:'i Love China',
				artText :'',
				styleList:['block', 'banner', 'standard', 'avatar', 'basic', 'bulbhead', 'chunky', 'coinstak', 'contessa', 'contrast'],
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;width:20px; overflow: scroll;`,
				styleIndex:0,
				fontSize:3
			}
		},
		methods: {
			copyArtText(){
				uni.setClipboardData({
					data:this.artText
				})
			},
			setLetter(e){
				this.text = e.detail.value
			},
			genArtText(){
				uni.request({
				    url: 'https://wngj.hzeyuan.cn/api/v1/artText', //仅为示例，并非真实接口地址。
				    data: {
				        text: this.text,
						styleName:this.styleList[this.styleIndex]
				    },
				    success: (res) => {
				        this.artText = res.data.data;
				    }
				});
			},
			changeTextStype(e){
				
				this.styleIndex = e.detail.value[0]
				console.log(this.styleIndex)
				this.genArtText()
			},
			changefontSize(number){
				this.fontSize +=number
			}
		}
	}
</script>

<style >

.mpvue-picker-view {
           /* width: 100%;
            height: 100px; */
            /* background-color: blue; */
            
            
        }
.mpvue-picker-view .item {
              text-align: center;
              width: 100%;
              height: 20px;
              line-height: 20px;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 20px;
            }
</style>
