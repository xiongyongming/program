$(function(){
	$(window).scroll(function(){
		var windowh1=$(window).scrollTop();
		if(windowh1>=200){
			$('.head').addClass('headcolor');
		}else{
			$('.head').removeClass('headcolor');
		}		
	})
	$('.shouye li').hover(function(){
		var i=$('.shouye li').index(this);
		$('.shouye li').eq(i).addClass('choose1').siblings().removeClass('choose1');
	},function(){
		var i=$('.shouye li').index(this);
		$('.shouye li').eq(i).removeClass('choose1');
	})
	$('.shouye li').click(function(){
		$(this).addClass('choose').parent().siblings().find('li').removeClass('choose');
	})
})