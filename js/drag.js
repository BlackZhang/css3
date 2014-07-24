// JavaScript Document Writer:guoqun.zhang Date:2014.7.24
window.onload=function(){
	var oPush = fun.getByClass('push')[0];
	var oLamp = fun.getByClass('lamp')[0];
	var oOnoff = fun.getByClass('onoff')[0];
	var oShadow = fun.getByClass('shadow')[0];
	var iClientH = document.documentElement.clientHeight;
	var iClientW = document.documentElement.clientWidth;
	var onOff = true;
	
	
	oPush.style.left = (iClientW - oPush.offsetWidth)/2 + 'px';
	oPush.style.top = (iClientH - oPush.offsetHeight)/2 + 'px';
	
	oOnoff.onclick=function(){
		if(onOff){
			oLamp.style.backgroundPosition = '0 0';
			this.style.backgroundPosition = '0 0';
			oShadow.style.display = 'block';
		}else{
			oLamp.style.backgroundPosition = '-150px 0';
			this.style.backgroundPosition = '-80px 0';
			oShadow.style.display = 'none';
		}
		onOff = !onOff;
	}
	
	drag(oPush);
	drag(oLamp);
	
	function drag(obj){
		var disX = 0;
		var disY = 0;
		obj.onmousedown = function(ev){
			var ev = ev || event;
			disX = ev.clientX - parseInt(fun.css(this, 'left'));
			disY = ev.clientY - parseInt(fun.css(this, 'top'));
			
			document.onmousemove = function(ev){
				var ev = ev || event;
				var L = ev.clientX - disX;
				var T = ev.clientY - disY;
				
				if(L<50){
					L=0;
				}else if(L>document.documentElement.clientWidth - obj.offsetWidth - 50){
					L = document.documentElement.clientWidth - obj.offsetWidth;
				}
				if(T<50){
					T=0;
				}else if(T>document.documentElement.clientHeight - obj.offsetHeight - 50){
					T = document.documentElement.clientHeight - obj.offsetHeight;
				}
				
				obj.style.left = L + 'px';
				obj.style.top = T + 'px';
			}
			document.onmouseup = function(){
				document.onmousemove = document.onmouseup = null;
			}
			return false;
		}
	}
}