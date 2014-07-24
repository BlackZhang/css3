// JavaScript Document Writer:guoqun.zhang Date:2014.7.24
var fun = {
	getByClass : function (sClass, parent){
		var aEles = (parent || document).getElementsByTagName('*');
		var arr = [];
		var re = new RegExp('\\b'+sClass+'\\b');
		
		for(var i=0; i<aEles.length; i++){
			if(re.test(aEles[i].className)){
				arr.push(aEles[i]);
			}
		}
		return arr;
	},
	css : function(obj, attr){
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	}
}