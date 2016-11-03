$(function(){

	$('.sw_adress_right').mouseover(function(){
		var i=$('.sw_adress_right').index(this);
		$('.sw_black').eq(i).show();
	})
	$('.sw_adress_right').mouseout(function(){
		var i=$('.sw_adress_right').index(this);
		$('.sw_black').eq(i).hide();
	})
	$('.sw_team').click(function(){
		var x=$('.sw_team').index(this);
		$('.swcont_gs').eq(x).addClass('sw_show').siblings().removeClass('sw_show');
	})	
})
//加入我们
$(function(){	
	function hei(a){
		var height=$(window).height();
		$(a).height(height);		
		if(height>=800){
			$(a).height(800);		
		}
		if(height<667){
			$(a).height(667);		
		}
	}
	hei('.in_out');
	$('.in_zhiweiout li').click(function(){
		var i=$('.in_zhiweiout li').index(this);
		$('.in_zhiweiout li').eq(i).addClass('in_zwshow').siblings().removeClass('in_zwshow');
		$('.in_zhuanyuan').eq(i).addClass('in_show').siblings().removeClass('in_show');
	})

	var height=$(window).height();	
	if(height>800){
		$('.we_out').height(height);
		$('.we_left_top').height(300);
		$('.we_left_bottom').height(300);
		$('.we_right_top').height(300);
		$('.we_right_bottom').height(300);
		$(".we_mainout").css({width:'594px',height:'555px'});
		$(".we_main").css({width:'594px',height:'555px'});
	}

})
