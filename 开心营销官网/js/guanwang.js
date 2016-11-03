$(function(){	
	var newimg1=$('.bg1').clone();
	$('.content').append(newimg1);
	var newimg2=$('.bg3').clone();
 	$('.content').prepend(newimg2);
	// 
	// window.onload=window.onresize=(function(){			
		var content_in=$('.content li');
		inner=$('.inner');
		number_li=$('.number li');
		var height=$(window).height();
		$('.out').height(height);
		inner.height(height);
		content_in.height(height);
		$('.xiugai_bg').height(height);
		if(height>=800){
			$('.out').height(800);
			inner.height(800);
			content_in.height(800);
			$('.xiugai_bg').height(800);
		}
		if(height<667){
			$('.out').height(667);
			inner.height(667);
			content_in.height(667);
			$('.xiugai_bg').height(667);
		}
		var inner=inner.width();
		var length=content_in.length;
		content_in.width(inner);
		var width=content_in.width();
		var aa=width*length;
		$('.content').width(aa);

		var x=1,time=null,i=0,gg=true;	
		var wid=content_in.width();
		$('.inner').scrollLeft(wid);	
		
		var diqiu=$('.diqiu'),
		dianziquan_out=$('.dianziquan_out'),
		xiangqing1=$('.xiangqing1'),
		computer=$('.computer'),
		photo=$('.photo');
		
		function datudongtaiin(){
			diqiu.addClass('diqiu_in');
			diqiu.delay(1000).animate({
				opacity:'1'
			},500);
			dianziquan_out.delay(1300).show().animate({
				marginLeft:'305px',
				opacity:'1'
			},300)
			xiangqing1.delay(1600).show().animate({
				marginLeft:'41%',
				opacity:'1'
			},300)
		}
		function weiziin(a,b){
			$(a).delay(b).animate({
				left:'0',
				opacity:'1'
			},500)
		}
		function weiziout(a){
			$(a).animate({
				left:'800px',
				opacity:'0'
			})
		}
		function datudongtaiout(){
			diqiu.removeClass('diqiu_in');
			diqiu.animate({
				opacity:'0'
			});
			dianziquan_out.hide().animate({
				marginLeft:'-960px',
				opacity:'0'
			});
			xiangqing1.hide().animate({
				marginLeft:'-207px',
				opacity:'0'
			});	
		}
		function xiaoguoin(){
			computer.delay(500).animate({
				right:'0',
				opacity:'1'
			},500);
			photo.delay(1000).animate({
				left:'70px',
				opacity:'1'
			},500);
			weiziin('.toufang',500);
			weiziin('.tuandui',700);
			weiziin('.xiangqing',1000);
		}
		function xiaoguoout(){
			computer.animate({
				right:'550px',
				opacity:'0'
			});
			photo.delay().animate({
				left:'-118px',
				opacity:'0'
			});
			weiziout('.toufang');
			weiziout('.tuandui');
			weiziout('.xiangqing');
		}
	//cont3
	function cont3inn(a,b){
		$(a).delay(b).show().animate({
			marginLeft:'0',
			opacity:'1'
		},500);
	}
	function cont3in(){
		cont3inn('.kaixinyx',200);
		cont3inn('.yingjia',500);
		cont3inn('.xiangqing3',800);
		$('.banner3_tu').delay(800).animate({
			marginLeft:'0',
			opacity:'1'
		},500);
	}
	function cont3(a){
		$(a).hide().animate({
			marginLeft:'-660px',
			opacity:'0'
		})
	}
	function cont3out(){
		cont3('.kaixinyx');
		cont3('.yingjia');
		cont3('.xiangqing3');	
		$('.banner3_tu').animate({
		marginLeft:'900px',
		opacity:'0'
	},500);			
	}

		datudongtaiin();
		 // xiaoguoin()
		 // cont3in();
		function inn(){
			if(x==2){
				xiaoguoin();
				datudongtaiout();
				cont3out();
			}else if(x==1||x==4){
				datudongtaiin();
				xiaoguoout();
				cont3out();
			}else if(x==0||x==3){
				cont3in();
				datudongtaiout();
				xiaoguoout();
			}
		}

		number_li.click(function(){
			clearInterval(time);
			var i=number_li.index(this);		
			number_li.eq(i).addClass('number_li_red').siblings().removeClass('number_li_red');				
			x=i+1;			
			move();
			automove();
			inn();
		})
		$('.headleft').click(function(){
			clearInterval(time);
			if(gg){
				gg=false;
				x--;
				if (x<0) {
					x=content_in.length-3;
					$('.inner').scrollLeft(wid*(x+1));
				};
				i--;
				if (i<0) {
					i=number_li.length-1;
				};
				number_li.eq(i).addClass('number_li_red').siblings().removeClass('number_li_red');				

				move();
				inn();
				
			}
			automove();
		})
		$('.headright').click(function(){
			clearInterval(time);
			if(gg){
				gg=false;
				x++;
				if (x>=content_in.length) {
					x=2;
					$('.inner').scrollLeft(wid);
				};
				i++;
				if (i>=number_li.length) {
					i=0;
				};	
				number_li.eq(i).addClass('number_li_red').siblings().removeClass('number_li_red');						
				move();
				inn();				
			}
			automove();
		});

		function move(){
			$('.inner').stop().animate(
				{scrollLeft:wid*x},500,function(){
					gg=true;
				});
		}
		function automove(){			
			time=setInterval(function(){					
			x++;											
			if(x>=content_in.length){
				x=2;
				$('.inner').scrollLeft(wid);
			}			
			i++;
			if(i>=number_li.length){
				i=0;
			}			
			number_li.eq(i).addClass('number_li_red').siblings().removeClass('number_li_red');
			move();		
			inn();		
			},8000);			
		}		
		automove();

			
})
$(function(){

	//楼层
	$('.title').each(function(){
		$(this).css('marginLeft',-$(this).width()/2);
	});
	$('.lititle').each(function(){
		$(this).css('marginLeft',-$(this).width()/2);
	});

	$('.lianxi').css('marginLeft',-$('.lianxi').width()/2);
	$('.lxyw').css('marginLeft',-$('.lxyw').width()/2)			

	function up(title,lititle){
		$(title).animate({
				bottom:'0px',
				opacity:'1'
			},500);
			$(lititle).delay(200).animate({
				bottom:'-3px',
				opacity:'1'
			},800);
	}
	if($(window).height()>=800){
		$('.ceng1 .title').delay(1000).animate({
				bottom:'0px',
				opacity:'1'
			},500);
			$('.ceng1 .lititle').delay(1200).animate({
				bottom:'-3px',
				opacity:'1'
			},800);
	}

	
	$(window).scroll(function(){
		var windowh1=$(window).scrollTop();
		var hei_out=$('.out').height();
		var head1=$('.ceng1').offset().top;
		var head2=$('.ceng2').offset().top;
				
		if(windowh1>=hei_out/2){
			up('.ceng1 .title','.ceng1 .lititle');		
			$('.aboutusp').delay(1000).animate({
				marginLeft:'0',
				opacity:'1'
			},500);
			$('.setion1p img').delay(1500).animate({
				marginRight:'0',
				opacity:'1'
			},500);
			$('.more').eq(0).delay(2000).animate({
				bottom:'0px',
				opacity:'1'
			},500);	
		}		

		if(windowh1>=($('.more_out').offset().top)-200){
			$('.ceng2 .title').delay(300).animate({
				bottom:'0px',
				opacity:'1'
			},500);
			$('.ceng2 .lititle').delay(500).animate({
				bottom:'-3px',
				opacity:'1'
			},500);
			$('.miaoshu').eq(0).delay(750).animate({
				bottom:'0px',
				opacity:'1'
			},500);		
			$('.tuceng1').delay(1600).animate({
				left:'41px',
				opacity:'1'
			},500);
			$('.tuceng2').delay(1200).animate({
				left:'59px',
				opacity:'1'
			},500);
			$('.tuceng3').delay(1400).animate({
				right:'35px',
				opacity:'1'
			},500);
			$('.tuceng4').delay(1000).animate({
				right:'22px',
				opacity:'1'
			},500);
			$('.tuceng5').delay(850).animate({
				left:'195px',
				opacity:'1'
			},500);
				
		}	
		if(windowh1>=($('.tuceng4').offset().top)){
			$('.more').eq(1).delay(100).animate({
				bottom:'0px',
				opacity:'1'
			},500);	
		}
		if(windowh1>=($('.tuceng2').offset().top)){
			up('.ceng3 .title','.ceng3 .lititle');
			function shangbiao(a,x,b){
				$(a).eq(x).delay(b).animate({
					top:'0px',
					opacity:'1'
				},300);
			}
			shangbiao('.fuwu li',0,600);
			shangbiao('.fuwu li',1,700);
			shangbiao('.fuwu li',2,800);
			shangbiao('.fuwu li',3,900);
		}	
		if(windowh1>=($('.pingtai').offset().top)){
			up('.ceng4 .title','.ceng4 .lititle');
			$('.miaoshu').eq(1).delay(600).animate({
				bottom:'0px',
				opacity:'1'
			},500);	
			$('.shangbiao').delay(900).animate({
				bottom:'0px',
				opacity:'1'
			},800);				
		}	
		if(windowh1>=($('.shangbiao').offset().top)-200){
			up('.lianxi','.lxyw');
			$('.adress_left').delay(500).animate({
				marginLeft:'0',
				opacity:'1'
			},1000);
			$('.adress_right').delay(1000).animate({
				marginRight:'0',
				opacity:'1'
			},1000);
			$('.gsbeizhu').delay(1800).animate({
				opacity:'1'
			},500);
		}	
	})
//shangbiaogundong
var i=0,sbwid=$('.sbcont1').width();
$('.sbinner').scrollLeft(0);
var leng=$('.sbcont1').length;

$('.btleft').click(function(){
	i--;
	if(i<=0){
		i=0;
	}
	$('.sbinner').stop().animate({
		scrollLeft:sbwid*i},500);
})
$('.btright').click(function(){
	i++;
	if(i>=leng){
		i=leng-1;
		$('.sbinner').scrollLeft(sbwid*i);
	}
	$('.sbinner').stop().animate(
			{scrollLeft:sbwid*i},500);
	// alert(i)
})

//了解更多
$('.more').hover(function(){
	var x=$('.more').index(this);
	$('.gengduo').eq(x).animate({
		left:'40px'
	},200)
	$('.jiantou').eq(x).animate({
		right:'40px'
	},200)
},function(){
	var x=$('.more').index(this);
	$('.gengduo').eq(x).animate({
		left:'76px'
	},200)
	$('.jiantou').eq(x).animate({
		right:'78px'
	},200)
})

function xiangqing(a,b,c){
	$(a).hover(function(){
		$(b).animate({
			left:'20px'
		},200)
		$(c).animate({
			right:'15px'
		},200)
	},function(){
		$(b).animate({
			left:'35px'
		},200)
		$(c).animate({
			right:'27px'
		},200)
	})
}
xiangqing('.xiangqing1','.lijishiyong','.jiantou1');
xiangqing('.xiangqing','.lijishiyong1','.jiantou2');
xiangqing('.xiangqing3','.lijishiyong3','.jiantou3');
})