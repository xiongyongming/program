$(function(){
	var biaoti = $(".biaoti");
	var figure = $(".figure");
	var lis = $("#lis li").length;
	$("#cut-btn .sum").text(lis);
	$("#cut-btn .current").text('1');
	/*对应二维码*/
	var erweima = [
	  '',
	  'img/erweima/1.png',
	  'img/erweima/2.png',
	  'img/erweima/3.png',
	  '',
	  'img/erweima/5.png',
	  'img/erweima/6.png',
	  'img/erweima/7.png',
	  'img/erweima/8.png',
	  '',
	  'img/erweima/10.png',
	  'img/erweima/11.png',
	  '',
	  'img/erweima/13.png',
	  'img/erweima/14.png',
	  'img/erweima/15.png',
	  'img/erweima/16.png',
	  'img/erweima/17.png',
	  '',
	  'img/erweima/19.png',
	  'img/erweima/20.png',
	  'img/erweima/21.png',
	  'img/erweima/22.png',
	  'img/erweima/23.png',
	  'img/erweima/24.png',
	  '',
	  'img/erweima/26.png',
	  'img/erweima/27.png',
	  '',
	  'img/erweima/29.png',
	  'img/erweima/30.png',
	  'img/erweima/31.png',
	  'img/erweima/32.png',
	  'img/erweima/33.png',
	  'img/erweima/34.png',
	  'img/erweima/35.png',
	  'img/erweima/36.png',
	  '',
	  'img/erweima/38.png',
	  'img/erweima/39.png',
	  'img/erweima/40.png',
	  '',
	  'img/erweima/42.png'
	]
	$(".xs img").attr('src',erweima[1]);
	/*对应提示文字*/
	var aSpan = [
	 '',
	 '扫描二维码 参与无声拍卖',
	 '扫描二维码 参与无声拍卖',
	 '扫描二维码 参与无声拍卖',
	 '',
	 '扫描二维码 参与无声拍卖',
	 '扫描二维码 参与无声拍卖',
	 '扫描二维码 参与无声拍卖',
	 '扫描二维码 参与无声拍卖',
	 '',
	 '扫描二维码 参与无声拍卖',
	 '扫描二维码 参与无声拍卖',
	  '',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '扫描二维码 参与无声拍卖',
	  '',
	  '扫描二维码 参与无声拍卖'
	]
	$(".xs span").text(aSpan[1]);
	/*标题提示*/
	var bt = ['',
	          '《无题》',
	          '《无题》',
	          '《无题》',
	          '《无题》',
	          '《纠结》 ',
	          '《世界》',
	          '《无题》',
	          '《你害怕我吗？我的眼睛。》',
	          '《无题》',
	          '《孤岛》',
	          /*10*/ 
	          '《无题》',
	          '《还剩尾巴的猫》',
	          '《Unicorn》',
	          '《乌镇-晨妆》',
	          '《不一样的天空》',
	          '《即将到来的明天》',
	          '《无题》',
	          '《隔》',
	          '《无题》',
	           '《女儿多多》',
	          /*20*/
	         '《无题》',
			 '《你好，很高兴认识你》',
	          '《Twinkling》',
	          '《无题》',
	          '《星光，或许是太阳游过的海》',
	          '《无题》',
	          '《女儿》',
	          '《无题》',
	          '《最好的礼物》',
	          '《无题》',
	          '《旧房间》',
	           /*30*/
	          '《茻》',
	          '《孤岛》',
	          '《无题》',
	          '《无题》',
	          '《那时》',
	          '《路边的两个男童》',
	          '《那时》',
	          '《无题》',
	          '《DRY》',
	          '《无题》',
	          '《无题》'
	       
	          ];
	biaoti.text(bt[1]);
	
	$(".lunbo-qiehuan").css("width", lis * 1060 + "px");
	var zwidth = $(".lunbo-qiehuan").width();
	  $(".left").bind("click",function(){
	  	$(".show").hide();
	var left = $(".lunbo-qiehuan").position().left;
       if ($(".lunbo-qiehuan").is(":animated")) {}else{
		if (left < 0) {
			$(".lunbo-qiehuan").animate({left: "+=1060px"});
		cont--
	   if(cont==0){
	   	cont = 1;
	   }
        $("#cut-btn .current").text(cont); 
        biaoti.text(bt[cont]);
        $(".xs img").attr('src',erweima[cont]);
        $(".xs span").text(aSpan[cont]);

		}
	 }
	  });
	var cont = 1;
	$(".right").bind("click",function(){
			if ($(".lunbo-qiehuan").is(":animated")) {}
	  else{
	  cont++;
	  if(cont == lis+1){
	  	cont = lis;
	  }
	  $("#cut-btn .current").text(cont);
	   biaoti.text(bt[cont]);
       $(".xs img").attr('src',erweima[cont]);
       $(".xs span").text(aSpan[cont]);
        var left = $(".lunbo-qiehuan").position().left;
	     var imgw = (lis-1) *-1060;
	   if(left <= (lis - 1) *-1060) {
		 $(".show").fadeIn(); 
		 setInterval(function(){
		 	 $(".show").fadeOut();
		 },2000);
	  }else{
	  	
	  	 $(".lunbo-qiehuan").animate({left:"-=1060px"});
	  }
		 	
	  };
	   

	});

});
