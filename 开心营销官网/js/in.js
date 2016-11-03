window.onload=function(){
	var main=document.getElementById('in_zhaopin');
	var con=document.getElementById('in_zpxx');
	var outer=document.getElementById('in_gundongtiao');
	var inner=document.getElementById('in_gdtiaoin');
	var main2=document.getElementById('in_zhaopin2');
	var con2=document.getElementById('in_zpxx2');
	var outer2=document.getElementById('in_gundongtiao2');
	var inner2=document.getElementById('in_gdtiaoin2');
	var main3=document.getElementById('in_zhaopin3');
	var con3=document.getElementById('in_zpxx3');
	var outer3=document.getElementById('in_gundongtiao3');
	var inner3=document.getElementById('in_gdtiaoin3');
	var main4=document.getElementById('in_zhaopin4');
	var con4=document.getElementById('in_zpxx4');
	var outer4=document.getElementById('in_gundongtiao4');
	var inner4=document.getElementById('in_gdtiaoin4');

	gundong(main,con,outer,inner);
	gundong(main2,con2,outer2,inner2);
	gundong(main3,con3,outer3,inner3);
	gundong(main4,con4,outer4,inner4);
	function gundong(a,b,c,d){
		d.onmousedown=function (e){
			var event=e||window.event;
			if (event.preventDefault) {
				event.preventDefault();
			} else{
				event.returnValue=false;
			};
			var sb_bkY=event.clientY-c.offsetTop-d.offsetTop;
			document.onmousemove=function (e){
				var event=e||window.event;
				if (event.preventDefault) {
					event.preventDefault();
				} else{
					event.returnValue=false;
				};
				var t=event.clientY-c.offsetTop-sb_bkY;
				if (t<0) {
					t=3;
				};
				if (t>c.offsetHeight-d.offsetHeight) {
					t=c.offsetHeight-d.offsetHeight;
				};
				d.style.top=t+'px';
				var scale=t/(c.offsetHeight-d.offsetHeight);
				b.style.top=-(b.clientHeight-a.clientHeight)*scale+'px';
			}
			document.onmouseup=function (){
				document.onmousemove=null;
				document.onmouseup=null;
			}
		}
		var str=window.navigator.userAgent.toLowerCase();
			if (str.indexOf('firefox')!=-1) {//火狐浏览器执行
			a.addEventListener('DOMMouseScroll',function (event){//ie678会报错
					event.preventDefault();
					// alert(event.detail);//火狐支持 前滚：-3 ，后滚：3
					var ot=0;
					if (event.detail<0) {//前滚
						ot=b.offsetTop+40;
						if (ot>0) {ot=0;};
					} else{//后滚
						ot=b.offsetTop-40;
						if (ot<-(b.clientHeight-a.clientHeight)) {
							ot=-(b.clientHeight-a.clientHeight);
						};
					};
					b.style.top=ot+'px';
					var scale2=ot/(b.clientHeight-a.clientHeight);
					d.style.top=-(c.clientHeight-d.clientHeight)*scale2+'px';
				},false)
				}else{
				a.onmousewheel=function (ev){
					var event=ev||window.event;//event兼容IE和其他浏览器
					if (event.preventDefault) {
						event.preventDefault();//非ie阻止默认事件
					} else{
						event.returnValue=false;//ie阻止默认事件
					};
					// alert(event.wheelDelta);//非火狐支持 前滚：120 ，后滚：-120
					var ot=-2;
					if (event.wheelDelta>0) {//前滚
						ot=b.offsetTop+40;
						if (ot>0) {ot=-2;};
					} else{//后滚
						ot=b.offsetTop-40;
						if (ot<-(b.clientHeight-a.clientHeight)) {
							ot=-(b.clientHeight-a.clientHeight);
						};
					};
					b.style.top=ot+'px';
					var scale2=ot/(b.clientHeight-a.clientHeight);
					d.style.top=-(c.clientHeight-d.clientHeight)*scale2+'px';
				}
			}
		
	}
	
}