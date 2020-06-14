if (typeof Array.prototype.indexOf != "function") {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var index = -1;
    fromIndex = fromIndex * 1 || 0;
    for (var k = 0, length = this.length; k < length; k++) {
      if (k >= fromIndex && this[k] === searchElement) {
          index = k;
          break;
      }
    }
    return index;
  };
}

if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}

//跨浏览器DOM对象
var DOMUtil = {
	getStyle:function(node,attr){
    	return node.currentStyle ? node.currentStyle[attr] : getComputedStyle(node,0)[attr];
    },
    getScroll:function(){			//获取滚动条的滚动距离
    	var scrollPos={};
	    if (window.pageYOffset||window.pageXOffset) {
	    	scrollPos['top'] = window.pageYOffset;
	    	scrollPos['left'] = window.pageXOffset;
	    }else if (document.compatMode && document.compatMode != 'BackCompat'){
	    	scrollPos['top'] = document.documentElement.scrollTop;
	    	scrollPos['left'] = document.documentElement.scrollLeft;
	    }else if(document.body){
	    	scrollPos['top'] = document.body.scrollTop;
	    	scrollPos['left'] = document.body.scrollLeft;
	    }
	    return scrollPos;
    },
    getClient:function(){			//获取浏览器的可视区域位置
		var l,t,w,h;
		l  =  document.documentElement.scrollLeft || document.body.scrollLeft;
		t  =  document.documentElement.scrollTop || document.body.scrollTop;
		w =   document.documentElement.clientWidth;
		h =   document.documentElement.clientHeight;
		return {'left':l,'top':t,'width':w,'height':h} ;
	},
    getNextElement:function(node){	//获取下一个节点
    	if(node.nextElementSibling){
    		return node.nextElementSibling;
    	}else{
	        var NextElementNode = node.nextSibling;
	        while(NextElementNode.nodeValue != null){
	            NextElementNode = NextElementNode.nextSibling
	        }
	        return NextElementNode;    		
    	}
	},
	getElementById:function(idName){
	    return document.getElementById(idName);
	},
	getElementsByClassName:function(className,context,tagName){	//根据class获取节点
		if(typeof context == 'string'){
			tagName = context;
			context = document;
		}else{
			context = context || document;
			tagName = tagName || '*';
		}
	    if(context.getElementsByClassName){
	        return context.getElementsByClassName(className);
	    }
	    var nodes = context.getElementsByTagName(tagName);
	    var results= [];
	    for (var i = 0; i < nodes.length; i++) {
	        var node = nodes[i];
	        var classNames = node.className.split(' ');
	        for (var j = 0; j < classNames.length; j++) {
	            if (classNames[j] == className) {
	                results.push(node);
	                break;
	            }
	        }
	    }
	    return results;
	},
	addClass:function(node,classname){ 			//对节点增加class
		if(!new RegExp("(^|\s+)"+classname).test(node.className)){
	   		node.className = (node.className+" "+classname).replace(/^\s+|\s+$/g,'');
	  	}
	},
	removeClass:function(node,classname){		//对节点删除class
		node.className = (node.className.replace(classname,"")).replace(/^\s+|\s+$/g,'');
	}
};