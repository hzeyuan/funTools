
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/user/user","pages/duiren/duiren","pages/chishenme/chishenme","pages/rmbZhuanHuan/rmbZhuanHuan","pages/sfzQuery/sfzQuery","pages/iphonePlaceFfOwnershipQuery/iphonePlaceFfOwnershipQuery","pages/goodNickName/goodNickName","pages/screenTwinkle/screenTwinkle","pages/bmiWeightIndex/bmiWeightIndex","pages/ip2Locations/ip2Locations","pages/zhinanzhen/zhinanzhen"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"ColorUi for UniApp","navigationStyle":"custom","navigationBarTextStyle":"white"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","height":"40px","list":[{"pagePath":"pages/home/home","iconPath":"static/tabbar/basics.png","selectedIconPath":"static/tabbar/basics_cur.png","text":"工具集"},{"pagePath":"pages/user/user","iconPath":"static/tabbar/about.png","selectedIconPath":"static/tabbar/about_cur.png","text":"关于"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"万能工具集","compilerVersion":"2.7.5","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/duiren/duiren","meta":{},"window":{}},{"path":"/pages/chishenme/chishenme","meta":{},"window":{}},{"path":"/pages/rmbZhuanHuan/rmbZhuanHuan","meta":{},"window":{}},{"path":"/pages/sfzQuery/sfzQuery","meta":{},"window":{}},{"path":"/pages/iphonePlaceFfOwnershipQuery/iphonePlaceFfOwnershipQuery","meta":{},"window":{}},{"path":"/pages/goodNickName/goodNickName","meta":{},"window":{}},{"path":"/pages/screenTwinkle/screenTwinkle","meta":{},"window":{}},{"path":"/pages/bmiWeightIndex/bmiWeightIndex","meta":{},"window":{}},{"path":"/pages/ip2Locations/ip2Locations","meta":{},"window":{}},{"path":"/pages/zhinanzhen/zhinanzhen","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
