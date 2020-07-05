<template>
	<view style="height: 100%;">
		<cu-custom :isBack="true" bgColor="bg-gradual-blue">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">图片转字符画</block>
		</cu-custom>
		<!--  :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" -->
		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class="content">
					<text class="cuIcon-btn text-green"></text>
					<text class="text-grey">点击按钮，选择图片</text>
				</view>
				<view class="action">
					<button class="cu-btn round bg-green shadow" @tap="uploadImg">
						<text class="cuIcon-upload"></text> 生成</button>
				</view>
			</view>
		</view>
		<view class="img">
			<view class="grid col-1  grid-square flex-sub" style="width: 100%;height: 100%;">
				<view class="bg-img" v-for="(item, index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red bg-img" @tap.stop="DelImg" :data-index="index"><text class="cuIcon-close"></text></view>
				</view>
				<!-- <view class="bg-img"> 
					<image src="../../static/logo.jpg" mode="aspectFill"></image>
				</view> -->
				<view class="solids" @tap="ChooseImage" v-if="imgList.length < 1"><text class="cuIcon-cameraadd"></text></view>
			</view>
		</view>
		
		<scroll-view scroll-x  scroll-y :style="[{'height':windowHeight/2-20+'px;','font-size': fontSize+'px;','width':windowWidth-40+'px'}]" style="display: block;font-family: monospace;white-space: pre;margin: 20px 20px;text-align: center;">{{artText}}</scroll-view>
		
	</view>
</template>

<script>
export default {
	onLoad() {
		setTimeout(()=>{this.artText=`EXXXXXXXXXXXXXXXXXCCCCCCC[[[C[[[[[[[[[[[[[[[[[[[((((((/////////////////?///????/?/////(//(/(//////////(/(//////((([XXEEEEEEEEEEEOEEEEEEOOOOOOOOEEEEEEEEXEEEEXXXXXXCC[[(([(((((((((/(((((((((((((([[[[[[[[[[[CCCC[CCCCC[[CCCCCCCC[CC[[[[C[[[[[[[[[[[[[[[[[[[[[[[[CCCC[CCC
XXXXXXXXXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[[[[[[[[[[(((((((///////////??/////??/////?///(/////((////////////(((////(CXEEEEEEEOOOOOOOOOOEEEEEOOOOOOOOOOOOOOOOOOOEEEEEEEEEEEEXXCC(((((((((((/((((((((((([(([[[[([[[[[[[[[[[[[[[[[[[CCC[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[C[CCC
XXXXXXXXXXXXXXXXXCCCCCCC[[[[[[[[[[[[[[[[[[[[[[[(((((////////////??/////????????/////////////////////////(/((CXEEEEEEEEOOOO$$$$O$$$OOOOOOOOOOOO$$$OO$$$$$OOOOOOEEEEEEEEEEEEEXC[/((((//((/(/((/((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[([[[[[[[[[[[[CC
XXXXXXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[[[[[[(([(([(((/////////////????//??????????//////////////////////////(CXEEEEEEEEOO$$$$$$$$$$$OOOOOOOOOO(OOO$$OOOOOOOO$$$$$$OOOOOOOEEEEEEEEX[[[(///////(//((((((((((((((([[[[[[[[[[[[[[[[[[[[[[(([[[((((((((((((((((((((([((([[[[[[[[[
XXXXXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[([([[[[((((((((((///////???//?????????????????????/////////////////([XEEEEOOOOOO$$$$$$$#$$#$$$$$$$$OO$OOO$$$$OOOOOO$OOOOOOOO$$$OOOOOOOEEEEEEEEXC[(/////////(((((/(((((((((([([[([((((([(((((([[((((((((((((((((((((/(///(((((((([[([[[
XXXXXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[((((((((((((/(//(///////????????????????????????????????????/??//[XEEEEOOOOO$$OCX$$$$$$$###$###$$$$$$$$O$$$$$OOO$$$$$$$OO$OO$$OOOOOOOOOOOEEEEEEXXCC(///////(/////(((((((((((([((((((((((((((((((((((((((/((//////////////////(((((((((
XXXXXXXXXXXCCCCCCCCCCC[[[[[[[[[([[(((((((((((////////////??????????===??=======????????????????/([XEEEEOOOO$$$$$OCX$$$#$#########$##$$$$$$$$$$OOO$$$$#$$O$$$OOOOOOOOOOOOOOOOOOEEEEEEXCC[////////////(////((//(((((((((((((////((((//////////////////////////////(((//(((
XXXXXXXXXXCCCCCCCC[[[[[[[[[[[[([[[(((((((((//////?///?/?????????=================????????????/([XEEEEOOO$$$OO$$$$##################$$$$O$$$OOOOO##$$$O$$#$$$OOOO$OOO$$OOOOOO$OOOEEEEEXXCC(/??///////////((////((((/??////////////////////?/?/??????????????????///////(/
XXXXXXXCCCCCCCCCCC[[[[[[[([[(([[(='^(((/////////?????????????====================?======????/[XEOOOOO$$$$$$$$######################$EE$$OOO$$$$$#$$$$OO$$$$$$$$$O$$$$$$$$OOO$$OOOEEEEEEXXC[/????????////((//((((((?__?////////////??//??????????????????????????///?////
XXXXCCCCCCCCCCCCC[[[[[[[[[[((((((((((((////////?????????==============================^~^?/(XOOOOOO$$$$$$####WWWWWWWWW###$W#####$##$$$$$$OO$$$O$###$$$OO$$$$$$$$$$$$$$$$$$$$$O$$$$OOOOOEEEXC(/?????///////////(////////////??????????????????????=====?=??====??///??///
CXXCCCCCCCCCCCC[[[[[[[[[[(([(((((((/((/////////?????????=====^^==^=^==================^.^/COOOOOO$$#####$WW###WWWW##WW$$$############$$O$$#$$$$###$$$$$O$$OOO$$$$$$$O$$$$$$$$$$$O#$OOOEEOEEEEC/????????//////////////?//???????????????????=??=================???????/?
CCCCCCCCCCCCCC[[[[[[[[([((((((((((////////?/???????=?==========^^^^^=====^^==^^====^^==//EOOOOO$#######WWWWW#W###WWWW#$##$#############$##$$$$##$$$$$$OOOOOO$$$$$$$OO$$######$$$O$##$EEEEEOOOEE[(//????////??//???????????????????=====?=============^^^========???=????
CCCCCCCCCC[[[[[[[[((((((((((((((((/////?/??????===?=======^^^^^^^^^^===^^~^==^^^^^^^^?/[OOO$$$###WWWWW@WW@@@WWW#WWWW#$#@@WWW#####W#$########$$##$O$$$OOOOOOOO$$$O$$$$$#$#W###$$#$O$##$OEEEEEOOOOEXXCC[[[([(((//???????????====================^^^^^^^^^^^^^^^^^======??=
CCCCCCC[[[[[[[[[[((((((((((((((((//////???????===========^^^^^^^^^^^^^^^~^^^^^^^^^^^?/COO$$$$WW#WWW@@@@@@@@@@WW#WW##$#W@WWWW#W##WWW####W#####$WW$$$$$OOOOOO$OOO$$$$$$##W##W#W####$O####OEEEOEOOOOOEEEC[(////(((/????=??===?================^^^^^^^^^^^~^~^~~~~^^===^==?=
CC[[C[[[[[[[[[([(((((((((////////////?????===?===========^^^^~^~~^^^^^~~^^^^^^^^~^^/?XOO$#$WWWWW@@@@@@@@@@@WWW@@W$#$#@W@WWWWWWWWWWW###WW###W##W#$$$$$OOOOOOOOOO$$$$$$######WW#WW##$$####OOEEOOOOOOOOOOEXC[/?==?((/===========^==^==^^^^^^^^^^^~~~~~~~~~~_~~~~~~^^==^====
[[[[[[[[[[((((((((//?//(///////////?????==============^^^^^^^^~~^~~^^^^^^^^^^^^^^^/=XOO##$#WWWWW@@@@@@@@@WWW@@W#$$##@@@@@@WWWW@W#WWW#W@W####$WW$$$$$$$$OOOO$$$$$$$$#$$###WW#WWWWW####WW##OOEOOOOOO$OOOOOEEXC(??/[[?=^=^^^^^^^^^^^^^^^^^^^^^^~~~~~_____________~~^^^~^===
[[[[[[[[[[[(((((((?===?//////////??????========^^=====^^^^~~~~~~~~^^~^~^^^^^^~~~~/=COO##$#WWWW@@@@@@@@@@@W@W###$#OEW@@@@WW##WW#WWWWWWW@####W#WW##$$$$$$OO$$$$$$#$$$$####WWWW##WW@#W###WWW#OOOOO$$$$$$OOOOECXXX[[[C(=^^^^^~~~~~~~~~~~~~~~~~~~~~~~________.______~^^^~~^^^
[[[[[[[[((((((((((/?==?////?//?/?????=========^^===^==^^^~~^~~~~~~~~^^^^^^~^^~~~?=COO####WWWW@W@@@@@@@@WW@W@W##$EEO@@@@WWWW#W@##WWWW#@W#W#WW#@WW##$$$$$$$$$$$$#$######W##WWWW#WW@@W#W#WWWW$$OOO$#$$$$$OOOOEEEEEEEXC?_._~^~~~___~___~~~_~_~~______..............~~^^_~^^^
[[[[[[[(((((((((((////////???????????======^=^^^^=^^^=^~~~~~~~~~~~~~~^^~~~~~~~~^/[OO####WW##WW@@@@@@@@W@@@WW#$OEEE#W@@@@WWWW@@W##WW##@@W##WWW@@WWW##$$$$$#$###########WW$($WWW##W@@WWW##WW$#$OO$##$O$$$O$$OOOOOOOEX/. .~~~~_____.___________.....'''''''''''''.__~~__~~~
(([[((((((((((/////////????????????=======^=^^^^^^^^=^^^~~~~~~~~~~~~_~~~_~~~_~_(?OO#W#O$OO###W@@@@@@WWWW@WWW$EEEXE$WWWWWWW#WWWWWWWW#W@@W#W@WWW@WW#WW#$$$$###$###WWWWWWWWW###W@W$#W@W$WW#WWW##OOO$#$O$$$$##$$$$$$$OEX/^~~__.''......._._.....'''''''''''''''''''.___.__~~
(((((((((((((/////////???????????==========^^^^^^^^^^^^~~~~~~~~_~_~~~~~~~_____=?EE$#W##$E##WW@@@WWW####@WWW$EEXCCO$WWWWW#####W###W##W@@W#W@WWW@WW###WW####$####WWWWWWWW#WW@W#W@WOW@@$W@#WWW$##OOO##$$$$$####$$$$$$OEE[=~_'   '''.........''''''''''            '___.._~_
((((((((((((/////////???????????===========^^^^^^^^^^^~~~_~~~_~_______________([OO##W$W#W#W@@@@W$O$$$#WW##OEXXCC[O$WWW####WW#W######W@@W#WWWWWWWWWWW############WWWWWWWWWW#WW#WW#$WWWWWWWWW$W#O$$$W$$$$##WWW#$$$$$$$OEX(^'  '''''''''''''''''''''              '...'..__
(((((((((((//////////?????????=========^^^^^^~^^^^~~~~~~~~_______________..._^(EE###W#WW@#@@@@WW$$$$#W##$EXXCCC[XE$W##$$##W##W######@@@##WWW#WWW@WWW$##W###W####$###$#WWWWWWWWW####@@WW@WWW#W#$$$O#######WW#$$$OO$$$$$OEC=_'''''''''''''''''''' '              '...'..__
((((((((/(/////////??????=?==??========^^^^^^~~~^~..~~~_~___~_____.__........?XEOW#W##W@WW@@@W#$$$$#W##$EXCCC[[[EX$W$#$$$#W$#W$#####W@@WWW@W$WW@@WWWW####$$$#WW#$#WWWWWWWW@@WWWW##W#@@W@@$$$##$##$$WWWWWWW#$$$OO$$##$##$OX?~.'''''''''''''''''                 '''.''...
((((((((////////??????????========~~^^^^^^~~^~~^^~~~~~____________...........(XE##WWWW@W#@@@W$$##$###$$XCCCC[[[[EXOW##$E$#W##W$###EXE@$WWWW#OW#W@W#WW###$$$$$###WWWWWW@@@WWWWWW@W##WW@@@@EEEXO###$$#@WW##$O$$$O$$##W#WWW#OX?^_'''''''''..'''''                 ''''''.._
(((((//////////??????????=======^^_.~^^^^^^^~~~~^~~~~~_________.___........._CCOWWWWW@@W#@WW#####W##$$XCCCC[[[[[EXO####$#WW##W#####$W@WW#W##OW##W@W#W#OE$$$$###$WWWWWWW@WW@@@WW#WWWW###@@EXXXEWWW#$$WW#$$$$O$$$$#WWWWWWWW#$X/^~.'.'''..'''''' '''               '.'''...
/(((/////////??????????======^^^^=^^^^^^^^^~~~~~~~~~~_______...._..___......~XC$WWWW@@W@W#WW#$##W$$$$XCCCC[[[[[[EXE#WWW##W#$#W######WWWW#WW$O####WWWWW###########WWWW@@@@WWWWWWWWWW$X[(EW$XXXXWWWOEE#WWWWWW$$$$W#W#WWWWWWW#$OC?^_''''..'''''  '                 '''''...
/(///////////????????=======^^^^=^^^^^^~~~~~~~~~~~~~~________......._..____.=CX$#W#W@@WW##W#$$$#OEOOECCCCCC[[[[[EXE#WW#W#W########$$WWWW#WW$O#####WWWWWW#####WW##WWW@@WWWWWWWWWW@@EXXC(CCOXCCCXXC[[[OWWWWWW###WWW#$#WWWWWWW##$X?^_'''''''                      ''''''...
///////////?/??????========^^^^^^^^^^~~~~~~~~~~~~~_____...........'''...._..?(X$##W@@@WWW$OO$#$EXXOOEO$$#####$$$##$#WWWWWWW#######$$WWW###WOO$$$#####WWWW###WWWW##WWWWWWWW###WWW@WECC[[[[[CC[[[CCCCX$@WWWWWWWWWWWW##WWWWWW#WW#O[^~_'                           ''''''...
//////////?????????======^^^^^^^^^^^^~~~~~~~~~~~~_____...........'...'......//X$$##W@@@WEOO$$EXXXXOEEOEEEEEXXXXCX[E#WW#W###W###$$$$$WWW###WOO$$$##$#####WW###W#####WWWW#WWWWWWWWWW$E[((((?=(/[[CCCXO#@WWWWWWWWWWWWWWW###WWWWW#$E?~~.'                           '''''...
//////////????????======^^^^^^^^^^^^~^~~~~~~_________._.........'.'''''.''..?/C$$$$WWW$$EE$OXXXXXXOXCCXXXXXXXCCCX[X$WW#WW######$$$$$WWWW###OEOOO#$#$#######$O$#OOO$#WWW########W@W###O/~__~?/(([CCX$WWWWWWWWWW@WWWWWW$OEO#WWW##O(~.^.''        '' '            ''''''...
///////??????????======^^^^^^^^^^^^^~~~~~~~~__________............'''.'''''.=?[$$E#@#EOEOOEXXXCCCXECCCCCXXXXXXXXXCX$WW$@W#OO$#$$$$$$#WWW##$OEOOO$$##$######W$OO$$OEEO$###$$###$$#W###~''''~^?(=?//(EWW##W@@@@W@@WWWWW$EXE$WWWWW$C=__^.''''''''''''''''          '''''...
///////?????????=^^^^==^^^^^^^^^^^^^~~~~_~~______.___.....'.......''.'''''''~//EO$W#$$O$OEEXXCCCCXXCC[CCXXXEEE$EEEX#WW$W#$##$$$$$$$$##WW##$EEOO$O$####$#$#####OOO$OEEEO#$$$##C[[[EO([.    '.=(/._^=($##WWWWWW@WWWWWWWW###WWWWWW$E?~_=.......''''.''''  ''       '''''...
///?/??????????=^~~^=====^^^^^^^^~^~~~~__~___________.............''''''''''./?XE$#W@@W#OEEXXCCCCCCCCCCX$W@@WW@@W@###W#W#$###$$$$$OO$#W##$$OEOOOO$O#$$#$$$$$###$OOOOOEEO$$$$$(((((CC(=.'   .CEEC/=?[O##WW@WWW#$$#WWWWWWWWWWWWWW#O(~_~........'''.''''' ''''    ''''''...
???//??????????==^=======^^^^^^^^~~~~____~__________..........'''''''''''''''_(COOO#W$O#W#EXCCCCC[CCCXXEEO$$#WWWWW@@##WWW$W$$$OOO$$O$###$OOOEEOOOOO$#$O$$$$$#$###$$$OOOEEO$##OC[[(([((??^~_?XEEO$$OOO$##WWW#$$#OOOO##WWWW###W###O[=~...........''''''''''''''''''''''...
??///////???????==========^_.~^^^~~~_~~__~_______..._..........''.''''''''''''~[EEXE$EEOOOECCCC[[[[[[[[CCC[[XOOOO$$EE$WW@@@#$$$OOO$OO$$$OEEEOEEEOOEOO$OO$$OOO$$$OOO$######$#E[[C[([[[(([[[XXOOOO$$$O$#WWWWW#$OO##$#O$#WW#W$####$OC=~_.........'''''''''''''''''''''''''.
?///??//??????=??=========^^~^^^^^^~~~___________..............''''''''''''''''~COEEOEXEEECCCC[[[[[[[[[[((//(EEEEXEXEO$O$W#OOOEOOOOOOO$$OEEEEEOEEEEEEOOO$$$OEEOOOOOO$####W#$O/?[CCC[[CC[/[[[COOOO$$#WW@@WWWW#$OO$WW#O####W#$###OEC=~___......''''''''''''''''''''''''''.
??/?//?????????=??=========^^^^^^^^~~~___~______......''''....'''''''''''' ''''_=[EEOOXXXCCCCC[[[[[[[[[[[((//[CXXCCXEEOOEEEOEEEEOOO$OOO$OEEEEEEOOEEEECXXOO$$OXXEOOO$$$$#####$$OEXC(((C$C[[C[[XOOO$##WW@@@#WWWW#O$$##$####WW##$OEX/^~_.........'''''''''''''''''''''''''.
??/?/????????????=?=========~^^^^^^~~___________......'''......''''''''''''''''_^~XO$#EXCCCCC[[[[[[[[[[[[[[[CXXEXXXXXXXXXEEOEEEEEEOO$OOOOEEEEXXXXXEE(/[XEEO$$$OXEEO$$$$$$$$$####W[~~~C##$ECCCCXE$##WWW@@WW$WWWWW$O$###W#WW#$$OOE[=^_.......'.''''''''''''''''''''''''...
???//?????????????==========^^^^^^^~~__________...........'...'''''''''''''''''..~=EXXCCCCCCC[[[[[[[[[[[[[[[CC[C[[[((XXC[XOOEEEEEEEEOOOOOEEXXC[//??X##E[XXEEO$$$$$$OOO$$$$$###WW$X=(/######EEXXE$##WWW@WWWWOWW##WW#$#$###$$OOOEX?^__...........'''''''''''''''''''''....
??/?????????????=============^^^^^^^~~__.._............'..''..'''''''''  '''''''^(CCCCCCCCCCC[[[[[[[[[[[[[[[[[((((((/[X[/XOOEEEEEEEEE$OOEEEXXC[/???XXEEEEEEEEEEOO$##$$$OO$$$$$$$$#$ECWWW###E$$O$###WWWWWWWW##OEE###$$$$$O$OOOEX/^__.'''.'.''''''''''''''''''''''''''....
?/???==============^=======^^^^^^^^~~~__.....................'.'''''''''''''''?XXCCCCCCCCCCCC[[[[[[[[[[[[[([(((((((//(X(/(EOEEEEEEEEEEOOEEEECC(??/[XXXC[XOOEEEOEOOEEEOOOOO$####WWWWXX#WW#$$XXO$##W#WWWWWWWW$$OC$W##$OOOOO$OOEC?~...    ''''''.''''''''''''  '..''''''...
/???===^^^^====^^^=^^^^==^^^^^^^^^^~~__._.....................'.''''''''''''''/EXXXXCCCCCCCCC[[[[[[[[[[[[[(((((((((///C(//COEEEEEEEEEEEOOEEEC[[?=?[([[X[/[XEO$$$$$$$$$$#W##$$##WWWEXXO#$$$XCCXO#WW$WWWWWWWWW$WWW##$OEOOOOOEX(=_....'  ''''.''''''''''''''' ''''''''''...
???===^^~^^^^^~^^^^^^~~^^~~~^^^^^^^~~_._.._.........................'.'''''''''?XXXXXXCCCCCC[[[[[[[[[[[[[[(((((((((///[(//(EOEEEXEEEEEEEXEEEC(C?==CCCCC(?/CXXXXO$$$#WW#$$$####WW$XCCXO$$##$OC[XW#W#WWWWWWWWWW###$OOOEOOOEXC?~............'.'''..'''''''''''''.''''''''..
??===^^^^^^^^^^^^^^^~~~____~~~~^^^^~___.__.......................''.''''''''''''./XXXXXXCCCC[[[[[[[[[[[[[[(((((((((///([///COEEEXEEEEEEE[[EEC([(/[CCC[/(//[XXXEOO$$###WWW##$$$$OXCCE$$######$$$#W###WWWWWWWW#$OOOEEEEEEEX(=_...........'''''''''''''''''''''....'''.....
====^^^^^~^^^^^~~~~~____...._~~~~~~~~______...........................''.'''''''''~XXXCXCCCC[[[[[[[[[[[[[[(((((((((////[///(EEEEXXEEEEEO[CXXEC[C(([[[(//[/?(XO$$$#WWW#WWWWW#$$$OEO$O########$WWW###$##$$$$##$OEEEEEEEEX[/^_...''........''''''.'''''''''''..............
^===^^^^^^~~^~~~~~_____.....___~^~~~_______..' ...._.....................''''''''''(XXXCCCCCCC[[[[[[[[[[[[(((((((((////((///XEEEEEEEEEEE[XC/XE[[[//??////(/[$$$##WWWWWWWWWW#####$$EX#######EE#WW#$$$$$$OOOOOOOEEEEEEXC/=~__....__..._........'.''''''''''.........._....
^=^^^^^^^^~~~~~~~~_____.......__~~~~~______.................._...........''''''''''([XXCCCCCCC[[[[[[[[[[[[(((((((((/////(///CEEEEEEEEEEECX/?/[XC[/??????/[O$#$###WWWWWWWWW##$$$$$OXXECO###OXXE###$$$$$OOEEEEEEEEEEXC/=~_._...'._.__.._...........''''''''''..._____.____
^^^=^^^~~~~~~~~______._........__~~~_____''___._..__._......__...........''''''''''?[XCCCCCCCC[[[[[[[[[[[[(((((((((/////((//(CEEEEEEEEEEX(????(XC[????/[XO$O$$##WWWWWWWWW##$$$$$$XC[[EO$##XEEEE###$$$OEEEEEEEEEEX[?=~__..._..._.__.___.._._.....'''''''     .___________
^^^^^^^^^^~~~~___~___._._...'..__~~~~____..__..._.._..._._..__......'...'''''''''''=CCCCCCCCCC[[[[[[[[[[[[((((((((((/////(//(CEEEEEEEEEX[?????//CC[/([XXXEEOO$#WW#########$$$$OOXC[[OO########$OO$O$OEEEEEEEEXC(=^^_______._..__._____..........'''''''     '._.________
^^^^^^^^^~~~~~_~~________..' '._~~~~~_________..._______.__.__..........'''''''''''.XXCCCCCCCCC[[[[[[[[[[[[((((((((((/////(//CXEEEEEEEE[/??/([C[[CXXXXXXXXXEOO#####$####$$$$$OOOEEOX$$$$##$$##$OOOOEXXCXC[[[/=^~~^.__.......__._....___.........''''''''  ''.'..._._____
^^^^^~^^^~~~~~__~_____~__...._~~~~~~_~~______._._.__.______.._.........'''''''''''''?XEOEEEEXXCCC[[[[[[[[[[(((((((((((////((/CXEEECCEEX?//([CCCCCCCXXXCCCXXEEEE$$$$$$##$OOOOOOOOOOOXOOOO$EXEO#OOOOEC/??/(?^~__~^~_........_._...................''''''   ''''''''...___~
^^^^^~~~~~~~~______~~~~~~_~~~~~~^~~~~~~______________.________..........'''''''''''''[XXEEEEEEXXXC[[[[[[[[[[((((((((((/////([XXXXX(CEEX(/([CCCCCCCCCCCXCCXXXEEEEO$$$$#$OOOOOOOOOOOE[EEEEEEEEEEOOEEX(=~___~=^^=~__........_.___.................'''''''     ''''''...__~~
^^^^^^~^^~~~____~~^^^=^^^^^=^~~^^^^~~~~_~______________.._____.........''''''''''''''~[XXXXC[CCC[[[[[[[[[[[[[((((((((((/////[XXXXC(XCCXX([CCCCCCCCCCCCCCXXXXEEEEO$$$$$$$OOOO$$$OOOX[[[([CXEXXXEEEX(=_..._._______._.________...'''''''..........'''''''    '''''..._~~^^
^^^^^^^^~~~~____~=============^^^^^~~~~~_________~____________............''''''''''''?[CXXXCCCC[[[[[[[[[[[[[[((((((((((((/((XEXX(X[/(CXCCCCCCXXCCCCCCCXXXXXEEEOOOOOOO$$$$$$$OOOECCC(=^^^==[(([C(^_.....____________..______.'''      '''.......'''''' '   ''''...__~^^=
^^^^^^^^^^^^~^^^=??==?========^^^^^~~~~~~~__~~____________~____...._....'.''''''''''''~/CCXCCCCCCCC[[[[[[[[[[[[[(((((//((((([XEECX[([[CXXCCXXXCC[[[[[CCCXXXEEEEEEEOEOOOOOOOOOEX((((?^...._==^^^^.  '.._.___________....._....''      ''''.....''''''  '   '''''..__~~^==
^^^^^^^^^^===^===?????======^=^^^^~^^~~~____~~_~~~~~~______............'.'.''''''''''''/[XCCCCCCCCCCCC[[[[[[[[[[[(((((((((([CXEE[(([[CCCCXXCC[(((((([[[CCCXXEEEEEEEEEEEOOOOOE[==/?=...._~=?~~__....___~__~____~___.''''''''''        ''''''..'''''      '''''...___~~^^=
^^^^^^^~^^^^^^^======?===^^^^=^^^^^^^~~~~_______~__~~~~~~~_._...............'''''''''''?[XCCCCCCCCCCCCC[[[[[[[[[[[(((((((([[(XXCC[[CCCCCCCC[(((((((([[[CCCCXEEEEXXXXXXXXEEX[?~_.''_.._=?/^=____~___~_.___._______.'                   ''''''''''       ' '''...___~~~~^^
=^^^^~~~~^~^~^^^^^^=====^^^^^==^^^^^~~~~__~~_~~~_~~____~~~~_..............'.'''''''''''=CCCCCCCCCCCCCCCC[[[[[[[[[[[[[[[[[[[[[EC[XXCCCCCCCC[[((((((((([[[CCCXXEX[[[[CCXC[(?^^^^^^^~=/====~^^____~__________~_~____.'                      '''''         ''''...___~~~^^^^
^^^^^^^^^^~^^^~^^^^^^^^^^^^^^===^^^^^~~~~~~___~~~~~____~~~__.............'.''''''''''''~CCCCCCCCCCCCCCCCCCCCC[[[[[[[[[[[CC[CXXCCCCCCCCCCC[([[(((((((([[[[CCCCCCCCC(//?===^_..._.._(C[^__~=~~~~~~~~_.__~~___~~_____'                                   '''''..__~~~~^^^^^
^^^^^^^^^^^^^^~^^~^^^^^^^~^^^===^^^^^^~~~~~~~~____~~__~_~_' '_.._...........''''''''''''(XCCCCCCCCCCCCCCCCCCCCCCCCCCCCCXXCCXXCCCCCCCCCC[[(((((((((((([[[[CCCC[^^^_......._^==^^=^/CCC^_~=~_~~~_~~~_.~_~~____~~~~~_.'                                 ''''...___~~~^^^^==
^^^^^^^^^^^^^^~^^^^^^^^^^^^====^==^^~~~~~~~~~__~__~~____^~.'..__.._...........''''''''''.?CXXXXXXXXXXXXCCCCC[[//[XXXXXXXXXXXCCCCCCCCCC[[[((((((((((((([[[CCCC(~...'.....__..~~~~_CC(/(^^~__~~~~~~._~__~_~_~~_~~~_..'                                 '''...__~~~^^^^====
^=^^^^^^^^^^^^^^^^^^^^^^^^^======^^^^^~^~~~~~~~~~~~~~_~~~^____..._............'''''''''''''.____=_.'''.''_?//?~.~?CXXXXXXXXXCCCCCCCCC[[[[[((((((((((((([[C[CC(~........._.______(C[^^~~~~~~__~~~~____~~____~_~~__.''                                '''..__~~^^^^=======
^^^=^^^^^^^^^^^^^^^^^^^^^^=======^^^^^^^^~~~~_~~~~~_~~~~~~_______......'......''''.''''''''''''_.''''''.''.=//?=^^^[XXXXXXXCCCCCCCCC[[[[[[((((((((((((([[[[[[(~..........._____^[?__~~_._~~.~~__~_~~_~~~_~~~~~~___''                              '''''.__~~^===========
===^^^===^^^^=========~^=========^^^^^^^^^~~~~~~~~~~~~~~^~~~________._.''...'.......'........._.'''''''..''.~??=_~^=CXXXXXXCCCCCCCCC[[[[[((((((((((((([[[[[[[[^__....______________~~~_..~~~~~~~~~~~__~__~~~~~~~__..'                 ''''     ' '''''.__~~^==??????????
==================??=?^=?==?=?=====^^^^^^^^~^~^~^~~~~~~^^~~~~~~__________..' '..............._....'''''._.'''.~~~.'.(XXXXXXCCCCCCCC[[[[[(((((((((((((((([[[[[[=_______~_____~~~__~[C[^~~~~~~~__~_~~~~~~_~~~~~~~__...'                ''''''    '''''..__~~^==???????????
=======???=====?????????????=======^^=^^^^^^^^^^^^^^^^~~^~~~~~~~~~~________.........._._.______.....''.....'''''^=~.=XXXXXXCCCCCCCC[[[[[((((((((((((((/(([[[[[?~~____~~___~~~~~~~(XCC[~~~~~~~~_~~~~_~~~~~~~^~~__..'''''   ''  '' ''''''''''   '''''...__~^^==?//////?/?/
??=====???????????//?//???????=========^=^^^^^^^^^^^^~^^^^~~~~~~~~~~__________...__._.._________............''''._^==XXXXXXCCCCCCCC[[[[(((((((((((((((((((/([[(^~_~__~~~~~~~~~~~=XX(=C(~~~~~~~~^~~~^^^^~~^^^~~~__    .''''''''''''.'''''''''''''''..._~_~===??//////////
========?////////////?//??????==========~..._^^^^^^^^^^^^^^^~~~~~~~~~_________._________~____~~___...........'''''..~CXXXXXCCCCCCC[[[[((((((((((((((((((((([[[[?~~~~~_~~~~~~~~~~[/^~~^^~~~~~~~~^^^^^^^^^^^^^^^^^_    ._..'.'''.'.''..''''''''''''..__~~~^==??///////////
=======??///?///////////????????=======~..''.~^^^^^^^^^^^^^^^~~~~~~_~~____________________~_______..........'''''''.'(CXXXXCCCCCC[[[[((((((/////////((((((([[[C(^~~~~_~~~~~~~~~~~~~~~~~~~~~_~~^^^^^^^=^^^====^^^~_.._~__.'.''''...''..'''''''''.'.___~~~^==??//////////(
=======??????////////////??????========^_.'._^^^^^^^^^^==^^^^^~~^~~~~~~___________________~_~~____._._.......''''''''?CCCXXXCCCC[[[(((((//////////////(((((([[[[?~~~~~~~~~~~~.~~~~~~~~^~~~~~~~^^^=^^^^^^^^^==^~~~~^^^~_.''''''.....'..''''''''...._~__~^====??///(((((((
???=?=?=?===??//(///////???===============^^====^^===^===^^^^^^^~~~~~~~_~~_~_~~_______~~~~__~~~___.___.._.....'''''''~[CCCXXCCC[[[((((/////////////////((((([[[C[=~~~~~~~..~~_~~~~~~~~~~~~~^~^^^^^^===^_._~^^^~~~~^^~~_..........''....''''......___~~~^^====??////(((((
(//???????===?///((////??==^======^^^^^^===========^======^=^^^~~~~~~~~~~~_~~~~~~_~_~~~~~~~~~~~_________......'''''''~(C[CCCCC[[((((///////////////////(((((([[[C(^~~~~~~__~~~_~~~~~~~~~~~~~~~^^^^===^^~__~^=^^~~~~~^~_........''''''.'........____~~~^^^^==??///=^(((([
((/??=????===??//(((///??=^^====^~_____~^=================^^^^^~~~~~~~~~~~~~~~~~~~~~_~~~~~~~~~~~~~~_____...'.'''''''.=/[(((((///??//////////////////////(((((([[CC/^~~~~~~~~~~~~~~~^~~~~~~____~~~^^^^==^^^^====^^^~~^~~.._____.'  '........________~~~^^====??///?/((([[
(/???????=?=?=??//////==?=====^~~_~____~^^~..^=?==========^^^^^^^^^^~~^~~~~~~~~~~~~~~~~^^~~~~~~__~______.....''_^?([[C[[(((//??==^~~~__~~^^=?////////////((((([[[CC/====^^~~~~~~~~~~~^~~~___..___~~^^=======?========^^^~~~~~~_'''.....____~____~~~~^^^^===???///(((([[[
(//////?????????//////??????=^^^~~__~~~^^=^_~=====?=?=======^^^^^^~^^^~^^~^~~~^^~~~~~~~^^^^^^^~~~~~~~___...__^[EO$$$##$$$$OOEEXXC(/?=^~________~^??/((////((((([[[CC(((((/?==^^^~~~~~~^~~~__......_~~^^^=====?????????====^^^^~~~~~_____~_~~~_~~~~^^^====??//////((([[[[
((////////??????//////???????==^^^^__~~~~^==???????=??=======^^^^^^^~^^^^^^^^^^^^^^~~~~~^^^^^^^^^~~~~~___~?[E#@@@W@WWWW##$$$$OOOOOOOEXC[/=~_______~~~^?//(((((([[[CCC[[([[[[[(//?=^^^^~~~~_.''''...._~~^^===========??/???===^^^^^^~~~~~~^^^^^^^^^====?????////(([[[[[[C
(///////////???///(((///=_=??===^^^~~~~^^^=???????????????====^^^^^^~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^~~~_~~?X#WW@@@WWW#WWWWW##$$$$OOOOOOOOOOOEX[/=~__~~~~~~^^=/(([[[[CCCCC[(([CCCCCC[(/?=^^~~_' '''''' '._~~~~^^========??/????=======^^^^^^==========???//////(((([[[[[CCC
/((((((((((/////////////?======^^=^^^^^^^=???==???????????=?=====^^^~____~^^^^^^^~==^^^^^^^^^^=^^^~~~^?XW@@WWWW#W#####W###$$$$$$OOOOOOOOOO$OOOEXC/?^~~~^^^^===?/([CCCCCCC(([CCCXXXXXC[/?=^~'      ''''.__~~~^^========????????=============?======???//(((((((([[[[[CCCC
/(((((([(((((/////(//////???=======^==^===?????????????????=?====^^~_____~~^^^~' '^=====^=^^=====^^^/X$W#WWW##WW####WW###$$$OOOOO$$OOOOOOOOOOO$$OOEXC(?=^======???//([[CCCC[[CCCXXEXXXXC[(?^_.''  '''.._~~~~^^========???//?????===?===??????==?????//([[[([[[[[[CCCCCCC
((((([[[[[(((((/((((/////???===============^????///?/?//???=======^~___~~~~^==~.'.^==~_====^======(XO#WWWWWW###WWWWWW###$$OOOOOOOOOOOOOO$$$OOOOOOOOOOOEXC(?======??????/([[CCCCXXXXXXXXXXXCC[(?=~_...._~~~^~^^^^=====???////???????????????/???/?///((([[[[[[[[[CCCCCCCX
((([[[[[[[[[[[[((((((((((//????============???////(////??????????==^~~~_~~~^^=======^=====^^====(X$$#WWW@WWW##WWWWWWW##$$$OOOOOOOOOOOOOOO$$$$$$OOOOOOO$OOOEXC(/?====???????/([CCXXXXXXXXXXXXXXXCC[/?=^^^^^^^^=====????////////???/???//?/////////((((([[[[[[[CCCCCCXXXXX
[[[[CCCCCC[[[CCCCC[CCC[[((///???====????=???//////(///???=????=?===^^~~~~~^====?=========^^==?/CO$####WWWWWWWW@@WWWWW#$$$$$$$$OOOOOOOOO$OO$$$$$OO$OOOOOOOO$$OOEX[(/???????????/([CXXXXXXXXXXXXXXXXCCC[(/?=======?????///((((/(////////////(((//(((((([[[[[[[CCCCCXXXXXXX
[CCCCCCCCC[CCCCCCCCCCCC[((((////????????/?////(((((///?====??======^^^~^^^^===??============/CEO$##$$####WWWWWW@WWWWWW###$$$$$$OOOOOOOOOOO$$$$$$$$$$$OOOOOOO$$$$OEXC[(/??????????/([CXXXXXXXXXXXXXXXXXXCC[(/???????//((([[[[[[((((((((((((((/((((([[[[[CCCCCCCCCXXXXXXXX
CCCCCCCCCCCCCXXC?CCCCC[[(((((((//?///////((((((((/////??===??========^^^^^===??=????=====?/[XOO$$$#####W#WW##WWW@W@@@@WW###$$$$$OOOOOOOOOOO$$$$$$$$$$$$$$OOOOO$$$$$OEEXC(//????///((([CCXXXXXXXXXXXXXXXXXXXC[[(/(((((([[[CCCCCCCC[[[[(((([([([[[[[[[[[CCCCCCCCXXXXXXXXXX
CCCCCCCCCCCXXXXX(CCCC[[[((((((((/(((((((((([[((((//??//???????????==========??????????/(CXEEOOOOO$$$########WWWW@W@@WWWW#####$$$$$$OOOOOOOOOOO$$$$$$OO$$O$$$$$O$$$$$$$OOEXC(//////(((([[[[CCXXXXEEXXXXXXXXXXXXXCCXXCCCCCCCCCCCXCCCCCC[[[[[[[[[[[[[C[CCCCCCCCCXXXXXXXXXEE
[CCCCCCCCXXXXXXXXXCC[[[[[[[((((([[[[[[((//(([(((////////???????????=======????????//(CXEEEEXXXXEO$$$$$####WWWWWWWWW@@WW#WWW####$$$$$$OOOOOOOOOO$$O$OOOO$OO$$$$$$$$$$$$$##$$OEXC[[((([[[[[[[[[CCCXXXXXXXXXXXXEEEEOOOEXXCXCCCXXXXXXXXCCCCCCC[C[CCCCCCCCCXCXXXXXXXXXXEEEEEE
[CCCCCCCCCCXCCXXXXCC[[[[[[[[(((/([[C[[(//(((((((/(((((//?????//???????????????///(CXEEEEOEXC[([CE$$$#####WWWW#WWWW@WWWWWWW#####$$$$$$$$$$$OO$$OOOOOOOOOOOOO$$#$#$##$$$$#W#W###$OEEEXXXXXXXXXXXXXEEEEEOOOOO$$$$$$#$OEXXXXXXCXCXXXXXXXXXCCCCCCCCCCCCCCCCXXXXXXXXXXEEEEEEEE
CCCCCCCCCCCCCCXXXXCC[[CCC[[[[[[([[CCCC[((((((((((((((((///?///??????????=????/([XEEOOOO$$OXCCCCXO$#######WWWWWWW#WWWWWWWW#####W###$$$$$$$$$$$OOO$OOOOOOOOO$$$$$$#$$#####W####WW##$$$OOOOOOOOOOOO$$OO$WW#W##WW####$OEXXXXCXXXXXXXXXXXXXXXCCCCXXCCXXXXXXXXXXXXXXEEEEEEEEEE
CCCCCCCCCCCCCCXXXXXXXXXXCC[[[[[[[[CCCCC[((((((=(((((((/////////////???/????/(CXEOOOO$$$$##$OOOO$$$#######W##W######WWW#######WW########$$$$$$$$$$$OOOOEO$$O$$OO$#################$$#$$$$$O$$$$###$OEX$WWWWWW#W###$OEXXXXXXXXXXXXXXXXXCXXXCCCXXXXXXXXXXXXXXXEEEEEEEEEEEEE
CCCXCXCXXXXXXXXXXXXXXXCCCCCC[[[C[CCCCC[[[[[[[[[((((([((((((////////////////[XEEOOO$O$$######$$$$$##########$OOOO$######$#$X$##########$#$$$$$$$$$$$$$OOO$$$$$$$$###WWWW#$##WW#####W#############W#$$$#WWWWW#W####OEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEE
CXXXXXXXXXXXXXXXXXXXCXCCCCCCCC[CC[CCC[[[[[[[[[[[[[[[([((((((((((/(/(///(([XEEOOOOO$$$#######$$$$$###$$$###$EXXXEE$OE$######$###$######OO$$$$$$$######$$$$##$$$$#$####W#W###W###$####WWWW####$##WWWWWWWWW@W######$OEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEE
CXXXXXXXXXXXXXXXXXXXXXXXXCCXCCCCCCCC[CCC[[[[[[[[[[[[[[[[[[[[[(((((((((([XEEEOOO$$$#########$$$$$$$####$$$$$OEXXXXEXEE$####$#####W####$#$####$###W##############$####W########$$$$$####WWWW###WWWW##W@W####W###$$OEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEEEEE
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCC[CC[[[[[[(/[[[[[[[((([[[XEEEEOOOO$$$#######$$$$$$$$$$$###$OEEEEEXXEEEEEE##$#$########$##$O#WW#W##WW##W#####W#WW#W##W#$$##$##$$$#$$O$#$#W#W#W$##W##WWW#W#WW###$$$$OEEXXXXXXXXXXC[XXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEEEEEEEEE
XXXEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCC[C[[[[[C[/?[[[[[[[CXEEOOOOO$$$###W#####$$$$$$$OOOO$$$$OEEEEEEEEEEEE$$###$##W#####$$$$###$#WWW####WW####WWWW##W##W#$###$$OOO$#$####WWW######W##########$#$$$OOOEXXXXXXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEO
XEEEEXXXXXXXXXEEXXXXXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCCC[CCCC[[C[C[[CXEEEOOOOO$$$$$#####$$$$$$O$OOEEE$$$$$$OOOEEEEEE$$#####$$####W#$##$###$$$###W####WWWWWWWWW####W#W#$####OOO$###$###W#W####W#######$#####$$OOOOEEXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEO
XXEEEXXXXXXEEEEEEEEXEEXEEXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCCCCCCCCCXXEEOOOOO$$$$$######$$O$O$OOOEEEEOOOO$$$$$$OEEEEO$$$###################$$$EXE$######W#WWWWW#WWWW###$##$$$$$########WW#W#########$$$$#$$$OOOOOOEEXXXXXXXXXXXXEXXEEEEEEEEEEEEEEEEEEOEEEEEEEEEEOEOOOOOEOOO
XXEEEXXXXXXEEEEEEEEEEEEEEEEXXEXXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCCXEEEOOOOO$$$$$$####$$$$OOOOOOEEEEEOOOO$OO$$$$O$$O$$$$$$#$$$#########$$$##$$OEE$#$$##WWWW#WW###WWW##W###O$$$##WW###$$############$$$$$$OOOOOOOOOEXXXXEEXXXXXXEEEEEEEEEEEEEEEEEEEEEOOEEEEOOOOOOOOOOOOOOOOO
XXXEEXXXXXEEEEEEEEEEEEEEEEEEEEEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCCXXEEEOOOOO$$$OO$$O$$$$$$$OOOOOOOOOOOOOOOOOOOO$$$$$$$$$$$$##$$$###$$$$OOEE$##$$$$$#$$###W##WW###W#W##$$$$####W##WW###$###$#####$$##$$$$$$$$$O$$O$$$EXEEEEEEEEXXXEEEEEEEEEEEEEEEEEEEEEOOOOOOOOOOOOOOOOOOOOOO
XXXEEXXXXXXEEEEEEEEEEEEEEEEEEEEEXXXXXXXCCCCXXXXXXXXXXXXXXXXXXXXEEEEOOOO$$$$$$$$$$$$$$$$OOOOEEEEOOOOOOOOO$$O$$$$$$$$$$$$$$$$$$$$$$$OOOEEEO$$$$$##$$$###$OO$#W#######$$#######W#####$$$$$$$$$$#$#$$$OOEEXCXEE$$O$$$EEEEEEEEEEEXEEXEEEEEEEEEEEEEEEEEEOOOOOOOOOOOOOOOOOOOOOO`},50)
	},
	data() {
		return {
			imgList: [],
			modalName: null,
			index: -1,
			artText:'',
			imgName: '',
			fontSize:2.4,
			windowHeight: this.windowHeight,
			windowWidth:this.windowWidth,
		};
	},
	methods: {
		uploadImg() {
			uni.uploadFile({
			    url: 'https://wngj.hzeyuan.cn/api/v1/img2Text', //仅为示例，非真实的接口地址
			    filePath: this.imgList[0],
			    name: 'file',
			    formData: {
			        'user': 'test'
			    },
			    success: (uploadFileRes) => {
					let res = JSON.parse(uploadFileRes.data)
					this.artText= res.data
			        console.log(res);
			    },
				fail: (err) => {
					console.log(err)
				}
			});
		},
		ChooseImage() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					if (this.imgList.length != 0) {
						this.imgList = this.imgList.concat(res.tempFilePaths);
					} else {
						this.imgList = res.tempFilePaths;
					}
				}
			});
		},
		//预览图片
		ViewImage(e) {
			uni.previewImage({
				urls: this.imgList,
				current: e.currentTarget.dataset.url
			});
		},
		//删除图片
		DelImg(e) {
			uni.showModal({
				title: '删除照片',
				content: '确定要删除这张照片吗？',
				cancelText: '取消',
				confirmText: '确定',
				success: res => {
					if (res.confirm) {
						this.imgList.splice(e.currentTarget.dataset.index, 1);
					}
				}
			});
		},
		onShareAppMessage(options){
			
		}
	}
};
</script>

<style scoped>
.img{
	height: 256px;
	display: flex;
	align-items: center;
	min-height: 100rpx;
	justify-content: center;
	background-color: #ffffff;
	padding: 1rpx 30rpx;

}
.grid.col-1.grid-square>view{
	padding-bottom: 0;
	height: 100%;
	margin-right: 0;
}
.select-img{
	margin-right: 20rpx;
	margin-bottom: 20rpx;
	border-radius: 6rpx;
	position: relative;
	overflow: hidden;
	
}
</style>
